import { Transaction } from "@solana/web3.js";
import { JoinChallengeResponse, LeaveChallengeResponse } from "./challenge";
import { Chain } from "./types";

type parseTransactionResponse = Object | Transaction;

/**
 * Parses a transaction encoded in base64 from either a JoinChallengeResponse or LeaveChallengeResponse
 * based on the specified blockchain chain. It returns a generic object to represent a transaction for Avalanche transactions and a
 * Solana Transaction object for Solana transactions.
 *
 * @param {JoinChallengeResponse | LeaveChallengeResponse} txn - The transaction response containing the
 *        transaction information encoded in base64.
 * @param {Chain} chain - The blockchain chain identifier (AVALANCHE or SOLANA) determining the parsing
 *        method and format of the returned object.
 * @returns {Promise<Object | Transaction>} A Promise that resolves to a parsed transaction, which is
 *          either a JSON object for Avalanche or a Solana Transaction object for Solana.
 */
export const parseTransaction = async (
  txn: JoinChallengeResponse | LeaveChallengeResponse,
  chain: Chain
): Promise<parseTransactionResponse> => {
  switch (chain) {
    case Chain.AVALANCHE:
      return JSON.parse(
        Buffer.from(txn.transaction, "base64").toString("utf-8")
      );
    case Chain.SOLANA:
      return Transaction.from(Buffer.from(txn.transaction, "base64"));
  }
};
