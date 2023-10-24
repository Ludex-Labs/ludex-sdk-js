import os from "os";
import platform from "platform";
import axios, { AxiosInstance } from "axios";
import { version as SDK_VERSION } from "../package.json";
import { AxiosOptions } from "./types";

export class ApiClient {
  private axiosInstance: AxiosInstance;
  private options?: AxiosOptions;

  constructor(apikey: string, apiBaseUrl: string, options?: AxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create({
      baseURL: apiBaseUrl,
      proxy: options?.proxy,
      timeout: options?.timeoutInMs,
      headers: {
        Authorization: `Bearer ${apikey}`,
        "User-Agent": this.getUserAgent(),
      },
    });
  }

  private getUserAgent(): string {
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
  }

  public async issueGetRequest<T>(path: string): Promise<T> {
    const res = await this.axiosInstance.get(path);
    return res.data;
  }

  public async issuePostRequest<T>(path: string, body: any): Promise<T> {
    const response = await this.axiosInstance.post<T>(path, body);
    return response.data;
  }

  public async issuePatchRequest<T>(path: string, body: any): Promise<T> {
    const res = await this.axiosInstance.patch<T>(path, body);
    return res.data;
  }

  public async issueDeleteRequest<T>(path: string): Promise<T> {
    const res = await this.axiosInstance.delete<T>(path);
    return res.data;
  }
}