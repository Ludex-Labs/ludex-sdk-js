import * as anchor from '@project-serum/anchor';
import { getAssociatedTokenAddress, NATIVE_MINT, TOKEN_PROGRAM_ID } from '@solana/spl-token';

import { _ludexChallengeApi, ApiConfig, transferWrappedSol } from '../common/utils';

/* TODO: COMING SOON */
export class InfiniteRoyalAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string) {
    this.ludexChallengeApi = _ludexChallengeApi(apiKey, "infiniteRoyal");
  }
}

/* TODO: COMING SOON */
export class InfiniteRoyalTXClient {
  tx = new anchor.web3.Transaction();
  challengeKey: anchor.web3.PublicKey;
  programAddress: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  constructor(connection: anchor.web3.Connection, challengeKey: string) {
    this.challengeKey = new anchor.web3.PublicKey(challengeKey);
    this.connection = connection;
    this.programAddress = new anchor.web3.PublicKey(
      "24BjgpzTbBQf9ggzMMC4UogA6GxeqmuaAAAiL3Y3suBu"
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
    return this.tx.serialize().toString();
  }
}
