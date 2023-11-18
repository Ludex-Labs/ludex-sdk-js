import { z } from "zod";
import { ApiClient } from "./apiClient";
import { AxiosOptions, Chain, RedeemType } from "./types";
import {AxiosResponse} from "axios";
interface VaultResponse {
  /** name of vault */
  name: string;
  /** blockchain address of vault */
  blockchainAddress: string | null;
  /** chain of vault */
  chain: Chain;
  /** default fee recipient */
  feeRecipient: string;
}

const CreateVaultRequest = z.object({
  name: z.string(),
  chain: z.nativeEnum(Chain),
  feeRecipient: z.string()
})

/**
 * CreateVaultRequest
 * @property {string} name - The name of the vault.
 * @property {Chain} chain - The chain of the vault.
 * @property {string} feeRecipient - The default fee recipient.
 */
type CreateVaultRequest = z.input<typeof CreateVaultRequest>

const UpdateVaultRequest = z.object({
  name: z.string().optional(),
  feeRecipient: z.string().optional(),
  chain: z.nativeEnum(Chain)
}) 

/**
 * UpdateVaultRequest
 * @property {string} [name] - The updated name of the vault (optional).
 * @property {string} [feeRecipient] - The updated default fee recipient (optional).
 * @property {Chain} chain - The chain of the vault to update.
 */
type UpdateVaultRequest = z.input<typeof UpdateVaultRequest>

const GenerateTransactionRequest = z.object({
  chain: z.nativeEnum(Chain),
  type: RedeemType,
  gasless: z.boolean(),
  playerPublicKey: z.string(),
  amountGiven: z.number().optional(),
  amountRedeemed: z.number(),
  overideFeeRecipientPubkey: z.string().optional(),
  payMint: z.string().optional(),
  receiveMint: z.string().optional()
})

/**
 * GenerateTransactionRequest
 * @property {Chain} chain - The chain of the vault.
 * @property {RedeemType} type - The type of transaction.
 * @property {boolean} gasless - Indicates whether the transaction is gasless.
 * @property {string} playerPublicKey - The public key of the player.
 * @property {number} [amountGiven] - The amount given (optional).
 * @property {number} amountRedeemed - The amount to be redeemed.
 * @property {string} [overideFeeRecipientPubkey] - The overridden fee recipient public key (optional).
 * @property {string} [payMint] - The pay mint (optional).
 * @property {string} [receiveMint] - The receive mint (optional).
 */
type GenerateTransactionRequest = z.input<typeof GenerateTransactionRequest>


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
  constructor(_clientKey: string, options?: AxiosOptions) {
    const clientKey = z.string().parse(_clientKey);
    this.apiClient = new ApiClient(clientKey, this.BASE_PATH, options);
  }

  /**
   * Get vault
   * @param chain chain of vault
   * @returns vault
   */
  async getVault(_chain: Chain): Promise<AxiosResponse<VaultResponse>> {
    const chain = z.nativeEnum(Chain).parse(_chain);
    return this.apiClient.issueGetRequest<VaultResponse>(`/${chain}`);
  }

  /**
   * Create vault
   * @param vault vault
   * @returns vault
   */
  async createVault(_vault: CreateVaultRequest): Promise<AxiosResponse<VaultResponse>> {
    const vault = CreateVaultRequest.parse(_vault);
    return this.apiClient.issuePostRequest<VaultResponse>("/", vault);
  }

  /**
   * Update vault
   * @param vault vault
   * @returns vault
   */
  async updateVault(_vault: UpdateVaultRequest): Promise<AxiosResponse<VaultResponse>> {
    const vault = UpdateVaultRequest.parse(_vault);
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
    _transaction: GenerateTransactionRequest
  ): Promise<AxiosResponse<GenerateTransactionResponse>> {
    const transaction = GenerateTransactionRequest.parse(_transaction);
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
  async getTransactions(_chain: Chain): Promise<AxiosResponse<TransactionResponse[]>> {
    const chain = z.nativeEnum(Chain).parse(_chain);
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
    _chain: Chain,
    _transactionId: string
  ): Promise<AxiosResponse<TransactionResponse>> {
    const chain = z.nativeEnum(Chain).parse(_chain);
    const transactionId = z.string().parse(_transactionId);
    return this.apiClient.issueGetRequest<TransactionResponse>(
      `/${chain}/transaction/${transactionId}`
    );
  }
}
