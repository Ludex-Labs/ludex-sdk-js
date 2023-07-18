import { Challenge as IDL_TYPE, ChallengeIDL as IDL } from '@ludex-labs/ludex-solana';
import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
import { WalletAdapterProps } from '@solana/wallet-adapter-base';
import { PublicKey } from '@solana/web3.js';

import { createFakeWallet, Wallet } from '../utils';

export const CHALLENGE_PROGRAM_ID =
  "BuPvutSnk9NdTZHFiA6UZm6oPwGszp6ozMwoAgJMDBGR";

export const DEVNET_CHALLENGE_PROGRAM_ID =
  "CoiJYvDgj8BqQr8MEBjyXKfsQFrYQSYdwEuzjivE2D7";

export type ChallengeClientOptions = {
  wallet?: Wallet;
  cluster?: string;
};

export class NativeChallengeTXClient {
  challengeKey: web3.PublicKey;
  program: Program<IDL_TYPE>;
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
      options.wallet = createFakeWallet();
    }

    let programAddress = new PublicKey(CHALLENGE_PROGRAM_ID);

    if (options.cluster && options.cluster.toUpperCase() === "DEVNET") {
      programAddress = new PublicKey(DEVNET_CHALLENGE_PROGRAM_ID);
    }

    this.challengeKey = new web3.PublicKey(challengeKey);
    this.connection = connection;

    this.program = new Program<IDL_TYPE>(
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

        return this.program.methods
          .joinWithLamports()
          .accounts({
            provider: challenge.provider,
            pool: challenge.pool,
            challenge: this.challengeKey,
            player: player,
            user: user,
            payer: user,
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

        return resolve(
          this.program.methods
            .leaveWithLamports()
            .accounts({
              provider: challenge.provider,
              pool: challenge.pool,
              challenge: this.challengeKey,
              player: player,
              playerPayer: user,
              user: user,
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
