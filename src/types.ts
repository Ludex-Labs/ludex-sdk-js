import { AxiosProxyConfig, AxiosResponse } from "axios";

export interface AxiosOptions {
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
