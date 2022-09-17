# ludex-sdk-js
javascript sdk for ludex protocol

This repository holds ludex's javascript abstractions of our apis and clients.
Each file in types holds the types and the API client (which should be located in your backend as it will hold your jwt secret) and the TX client which could be in your backend or frontend.

## Installation
TODO: we should get it to be public so we can do this
npm i --save ludex-sdk

## Challenge
Challenge is our fungable token challenge protocol is broken up into 4 phases

### Initialization
In backend we need to initialize the api class. The api key that you put into the challenge api client will be set to mainnet or devnet from the key you copied from the dashboard.

```
import {Challenge} from 'ludex-sdk';
const ludexApi = Challenge.ChallengeAPIClient(procces.env.LUDEX_API_KEY);
```

### Create challenge (SERVER SIDE)
Now to begin a challenge you will need to use the ludex api object you just made. And when creating a challenge you must pass a payoutId. These id's signify the type of token you want to use in the challenge and how much of it. Checkout they payouts in the dashboard and choose one that fits your project or propose a new one.

What will be returned from the create challenge is the challengeId and blockchainAddress. The challengeId is the identifier that you will use to manipulate the challenge in our apis, and the blockchainAddress is the location of your current challenge on chain which will be used in the Tx client portion of this api.

```
...
const {challengeId, blockchainAddress} = await ludexApi.create(<payoutId: number>, <limit: number = 2>);
```

### Join challenge (CLIENT SIDE) 
On the client side fo

```
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';
import {Challenge} from 'ludex-sdk';

export const JoinChallenge: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        const isMainnet = true;
        const challengeBlockchainAddress = "";
        const tx = Challenge.ChallengeTXClient(isMainnet, new anchor.web3.Connection("https://api.mainnet-beta.solana.com"), challengeBlockchainAddress);

        await tx.join(publicKey.toString());

        const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight }
        } = await connection.getLatestBlockhashAndContext();

        const signature = await sendTransaction(tx.getTx(), connection, { minContextSlot });

        await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
    }, [publicKey, sendTransaction, connection]);

    return (
        <button onClick={onClick} disabled={!publicKey}>
            Join Challenge
        </button>
    );
};
```

to leave the challenge the only difference is

```
...
await tx.leave(publicKey.toString());
...
```

### Lock challenge (SERVER SIDE)
When the players we want are now in our lobby its time to lock the challenge so that they don't leave in the middle of the game. This is optional as when you resolve a challenge it will automatically add a lock if needed.

```
await ludexApi.lock(<challengeId>);
```

### Resolve challenge (SERVER SIDE)
If we want to resolve with a singular winner we run resolve
```
await ludexApi.resolve(<challengeId>, <winner pubkey>);
```

If we want to resolve with specific payments
```
await ludexApi.resolveWithPayment(<challengeId>, [...{to: <pubkey>, amount: <number>}]) 
```

### Cancel challenge (SERVER SIDE)
If we want to cancel the challenge and give everyone their money back (you as a game dev will not receive a rake).
```
await ludexApi.cancel(<challengeId>)
```

## NFT Challenge
COMING SOON

## INFINITE ROYAL
COMING SOON