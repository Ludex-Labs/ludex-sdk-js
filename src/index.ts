import { Challenge } from "./challenge";
import { Client } from "./client";
import { Payout } from "./payout";
import { AxiosOptions } from "./types";
import { Vault } from "./vault";

class OrganizationScoped {
  clientApi: Client;
  payoutApi: Payout;

  /**
   * Create organization scoped api client
   * @param organizationApiKey organization api key
   * @param options axios options
   * @returns organization scoped api client
   */
  constructor(
    public readonly organizationApiKey: string,
    options?: AxiosOptions
  ) {
    this.clientApi = new Client(organizationApiKey, options);
    this.payoutApi = new Payout(organizationApiKey, options);
  }

  /**
   * Get client api client
   * @returns client api client
   */
  public client(): Client {
    return this.clientApi;
  }

  /**
   * Get payout api client
   * @returns payout api client
   */
  public payout(): Payout {
    return this.payoutApi;
  }
}

class ClientScoped {
  challengeApi: Challenge;
  vaultApi: Vault;

  /**
   * Create client scoped api client
   * @param clientApiKey client api key
   * @param options axios options
   * @returns client scoped api client
   */
  constructor(clientApiKey: string, options?: AxiosOptions) {
    this.challengeApi = new Challenge(clientApiKey, options);
    this.vaultApi = new Vault(clientApiKey, options);
  }

  /**
   * Get challenge api client
   * @returns challenge api client
   */
  public challenge(): Challenge {
    return this.challengeApi;
  }

  /**
   * Get vault api client
   * @returns vault api client
   */
  public vault(): Vault {
    return this.vaultApi;
  }
}

export const Ludex = {
  OrganizationScoped,
  ClientScoped,
};
