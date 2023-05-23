import { _ludexChallengeApi, ApiConfig } from "./utils";

export enum RedeemType {
  native = "native", // just native redeem
  nativeForTokens = "nativeForTokens", // pay tokens to get native
  tokensForNative = "tokensForNative", // pay native to get tokens
  tokensForTokens = "tokensForTokens", // pay tokens to get tokens
}

type BaseRedeemArguments = {
  user: string;
  amountRedeemed: string;
  feeRecipient?: string;
  gasless?: boolean;
};

type NativeArguments = {
  type: "native";
} & BaseRedeemArguments;

type NativeForTokenArguments = {
  type: "nativeForTokens";
  payMint: string;
  amountGiven: string;
} & BaseRedeemArguments;

type TokensForNativeArguments = {
  type: "tokensForNative";
  receiveMint: string;
  amountGiven: string;
} & BaseRedeemArguments;

type TokensForTokensArguments = {
  type: "tokensForTokens";
  payMint: string;
  receiveMint: string;
  amountGiven: string;
} & BaseRedeemArguments;

type RedeemArguments =
  | NativeArguments
  | NativeForTokenArguments
  | TokensForNativeArguments
  | TokensForTokensArguments;

export class VaultAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>;
  constructor(apiKey: string, baseUrl?: string) {
    this.ludexChallengeApi = _ludexChallengeApi(apiKey, "vault", baseUrl);
  }

  async getConstructedTx(args: RedeemArguments) {
    const params = new URLSearchParams();
    switch (args.type) {
      case RedeemType.native: {
        break;
      }
      case RedeemType.nativeForTokens: {
        if (args.payMint === undefined) {
          throw new Error("payMint is undefined");
        }

        if (!args.amountGiven) {
          throw new Error("amountGiven is undefined");
        }

        params.append("payMint", args.payMint);
        params.append("amountGiven", args.amountGiven);

        break;
      }
      case RedeemType.tokensForNative: {
        if (args.receiveMint === undefined) {
          throw new Error("receiveMint is undefined");
        }

        if (!args.amountGiven) {
          throw new Error("amountGiven is undefined");
        }

        params.append("receiveMint", args.receiveMint);
        params.append("amountGiven", args.amountGiven);

        break;
      }
      case RedeemType.tokensForTokens: {
        if (args.payMint === undefined) {
          throw new Error("payMint is undefined");
        }
        if (args.receiveMint === undefined) {
          throw new Error("receiveMint is undefined");
        }

        if (!args.amountGiven) {
          throw new Error("amountGiven is undefined");
        }

        params.append("payMint", args.payMint);
        params.append("receiveMint", args.receiveMint);
        params.append("amountGiven", args.amountGiven);
        break;
      }
      default:
        throw new Error("Invalid type");
    }
    params.append("user", args.user);
    params.append("amountRedeemed", args.amountRedeemed);
    params.append("gasless", args.gasless === true ? "true" : "false");
    if (args.feeRecipient) {
      params.append("feeRecipient", args.feeRecipient);
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
