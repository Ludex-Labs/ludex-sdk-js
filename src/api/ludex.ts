import { PublicKey } from '@solana/web3.js';

import { ChallengeAPIClient } from './challenge';
import { NftChallengeAPIClient } from './nft_challenge';

export class Ludex {
  private ftChallengeClient: ChallengeAPIClient;
  private nftChallengeClient: NftChallengeAPIClient;

  private baseUrl: string;
  private defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  public challenge: MixedChallenge;

  constructor(apiKey: string, baseUrl: string = "https://api.ludex.gg") {
    this.ftChallengeClient = new ChallengeAPIClient(apiKey, baseUrl);
    this.nftChallengeClient = new NftChallengeAPIClient(apiKey, baseUrl);

    this.baseUrl = baseUrl;
    this.defaultHeaders["Authorization"] = `Bearer ${apiKey}`;

    this.challenge = new MixedChallenge(
      this.ftChallengeClient,
      this.nftChallengeClient,
      this.sendRequest.bind(this)
    );
  }

  public async sendRequest(url: string, method: string, body?: any) {
    const init: RequestInit = {
      method,
      headers: this.defaultHeaders,
    };

    if (body) {
      init.body = JSON.stringify(body);
    }

    if (url.startsWith("/")) {
      url = this.baseUrl + url;
    }

    const req = new Request(url, init);

    return await fetch(req);
  }
}

export type ChallengeType = "FT" | "NFT";

// TODO: add caching
class MixedChallenge {
  private ftChallengeClient: ChallengeAPIClient;
  private nftChallengeClient: NftChallengeAPIClient;
  private sendRequest: (
    url: string,
    method: string,
    body?: any
  ) => Promise<any>;

  constructor(
    challenge: ChallengeAPIClient,
    nftChallenge: NftChallengeAPIClient,
    sendRequest: (url: string, method: string, body?: any) => Promise<Response>
  ) {
    this.ftChallengeClient = challenge;
    this.nftChallengeClient = nftChallenge;
    this.sendRequest = sendRequest;
  }

  public async get(id: number, type: ChallengeType) {
    if (type === "FT") {
      return this.ftChallengeClient._apiGetChallenge(id);
    } else {
      return this.nftChallengeClient._apiGetChallenge(id);
    }
  }

  public async create(type: ChallengeType) {
    if (type === "FT") {
      return this.ftChallengeClient.create(1);
    } else {
      return this.nftChallengeClient.create(1);
    }
  }

  public async resolve(id: number, winner: string | PublicKey) {
    const type = "FT";

    if (typeof winner !== "string") {
      winner = winner.toBase58();
    }

    if (type === "FT") {
      return this.ftChallengeClient.resolve(id, winner);
    } else {
      // TODO: Get all the offerings
      return this.nftChallengeClient.resolveWithPayment(id, {} as any);
    }
  }

  public async getMultiple(_page: number, _limit: number) {
    const resp = await this.sendRequest("/api/v1/challenge", "GET");

    return resp.json();
  }
}
