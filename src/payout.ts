import { z } from "zod";
import { ApiClient } from "./apiClient";
import { queryString } from "./queryString";
import {
  AxiosOptions,
  Chain,
  Environment,
  PayoutState,
  PayoutType,
} from "./types";
import { AxiosResponse } from "axios";

export type Mint = {
  /** Mint id */
  id: number;
  /** Mint icon */
  icon: string;
  /** Mint ticket */
  ticker: string;
  /** Mint blockchain address */
  blockchainAddress: string;
  /** Mint decimal position */
  decimalPosition: number;
  /** Chain of the mint */
  chain: Chain;
  /** Environment of the mint */
  environment: Environment;
};

export type PayoutResponse = {
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
  /**  Mediator fee of the payout */
  mediatorFee: string;
  /**  Provider fee of the payout */
  providerFee: string;
  /**  Type of the payout (NFT, FT, Native) */
  type: "NFT" | "FT" | "Native";
  /**  Player number limit of the payout */
  limit: number;
  /**  Environment of the payout */
  environment: Environment;
  /**  Mint of the payout */
  Mint: Mint;
};

const PayoutListRequest = z
  .object({
    mintId: z.number().optional(),
    state: z.nativeEnum(PayoutState).optional(),
    type: z.nativeEnum(PayoutType).optional(),
    chain: z.nativeEnum(Chain).optional(),
    limit: z.number().optional(),
    environment: z.nativeEnum(Environment).optional(),
    cursor: z.number().optional(),
    pageLimit: z.number().optional(),
  })
  .optional();

/**
 * Payout list request
 * @param mintId mint id
 * @param state payout state
 * @param type payout type
 * @param chain payout chain
 * @param cursor cursor for pagination
 * @param pageLimit page limit for pagination
 */
export type PayoutListRequest = z.input<typeof PayoutListRequest>;

export type PayoutListResponse = {
  /** list of payouts */
  payouts: PayoutResponse[];
  /** cursor for pagination */
  cursor?: number;
  /** remaining records for pagination */
  remainingRecords?: number;
};

export class Payout {
  private readonly apiClient: ApiClient;
  private readonly BASE_PATH = "/v2/payout";

  /**
   * Create payout api client
   * @param organizationKey organization key
   * @param options axios options
   * @returns payout api client
   */
  constructor(_organizationKey: string, options?: AxiosOptions) {
    const organizationKey = z.string().parse(_organizationKey);
    this.apiClient = new ApiClient(organizationKey, this.BASE_PATH, options);
  }

  /**
   * Get payout by id
   * @param payoutId payout id
   * @returns payout
   */
  async getPayout(_payoutId: number): Promise<AxiosResponse<PayoutResponse>> {
    const payoutId = z.number().parse(_payoutId);
    return this.apiClient.issueGetRequest(`/${payoutId}`);
  }

  /**
   * Get payouts
   * @param filters payout list request
   * @returns payouts
   */
  async getPayouts(
    _filters?: PayoutListRequest
  ): Promise<AxiosResponse<PayoutListResponse>> {
    const filters: PayoutListRequest = PayoutListRequest.parse(_filters);
    return this.apiClient.issueGetRequest(`/${queryString(filters)}`);
  }
}
