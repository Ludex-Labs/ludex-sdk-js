import { web3 } from '@project-serum/anchor';

/* TODO: COMING SOON */
export class InfiniteRoyalTXClient {
  tx = new web3.Transaction();
  challengeKey: web3.PublicKey;
  programAddress: web3.PublicKey;
  connection: web3.Connection;
  constructor(connection: web3.Connection, challengeKey: string) {
    this.challengeKey = new web3.PublicKey(challengeKey);
    this.connection = connection;
    this.programAddress = new web3.PublicKey(
      "24BjgpzTbBQf9ggzMMC4UogA6GxeqmuaAAAiL3Y3suBu"
    );
  }

  async send(signers: web3.Signer[]) {
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
