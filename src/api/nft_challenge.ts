import { Player, Signature } from "./models";
import { _ludexChallengeApi, ApiConfig } from "./utils";

export class NftChallengeAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string, baseUrl?: string) {
    this.ludexChallengeApi = _ludexChallengeApi(
      apiKey,
      "nftChallenge",
      baseUrl
    );
  }

  async _apiCreateChallenge(
    payoutId: number = 1,
    limit: number = 2,
    chain: string = "SOLANA",
    nftSubType: string = "CHALLENGE"
  ) {
    return this.ludexChallengeApi<{ id: number }>({
      method: "POST",
      body: JSON.stringify({ payoutId, limit, chain, nftSubType }),
    });
  }

  async _apiGetChallenge(id: number) {
    return this.ludexChallengeApi<{
      id: number;
      blockchainAddress?: string;
      creatingAt?: string;
      createdAt?: string;
      endedAt?: string;
      cancelingAt?: string;
      canceledAt?: string;
      resolvingAt?: string;
      resolvedAt?: string;
      verifyingAt?: string;
      verifiedAt?: string;
      redeemingAt?: string;
      redeemedAt?: string;
    }>({ method: "GET", path: id.toString() });
  }

  async _apiCancelChallenge(id: number) {
    await this.ludexChallengeApi({
      method: "HEAD",
      path: `${id}?action=cancel`,
    });
  }

  async _apiResolveChallengeWithPayment(
    id: number,
    payment: { to: string; offering: string }[]
  ) {
    await this.ludexChallengeApi({
      method: "HEAD",
      path: `${id}?action=resolve&payment=${JSON.stringify(payment)}`,
    });
  }

  /**
   *  @deprecated
   */
  async get(id: number) {
    const challenge = await this._apiGetChallenge(id);

    // TODO: should stop using Object.assign for better type safety
    Object.assign(challenge, {
      getPlayers: () => {
        return this.ludexChallengeApi<Player[]>({ path: `${id}/players` });
      },
      updatePlayers: () => {
        return this.ludexChallengeApi({
          path: `${challenge.id}?action=add_players`,
          method: "HEAD",
        });
      },
      getSignatures: () => {
        return this.ludexChallengeApi<Signature[]>({
          path: `${id}/signatures`,
        });
      },
    });

    return challenge as typeof challenge & {
      getPlayers: () => Promise<Player[]>;
      getSignatures: () => Promise<Signature[]>;
    };
  }

  async create(
    payoutId: number = 1,
    limit: number = 2,
    chain: string = "SOLANA",
    nftSubType: string = "CHALLENGE"
  ) {
    const challengeId = (
      await this._apiCreateChallenge(payoutId, limit, chain, nftSubType)
    ).id;
    const challenge = await this._apiGetChallenge(challengeId);
    return { challengeId, blockchainAddress: challenge.blockchainAddress! };
  }

  async cancel(id: number, _: boolean = false) {
    await this._apiCancelChallenge(id);
  }

  async resolveWithPayment(
    id: number,
    payment: { to: string; offering: string }[],
    _?: boolean
  ) {
    await this._apiResolveChallengeWithPayment(id, payment);
  }
}
