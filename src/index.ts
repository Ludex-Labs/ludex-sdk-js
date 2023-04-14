import { ChallengeAPIClient as ChallengeAPIClientClass } from "./api/challenge";
import { NftChallengeAPIClient as NFTChallengeAPIClientClass } from "./api/nft_challenge";
import {
  Challenge as ChallengeType,
  IDL as ChallengeIDL,
} from "./web3/solana/challenge";
import { ChallengeTXClient as ChallengeTXClientClass } from "./web3/solana/challenge/client";
import {
  IDL as NFTChallengeIDL,
  NftChallenge as NFTChallengeType,
} from "./web3/solana/nft-challenge";
import { NftChallengeTXClient as NftChallengeTXClientClass } from "./web3/solana/nft-challenge/client";

export { NativeChallengeTXClient } from "./web3/solana/challenge/nativeChallengeClient";
export { Ludex } from "./api/ludex";

export namespace Challenge {
  export type Challenge = ChallengeType;
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
