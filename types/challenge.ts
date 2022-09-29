import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import {
  getAssociatedTokenAddress,
  NATIVE_MINT,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
  _ludexChallengeApi,
  poll,
  transferWrappedSol,
  ApiConfig,
} from "../common/utils";
import { Challenge, IDL } from "./challenge_idl";
export { Challenge, IDL } from "./challenge_idl";

export class ChallengeAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string) {
    this.ludexChallengeApi = _ludexChallengeApi(apiKey, "challenge");
  }

  async _apiCreateChallenge(payoutId: number, limit: number = 2) {
    return this.ludexChallengeApi<{ id: number }>({
      method: "POST",
      body: JSON.stringify({ payoutId, limit }),
    });
  }

  async _apiGetChallenge(id: number) {
    return this.ludexChallengeApi<{
      id: number;
      blockchainAddress?: string;
      creatingAt?: string;
      createdAt?: string;
      endedAt?: string;
      lockingAt?: string;
      lockedAt?: string;
      cancelingAt?: string;
      canceledAt?: string;
      resolvingAt?: string;
      resolvedAt?: string;
      verifyingAt?: string;
      verifiedAt?: string;
      redeemingAt?: string;
      redeemedAt?: string;
    }>({ method: "GET", path: id.toString() });
  }

  async _apiLockChallenge(id: number) {
    await this.ludexChallengeApi({ method: "HEAD", path: `${id}?action=lock` });
  }

  async _apiCancelChallenge(id: number) {
    await this.ludexChallengeApi({
      method: "HEAD",
      path: `${id}?action=cancel`,
    });
  }

  async _apiResolveChallenge(id: number, winner: string) {
    await this.ludexChallengeApi({
      method: "HEAD",
      path: `${id}?action=resolve&winner=${winner}`,
    });
  }

  async _apiResolveChallengeWithPayment(
    id: number,
    payment: { to: string; amount: number }[]
  ) {
    await this.ludexChallengeApi({
      method: "HEAD",
      path: `${id}?action=resolve&payment=${JSON.stringify(payment)}`,
    });
  }

  async create(payoutId: number, limit: number = 2) {
    const challengeId = (await this._apiCreateChallenge(payoutId, limit)).id;
    const challenge = await poll(
      () => this._apiGetChallenge(challengeId),
      ({ blockchainAddress }) => blockchainAddress !== undefined,
      1000
    );
    return { challengeId, blockchainAddress: challenge.blockchainAddress! };
  }

  async lock(id: number, skipConfirmation: boolean = false) {
    await this._apiLockChallenge(id);
    if (!skipConfirmation) {
      await poll(
        () => this._apiGetChallenge(Number(id)),
        ({ lockedAt }) => lockedAt === undefined,
        1000
      );
    }
  }

  async cancel(id: number, skipConfirmation: boolean = false) {
    await this._apiCancelChallenge(id);
    if (!skipConfirmation) {
      await poll(
        () => this._apiGetChallenge(Number(id)),
        ({ canceledAt }) => canceledAt === undefined,
        1000
      );
    }
  }

  async resolve(id: number, winner: string, skipConfirmation: boolean = false) {
    await this._apiResolveChallenge(id, winner);
    if (!skipConfirmation) {
      await poll(
        () => this._apiGetChallenge(Number(id)),
        ({ resolvedAt }) => resolvedAt === undefined,
        1000
      );
    }
  }

  /* TODO: Coming soon with applying your own specific payments */
  async resolveWithPayment(
    id: number,
    payment: { to: string; amount: number }[],
    skipConfirmation?: boolean
  ) {
    await this._apiResolveChallengeWithPayment(id, payment);
    if (!skipConfirmation) {
      await poll(
        () => this._apiGetChallenge(Number(id)),
        ({ resolvedAt }) => resolvedAt === undefined,
        1000
      );
    }
  }
}

export class ChallengeTXClient {
  tx = new anchor.web3.Transaction();
  challengeKey: anchor.web3.PublicKey;
  program: Program<Challenge>;
  connection: anchor.web3.Connection;
  constructor(
    isMainnet: boolean,
    connection: anchor.web3.Connection,
    challengeKey: string,
    wallet?: anchor.Wallet
  ) {
    this.challengeKey = new anchor.web3.PublicKey(challengeKey);
    this.connection = connection;
    const programAddress = new anchor.web3.PublicKey(
      isMainnet
        ? "BuPvutSnk9NdTZHFiA6UZm6oPwGszp6ozMwoAgJMDBGR"
        : "CoiJYvDgj8BqQr8MEBjyXKfsQFrYQSYdwEuzjivE2D7"
    );
    this.program = new Program<Challenge>(IDL, programAddress);
  }

  async join(_user: string) {
    const user = new anchor.web3.PublicKey(_user);
    const [player, _pbump] = await anchor.web3.PublicKey.findProgramAddress(
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
    let userTokenAccount: anchor.web3.PublicKey;

    userTokenAccount = await getAssociatedTokenAddress(user, pool.mint);
    if (pool.mint === NATIVE_MINT) {
      transferWrappedSol(
        user,
        userTokenAccount,
        challenge.entryFee.toNumber(),
        this.tx
      );
    }

    this.tx.add(
      await this.program.methods
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
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .instruction()
    );

    return this;
  }

  async leave(_user: string) {
    const user = new anchor.web3.PublicKey(_user);
    const [player, _pbump] = await anchor.web3.PublicKey.findProgramAddress(
      [this.challengeKey.toBuffer(), user.toBuffer()],
      this.program.programId
    );

    const challenge = await this.program.account.challenge.fetch(
      this.challengeKey
    );
    const pool = await this.program.account.pool.fetch(challenge.pool);
    let userTokenAccount: anchor.web3.PublicKey;

    userTokenAccount = await getAssociatedTokenAddress(user, pool.mint);
    this.tx.add(
      await this.program.methods
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
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .instruction()
    );
  }

  async send(signers: anchor.web3.Signer[]) {
    const sig = await this.connection.sendTransaction(this.tx, signers);
    const latestBlockHash = await this.connection.getLatestBlockhash();
    this.connection.confirmTransaction({
      signature: sig,
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    });
    return sig;
  }

  getTx() {
    return this.tx;
  }
}
