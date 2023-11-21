import { z } from 'zod';
import os from "os";
import platform from "platform";
import axios, { AxiosInstance, AxiosResponse, isAxiosError } from "axios";
import { version as SDK_VERSION } from "../package.json";
import { AxiosOptions } from "./types";

const LUDEX_API = "https://api.ludex.gg/api";

export class ApiClient {
  private axiosInstance: AxiosInstance;
  private options?: AxiosOptions;

  constructor(_apikey: string, _apiBaseUrl: string, options?: AxiosOptions) {
    const apikey = z.string().parse(_apikey);
    const apiBaseUrl = z.string().parse(_apiBaseUrl);
    this.options = options;

    this.axiosInstance = axios.create({
      baseURL: `${options?.baseUrl || LUDEX_API}${apiBaseUrl}`,
      proxy: options?.proxy,
      timeout: options?.timeoutInMs,
      headers: {
        Authorization: `Bearer ${apikey}`,
        "User-Agent": this.getUserAgent(),
      },
    });

    if (options?.customAxiosOptions?.interceptors?.response) {
      this.axiosInstance.interceptors.response.use(
        options.customAxiosOptions.interceptors.response.onFulfilled,
        options.customAxiosOptions.interceptors.response.onRejected
      );
    }
  }

  private getUserAgent(): string {
    try {
      let userAgent = `ludex-sdk-js/${SDK_VERSION}`;
      if (!this.options?.anonymousPlatform) {
        userAgent += ` (${os.type()} ${os.release()}; ${platform.name} ${
          platform.version
        }; ${os.arch()})`;
      }
      if (this.options?.userAgent) {
        userAgent = `${this.options.userAgent} ${userAgent}`;
      }
      return userAgent;
    } catch (e) {
      console.error(
        "Error getting user agent: You might be trying to use this in a browser environment"
      );
      return;
    }
  }

  public async issueGetRequest<T>(path: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(path);
  }

  public async issuePostRequest<T>(
    path: string,
    body: any
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(path, body);
  }

  public async issuePatchRequest<T>(
    path: string,
    body: any
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.patch<T>(path, body);
  }

  public async issueDeleteRequest<T>(path: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(path);
  }
}
