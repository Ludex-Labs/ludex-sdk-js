import { z, ZodError } from "zod";
import { Challenge } from "./challenge";
import { Client } from "./client";
import { Payout } from "./payout";
import { Vault } from "./vault";
import {
  AxiosOptions,
  Chain,
  PayoutType,
  PayoutState,
  Environment,
  ChallengeState,
  RedeemType,
} from "./types";
import { AxiosError } from "axios";

class OrganizationScoped {
  client: Client;
  payout: Payout;

  /**
   * Create organization scoped api client
   * @param _organizationApiKey organization api key
   * @param options axios options
   * @returns organization scoped api client
   */
  constructor(
    public readonly _organizationApiKey: string,
    options?: AxiosOptions
  ) {
    const organizationApiKey = z.string().parse(_organizationApiKey);
    this.client = new Client(organizationApiKey, options);
    this.payout = new Payout(organizationApiKey, options);
  }
}

class ClientScoped {
  challenge: Challenge;
  vault: Vault;

  /**
   * Create client scoped api client
   * @param _clientApiKey client api key
   * @param options axios options
   * @returns client scoped api client
   */
  constructor(_clientApiKey: string, options?: AxiosOptions) {
    const clientApiKey = z.string().parse(_clientApiKey);
    this.challenge = new Challenge(clientApiKey, options);
    this.vault = new Vault(clientApiKey, options);
  }
}

export const Ludex = {
  OrganizationScoped,
  ClientScoped,
};

export {
  Chain,
  PayoutType,
  PayoutState,
  Environment,
  ChallengeState,
  RedeemType,
  AxiosError,
  ZodError
};