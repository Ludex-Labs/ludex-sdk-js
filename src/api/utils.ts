export type ApiConfig = RequestInit & { path?: string };
export const _ludexChallengeApi =
  (bearerToken: string, api: string, baseUrl = "https://api.ludex.gg") =>
  async <T>(config: ApiConfig): Promise<T> => {
    const response = await fetch(
      `${baseUrl}/api/v1/${api}/${config.path || ""}`,
      {
        ...config,
        headers: {
          ...config.headers,
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
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
