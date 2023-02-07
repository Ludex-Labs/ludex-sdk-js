import { ChallengeExtensions, FTChallenge, Player, Signature } from './models';
import { _ludexChallengeApi, ApiConfig } from './utils';

export class ChallengeAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string, baseUrl?: string) {
    this.ludexChallengeApi = _ludexChallengeApi(apiKey, "challenge", baseUrl);
  }

  async _apiCreateChallenge(
    payoutId: number,
    limit: number = 2,
    chain: string = "SOLANA"
  ) {
    return this.ludexChallengeApi<{ id: number }>({
      method: "POST",
      body: JSON.stringify({ payoutId, limit, chain }),
    });
  }

  async _apiGetChallenge(id: number) {
    return this.ludexChallengeApi<{
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
    }>({ method: "GET", path: id.toString() });
  }

  async _apiLockChallenge(id: number) {
    await this.ludexChallengeApi({ method: "HEAD", path: `${id}?action=lock` });
  }

  async _apiCancelChallenge(id: number) {
    await this.ludexChallengeApi({
      method: "HEAD",
      path: `${id}?action=cancel`,
    });
  }

  async _apiResolveChallenge(id: number, winner: string) {
    const payment = encodeURIComponent(`[{"to": "${winner}"}]`);

    await this.ludexChallengeApi({
      method: "HEAD",
      path: `${id}?action=resolve&payments=${payment}`,
    });
  }

  async _apiResolveChallengeWithPayment(
    id: number,
    payment: { to: string; amount: number }[]
  ) {
    await this.ludexChallengeApi({
      method: "HEAD",
      path: `${id}?action=resolve&payment=${JSON.stringify(payment)}`,
    });
  }

  async list(page?: number, limit?: number) {
    let path = "";
    if (page || limit) {
      const params = new URLSearchParams();

      if (page) {
        params.append("page", page.toString());
      }

      if (limit) {
        params.append("limit", limit.toString());
      }

      path = `?${params.toString()}`;
    }

    const challenges = await this.ludexChallengeApi<FTChallenge[]>({
      path,
    });

    challenges.forEach((challenge) => {
      // TODO: should stop using Object.assign for better type safety
      Object.assign(challenge, {
        getPlayers: () => {
          return this.ludexChallengeApi<Player[]>({
            path: `${challenge.id}/players`,
          });
        },
        getSignatures: () => {
          return this.ludexChallengeApi<Signature[]>({
            path: `${challenge.id}/signatures`,
          });
        },
      });
    });

    return challenges as (FTChallenge & ChallengeExtensions)[];
  }

  async get(id: number) {
    const challenge = await this._apiGetChallenge(id);

    // TODO: should stop using Object.assign for better type safety
    Object.assign(challenge, {
      getPlayers: () => {
        return this.ludexChallengeApi<Player[]>({ path: `${id}/players` });
      },
      getSignatures: () => {
        return this.ludexChallengeApi<Signature[]>({
          path: `${id}/signatures`,
        });
      },
    });

    return challenge as typeof challenge & ChallengeExtensions;
  }

  async create(payoutId: number, limit: number = 2, chain: string = "SOLANA") {
    const challengeId = (await this._apiCreateChallenge(payoutId, limit, chain))
      .id;
    const challenge = await this._apiGetChallenge(challengeId);
    return { challengeId, blockchainAddress: challenge.blockchainAddress! };
  }

  async lock(id: number, _: boolean = false) {
    await this._apiLockChallenge(id);
  }

  async cancel(id: number, _: boolean = false) {
    await this._apiCancelChallenge(id);
  }

  async resolve(id: number, winner: string, _: boolean = false) {
    await this._apiResolveChallenge(id, winner);
  }

  /* TODO: Coming soon with applying your own specific payments */
  async resolveWithPayment(
    id: number,
    payment: { to: string; amount: number }[],
    _?: boolean
  ) {
    await this._apiResolveChallengeWithPayment(id, payment);
  }
}
