import {
  guestIdentity,
  Metaplex,
  TokenMetadataProgram,
} from "@metaplex-foundation/js";
import { Program, web3, AnchorProvider, Wallet, BN, utils } from "@project-serum/anchor";
import {
  getAssociatedTokenAddress,
  NATIVE_MINT,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { _ludexChallengeApi, poll, ApiConfig } from "../common/utils";
import { IDL, NftChallenge } from "./nft_challenge_idl";
export { IDL, NftChallenge } from "./nft_challenge_idl";

export class NftChallengeAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string, baseUrl?: string) {
    this.ludexChallengeApi = _ludexChallengeApi(
      apiKey,
      "nftChallenge",
      baseUrl
    );
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
      (c) => {
        return c.blockchainAddress != null;
      },
      1000
    );
    return { challengeId, blockchainAddress: challenge.blockchainAddress! };
  }

  async cancel(id: number, skipConfirmation: boolean = false) {
    await this._apiCancelChallenge(id);
    if (!skipConfirmation) {
      await poll(
        () => this._apiGetChallenge(Number(id)),
        (c) => {
          return c.canceledAt != null;
        },
        1000
      );
    }
  }

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
  tx: web3.Transaction;
  tasks: Promise<web3.TransactionInstruction>[] = [];
  challengeKey: web3.PublicKey;
  program: Program<NftChallenge>;
  connection: web3.Connection;

  constructor(
    connection: web3.Connection,
    challengeKey: string,
    wallet?: web3.Keypair
  ) {
    this.challengeKey = new web3.PublicKey(challengeKey);
    this.connection = connection;
    const programAddress = new web3.PublicKey(
      "5U2Y2YNyMRofJxMBZKfkvxeuXRjsJUpkG95pRVGLLXyj"
    );
    this.program = new Program<NftChallenge>(
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
        const [player] = await web3.PublicKey.findProgramAddress(
          [this.challengeKey.toBuffer(), user.toBuffer()],
          this.program.programId
        );
        const game = await this.program.account.game.fetch(this.challengeKey);
        const manager = await this.program.account.manager.fetch(game.manager);

        return resolve(
          this.program.methods
            .join()
            .accounts({
              playerAuthority: user,
              manager: game.manager,
              player: player,
              game: this.challengeKey,
              feeVault: manager.feeVault,
              mediatorVault: game.mediatorVault,
              systemProgram: web3.SystemProgram.programId,
              tokenProgram: TOKEN_PROGRAM_ID,
            })
            .instruction()
        );
      })
    );
    this.tx.feePayer = user;
    return this;
  }

  addSolOffering(_user: string, _amount: number) {
    return this.addLamportOffering(
      _user,
      _amount * web3.LAMPORTS_PER_SOL
    );
  }

  addLamportOffering(_user: string, _amount: number) {
    this.tasks.push(
      new Promise(async (resolve) => {
        const user = new web3.PublicKey(_user);
        const [player] = await web3.PublicKey.findProgramAddress(
          [this.challengeKey.toBuffer(), user.toBuffer()],
          this.program.programId
        );
        const [offering] = await web3.PublicKey.findProgramAddress(
          [
            Buffer.from(utils.bytes.utf8.encode("offering")),
            this.challengeKey.toBuffer(),
            user.toBuffer(),
          ],
          this.program.programId
        );

        return resolve(
          this.program.methods
            .addSolOffering(new BN(_amount))
            .accounts({
              playerAuthority: user,
              player: player,
              game: this.challengeKey,
              offering: offering,
              systemProgram: web3.SystemProgram.programId,
            })
            .instruction()
        );
      })
    );
    return this;
  }

  addNftOffering(
    _user: string,
    _nft_mint: string,
    _amount: number,
    _nft_token_account?: string
  ) {
    this.tasks.push(
      new Promise(async (resolve) => {
        const user = new web3.PublicKey(_user);
        const nftMint = new web3.PublicKey(_nft_mint);
        let nftTokenAccount: web3.PublicKey;
        const mx = Metaplex.make(this.program.provider.connection).use(
          guestIdentity()
        );
        const nft = await mx.nfts().findByMint(nftMint);
        if (_nft_token_account) {
          nftTokenAccount = new web3.PublicKey(_nft_token_account);
        } else {
          // This is only possible for an NFT. For SFT and FT we will have to figure something else out
          const largestAccounts = await this.connection.getTokenLargestAccounts(
            new web3.PublicKey(_nft_mint)
          );
          nftTokenAccount = new web3.PublicKey(
            largestAccounts.value[0].address
          );
        }

        const [offering] = await web3.PublicKey.findProgramAddress(
          [
            Buffer.from(utils.bytes.utf8.encode("offering")),
            nftTokenAccount.toBuffer(),
          ],
          this.program.programId
        );
        const [player] = await web3.PublicKey.findProgramAddress(
          [this.challengeKey.toBuffer(), user.toBuffer()],
          this.program.programId
        );

        // * TODO: check if this is an escrowless or escrowed offering

        const edition = nft?.editionTask?.getResult()?.publicKey;

        return resolve(
          this.program.methods
            .addEscrowlessOffering(new BN(_amount))
            .accounts({
              playerAuthority: user,
              player: player,
              game: this.challengeKey,
              offering: offering,
              tokenAccount: nftTokenAccount,
              tokenMint: nftMint,
              tokenProgram: TOKEN_PROGRAM_ID,
              systemProgram: web3.SystemProgram.programId,
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
      })
    );
    return this;
  }

  accept(_user: string) {
    this.tasks.push(
      new Promise(async (resolve) => {
        const user = new web3.PublicKey(_user);
        const [player] = await web3.PublicKey.findProgramAddress(
          [this.challengeKey.toBuffer(), user.toBuffer()],
          this.program.programId
        );

        return resolve(
          this.program.methods
            .accept()
            .accounts({
              playerAuthority: user,
              player: player,
              game: this.challengeKey,
              systemProgram: web3.SystemProgram.programId,
            })
            .instruction()
        );
      })
    );
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

  static async getOfferings(
    connection: web3.Connection,
    challengeKey: string,
    wallet: web3.Keypair
  ) {
    const programAddress = new web3.PublicKey(
      "5U2Y2YNyMRofJxMBZKfkvxeuXRjsJUpkG95pRVGLLXyj"
    );
    const program = new Program<NftChallenge>(
      IDL,
      programAddress,
      new AnchorProvider(
        connection,
        new Wallet(wallet),
        AnchorProvider.defaultOptions()
      )
    );

    const challenge = new web3.PublicKey(challengeKey);
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
