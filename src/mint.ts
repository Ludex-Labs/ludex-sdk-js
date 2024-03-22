import { z } from "zod";
import { ApiClient } from "./apiClient";
import { queryString } from "./queryString";
import { AxiosOptions, Chain, Environment } from "./types";
import { AxiosResponse } from "axios";

export type MintResponse = {
  /** Mint id */
  id: number;
  /**  Name of the mint */
  name: string;
  /** Icon of the mint */
  icon: string | null;
  /** Ticker of the mint */
  ticker: string | null;
  /**  Blockchain address of the mint */
  blockchainAddress: string;
  /** Decimal Positon of the mint */
  decimalPosition: number;
  /** Chain of the mint */
  chain: Chain;
  /** Environment of the mint */
  environment: Environment;
};

const MintListRequest = z
  .object({
    name: z.string().optional(),
    ticker: z.string().optional(),
    blockchainAddress: z.string().optional(),
    chain: z.nativeEnum(Chain).optional(),
    environment: z.nativeEnum(Environment).optional(),
    cursor: z.number().optional(),
    pageLimit: z.number().optional(),
  })
  .optional();

/**
 * Mint list request
 * @param name name of mint
 * @param ticker ticker of mint
 * @param blockchainAddress blockchain address of mint
 * @param chain mint chain
 * @param environment environment of mint
 * @param cursor cursor for pagination
 * @param pageLimit page limit for pagination
 */
export type MintListRequest = z.input<typeof MintListRequest>;

export type MintListResponse = {
  /** list of mints */
  mints: MintResponse[];
  /** cursor for pagination */
  cursor?: number;
  /** remaining records for pagination */
  remainingRecords?: number;
};

export class Mint {
  private readonly apiClient: ApiClient;
  private readonly BASE_PATH = "/v2/mint";

  /**
   * Create mint api client
   * @param organizationKey organization key
   * @param options axios options
   * @returns mint api client
   */
  constructor(_organizationKey: string, options?: AxiosOptions) {
    const organizationKey = z.string().parse(_organizationKey);
    this.apiClient = new ApiClient(organizationKey, this.BASE_PATH, options);
  }

  /**
   * Get mint by id
   * @param mintId mint id
   * @returns mint
   */
  async getMint(_mintId: number): Promise<AxiosResponse<MintResponse>> {
    const mintId = z.number().parse(_mintId);
    return this.apiClient.issueGetRequest(`/${mintId}`);
  }

  /**
   * Get mints
   * @param filters mint list request
   * @returns mints
   */
  async getMints(
    _filters?: MintListRequest
  ): Promise<AxiosResponse<MintListResponse>> {
    const filters: MintListRequest = MintListRequest.parse(_filters);
    return this.apiClient.issueGetRequest(`/${queryString(filters)}`);
  }
}
