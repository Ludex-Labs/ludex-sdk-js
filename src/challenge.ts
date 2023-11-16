import { z } from "zod";
import { ApiClient } from "./apiClient";
import { queryString } from "./queryString";
import { AxiosOptions, Chain, PayoutType, Environment, ChallengeState } from "./types";
import { AxiosResponse } from "axios";

interface ChallengeResponse {
  /** challenge id */
  challengeId: number;
  /** payout */
  payout: {
    /** payout id */
    id: number;
    /** entry fee per player for the challenge */
    entryFee: string;
    /** how much of entry fee is taken for game developer */
    mediatorRake: string;
    /** how much of entry fee is taken for ludex */
    providerRake: string;
    /** chain */
    chain: string;
  };
  /** current state of challenge */
  state: string;
  /** blockchain address of challenge */
  blockchainAddress?: string;
  /** player array of which addresses are currently in the challenge */
  players: string[] | NftPlayer[];
}

interface NftPlayer {
  /** player address */
  player: string;
  /** all offerings player has put in nft challenge */
  offerings: string[];
}

const ChallengeListRequest = z.object({
  payoutId: z.number().optional(),
  environment: Environment.optional(),
  state: ChallengeState.optional(),
  type: PayoutType.optional(),
  chain: Chain.optional(),
  page: z.string().optional(),
  pageLimit: z.number().optional(),
})
.optional();

/**
 * Challenge list request
 * @param {number} payoutId - The ID of the payout.
 * @param {Environment} environment - The environment for the challenge.
 * @param {ChallengeState} state - The state of the challenge.
 * @param {PayoutType} type - The type of payout.
 * @param {Chain} chain - The blockchain chain.
 * @param {string} page - The page for pagination.
 * @param {number} pageLimit - The limit for the number of items per page.
 */
type ChallengeListRequest = z.input<typeof ChallengeListRequest>

interface ChallengeListResponse {
  /** list of challenges */
  challenges: ChallengeResponse[];
  /** cursor for pagination by timestamp of claimed at */
  cursor?: string;
  /** remaining records for pagination */
  remainingRecords?: number;
}

const CreateChallengeRequest = z.object({
  payoutId: z.number(),
  limit: z.number().optional(),
  isVerified: z.boolean().optional(),
})

type CreateChallengeRequest = z.input<typeof CreateChallengeRequest>

interface CreateChallengeResponse {
  /** challenge id */
  challengeId: number;
  /** timestamp when challenge has been queued to be created */
  creatingAt: string;
  /** payout id */
  payoutId: number;
  /** limit of players */
  limit: number;
  /** chain challenge resides */
  chain: string;
  /** type of challenge (NATIVE, FT, NFT) */
  type: string;
}

const Offering = z.object({
mint: z.string(),
amount: z.number()
})

/**
 * Offering
 * @property {string} mint - The mint of the token.
 * @property {number} amount - The amount of the token to join with.
 */
type Offering = z.input<typeof Offering>

const JoinChallengeRequest = z.object({
  challengeId: z.number(),
  playerPubkey: z.string(),
  gasless: z.boolean().optional(),
  offerings: z.array(Offering).optional()
})

/**
 * JoinChallengeRequest
 * @property {number} challengeId - The ID of the challenge.
 * @property {string} playerPubkey - The public key of the player you want to join to the challenge.
 * @property {boolean} [gasless] - Indicates whether the join should be gasless (optional).
 * @property {Offering[]} [offerings] - An array of offerings if the challenge is an NFT (optional).
 */
type JoinChallengeRequest = z.input<typeof JoinChallengeRequest>

interface JoinChallengeResponse {
  /** base64 encoded transaction ready to be signed and sent */
  transaction: string;
}

const LeaveChallengeRequest = z.object({
  challengeId: z.number(),
  playerPubkey: z.string(),
  gasless: z.boolean().optional()
})

/**
 * LeaveChallengeRequest
 * @property {number} challengeId - The challenge id.
 * @property {string} playerPubkey - The public key of the player who wants to leave the challenge.
 * @property {boolean} gasless - Indicates whether the leave operation should be gasless (optional).
 */
type LeaveChallengeRequest = z.input<typeof LeaveChallengeRequest>

interface LeaveChallengeResponse {
  /** base64 encoded transaction ready to be signed and sent */
  transaction: string;
}

interface LockChallengeResponse {
  /** the challenge id that has been queued to be locked */
  challengeId: number;
  /** timestamp when event has been queued */
  lockingAt: string;
}

interface CancelChallengeResponse {
  /** the challenge id that has been queued to be locked */
  challengeId: number;
  /** timestamp when event has been queued */
  cancelingAt: string;
}

const FungibleTokenPayout = z.object({
  amount: z.string(),
  to: z.string()
})

/**
 * FungibleTokenPayout
 * @property {string} amount - The amount of the pot.
 * @property {string} to - The address of the player within the challenge.
 */
type FungibleTokenPayout = z.input<typeof FungibleTokenPayout>

const NonFungibleTokenPayout = z.object({
  offering: z.string(),
  to: z.string()
})

/**
 * NonFungibleTokenPayout
 * @property {string} offering - The address of the offering.
 * @property {string} to - The address of the player within the challenge.
 */
