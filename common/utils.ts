import { web3 } from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  createSyncNativeInstruction,
  NATIVE_MINT,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

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

export type ApiConfig = RequestInit & { path?: string };
export const _ludexChallengeApi =
  (bearerToken: string, api: string, baseUrl = "https://api.ludex.gg") =>
  async <T>(config: ApiConfig): Promise<T> => {
    const response = await fetch(
      `${baseUrl}/api/v1/${api}/${config.path || ""}`,
      {
        ...config,
        headers: {
          ...config.headers,
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    if (config.method === "HEAD") {
      return {} as T;
    }

    let data;
    try {
      data = await response.json();
    } catch (e) {
      throw e;
    }
    return data as T;
  };

export const poll = async <T>(
  func: () => Promise<T>,
  retryCondition: (Obj: T) => boolean,
  interval: number,
  numberOfRetry?: number
) => {
  let retry = 0;
  while (numberOfRetry === undefined || retry < numberOfRetry) {
    const result = await func();
    if (retryCondition(result)) {
      return result;
    }
    retry++;
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  throw new Error("Timed out");
};
