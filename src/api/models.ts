export type FTChallenge = {
  id: number;
  blockchainAddress?: string;
  creatingAt?: string;
  createdAt?: string;
  endedAt?: string;
  lockingAt?: string;
  lockedAt?: string;
  cancelingAt?: string;
  canceledAt?: string;
  resolvingAt?: string;
  resolvedAt?: string;
  verifyingAt?: string;
  verifiedAt?: string;
  redeemingAt?: string;
  redeemedAt?: string;
  payout: Payout;
};

export interface ChallengeExtensions {
  getPlayers: () => Promise<Player[]>;
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
};

export type Player = {
  id: number;
  challengeId: number;
  blockchainAddress: string;
  walletAddress: string;
  joinedAt: string;
  joinedSignature: string;
};

export type Signature = {
  challengeId: number;
  challengeState: ChallengeState;
  signature: string;
  createdAt?: string;
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
