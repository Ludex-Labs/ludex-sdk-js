import { ChallengeAPIClient as ChallengeAPIClientClass } from './api/challenge';
import { NativeChallengeAPIClient as NativeChallengeAPIClientClass } from './api/native_challenge';
import { NftChallengeAPIClient as NFTChallengeAPIClientClass } from './api/nft_challenge';
import { Challenge as NearChallenge } from './web3/near';
import { Challenge as EvmChallenge } from './web3/evm';
import { Challenge as SolanaChallengeType, IDL as ChallengeIDL } from './web3/solana/challenge';
import { ChallengeTXClient as ChallengeTXClientClass } from './web3/solana/challenge/client';
import {
  NativeChallengeTXClient as NativeChallengeTXClientClass
} from './web3/solana/challenge/nativeChallengeClient';
import {
  IDL as NFTChallengeIDL, NftChallenge as NFTChallengeType
} from './web3/solana/nft-challenge';
import {
  NftChallengeTXClient as NftChallengeTXClientClass
} from './web3/solana/nft-challenge/client';
import { getProgram as getSolanaProgram } from './web3/solana/utils';

export { Ludex } from "./api/ludex";

export { VaultAPIClient } from "./api/vault";

export namespace Challenge {
  export type Challenge = SolanaChallengeType;
  export const IDL = ChallengeIDL;

  export type ChallengeAPIClient = ChallengeAPIClientClass;
  export const ChallengeAPIClient = ChallengeAPIClientClass;

  export type ChallengeTXClient = ChallengeTXClientClass;
  export const ChallengeTXClient = ChallengeTXClientClass;
}

export namespace NFTChallenge {
  export type NFTChallenge = NFTChallengeType;
  export const IDL = NFTChallengeIDL;

  export type NFTChallengeAPIClient = NFTChallengeAPIClientClass;
  export const NFTChallengeAPIClient = NFTChallengeAPIClientClass;

  export type NftChallengeTXClient = NftChallengeTXClientClass;
  export const NftChallengeTXClient = NftChallengeTXClientClass;
}

export namespace SolanaChallenges {
  // Token challenges
  export type Challenge = SolanaChallengeType;

  export type ChallengeAPIClient = ChallengeAPIClientClass;
  export const ChallengeAPIClient = ChallengeAPIClientClass;

  export type ChallengeTXClient = ChallengeTXClientClass;
  export const ChallengeTXClient = ChallengeTXClientClass;

  // NFT Challenges
  export type NFTChallenge = NFTChallengeType;

  export type NFTChallengeAPIClient = NFTChallengeAPIClientClass;
  export const NFTChallengeAPIClient = NFTChallengeAPIClientClass;

  export type NftChallengeTXClient = NftChallengeTXClientClass;
  export const NftChallengeTXClient = NftChallengeTXClientClass;

  // Native Challenges
  export type NativeChallengeTXClient = NativeChallengeTXClientClass;
  export const NativeChallengeTXClient = NativeChallengeTXClientClass;

  export type NativeChallengeAPIClient = NativeChallengeAPIClientClass;
  export const NativeChallengeAPIClient = NativeChallengeAPIClientClass;
}

export namespace NearChallenges {
  // Token challenges
  export type Challenge = NearChallenge;
  export const Challenge = NearChallenge;

  export type ChallengeAPIClient = ChallengeAPIClientClass;
  export const ChallengeAPIClient = ChallengeAPIClientClass;

  export type ChallengeTXClient = ChallengeTXClientClass;
  export const ChallengeTXClient = ChallengeTXClientClass;
}

export namespace PolygonChallenges {
  // Token challenges
  export type Challenge = EvmChallenge;
  export const Challenge = EvmChallenge;

  export type ChallengeAPIClient = ChallengeAPIClientClass;
  export const ChallengeAPIClient = ChallengeAPIClientClass;

  export type ChallengeTXClient = ChallengeTXClientClass;
  export const ChallengeTXClient = ChallengeTXClientClass;
}