type NonFungibleTokenPayout = z.input<typeof NonFungibleTokenPayout>

const ResolveChallengeRequest = z.object({
  challengeId: z.number(),
  payout: z.union([z.array(FungibleTokenPayout), z.array(NonFungibleTokenPayout)])
})

/**
 * ResolveChallengeRequest
 * @property {number} challengeId - The challenge id.
 * @property {(FungibleTokenPayout[] | NonFungibleTokenPayout[])} payout - The payout of the challenge,
 * which can be an array of fungible or non-fungible token payouts.
 */
type ResolveChallengeRequest = z.input<typeof ResolveChallengeRequest>

interface ResolveChallengeResponse {
  /** id of challenge */
  challengeId: number;
  /** payout of the challenge */
  payout: FungibleTokenPayout[] | NonFungibleTokenPayout[];
  /** timestamp of when event was queued */
  resolvingAt: string;
}

export class Challenge {
  private readonly apiClient: ApiClient;
  private readonly BASE_PATH = "/v2/challenge";

  /**
   * Create challenge api client
   * @param clientKey client key
   * @param options axios options
   * @returns challenge api client
   */
  constructor(_clientKey: string, options?: AxiosOptions) {
    const clientKey = z.string().parse(_clientKey);
    this.apiClient = new ApiClient(clientKey, this.BASE_PATH, options);
  }

  /**
   * Get challenge by id
   * @param challengeId challenge id
   * @returns challenge
   */
  public async getChallenge(
    _challengeId: number
  ): Promise<AxiosResponse<ChallengeResponse>> {
    const challengeId = z.number().parse(_challengeId);
    return this.apiClient.issueGetRequest<ChallengeResponse>(`/${challengeId}`);
  }

  /**
   * Get challenges
   * @param filters challenge list request
   * @returns challenges
   */
  public async getChallenges(
    _filters: ChallengeListRequest
  ): Promise<AxiosResponse<ChallengeResponse[]>> {
    const filters = ChallengeListRequest.parse(_filters)
    return this.apiClient.issueGetRequest<ChallengeResponse[]>(
      `/?${queryString(filters)}`
    );
  }

  /**
   * Create challenge
   * @param challenge challenge
   * @returns challenge
   */
  public async createChallenge(
    _challenge: CreateChallengeRequest
  ): Promise<AxiosResponse<CreateChallengeResponse>> {
    const challenge = CreateChallengeRequest.parse(_challenge)
    return this.apiClient.issuePostRequest<CreateChallengeResponse>(
      "/",
      challenge
    );
  }

  /**
   * Generate join challenge transaction
   * @param joinChallenge join challenge request
   * @returns join challenge transaction
   */
  public async generateJoin(
    _joinChallenge: JoinChallengeRequest
  ): Promise<AxiosResponse<JoinChallengeResponse>> {
    const joinChallenge = JoinChallengeRequest.parse(_joinChallenge)
    const { challengeId, ...joinChallengeBody } = joinChallenge;
    return this.apiClient.issuePostRequest<JoinChallengeResponse>(
      `/${challengeId}/join`,
      joinChallengeBody
    );
  }

  /**
   * Generate leave challenge transaction
   * @param leaveChallenge leave challenge request
   * @returns leave challenge transaction
   */
  public async generateLeave(
    _leaveChallenge: LeaveChallengeRequest
  ): Promise<AxiosResponse<LeaveChallengeResponse>> {
    const leaveChallenge = LeaveChallengeRequest.parse(_leaveChallenge);
    const { challengeId, ...leaveChallengeBody } = leaveChallenge;
    return this.apiClient.issuePostRequest<LeaveChallengeResponse>(
      `/${challengeId}/leave`,
      leaveChallengeBody
    );
  }

  /**
   * Lock challenge
   * @param challengeId challenge id
   * @returns lock challenge
   */
  public async lockChallenge(
    _challengeId: string
  ): Promise<AxiosResponse<LockChallengeResponse>> {
    const challengeId = z.string().parse(_challengeId);
    return this.apiClient.issuePatchRequest<LockChallengeResponse>(
      `/${challengeId}/lock`,
      {}
    );
  }

  /**
   * Cancel challenge
   * @param challengeId challenge id
   * @returns cancel challenge
   */
  public async cancelChallenge(
    _challengeId: string
  ): Promise<AxiosResponse<CancelChallengeResponse>> {
    const challengeId = z.string().parse(_challengeId);
    return this.apiClient.issuePatchRequest<CancelChallengeResponse>(
      `/${challengeId}/cancel`,
      {}
    );
  }

  /**
   * Resolve challenge
   * @param resolveChallenge resolve challenge request
   * @returns resolve challenge
   */
  public async resolveChallenge(
    _resolveChallenge: ResolveChallengeRequest
  ): Promise<AxiosResponse<ResolveChallengeResponse>> {
    const resolveChallenge = ResolveChallengeRequest.parse(_resolveChallenge)
    const { challengeId, ...resolveChallengeBody } = resolveChallenge;
    return this.apiClient.issuePatchRequest<ResolveChallengeResponse>(
      `/${challengeId}/resolve`,
      resolveChallengeBody
    );
  }
}
