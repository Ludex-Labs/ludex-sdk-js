import {
  guestIdentity,
  Metaplex,
  TokenMetadataProgram,
} from "@metaplex-foundation/js";
import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import NodeWallet from "@project-serum/anchor/dist/cjs/nodewallet";
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
import { IDL, NftWager } from "./nft_challenge_idl";
export { IDL, NftWager } from "./nft_challenge_idl";

export class NftChallengeAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string) {
    this.ludexChallengeApi = _ludexChallengeApi(apiKey, "nftChallenge");
  }

  async _apiCreateChallenge(limit: number = 2) {
    return this.ludexChallengeApi<{ id: number }>({
      method: "POST",
      body: JSON.stringify({ limit }),
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

  async _apiCancelChallenge(id: number) {
    await this.ludexChallengeApi({
      method: "HEAD",
      path: `${id}?action=cancel`,
    });
  }

  async _apiResolveChallengeWithPayment(
    id: number,
    payment: { to: string; offering: string }[]
  ) {
    await this.ludexChallengeApi({
      method: "HEAD",
      path: `${id}?action=resolve&payment=${JSON.stringify(payment)}`,
    });
  }

  async create(limit: number = 2) {
    const challengeId = (await this._apiCreateChallenge(limit)).id;
    const challenge = await poll(
      () => this._apiGetChallenge(challengeId),
      ({ blockchainAddress }) => blockchainAddress !== undefined,
      1000
    );
    return { challengeId, blockchainAddress: challenge.blockchainAddress! };
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

  /* TODO: Coming soon with applying your own specific payments */
  async resolveWithPayment(
    id: number,
    payment: { to: string; offering: string }[],
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

export class NftChallengeTXClient {
  tx = new anchor.web3.Transaction();
  challengeKey: anchor.web3.PublicKey;
  program: Program<NftWager>;
  connection: anchor.web3.Connection;
  manager: anchor.web3.PublicKey;
  feevault: anchor.web3.PublicKey;

  constructor(
    connection: anchor.web3.Connection,
    challengeKey: string,
    wallet: anchor.web3.Keypair
  ) {
    this.challengeKey = new anchor.web3.PublicKey(challengeKey);
    this.connection = connection;
    const programAddress = new anchor.web3.PublicKey(
      "5U2Y2YNyMRofJxMBZKfkvxeuXRjsJUpkG95pRVGLLXyj"
    );
    this.manager = new anchor.web3.PublicKey(
      "FKvNWeB7RKowXNiTyz2rWBqQtqzfUijv4WVt5Kn22h6b"
    );
    this.feevault = new anchor.web3.PublicKey(
      "8RGvc4CPXeS5uez27DUEah4qk7BSREEaa7AtzXvgZZa8"
    );
    this.program = new Program<NftWager>(
      IDL,
      programAddress,
      new anchor.AnchorProvider(
        this.connection,
        new NodeWallet(wallet),
        anchor.AnchorProvider.defaultOptions()
      )
    );
  }

  async join(_user: string) {
    const user = new anchor.web3.PublicKey(_user);
    const [player] = await anchor.web3.PublicKey.findProgramAddress(
      [this.challengeKey.toBuffer(), user.toBuffer()],
      this.program.programId
    );
    this.tx.add(
      await this.program.methods
        .join()
        .accounts({
          playerAuthority: user,
          manager: this.manager,
          player: player,
          game: this.challengeKey,
          feeVault: this.feevault,
          systemProgram: anchor.web3.SystemProgram.programId,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .instruction()
    );
    return this;
  }

  async addSolOffering(_user: string, _amount: number) {
    const user = new anchor.web3.PublicKey(_user);
    const [player] = await anchor.web3.PublicKey.findProgramAddress(
      [this.challengeKey.toBuffer(), user.toBuffer()],
      this.program.programId
    );
    const [offering] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(anchor.utils.bytes.utf8.encode("offering")),
        this.challengeKey.toBuffer(),
        user.toBuffer(),
      ],
      this.program.programId
    );

    this.tx.add(
      await this.program.methods
        .addSolOffering(new anchor.BN(1))
        .accounts({
          playerAuthority: user,
          player: player,
          game: this.challengeKey,
          offering: offering,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .instruction()
    );
    return this;
  }

  async addNftOffering(
    _user: string,
    _nft_mint: string,
    _nft_token_account: string,
    _amount: number
  ) {
    const user = new anchor.web3.PublicKey(_user);
    const nftMint = new anchor.web3.PublicKey(_nft_mint);
    const nftTokenAccount = new anchor.web3.PublicKey(_nft_token_account);
    const [offering] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(anchor.utils.bytes.utf8.encode("offering")),
        nftTokenAccount.toBuffer(),
      ],
      this.program.programId
    );
    const [player] = await anchor.web3.PublicKey.findProgramAddress(
      [this.challengeKey.toBuffer(), user.toBuffer()],
      this.program.programId
    );

    const mx = Metaplex.make(this.program.provider.connection).use(
      guestIdentity()
    );

    // * TODO: check if this is an escrowless or escrowed offering

    const edition = (
      await mx.nfts().findByMint(nftMint)
    )?.editionTask?.getResult()?.publicKey;

    this.tx.add(
      await this.program.methods
        .addEscrowlessOffering(new anchor.BN(_amount))
        .accounts({
          playerAuthority: user,
          player: player,
          game: this.challengeKey,
          offering: offering,
          tokenAccount: nftTokenAccount,
          tokenMint: nftMint,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .remainingAccounts(
          edition
            ? [
                {
                  pubkey: edition,
                  isSigner: false,
                  isWritable: false,
                },
                {
                  pubkey: TokenMetadataProgram.publicKey,
                  isSigner: false,
                  isWritable: false,
                },
              ]
            : []
        )
        .instruction()
    );
    return this;
  }

  async accept(_user: string) {
    const user = new anchor.web3.PublicKey(_user);
    const [player] = await anchor.web3.PublicKey.findProgramAddress(
      [this.challengeKey.toBuffer(), user.toBuffer()],
      this.program.programId
    );
    this.tx.add(
      await this.program.methods
        .accept()
        .accounts({
          playerAuthority: user,
          player: player,
          game: this.challengeKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .instruction()
    );
    return this;
  }

  async send(signers: anchor.web3.Signer[]) {
    const sig = await this.connection.sendTransaction(this.tx, signers);
    const latestBlockHash = await this.connection.getLatestBlockhash();
    await this.connection.confirmTransaction({
      signature: sig,
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    });
    return sig;
  }

  getTx() {
    return this.tx.serialize().toString();
  }

  static async getOfferings(
    connection: anchor.web3.Connection,
    challengeKey: string,
    wallet: anchor.web3.Keypair
  ) {
    const programAddress = new anchor.web3.PublicKey(
      "5U2Y2YNyMRofJxMBZKfkvxeuXRjsJUpkG95pRVGLLXyj"
    );
    const program = new Program<NftWager>(
      IDL,
      programAddress,
      new anchor.AnchorProvider(
        connection,
        new NodeWallet(wallet),
        anchor.AnchorProvider.defaultOptions()
      )
    );

    const challenge = new anchor.web3.PublicKey(challengeKey);
    const players = await program.account.player.all([
      {
        memcmp: {
          offset: 8,
          bytes: challenge.toBase58(),
        },
      },
    ]);

    let offeringsResult = [];
    for await (const offerings of players.map((p) =>
      program.account.offering.all([
        {
          memcmp: {
            offset: 8,
            bytes: p.publicKey.toBase58(),
          },
        },
      ])
    )) {
      offeringsResult.push(
        offerings.map((o) => ({
          ...o,
          authority: players.find(
            (p) => p.publicKey.toBase58() === o.account.player.toBase58()
          )?.account.authority,
        }))
      );
    }

    return offeringsResult.reduce((acc, val) => acc.concat(val), []);
  }
}
