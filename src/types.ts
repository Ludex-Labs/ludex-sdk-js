import { AxiosProxyConfig } from "axios";

export interface AxiosOptions {
  /** HTTP request timeout */
  timeoutInMs?: number;
  /** Proxy configurations */
  proxy?: AxiosProxyConfig | false;
  /** Whether to remove platform from User-Agent header */
  anonymousPlatform?: boolean;
  /** Additional product identifier to be prepended to the User-Agent header */
  userAgent?: string;
}
