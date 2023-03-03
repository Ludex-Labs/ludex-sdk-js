import { web3 } from "@project-serum/anchor";
import { createSyncNativeInstruction } from "@solana/spl-token";
import {
  Connection,
  Keypair,
  PublicKey,
  SolanaJSONRPCError,
  Transaction,
} from "@solana/web3.js";

export interface Wallet {
  signTransaction(tx: Transaction): Promise<Transaction>;
  signAllTransactions(txs: Transaction[]): Promise<Transaction[]>;
  publicKey: PublicKey;
}

export const createFakeWallet = () => {
  if (typeof window === "undefined") {
    const { Wallet: AnchorWallet } = require("@project-serum/anchor");
    return new AnchorWallet(Keypair.generate()) as Wallet;
  }

  return {
    signTransaction: async (tx: Transaction) => tx,
    signAllTransactions: async (txs: Transaction[]) => txs,
    publicKey: Keypair.generate().publicKey,
  };
};

export const accountExists = async (
  connection: Connection,
  account: PublicKey
) => {
  try {
    if ((await connection.getAccountInfo(account)) === null) {
      return false;
    }
  } catch (e: unknown) {
    // -32602 is the error code for an account not found
    if (e instanceof SolanaJSONRPCError && e.code && e.code === -32602) {
      return false;
    }
    throw e;
  }

  return true;
};

export const transferWrappedSol = (
  user: web3.PublicKey,
  associatedTokenAccount: web3.PublicKey,
  amount: number,
  tx: web3.Transaction
) => {
  tx.add(
    web3.SystemProgram.transfer({
      fromPubkey: user,
      toPubkey: associatedTokenAccount,
      lamports: amount,
    }),
    createSyncNativeInstruction(associatedTokenAccount)
  );
};
