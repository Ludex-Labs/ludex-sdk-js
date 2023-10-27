import { ApiClient } from "./apiClient";
import { AxiosOptions } from "./types";
import {AxiosResponse} from "axios";

interface PayoutResponse {
  /** Payout id */
  id: number;
  /**  Chain of the payout */
  chain: string;
  /** Entry fee of the payout */
  entryFee: string;
  /** Mediator rake of the payout */
  mediatorRake: string;
  /**  Provider rake of the payout */
  providerRake: string;
  /**  Type of the payout (NFT, FT, Native) */
  type: "NFT" | "FT" | "Native";
}

export class Payout {
  private readonly apiClient: ApiClient;
  private readonly BASE_PATH = "/v2/payout";

  /**
   * Create payout api client
   * @param organizationKey organization key
   * @param options axios options
   * @returns payout api client
   */
  constructor(organizationKey: string, options?: AxiosOptions) {
    this.apiClient = new ApiClient(organizationKey, this.BASE_PATH, options);
  }

  /**
   * Get payout by id
   * @param payoutId payout id
   * @returns payout
   */
  async getPayout(payoutId: number): Promise<AxiosResponse<PayoutResponse>> {
    return this.apiClient.issueGetRequest(`/${payoutId}`);
  }

  /**
   * Get payouts
   * @returns payouts
   */
  async getPayouts(): Promise<AxiosResponse<PayoutResponse[]>> {
    return this.apiClient.issueGetRequest("/");
  }
}
