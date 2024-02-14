import { Chain } from "./types";

/**
 * Parses a transaction encoded in base64 based on the specified blockchain chain.
 * It returns an generic objects to represent a transaction for Avalanche transactions and a
 * buffer for Solana transactions.
 * 
 * For Avalanche, it returns a JSON object representing the transaction, suitable for
 * libraries like ethers.js. Example usage:
 * ```
 * const transaction = await parseTransaction(txn, Chain.AVALANCHE);
 * const ethersProvider = new ethers.Provider(provider);
 * const signer = await ethersProvider.getSigner();
 * const transactionResponse = await signer.sendTransaction(transaction);
 * ```
 *
 * For Solana, it returns a Buffer, which can be used with solana/web3.js and other Solana
 * libraries. Example usage:
 * ```
 * const transactionBuffer = await parseTransaction(txn, Chain.SOLANA);
 * const solWeb3 = new SolanaWallet(provider);
 * const transaction = Transaction.from(transactionBuffer);
 * const response = await solWeb3.signAndSendTransaction(transaction);
 * ```
 *
 * @param {String} txn - The transaction transaction information encoded in base64.
 * @param {Chain} chain - The blockchain chain identifier (AVALANCHE or SOLANA) determining the parsing
 *        method and format of the returned object.
 * @returns {Promise<Object | Buffer>} A Promise that resolves to a parsed transaction, which is
 *          either a JSON object for Avalanche or a Buffer for Solana.
 */
export const parseTransaction = async (
  txn: String,
  chain: Chain
): Promise<Object | Buffer> => {
  switch (chain) {
    case Chain.AVALANCHE:
      return JSON.parse(Buffer.from(txn, "base64").toString("utf-8"))[0];
    case Chain.SOLANA:
      return Buffer.from(txn, "base64");
  }
};
