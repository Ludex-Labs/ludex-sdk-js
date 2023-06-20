export type FTChallenge = {
  id: number;
  blockchainAddress?: string;
  cancelingAt?: string;
  canceledAt?: string;
  claimedAt?: string;
  creatingAt?: string;
  createdAt?: string;
  endedAt?: string;
  lockingAt?: string;
  lockedAt?: string;
  payoutId: number;
  resolvingAt?: string;
  resolvedAt?: string;
  state?: string;
  type?: string;
  verifyingAt?: string;
  verifiedAt?: string;
  redeemingAt?: string;
  redeemedAt?: string;

  payout: Payout;
};

export interface ChallengeExtensions {
  getPlayers: () => Promise<Player[]>;
  updatePlayers: () => Promise<void>;
  getSignatures: () => Promise<Signature[]>;
}

export type Payout = {
  id: number;
  mint: string;
  entryFee: string;
  providerRake: string;
  mediatorRake: string;
  accepted: boolean;
  chain: Chain;
  name?: string;
  organizationId?: number;
  mintId?: number;
  Mint?: Mint;
};

export type Player = {
  id: number;
  challengeId: number;
  blockchainAddress: string;
  walletAddress: string;
  joinedAt: string;
  joinedSignature: string;
  amountWonDecimal: number;
};

export type Signature = {
  challengeId: number;
  challengeState: ChallengeState;
  signature: string;
  createdAt?: string;
};

export type Mint = {
  id: number;
  name: string;
  icon?: string;
  ticker?: string;
  blockchainAddress: string;
  decimalPosition: number;
  chain: Chain;
};

export type Chain = "SOLANA" | "POLYGON" | "ETH" | "SUI" | "NEAR";

export type ChallengeState =
  | "CREATING"
  | "CREATED"
  | "LOCKING"
  | "LOCKED"
  | "CANCELING"
  | "CANCELED"
  | "RESOLVING"
  | "RESOLVED"
  | "VERIFYING_CANCEL"
  | "VERIFYING_RESOLVE"
  | "VERIFIED_CANCEL"
  | "VERIFIED_RESOLVE"
  | "REDEEMING_CANCEL"
  | "REDEEMING_RESOLVE"
  | "REDEEMED_CANCEL"
  | "REDEEMED_RESOLVE";
