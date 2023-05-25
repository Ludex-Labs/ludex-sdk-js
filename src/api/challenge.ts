import { ChallengeExtensions, FTChallenge, Player, Signature } from "./models";
import { _ludexChallengeApi, ApiConfig } from "./utils";

export type ChallengeFilter = {
  environment?: string;
  chain?: string;
  type?: string;
  payoutId?: number;
  mint?: string;
  nftSubType?: string;
  isShelf?: boolean;
  isVerifiedJoin?: boolean;
  search?: string;
  state?: string;
};

export type ChallengePagination = {
  page?: number;
  limit?: number;
  orderBy?:
    | "createdAt"
    | "lockedAt"
    | "canceledAt"
    | "resolvedAt"
    | "claimedAt";
  sort?: "asc" | "desc";
};

export class ChallengeAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string, baseUrl?: string) {
    this.ludexChallengeApi = _ludexChallengeApi(apiKey, "challenge", baseUrl);
  }

  async _apiCreateChallenge(
    payoutId: number,
    limit: number = 2,
    chain: string = "SOLANA",
    isVerifiedJoin: boolean = false
  ) {
    return this.ludexChallengeApi<{ id: number }>({
      method: "POST",
      body: JSON.stringify({
        payoutId,
        limit,
        chain,
        verifiedJoin: isVerifiedJoin,
      }),
    });
  }

  async _apiGetChallenge(id: number) {
    return this.ludexChallengeApi<FTChallenge>({
      method: "GET",
      path: id.toString(),
    });
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

  async _apiGetApiJoin(
    id: number,
    user: string,
    isVerifiedJoin: boolean,
    isGaslessJoin: boolean
  ) {
    return this.ludexChallengeApi<string>({
      method: "POST",
      path: `${id}/join?user=${user}`,
      body: JSON.stringify({
        verified: isVerifiedJoin,
        gasless: isGaslessJoin,
      }),
    });
  }

  async _apiGetApiLeave(id: number, user: string, isGaslessJoin: boolean) {
    return this.ludexChallengeApi<string>({
      method: "POST",
      path: `${id}/leave?userPubkey=${user}`,
      body: JSON.stringify({
        gasless: isGaslessJoin,
      }),
    });
  }

  async count(filter?: ChallengeFilter | string) {
    let path = "count";
    const params = new URLSearchParams();

    if (filter) {
      if (typeof filter === "string") {
        params.append("search", filter);
      } else {
        if (filter.environment) {
          params.append("environment", filter.environment);
        }
        if (filter.chain) {
          params.append("chain", filter.chain);
        }
        if (filter.type) {
          params.append("type", filter.type);
        }
        if (filter.nftSubType) {
          params.append("nftSubType", filter.nftSubType);
        }
        if (filter.payoutId) {
          params.append("payoutId", filter.payoutId.toString());
        }
        if (filter.mint) {
          params.append("mint", filter.mint);
        }
        if (filter.state) {
          params.append("state", filter.state);
        }
        if (filter.search) {
          params.append("search", filter.search);
        }
        if (filter.isShelf) {
          params.append("isShelf", "true");
        }
        if (filter.isVerifiedJoin) {
          params.append("isVerifiedJoin", "true");
        }
      }
    }

    if (params.toString() !== "") {
      path += `?${params.toString()}`;
    }

    return this.ludexChallengeApi<number>({ path });
  }

  async list(
    filter?: ChallengeFilter | string,
    paginationQuery?: ChallengePagination
  ) {
    let path = "";
    const params = new URLSearchParams();

    if (filter) {
      if (typeof filter === "string") {
        params.append("search", filter);
      } else {
        if (filter.environment) {
          params.append("environment", filter.environment);
        }
        if (filter.chain) {
          params.append("chain", filter.chain);
        }
        if (filter.type) {
          params.append("type", filter.type);
        }
        if (filter.nftSubType) {
          params.append("nftSubType", filter.nftSubType);
        }
        if (filter.payoutId) {
          params.append("payoutId", filter.payoutId.toString());
        }
        if (filter.mint) {
          params.append("mint", filter.mint);
        }
        if (filter.state) {
          params.append("state", filter.state);
        }
        if (filter.search) {
          params.append("search", filter.search);
        }
        if (filter.isShelf) {
          params.append("isShelf", "true");
        }
        if (filter.isVerifiedJoin) {
          params.append("isVerifiedJoin", "true");
        }
      }
    }

    if (paginationQuery?.page) {
      params.append("page", paginationQuery?.page.toString());
    }

    if (paginationQuery?.limit) {
      params.append("limit", paginationQuery?.limit.toString());
    }

    if (paginationQuery?.orderBy) {
      params.append("orderBy", paginationQuery?.orderBy);
    }

    if (paginationQuery?.sort) {
      params.append("sort", paginationQuery?.sort);
    }

    if (params.toString() !== "") {
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
        updatePlayers: () => {
          return this.ludexChallengeApi({
            path: `${challenge.id}?action=add_players`,
            method: "HEAD",
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
      updatePlayers: () => {
        return this.ludexChallengeApi({
          path: `${id}?action=add_players`,
          method: "HEAD",
        });
      },
      getSignatures: () => {
        return this.ludexChallengeApi<Signature[]>({
          path: `${id}/signatures`,
        });
      },
    });

    return challenge as FTChallenge & ChallengeExtensions;
  }

  /** @todo would be great if this method could accept 1 object instead of many params */
  async create(
    payoutId: number,
    limit: number = 2,
    chain: string = "SOLANA",
    isVerifiedJoin: boolean = false
  ) {
    const challengeId = (
      await this._apiCreateChallenge(payoutId, limit, chain, isVerifiedJoin)
    ).id;
    const challenge = await this._apiGetChallenge(challengeId);
    return {
      challengeId,
      id: challenge.id,
      blockchainAddress: challenge.blockchainAddress!,
      state: challenge.state,
      type: challenge.type,
      payoutId: challenge.payoutId,
    };
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

  async getApiJoin(
    id: number,
    user: string,
    isVerifiedJoin: boolean = false,
    isGaslessJoin: boolean = false
  ) {
    return this._apiGetApiJoin(id, user, isVerifiedJoin, isGaslessJoin);
  }

  async getApiLeave(id: number, user: string, isGaslessJoin: boolean = false) {
    return this._apiGetApiLeave(id, user, isGaslessJoin);
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
