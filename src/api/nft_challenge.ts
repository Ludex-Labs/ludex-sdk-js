import { _ludexChallengeApi, ApiConfig } from './utils';

export class NftChallengeAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string, baseUrl?: string) {
    this.ludexChallengeApi = _ludexChallengeApi(
      apiKey,
      "nftChallenge",
      baseUrl
    );
  }

  async _apiCreateChallenge(limit: number = 2) {
    return this.ludexChallengeApi<{ id: number }>({
      method: "POST",
      body: JSON.stringify({ limit }),
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

  async create(limit: number = 2) {
    const challengeId = (await this._apiCreateChallenge(limit)).id;
    const challenge = await this._apiGetChallenge(challengeId);
    return { challengeId, blockchainAddress: challenge.blockchainAddress! };
  }

  async cancel(id: number, skipConfirmation: boolean = false) {
    await this._apiCancelChallenge(id);
  }

  async resolveWithPayment(
    id: number,
    payment: { to: string; offering: string }[],
    skipConfirmation?: boolean
  ) {
    await this._apiResolveChallengeWithPayment(id, payment);
  }
}
