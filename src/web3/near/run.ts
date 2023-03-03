import { connect, keyStores } from "near-api-js";

import { Challenge } from "./";

const run = async () => {
  const myKeyStore = new keyStores.InMemoryKeyStore();
  const near = await connect({
    networkId: "testnet",
    keyStore: myKeyStore,
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
  });

  const c = new Challenge(25, near.connection, { cluster: "DEVNET" });

  console.log(await c.getChallenge());
};

run();
