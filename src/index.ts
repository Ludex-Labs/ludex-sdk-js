import { Challenge } from "./challenge";
import { Client } from "./client";
import { Payout } from "./payout";
import { AxiosOptions } from "./types";
import { Vault } from "./vault";

class OrganizationScoped {
  client: Client;
  payout: Payout;

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
    this.client = new Client(organizationApiKey, options);
    this.payout = new Payout(organizationApiKey, options);
  }
}

class ClientScoped {
  challenge: Challenge;
  vault: Vault;

  /**
   * Create client scoped api client
   * @param clientApiKey client api key
   * @param options axios options
   * @returns client scoped api client
   */
  constructor(clientApiKey: string, options?: AxiosOptions) {
    this.challenge = new Challenge(clientApiKey, options);
    this.vault = new Vault(clientApiKey, options);
  }
}

export const Ludex = {
  OrganizationScoped,
  ClientScoped,
};
