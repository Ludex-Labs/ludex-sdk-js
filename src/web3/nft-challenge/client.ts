import BN from 'bn.js';

import { guestIdentity, Metaplex, TokenMetadataProgram } from '@metaplex-foundation/js';
import { AnchorProvider, Program, utils, web3 } from '@project-serum/anchor';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress, TOKEN_PROGRAM_ID
} from '@solana/spl-token';
import {
  Connection, Keypair, PublicKey, SystemProgram, Transaction, TransactionInstruction
} from '@solana/web3.js';

import { Wallet } from '../utils';
import { IDL, NftChallenge } from './';

export type ChallengeClientOptions = {
  wallet?: Wallet;
};

const findEdition = async (connection: Connection, mint: PublicKey) => {
  const mx = Metaplex.make(connection).use(guestIdentity());
  const nft = await mx.nfts().findByMint(mint);

  const edition = nft?.editionTask?.getResult()?.publicKey;
  if (!edition) {
    throw new Error(
      "Couldn't find edition, the token probably doesn't follow Metaplex standards. Try using escrowed offering instead"
    );
  }

  return edition;
};

export class NftChallengeTXClient {
  tx: web3.Transaction;
  tasks: Promise<TransactionInstruction>[] = [];
  challengeKey: web3.PublicKey;
  program: Program<NftChallenge>;
  connection: web3.Connection;

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
        options.wallet,
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
    return this.addLamportOffering(_user, _amount * web3.LAMPORTS_PER_SOL);
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

  /**
   * @deprecated Use addEscrowlessOffering or addEscrowedOffering instead
   */
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

  addEscrowedOffering(
    user: string | PublicKey,
    token_mint: string | PublicKey,
    amount: BN | number,
    token_account?: string | PublicKey
  ) {
    const run = async () => {
      if (typeof user === "string") {
        user = new web3.PublicKey(user);
      }

      if (typeof token_mint === "string") {
        token_mint = new web3.PublicKey(token_mint);
      }

      if (!token_account) {
        const largestAccounts = await this.connection.getTokenLargestAccounts(
          token_mint
        );
        token_account = new web3.PublicKey(largestAccounts.value[0].address);
      }

      if (typeof token_account === "string") {
        token_account = new web3.PublicKey(token_account);
      }

      if (typeof amount === "number") {
        amount = new BN(amount);
      }

      const [offering] = await web3.PublicKey.findProgramAddress(
        [
          Buffer.from(utils.bytes.utf8.encode("offering")),
          token_account.toBuffer(),
        ],
        this.program.programId
      );
      const offeringTokenAccount = await getAssociatedTokenAddress(
        token_mint,
        offering,
        true,
        TOKEN_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
      );
      const [player] = await web3.PublicKey.findProgramAddress(
        [this.challengeKey.toBuffer(), user.toBuffer()],
        this.program.programId
      );

      console.log("Add offering", {
        tokenAccount: token_account,
        offeringTokenAccount,
      });

      return this.program.methods
        .addEscrowedOffering(amount)
        .accounts({
          playerAuthority: user,
          player: player,
          game: this.challengeKey,
          offering: offering,
          offeringTokenAccount: offeringTokenAccount,
          tokenAccount: token_account,
          tokenMint: token_mint,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: web3.SystemProgram.programId,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          rent: web3.SYSVAR_RENT_PUBKEY,
        })
        .instruction();
    };

    this.tasks.push(run());

    return this;
  }

