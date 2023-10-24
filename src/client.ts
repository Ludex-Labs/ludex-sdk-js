import { ApiClient } from "./apiClient";
import { AxiosOptions } from "./types";

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

interface CreateClientRequest {
  /** Client Name */
  name: string;
}

interface OpenChallengeCountResponse {
  /** Current open challenge count */
  count: number;
  /** Open challenge limit */
  limit: number;
}

interface ClientWallet {
  /** wallet chain */
  chain: string;
  /** wallet public key */
  address: string;
}

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
  constructor(organizationKey: string, options?: AxiosOptions) {
    this.apiClient = new ApiClient(organizationKey, this.BASE_PATH, options);
  }

  /**
   * Get client by id
   * @param clientId client id
   * @returns client
   */
  async getClient(clientId: number): Promise<ClientResponse> {
    return this.apiClient.issueGetRequest<ClientResponse>(`/${clientId}`);
  }

  /**
   * Get clients
   * @returns clients
   */
  async getClients(): Promise<ClientResponse[]> {
    return this.apiClient.issueGetRequest<ClientResponse[]>("/");
  }

  /**
   * Create client
   * @param client client
   * @returns client
   */
  async createClient(client: CreateClientRequest): Promise<ClientResponse> {
    return this.apiClient.issuePostRequest<ClientResponse>("/", client);
  }

  /**
   * Get open challenge count and limit
   * @param clientId client id
   * @returns open challenge count
   */
  async getOpenChallengeCount(
    clientId: number
  ): Promise<OpenChallengeCountResponse> {
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
    clientId: number,
    wallet: ClientWallet
  ): Promise<ClientResponse> {
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
  async deleteClient(clientId: number): Promise<DeleteClientResponse> {
    return this.apiClient.issueDeleteRequest<DeleteClientResponse>(
      `/${clientId}`
    );
  }
}
