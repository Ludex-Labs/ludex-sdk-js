import { ApiClient } from "./apiClient";
import { AxiosOptions } from "./types";

/** Chains vault is currently supported */
type CHAIN = "SOLANA";

interface VaultResponse {
  /** name of vault */
  name: string;
  /** blockchain address of vault */
  blockchainAddress: string | null;
  /** chain of vault */
  chain: CHAIN;
  /** default fee recipient */
  feeRecipient: string;
}

interface CreateVaultRequest {
  /** name of vault */
  name: string;
  /** chain of vault */
  chain: CHAIN;
  /** default fee recipient */
  feeRecipient: string;
}

interface UpdateVaultRequest {
  /** name of vault */
  name?: string;
  /** default fee recipient */
  feeRecipient?: string;
  /** chain of vault to update */
  chain: CHAIN;
}

enum RedeemType {
  native = "native", // just native redeem
  nativeForTokens = "nativeForTokens", // pay tokens to get native
  tokensForNative = "tokensForNative", // pay native to get tokens
  tokensForTokens = "tokensForTokens", // pay tokens to get tokens
}
interface GenerateTransactionRequest {
  /** chain of vault */
  chain: CHAIN;
  /** type of transaction */
  type: RedeemType;
  /** gasless transaction */
  gasless: boolean;
  /** player public key */
  playerPublicKey: string;
  /** amount given */
  amountGiven?: number;
  /** amount redeemed */
  amountRedeemed: number;
  /** override fee recipient public key */
  overideFeeRecipientPubkey?: string;
  /** pay mint */
  payMint?: string;
  /** receive mint */
  receiveMint?: string;
}

interface GenerateTransactionResponse {
  /** id of transaction for look up */
  transactionId: number;
  /** base64 encoded transaction ready to be signed and sent */
  transaction: string;
}

interface TransactionResponse {
  /** id of transaction */
  id: number;
  /** signature of sent transaction */
  signature?: string;
}

export class Vault {
  private readonly apiClient: ApiClient;
  private readonly BASE_PATH = "/v2/vault";

  /**
   * Create vault api client
   * @param clientKey client key
   * @param options axios options
   * @returns vault api client
   */
  constructor(clientKey: string, options?: AxiosOptions) {
    this.apiClient = new ApiClient(clientKey, this.BASE_PATH, options);
  }

  /**
   * Get vault
   * @param chain chain of vault
   * @returns vault
   */
  async getVault(chain: CHAIN): Promise<VaultResponse> {
    return this.apiClient.issueGetRequest<VaultResponse>(`/${chain}`);
  }

  /**
   * Create vault
   * @param vault vault
   * @returns vault
   */
  async createVault(vault: CreateVaultRequest): Promise<VaultResponse> {
    return this.apiClient.issuePostRequest<VaultResponse>("/", vault);
  }

  /**
   * Update vault
   * @param vault vault
   * @returns vault
   */
  async updateVault(vault: UpdateVaultRequest): Promise<VaultResponse> {
    const { chain, ...vaultBody } = vault;
    return this.apiClient.issuePatchRequest<VaultResponse>(
      `/${chain}`,
      vaultBody
    );
  }

  /**
   * Generate transaction for vault
   * @param transaction transaction
   * @returns transaction
   */
  async generateTransaction(
    transaction: GenerateTransactionRequest
  ): Promise<GenerateTransactionResponse> {
    const { chain, ...transactionBody } = transaction;
    return this.apiClient.issuePostRequest<GenerateTransactionResponse>(
      `/${chain}/transaction`,
      transactionBody
    );
  }

  /**
   * Get transactions for vault
   * @param chain chain of vault
   * @returns transactions
   */
  async getTransactions(chain: CHAIN): Promise<TransactionResponse[]> {
    return this.apiClient.issueGetRequest<TransactionResponse[]>(
      `/${chain}/transaction`
    );
  }

  /**
   * Get transaction for vault
   * @param chain chain of vault
   * @param transactionId transaction id
   * @returns transaction
   */
  async getTransaction(
    chain: CHAIN,
    transactionId: string
  ): Promise<TransactionResponse> {
    return this.apiClient.issueGetRequest<TransactionResponse>(
      `/${chain}/transaction/${transactionId}`
    );
  }
}