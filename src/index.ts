import { z } from "zod";
import { Challenge } from "./challenge";
import { Client } from "./client";
import { Payout } from "./payout";
import { Vault } from "./vault";
import { AxiosOptions } from "./types";
export { parseTransaction, parseViemTransaction } from "./utilities";

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
} from "./types";

export { ZodError } from "zod";

export { AxiosError } from "axios";

// type definitions for Challenge
export {
  ChallengeListRequest,
  CreateChallengeRequest,
  Offering,
  JoinChallengeRequest,
  LeaveChallengeRequest,
  FungibleTokenPayout,
  NonFungibleTokenPayout,
  ResolveChallengeRequest,
  ResolveChallengeWithOneWinnerRequest,
  ChallengeResponse,
  PayoutResponse as ChallengePayoutResponse,
  MintResponse,
  Pot,
  Signature,
  WinningResponse,
  CreateChallengeResponse,
  JoinChallengeResponse,
  LeaveChallengeResponse,
  LockChallengeResponse,
  CancelChallengeResponse,
  ResolveChallengeResponse,
} from "./challenge";

// type definitions for Client
export {
  CreateClientRequest,
  ClientWallet,
  ClientResponse,
  OpenChallengeCountResponse,
  DeleteClientResponse,
} from "./client";

// type definitions for Payout
export {
  PayoutListRequest,
  PayoutResponse,
  PayoutListResponse,
} from "./payout";

// type definitions for Vault
export {
  CreateVaultRequest,
  UpdateVaultRequest,
  GenerateTransactionRequest,
  VaultResponse,
  GenerateTransactionResponse,
  TransactionResponse,
} from "./vault";
