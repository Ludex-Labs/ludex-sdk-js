import { Transaction } from "@solana/web3.js";
import { JoinChallengeResponse, LeaveChallengeResponse } from "./challenge";
import { Chain } from "./types";

type parseTransactionResponse = Object | Transaction;

/**
 * Parses a transaction encoded in base64 based on the specified blockchain chain.
 * It returns an generic objects to represent a transaction for Avalanche transactions and a
 * Solana Transaction object for Solana transactions.
 *
 * @param {String} txn - The transaction transaction information encoded in base64.
 * @param {Chain} chain - The blockchain chain identifier (AVALANCHE or SOLANA) determining the parsing
 *        method and format of the returned object.
 * @returns {Promise<Object | Transaction>} A Promise that resolves to a parsed transaction, which is
 *          either an JSON object for Avalanche or a Solana Transaction object for Solana.
 */
export const parseTransaction = async (
  txn: String,
  chain: Chain
): Promise<parseTransactionResponse> => {
  switch (chain) {
    case Chain.AVALANCHE:
      return JSON.parse(
        Buffer.from(txn, "base64").toString("utf-8")
      )[0];
    case Chain.SOLANA:
      return Transaction.from(Buffer.from(txn, "base64"));
  }
};
