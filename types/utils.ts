import * as anchor from '@project-serum/anchor'
import { ASSOCIATED_TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction, createSyncNativeInstruction, NATIVE_MINT, TOKEN_PROGRAM_ID } from '@solana/spl-token';

export const transferWrappedSol = (
    user: anchor.web3.PublicKey,
    associatedTokenAccount: anchor.web3.PublicKey,
    amount: number, tx: anchor.web3.Transaction) => {
    tx.add(createAssociatedTokenAccountInstruction(
        user,
        associatedTokenAccount,
        user,
        NATIVE_MINT,
        TOKEN_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
    ),
        anchor.web3.SystemProgram.transfer({
            fromPubkey: user,
            toPubkey: associatedTokenAccount,
            lamports: amount,
        }),
        createSyncNativeInstruction(associatedTokenAccount, TOKEN_PROGRAM_ID)
    );
}

export type ApiConfig = RequestInit & { path?: string };
export const _ludexChallengeApi = (bearerToken: string) => async <T>(config: ApiConfig): Promise<T> => {
    const response = await fetch(`https://api.ludex.gg/challenge/${config.path || ""}`, { ...config, headers: { ...config.headers, "Content-Type": "application/json", 'Authorization': `Bearer ${bearerToken}` } });
    const data = await response.json();
    return data as T;
}

export const poll = async <T>(func: () => Promise<T>, retryCondition: (Obj: T) => boolean, interval: number, numberOfRetry?: number) => {
    let retry = 0;
    while (numberOfRetry === undefined || retry < numberOfRetry) {
        const result = await func();
        if (retryCondition(result)) {
            return result;
        }
        retry++;
        await new Promise(resolve => setTimeout(resolve, interval));
    }
    throw new Error("Timed out");
}