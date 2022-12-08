import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
import { getAssociatedTokenAddress, NATIVE_MINT, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { WalletAdapterProps } from '@solana/wallet-adapter-base';
import { Keypair, PublicKey } from '@solana/web3.js';

import { transferWrappedSol, Wallet } from '../utils';
import { Challenge, IDL } from './';

export const CHALLENGE_PROGRAM_ID =
  "BuPvutSnk9NdTZHFiA6UZm6oPwGszp6ozMwoAgJMDBGR";

export const DEVNET_CHALLENGE_PROGRAM_ID =
  "CoiJYvDgj8BqQr8MEBjyXKfsQFrYQSYdwEuzjivE2D7";

export type ChallengeClientOptions = {
  wallet?: Wallet;
  cluster?: string;
};

export class ChallengeTXClient {
  challengeKey: web3.PublicKey;
  program: Program<Challenge>;
  connection: web3.Connection;

  tx: web3.Transaction;
  tasks: Promise<web3.TransactionInstruction>[] = [];
  constructor(
    connection: web3.Connection,
    challengeKey: string,
    options?: ChallengeClientOptions
  ) {
    if (!options) {
      options = {};
    }

    if (!options.wallet) {
      // TODO: This will fail in a browser
      const { Wallet: AnchorWallet } = require("@project-serum/anchor");
      options.wallet = new AnchorWallet(new Keypair()) as Wallet;
    }

    let programAddress = new PublicKey(CHALLENGE_PROGRAM_ID);

    if (options.cluster && options.cluster.toUpperCase() === "DEVNET") {
      programAddress = new PublicKey(DEVNET_CHALLENGE_PROGRAM_ID);
    }

    this.challengeKey = new web3.PublicKey(challengeKey);
    this.connection = connection;

    this.program = new Program<Challenge>(
      IDL,
      programAddress,
      new AnchorProvider(
        this.connection,
        options.wallet,
        AnchorProvider.defaultOptions()
      )
    );
    this.tx = new web3.Transaction();
  }

  join(_user: string) {
    const user = new web3.PublicKey(_user);
    this.tasks.push(
      (async () => {
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

        userTokenAccount = await getAssociatedTokenAddress(pool.mint, user);
        if (NATIVE_MINT.equals(pool.mint)) {
          transferWrappedSol(
            user,
            userTokenAccount,
            challenge.entryFee.toNumber(),
            this.tx
          );
        }

        return this.program.methods
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
          .instruction();
      }).call(null)
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

  async sendWithSendTranstion(
    sendTransaction: WalletAdapterProps["sendTransaction"]
  ) {
    return sendTransaction(await this.getTx(), this.connection);
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
