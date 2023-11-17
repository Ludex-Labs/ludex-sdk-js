import { ApiClient } from "./apiClient";
import { AxiosOptions } from "./types";
import {AxiosResponse} from "axios";

/** Chains vault is currently supporting */
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
  /** just native redeem */
  native = "native",
  /** pay tokens to get native */
  nativeForTokens = "nativeForTokens",
  /** pay native to get tokens */
  tokensForNative = "tokensForNative",
  /** pay tokens to get tokens */
  tokensForTokens = "tokensForTokens",
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
  async getVault(chain: CHAIN): Promise<AxiosResponse<VaultResponse>> {
    return this.apiClient.issueGetRequest<VaultResponse>(`/${chain}`);
  }

  /**
   * Create vault
   * @param vault vault
   * @returns vault
   */
  async createVault(vault: CreateVaultRequest): Promise<AxiosResponse<VaultResponse>> {
    return this.apiClient.issuePostRequest<VaultResponse>("/", vault);
  }

  /**
   * Update vault
   * @param vault vault
   * @returns vault
   */
  async updateVault(vault: UpdateVaultRequest): Promise<AxiosResponse<VaultResponse>> {
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
  ): Promise<AxiosResponse<GenerateTransactionResponse>> {
    const { chain, ...transactionBody } = transaction;
    const requestBody = {
      transaction: transactionBody
    }
    return this.apiClient.issuePostRequest<GenerateTransactionResponse>(
      `/${chain}/generateTx`,
      requestBody
    );
  }

  /**
   * Get transactions for vault
   * @param chain chain of vault
   * @returns transactions
   */
  async getTransactions(chain: CHAIN): Promise<AxiosResponse<TransactionResponse[]>> {
    return this.apiClient.issueGetRequest<TransactionResponse[]>(
      `/${chain}/transactions`
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
  ): Promise<AxiosResponse<TransactionResponse>> {
    return this.apiClient.issueGetRequest<TransactionResponse>(
      `/${chain}/transaction/${transactionId}`
    );
  }
}
