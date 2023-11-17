import { ApiClient } from "./apiClient";
import { queryString } from "./queryString";
import { AxiosOptions } from "./types";
import { AxiosResponse } from "axios";

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

interface PayoutListRequest {
  /** mint id */
  mintId?: number;
  /** state of payout */
  state?: string;
  /** type of payout */
  type?: string;
  /** chain of payout */
  chain?: string;
  /** cursor by id of payout */
  cursor?: number;
  /** limit of payouts to return max 1000 */
  pageLimit?: number;
}

interface PayoutListResponse {
  /** list of payouts */
  payouts: PayoutResponse[];
  /** cursor for pagination */
  cursor?: number;
  /** remaining records for pagination */
  remainingRecords?: number;
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
   * @param filters payout list request
   * @returns payouts
   */
  async getPayouts(
    filters?: PayoutListRequest
  ): Promise<AxiosResponse<PayoutListResponse>> {
    return this.apiClient.issueGetRequest(`/${queryString(filters)}`);
  }
}
