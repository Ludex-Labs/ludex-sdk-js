import { AnchorProvider, Program, Wallet, web3 } from '@project-serum/anchor';
import { getAssociatedTokenAddress, NATIVE_MINT, TOKEN_PROGRAM_ID } from '@solana/spl-token';

import { transferWrappedSol } from '../../utils';
import { Challenge, IDL } from './';

export class ChallengeTXClient {
  tx: web3.Transaction;
  tasks: Promise<web3.TransactionInstruction>[] = [];
  challengeKey: web3.PublicKey;
  program: Program<Challenge>;
  connection: web3.Connection;
  constructor(
    isMainnet: boolean,
    connection: web3.Connection,
    challengeKey: string,
    wallet?: web3.Keypair
  ) {
    this.challengeKey = new web3.PublicKey(challengeKey);
    this.connection = connection;
    const programAddress = new web3.PublicKey(
      isMainnet
        ? "BuPvutSnk9NdTZHFiA6UZm6oPwGszp6ozMwoAgJMDBGR"
        : "CoiJYvDgj8BqQr8MEBjyXKfsQFrYQSYdwEuzjivE2D7"
    );
    this.program = new Program<Challenge>(
      IDL,
      programAddress,
      new AnchorProvider(
        this.connection,
        new Wallet(wallet ?? web3.Keypair.generate()),
        AnchorProvider.defaultOptions()
      )
    );
    this.tx = new web3.Transaction();
  }

  join(_user: string) {
    const user = new web3.PublicKey(_user);
    this.tasks.push(
      new Promise(async (resolve) => {
        const [player, _pbump] = await web3.PublicKey.findProgramAddress(
          [this.challengeKey.toBuffer(), user.toBuffer()],
          this.program.programId
        );

        const challenge = await this.program.account.challenge.fetch(
          this.challengeKey
        );
        const pool = await this.program.account.pool.fetch(challenge.pool);
        const provider = await this.program.account.provider.fetch(
          challenge.provider
        );
        let userTokenAccount: web3.PublicKey;

        userTokenAccount = await getAssociatedTokenAddress(user, pool.mint);
        if (pool.mint === NATIVE_MINT) {
          transferWrappedSol(
            user,
            userTokenAccount,
            challenge.entryFee.toNumber(),
            this.tx
          );
        }

        return resolve(
          this.program.methods
            .join()
            .accounts({
              provider: challenge.provider,
              pool: challenge.pool,
              poolTokenAccount: pool.tokenAccount,
              challenge: this.challengeKey,
              player: player,
              providerAuthority: provider.authority,
              user: user,
              userTokenAccount: userTokenAccount,
              payer: user,
              mint: pool.mint,
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: web3.SystemProgram.programId,
            })
            .instruction()
        );
      })
    );
    this.tx.feePayer = user;
    return this;
  }

  leave(_user: string) {
    const user = new web3.PublicKey(_user);
    this.tasks.push(
      new Promise(async (resolve) => {
        const [player, _pbump] = await web3.PublicKey.findProgramAddress(
          [this.challengeKey.toBuffer(), user.toBuffer()],
          this.program.programId
        );

        const challenge = await this.program.account.challenge.fetch(
          this.challengeKey
        );
        const pool = await this.program.account.pool.fetch(challenge.pool);
        let userTokenAccount: web3.PublicKey;

        userTokenAccount = await getAssociatedTokenAddress(user, pool.mint);

        return resolve(
          this.program.methods
            .leave()
            .accounts({
              provider: challenge.provider,
              pool: challenge.pool,
              poolTokenAccount: pool.tokenAccount,
              challenge: this.challengeKey,
              player: player,
              user: user,
              userTokenAccount: userTokenAccount,
              mint: pool.mint,
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: web3.SystemProgram.programId,
            })
            .instruction()
        );
      })
    );
    this.tx.feePayer = user;
    return this;
  }

  async getTx() {
    const instructions = await Promise.all(this.tasks);
    this.tx.add(...instructions);
    return this.tx;
  }

  async send(signers: web3.Signer[]) {
    const instructions = await Promise.all(this.tasks);
    this.tx.add(...instructions);
    const sig = await this.connection.sendTransaction(this.tx, signers);
    const latestBlockHash = await this.connection.getLatestBlockhash();
    await this.connection.confirmTransaction({
      signature: sig,
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    });
    return sig;
  }

  async getSerializedTx() {
    const instructions = await Promise.all(this.tasks);
    this.tx.add(...instructions);
    this.tx.recentBlockhash = (
      await this.connection.getLatestBlockhash()
    ).blockhash;
    return this.tx
      .serialize({ requireAllSignatures: false, verifySignatures: false })
      .toString("base64");
  }
}
