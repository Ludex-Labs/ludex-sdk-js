import { WalletAdapterProps } from '@solana/wallet-adapter-base';

export interface Options {
  cluster?: Cluster;
  wallet?: Wallet;
}

export type SendTransaction = WalletAdapterProps['sendTransaction'];
