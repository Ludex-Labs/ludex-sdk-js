import { z } from "zod";
import { ApiClient } from "./apiClient";
import { AxiosOptions } from "./types";
import {AxiosResponse} from "axios";

interface ClientResponse {
  /** client id */
  id: number;
  /** name of client */
  name: string;
  /** Open challenge limit */
  openChallengeLimit: number;
  /** Clients wallets (one per chain) */
  wallets: ClientWallet[];
}

const CreateClientRequest = z.object({
    name: z.string()
});

/**
 * CreateClientRequest
 * @property {string} name - The name of the client.
 */
type CreateClientRequest = z.input<typeof CreateClientRequest>

interface OpenChallengeCountResponse {
  /** Current open challenge count */
  count: number;
  /** Open challenge limit */
  limit: number;
}

const ClientWallet = z.object({
  chain: z.string(),
  address: z.string()
})

/**
 * ClientWallet
 * @property {string} chain - The wallet chain.
 * @property {string} address - The wallet public key.
 */
type ClientWallet = z.input<typeof ClientWallet>

interface DeleteClientResponse {
  /** id of deleted client */
  id: number;
}

export class Client {
  private readonly apiClient: ApiClient;
  private readonly BASE_PATH = "/v2/client";

  /**
   * Create client api client
   * @param organizationKey organization key
   * @param options axios options
   * @returns client api client
   */
  constructor(_organizationKey: string, options?: AxiosOptions) {
    const organizationKey = z.string().parse(_organizationKey);
    this.apiClient = new ApiClient(organizationKey, this.BASE_PATH, options);
  }

  /**
   * Get client by id
   * @param clientId client id
   * @returns client
   */
  async getClient(_clientId: number): Promise<AxiosResponse<ClientResponse>> {
    const clientId = z.number().parse(_clientId);
    return this.apiClient.issueGetRequest<ClientResponse>(`/${clientId}`);
  }

  /**
   * Get clients
   * @returns clients
   */
  async getClients(): Promise<AxiosResponse<ClientResponse[]>> {
    return this.apiClient.issueGetRequest<ClientResponse[]>("/");
  }

  /**
   * Create client
   * @param client client
   * @returns client
   */
  async createClient(_client: CreateClientRequest): Promise<AxiosResponse<ClientResponse>> {
    const client = CreateClientRequest.parse(_client);
    return this.apiClient.issuePostRequest<ClientResponse>("/", client);
  }

  /**
   * Get open challenge count and limit
   * @param clientId client id
   * @returns open challenge count
   */
  async getOpenChallengeCount(
    _clientId: number
  ): Promise<AxiosResponse<OpenChallengeCountResponse>> {
    const clientId = z.number().parse(_clientId);
    return this.apiClient.issueGetRequest<OpenChallengeCountResponse>(
      `/${clientId}/open-challenge-count`
    );
  }

  /**
   * Update client wallet
   * @param clientId client id
   * @param wallet wallet
   * @returns client
   */
  async updateClientWallet(
    _clientId: number,
    _wallet: ClientWallet
  ): Promise<AxiosResponse<ClientResponse>> {
    const clientId = z.number().parse(_clientId);
    const wallet = ClientWallet.parse(_wallet);
    return this.apiClient.issuePatchRequest<ClientResponse>(
      `/${clientId}/wallet`,
      wallet
    );
  }

  /**
   * Delete client
   * @param clientId client id
   * @returns client id of deleted client
   */
  async deleteClient(_clientId: number): Promise<AxiosResponse<DeleteClientResponse>> {
    const clientId = z.number().parse(_clientId);
    return this.apiClient.issueDeleteRequest<DeleteClientResponse>(
      `/${clientId}`
    );
  }
}
