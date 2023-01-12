import { useCallback, useEffect, useState } from 'react';

import {
  Challenge, ChallengeTXClient, getChallengeInfo
} from '@ludex-labs/ludex-sdk-js/src/web3/challenge/client';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';

export const useFTChallenge = (challengeKey: string, cluster?: string) => {
  const connection = useConnection();
  const wallet = useAnchorWallet();

  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [loading, setLoading] = useState(true);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    console.log(connection, wallet);

    if (!connection || !wallet) {
      return;
    }

    getChallengeInfo(connection.connection, challengeKey, {
      cluster: cluster,
      wallet: wallet,
    })
      .then((challenge) => {
        setChallenge(challenge);
        setLoading(false);
      })
      .catch(console.error);
  }, [connection, wallet, challengeKey, cluster, setChallenge, setLoading]);

  const joinChallenge = useCallback(() => {
    console.log("joining");
    if (!challenge) {
      console.error("called joinChallenge before challenge was loaded");
      return;
    }
    if (!wallet) {
      throw new Error("Wallet not connected");
    }

    console.log("setting loading");
    setLoading(true);

    const client = new ChallengeTXClient(connection.connection, challengeKey, {
      wallet,
      cluster,
    });

    client
      .join(wallet.publicKey.toBase58())
      .getTx()
      .then((tx) => {
        tx.feePayer = wallet.publicKey;

        return (async () => {
          const recentBlockhash =
            await connection.connection.getLatestBlockhash();
          tx.recentBlockhash = recentBlockhash.blockhash;
          return wallet.signTransaction(tx);
        })();
      })
      .then((tx) => {
        return connection.connection.sendTransaction(tx, []);
      })
      .then((signature) => {
        return connection.connection.confirmTransaction(signature);
      })
      .then(() => {
        setLoading(false);
        setJoined(true);
      })
      .catch(console.error);
  }, [
    challenge,
    wallet,
    connection,
    challengeKey,
    cluster,
    setJoined,
    setLoading,
  ]);

  return { challenge, joinChallenge, joined, loading };
};
