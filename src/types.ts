import { AxiosProxyConfig, AxiosResponse } from "axios";
import { z } from "zod";

export interface AxiosOptions {
  /** Base url instead of api.ludex */
  baseUrl?: string;
  /** HTTP request timeout */
  timeoutInMs?: number;
  /** Proxy configurations */
  proxy?: AxiosProxyConfig | false;
  /** Whether to remove platform from User-Agent header */
  anonymousPlatform?: boolean;
  /** Additional product identifier to be prepended to the User-Agent header */
  userAgent?: string;

  /** Providing custom axios options including a response interceptor (https://axios-http.com/docs/interceptors) */
  customAxiosOptions?: {
    interceptors?: {
      response?: {
        onFulfilled: (
          value: AxiosResponse<any, any>
        ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>;
        onRejected: (error: any) => any;
      };
    };
  };
}

export enum Chain {
  SOLANA = "SOLANA",
  AVALANCHE = "AVALANCHE",
}

export enum PayoutType {
  NATIVE = "NATIVE",
  FT = "FT",
  NFT = "NFT",
}

export enum PayoutState {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  ARCHIVED = "ARCHIVED",
}

export enum Environment {
  MAINNET = "MAINNET",
  DEVNET = "DEVNET",
}

export enum ChallengeState {
  CREATING = "CREATING",
  CREATED = "CREATED",
  LOCKING = "LOCKING",
  LOCKED = "LOCKED",
  CANCELING = "CANCELING",
  CANCELED = "CANCELED",
  RESOLVING = "RESOLVING",
  RESOLVED = "RESOLVED",
  VERIFYING_CANCEL = "VERIFYING_CANCEL",
  VERIFYING_RESOLVE = "VERIFYING_RESOLVE",
  VERIFIED_CANCEL = "VERIFIED_CANCEL",
  VERIFIED_RESOLVE = "VERIFIED_RESOLVE",
  REDEEMING_CANCEL = "REDEEMING_CANCEL",
  REDEEMING_RESOLVE = "REDEEMING_RESOLVE",
  REDEEMED_CANCEL = "REDEEMED_CANCEL",
  REDEEMED_RESOLVE = "REDEEMED_RESOLVE",
}

export enum RedeemType {
  native = "native",
  nativeForTokens = "nativeForTokens",
  tokensForNative = "tokensForNative",
  tokensForTokens = "tokensForTokens",
}
