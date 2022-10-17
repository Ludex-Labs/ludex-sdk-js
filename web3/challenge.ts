import { Connection, PublicKey, SystemProgram } from '@solana/web3.js';
import { getMinimumBalanceForRentExemptAccount } from '@solana/spl-token';
import { BN } from '@project-serum/anchor';
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { getProgram, getProgramId } from './utils';
import { Options, SendTransaction } from './types';

export interface Challenge {
  publicKey: PublicKey;

  mint: PublicKey;
  mediator: PublicKey;
  locked: boolean;

  playersLimit: number;
  entryFee: BN;
  mediatorRake: BN;
  providerRake: BN;
  playersJoined: number;

  currentPayout: BN;
  maximumPayout: BN;
}

export const getChallenge = async (
  connection: Connection,
  challengePubKey: PublicKey | string
): Promise<Challenge | undefined> => {
  const program = getProgram(connection);

  if (typeof challengePubKey === 'string') {
    challengePubKey = new PublicKey(challengePubKey);
  }

  const challenge = await program.account.challenge.fetchNullable(
    challengePubKey
  );

  if (!challenge) {
    return undefined;
  }

  const pool = await program.account.pool.fetchNullable(challenge.pool);

  if (!pool) {
    throw new Error('Unexpected null challenge pool');
  }

  return {
    publicKey: challengePubKey,

    mint: pool.mint,
    mediator: challenge.mediator,
    locked: challenge.locked,

    playersLimit: challenge.playersLimit,
    entryFee: challenge.entryFee,
    mediatorRake: challenge.mediatorRake,
    providerRake: challenge.providerRake,
    playersJoined: challenge.playersJoined,

    currentPayout:
      challenge.playersJoined * challenge.entryFee -
      challenge.providerRake -
      challenge.mediatorRake,
    maximumPayout:
      challenge.playersLimit * challenge.entryFee -
      challenge.providerRake -
      challenge.mediatorRake,
  };
};

export const join = async (
  challengePublicKeyStr: string,
  userPublicKey: PublicKey,
  sendTransaction: SendTransaction,
  connection: Connection,
  options?: Options
): Promise<string> => {
  const program = getProgram(connection, options);

  const challengePublicKey = new PublicKey(challengePublicKeyStr);

  const [playerPDA] = await PublicKey.findProgramAddress(
    [challengePublicKey.toBuffer(), userPublicKey.toBuffer()],
    new PublicKey(getProgramId(options?.cluster))
  );

  const challenge = await program.account.challenge.fetchNullable(
    challengePublicKey
  );

  if (!challenge) {
    throw new Error('Could not find challenge');
  }

  const pool = await program.account.pool.fetchNullable(challenge.pool);

  if (!pool) {
    throw new Error('Unexpected null challenge pool');
  }

  const userTokenAccount = await getAssociatedTokenAddress(
    pool.mint,
    userPublicKey,
    false
  );

  const balance = await connection.getTokenAccountBalance(userTokenAccount);
  const rentExempt = await getMinimumBalanceForRentExemptAccount(connection);

  if (new BN(balance.value.amount) < challenge.amount + rentExempt) {
    throw new Error("User doesn't have enough balance to join the challenge");
  }

  const tx = await program.methods
    .join()
    .accounts({
      challenge: challengePublicKey,
      player: playerPDA,
      mint: pool.mint,
      pool: challenge.pool,
      poolTokenAccount: pool.tokenAccount,
      user: userPublicKey,
      payer: userPublicKey,
      userTokenAccount,
      systemProgram: SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .transaction();

  return await sendTransaction(tx, connection, {
    preflightCommitment: 'finalized',
  });
};
