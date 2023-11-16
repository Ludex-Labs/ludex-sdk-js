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

export const Chain = z.enum(["SOLANA", "AVALANCHE"]);
export const PayoutType = z.enum(["NATIVE", "FT", "NFT"]);
export const PayoutState = z.enum([
  "APPROVED",
  "PENDING",
  "REJECTED",
  "ARCHIVED",
]);
export const Environment = z.enum(["MAINNET", "DEVNET"]);
export const ChallengeState = z.enum([
  "CREATING",
  "CREATED",
  "LOCKING",
  "LOCKED",
  "CANCELING",
  "CANCELED",
  "RESOLVING",
  "RESOLVED",
  "VERIFYING_CANCEL",
  "VERIFYING_RESOLVE",
  "VERIFIED_CANCEL",
  "VERIFIED_RESOLVE",
  "REDEEMING_CANCEL",
  "REDEEMING_RESOLVE",
  "REDEEMED_CANCEL",
  "REDEEMED_RESOLVE",
]);
