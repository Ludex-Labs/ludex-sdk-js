import { web3 } from '@project-serum/anchor';
import {
    ASSOCIATED_TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction,
    createSyncNativeInstruction, NATIVE_MINT, TOKEN_PROGRAM_ID
} from '@solana/spl-token';

export const transferWrappedSol = (
  user: web3.PublicKey,
  associatedTokenAccount: web3.PublicKey,
  amount: number,
  tx: web3.Transaction
) => {
  tx.add(
    createAssociatedTokenAccountInstruction(
      user,
      associatedTokenAccount,
      user,
      NATIVE_MINT,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    ),
    web3.SystemProgram.transfer({
      fromPubkey: user,
      toPubkey: associatedTokenAccount,
      lamports: amount,
    }),
    createSyncNativeInstruction(associatedTokenAccount, TOKEN_PROGRAM_ID)
  );
};
