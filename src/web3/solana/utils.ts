import { Challenge as IDL_TYPE, ChallengeIDL as IDL } from '@ludex-labs/ludex-solana';
import { AnchorProvider, Program, web3 } from '@project-serum/anchor';
import { createSyncNativeInstruction } from '@solana/spl-token';
import { Connection, Keypair, PublicKey, SolanaJSONRPCError, Transaction } from '@solana/web3.js';

import { CHALLENGE_PROGRAM_ID, DEVNET_CHALLENGE_PROGRAM_ID } from './challenge/client';

export interface Wallet {
  signTransaction(tx: Transaction): Promise<Transaction>;
  signAllTransactions(txs: Transaction[]): Promise<Transaction[]>;
  publicKey: PublicKey;
}

export const createFakeWallet = () => {
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

export const getProgram = (connection: Connection, cluster?: string) => {
  let programAddress = CHALLENGE_PROGRAM_ID;

  if (cluster?.toLowerCase() === "devnet") {
    programAddress = DEVNET_CHALLENGE_PROGRAM_ID;
  }

  return new Program<IDL_TYPE>(
    IDL,
    programAddress,
    new AnchorProvider(
      connection,
      createFakeWallet(),
      AnchorProvider.defaultOptions()
    )
  );
};
