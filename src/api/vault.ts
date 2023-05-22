import { _ludexChallengeApi, ApiConfig } from "./utils";

export enum RedeemType {
  native = "native", // just native redeem
  nativeForTokens = "nativeForTokens", // pay tokens to get native
  tokensForNative = "tokensForNative", // pay native to get tokens
  tokensForTokens = "tokensForTokens", // pay tokens to get tokens
}

export class VaultAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string, baseUrl?: string) {
    this.ludexChallengeApi = _ludexChallengeApi(apiKey, "vault", baseUrl);
  }

  async getConstructedTx(
    type: RedeemType,
    user: string,
    amountRedeemed: string,
    receiveMint?: string,
    amountGiven?: string,
    feeRecipient?: string,
    payMint?: string,
    gasless: boolean = false
  ) {
    const params = new URLSearchParams();
    switch (type) {
      case RedeemType.native: {
        break;
      }
      case RedeemType.nativeForTokens: {
        if (payMint === undefined) {
          throw new Error("payMint is undefined");
        }

        if (!amountGiven) {
          throw new Error("amountGiven is undefined");
        }

        params.append("payMint", payMint);
        params.append("amountGiven", amountGiven);

        break;
      }
      case RedeemType.tokensForNative: {
        if (receiveMint === undefined) {
          throw new Error("receiveMint is undefined");
        }

        if (!amountGiven) {
          throw new Error("amountGiven is undefined");
        }

        params.append("receiveMint", receiveMint);
        params.append("amountGiven", amountGiven);

        break;
      }
      case RedeemType.tokensForTokens: {
        if (payMint === undefined) {
          throw new Error("payMint is undefined");
        }
        if (receiveMint === undefined) {
          throw new Error("receiveMint is undefined");
        }

        if (!amountGiven) {
          throw new Error("amountGiven is undefined");
        }

        params.append("payMint", payMint);
        params.append("receiveMint", receiveMint);
        params.append("amountGiven", amountGiven);
        break;
      }
      default:
        throw new Error("Invalid type");
    }
    params.append("user", user);
    params.append("amountRedeemed", amountRedeemed);
    params.append("gasless", gasless === true ? "true" : "false");
    if (feeRecipient) {
      params.append("feeRecipient", feeRecipient);
    }
    return this.ludexChallengeApi<{ tx: string; transactionId: number }>({
      path: `/get-tx?${params.toString()}`,
    });
  }

  async getTransaction(id: number) {
    return this.ludexChallengeApi<{ id: number; signature: string | null }>({
      path: `transaction/${id}`,
    });
  }
}
