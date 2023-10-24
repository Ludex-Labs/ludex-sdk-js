import { ApiClient } from "./apiClient";
import { AxiosOptions } from "./types";

interface ChallengeResponse {
  /** challenge id */
  id: number;
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

interface CreateChallengeRequest {
  /** payout id */
  payoutId: number;
  /** limit of players will default to 2 */
  limit?: number;
  /** if challenge should be closed to public */
  isVerified?: boolean;
}

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

interface JoinChallengeRequest {
  /** challenge id */
  challengeId: number;
  /** public key of player you want to join to challenge */
  playerPubkey: string;
  /** should join be gassless */
  gasless?: boolean;
  /** if challenge is nft to add offerings */
  offerings?: Offering[];
}

interface Offering {
  /** mint of token */
  mint: string;
  /** amount of token to join with */
  amount: number;
}

interface JoinChallengeResponse {
  /** base64 encoded transaction ready to be signed and sent */
  transaction: string;
}

interface LeaveChallengeRequest {
  /** challenge id */
  challengeId: number;
  /** public key of player you want to leave challenge */
  playerPubkey: string;
  /** should leave be gassless */
  gasless?: boolean;
}

interface LeaveChallengeResponse {
  /** base64 encoded transaction ready to be signed and sent */
  transaction: string;
}

interface LockChallengeResponse {
  /** the challenge id that has been queued to be locked */
  id: number;
  /** timestamp when event has been queued */
  lockingAt: string;
}

interface CancelChallengeResponse {
  /** the challenge id that has been queued to be locked */
  id: number;
  /** timestamp when event has been queued */
  cancelingAt: string;
}

interface ResolveChallengeRequest {
  /** challenge id */
  challengeId: number;
  /** payout of the challenge */
  payout: FungibleTokenPayout[] | NonFungibleTokenPayout[];
}

interface FungibleTokenPayout {
  /** amount of the pot */
  amount: number;
  /** address of player within the challenge */
  to: string;
}

interface NonFungibleTokenPayout {
  /** address of offering */
  offering: string;
  /** address of player within the challenge */
  to: string;
}

interface ResolveChallengeResponse {
  /** id of challenge */
  id: number;
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
  constructor(clientKey: string, options?: AxiosOptions) {
    this.apiClient = new ApiClient(clientKey, this.BASE_PATH, options);
  }

  /**
   * Get challenge by id
   * @param challengeId challenge id
   * @returns challenge
   */
  public async getChallenge(challengeId: string): Promise<ChallengeResponse> {
    return this.apiClient.issueGetRequest<ChallengeResponse>(`/${challengeId}`);
  }

  /**
   * Get challenges
   * @returns challenges
   */
  public async getChallenges(): Promise<ChallengeResponse[]> {
    return this.apiClient.issueGetRequest<ChallengeResponse[]>("/");
  }

  /**
   * Create challenge
   * @param challenge challenge
   * @returns challenge
   */
  public async createChallenge(
    challenge: CreateChallengeRequest
  ): Promise<CreateChallengeResponse> {
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
    joinChallenge: JoinChallengeRequest
  ): Promise<JoinChallengeResponse> {
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
    leaveChallenge: LeaveChallengeRequest
  ): Promise<LeaveChallengeResponse> {
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
    challengeId: string
  ): Promise<LockChallengeResponse> {
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
    challengeId: string
  ): Promise<CancelChallengeResponse> {
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
    resolveChallenge: ResolveChallengeRequest
  ): Promise<ResolveChallengeResponse> {
    const { challengeId, ...resolveChallengeBody } = resolveChallenge;
    return this.apiClient.issuePatchRequest<ResolveChallengeResponse>(
      `/${challengeId}/resolve`,
      resolveChallengeBody
    );
  }
}