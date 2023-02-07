import fetch, { Headers } from 'node-fetch';

import type { RequestInit } from "node-fetch";

export type ApiConfig = RequestInit & { path?: string };
export const _ludexChallengeApi =
  (bearerToken: string, api: string, baseUrl = "https://api.ludex.gg") =>
  async <T>(config: ApiConfig): Promise<T> => {
    let newHeaders: Record<string, string> = {};

    if (config.headers) {
      if (Array.isArray(config.headers)) {
        config.headers.forEach((header) => {
          newHeaders[header[0]] = header[1];
        });
      } else if (config.headers instanceof Headers) {
        config.headers.forEach((value, key) => {
          newHeaders[key] = value;
        });
      } else {
        newHeaders = config.headers;
      }
    }

    newHeaders["Content-Type"] = "application/json";
    newHeaders["Authorization"] = `Bearer ${bearerToken}`;

    const response = await fetch(
      `${baseUrl}/api/v1/${api}/${config.path || ""}`,
      {
        ...config,
        headers: newHeaders,
      }
    );

    if (!response.ok) {
      if (config.method === "HEAD") {
        throw new Error(response.statusText);
      }

      throw new Error((await response.json()).message);
    }

    if (config.method === "HEAD") {
      return {} as T;
    }

    let data;
    try {
      data = await response.json();
    } catch (e) {
      throw e;
    }
    return data as T;
  };
