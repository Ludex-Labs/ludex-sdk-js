import { _ludexChallengeApi, ApiConfig } from './utils';

export type CreateChallengeResult = {
  id: number;
  payoutId: number;
  state: string;
  type: string;
  limit: number;
  creatingAt: string;
  createdAt: string | null;
  claimedAt: string | null;
  environment: string;
  chain: string;
};

export class NativeChallengeAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string, baseUrl?: string) {
    this.ludexChallengeApi = _ludexChallengeApi(
      apiKey,
      "nativeChallenge",
      baseUrl
    );
  }

  async create(
    payoutId: number = 1,
    limit: number = 2,
    chain: string = "SOLANA"
  ) {
    return this.ludexChallengeApi<CreateChallengeResult>({
      method: "POST",
      body: JSON.stringify({ payoutId, limit, chain }),
    });
  }

  async lock(id: number, chain: string = "SOLANA") {
    return await this.ludexChallengeApi({
      method: "POST",
      path: `${id}/lock`,
      body: JSON.stringify({ chain }),
    });
  }

  async resolve(id: number, winner: string, chain: string = "SOLANA") {
    return await this.ludexChallengeApi({
      method: "POST",
      path: `${id}/resolve`,
      body: JSON.stringify({ chain, payments: [{ winner }] }),
    });
  }

  async cancel(id: number, chain: string = "SOLANA") {
    return await this.ludexChallengeApi({
      method: "POST",
      path: `${id}/cancel`,
      body: JSON.stringify({ chain }),
    });
  }
}
