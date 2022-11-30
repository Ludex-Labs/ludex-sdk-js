import { _ludexChallengeApi, ApiConfig } from './utils';

/* TODO: COMING SOON */
export class InfiniteRoyalAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string) {
    this.ludexChallengeApi = _ludexChallengeApi(apiKey, "infiniteRoyal");
  }
}