  // Only works for Metaplex NFTs
  addEscrowlessOffering(
    user: string | PublicKey,
    token_mint: string | PublicKey,
    token_account?: string | PublicKey
  ) {
    const run = async () => {
      if (typeof user === "string") {
        user = new web3.PublicKey(user);
      }

      if (typeof token_mint === "string") {
        token_mint = new web3.PublicKey(token_mint);
      }

      if (!token_account) {
        const largestAccounts = await this.connection.getTokenLargestAccounts(
          token_mint
        );
        token_account = new web3.PublicKey(largestAccounts.value[0].address);
      }

      if (typeof token_account === "string") {
        token_account = new web3.PublicKey(token_account);
      }

      const [offering] = await web3.PublicKey.findProgramAddress(
        [
          Buffer.from(utils.bytes.utf8.encode("offering")),
          token_account.toBuffer(),
        ],
        this.program.programId
      );
      const [player] = await web3.PublicKey.findProgramAddress(
        [this.challengeKey.toBuffer(), user.toBuffer()],
        this.program.programId
      );

      return this.program.methods
        .addEscrowlessOffering(new BN(1))
        .accounts({
          playerAuthority: user,
          player: player,
          game: this.challengeKey,
          offering: offering,
          tokenAccount: token_account,
          tokenMint: token_mint,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: web3.SystemProgram.programId,
        })
        .remainingAccounts([
          {
            pubkey: await findEdition(
              this.program.provider.connection,
              token_mint
            ),
            isSigner: false,
            isWritable: false,
          },
          {
            pubkey: TokenMetadataProgram.publicKey,
            isSigner: false,
            isWritable: false,
          },
        ])
        .instruction();
    };

    this.tasks.push(run());

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

  removeOffering(user: string, offering: string) {
    this.tasks.push(
      (async () => {
        const userPublicKey = new PublicKey(user);
        const offeringPublicKey = new PublicKey(offering);

        const offeringAccount =
          await this.program.account.offering.fetchNullable(offeringPublicKey);

        if (!offeringAccount) {
          throw new Error("Offering cannot be found");
        }

        const [playerPublicKey] = PublicKey.findProgramAddressSync(
          [this.challengeKey.toBuffer(), userPublicKey.toBuffer()],
          this.program.programId
        );

        let ix: TransactionInstruction;
        if (offeringAccount.mint) {
          if (offeringAccount.isEscrowed) {
            const tokenAccount = await getAssociatedTokenAddress(
              offeringAccount.mint,
              userPublicKey,
              true,
              TOKEN_PROGRAM_ID,
              ASSOCIATED_TOKEN_PROGRAM_ID
            );

            const offeringTokenAccount = await getAssociatedTokenAddress(
              offeringAccount.mint,
              offeringPublicKey,
              true,
              TOKEN_PROGRAM_ID,
              ASSOCIATED_TOKEN_PROGRAM_ID
            );

            console.log("remove offering", {
              tokenAccount,
              offeringTokenAccount,
            });

            ix = await this.program.methods
              .removeEscrowedOffering()
              .accounts({
                playerAuthority: userPublicKey,
                player: playerPublicKey,
                game: this.challengeKey,
                offering: offeringPublicKey,
                offeringTokenAccount: offeringTokenAccount,
                tokenAccount: tokenAccount,
                tokenMint: offeringAccount.mint,
                tokenProgram: TOKEN_PROGRAM_ID,
                systemProgram: SystemProgram.programId,
              })
              .instruction();
          } else {
            const tokenAccount = (
              await this.connection.getTokenLargestAccounts(
                offeringAccount.mint
              )
            ).value[0].address;

            ix = await this.program.methods
              .removeEscrowlessOffering()
              .accounts({
                playerAuthority: userPublicKey,
                player: playerPublicKey,
                game: this.challengeKey,
                offering: offeringPublicKey,
                tokenAccount: tokenAccount,
                tokenMint: offeringAccount.mint,
                tokenProgram: TOKEN_PROGRAM_ID,
                systemProgram: SystemProgram.programId,
              })
              .remainingAccounts([
                {
                  pubkey: await findEdition(
                    this.program.provider.connection,
                    offeringAccount.mint
                  ),
                  isSigner: false,
                  isWritable: false,
                },
                {
                  pubkey: TokenMetadataProgram.publicKey,
                  isSigner: false,
                  isWritable: false,
                },
              ])
              .instruction();
          }
        } else {
          ix = await this.program.methods
            .removeSolOffering()
            .accounts({
              playerAuthority: userPublicKey,
              player: playerPublicKey,
              game: this.challengeKey,
              offering: offeringPublicKey,
              systemProgram: SystemProgram.programId,
            })
            .instruction();
        }

        return ix;
      })()
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
    wallet: Wallet
  ) {
    const programAddress = new web3.PublicKey(
      "5U2Y2YNyMRofJxMBZKfkvxeuXRjsJUpkG95pRVGLLXyj"
    );
    const program = new Program<NftChallenge>(
      IDL,
      programAddress,
      new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions())
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

  static async getPlayerStatus(
    connection: web3.Connection,
    user: string | PublicKey,
    challenge: string | PublicKey
  ): Promise<"NOT_IN_GAME" | "ACCEPTED" | "JOINED"> {
    if (typeof user === "string") {
      user = new PublicKey(user);
    }

    if (typeof challenge === "string") {
      challenge = new PublicKey(challenge);
    }

    const programId = new web3.PublicKey(
      "5U2Y2YNyMRofJxMBZKfkvxeuXRjsJUpkG95pRVGLLXyj"
    );

    // we don't need an actual wallet since we're only trying to fetch accounts
    const dummyWallet = {
      publicKey: programId,
      signTransaction: async (tx: Transaction) => tx,
      signAllTransactions: async (txs: Transaction[]) => txs,
    };

    const program = new Program<NftChallenge>(
      IDL,
      programId,
      new AnchorProvider(
        connection,
        dummyWallet,
        AnchorProvider.defaultOptions()
      )
    );

    const [playerPublicKey] = PublicKey.findProgramAddressSync(
      [challenge.toBuffer(), user.toBuffer()],
      programId
    );

    const player = await program.account.player.fetchNullable(playerPublicKey);

    if (!player) {
      return "NOT_IN_GAME";
    }

    return player.accepted ? "ACCEPTED" : "JOINED";
  }
}
