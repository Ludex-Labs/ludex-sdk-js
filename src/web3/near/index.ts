import BN from "bn.js";
import { Account, providers } from "near-api-js";

import type {
  Action,
  BrowserWalletBehaviour,
} from "@near-wallet-selector/core";

import type { Challenge as BaseChallengeType } from "../types";

export type Cluster = "MAINNET" | "DEVNET";
export type ChallengeInfo = BaseChallengeType & {
  /// ContractId of the token contract that is used for this challenge
  ft: string;
};

type ConnectionOptions = {
  cluster: Cluster;
};

type SignAndSendTransaction = BrowserWalletBehaviour["signAndSendTransaction"];

type SendTransaction = (
  signAndSendTransaction: SignAndSendTransaction
) => ReturnType<SignAndSendTransaction>;

const makeSendTransaction = (
  receiverId: string,
  actions: Action[]
): SendTransaction => {
  return async (signAndSendTransaction: SignAndSendTransaction) => {
    return await signAndSendTransaction({
      receiverId: receiverId,
      actions: actions,
    });
  };
};

export class ActionsBuilder {
  private challengePromise: Promise<ChallengeInfo>;
  private cluster: Cluster;

  private challengeAddress: number;

  private nearContractId: string;
  private ludexContractId: string;

  public constructor(
    challengeAddress: number,
    challengePromise: Promise<ChallengeInfo>,
    options?: ConnectionOptions
  ) {
    this.challengeAddress = challengeAddress;
    this.challengePromise = challengePromise;
    this.cluster = options?.cluster || "MAINNET";

    this.nearContractId =
      this.cluster === "MAINNET" ? "wrap.near" : "wrap.testnet";
    this.ludexContractId =
      this.cluster === "MAINNET" ? "ftc.ludexgg.near" : "ftc.ludex.testnet";
  }

  public async join(): Promise<[Action, SendTransaction]> {
    const challenge = await this.challengePromise;

    const action: Action = {
      type: "FunctionCall",
      params: {
        methodName: "ft_transfer_call",
        args: {
          receiver_id: this.ludexContractId,
          amount: challenge.entryFee.toString(),
          memo: null,
          msg: this.challengeAddress.toString(),
        },
        gas: "60000000000000", // the ft_transfer will attach 30TGas, thus we give 60TGas to have enough
        deposit: "1",
      },
    };

    const sendTransaction = makeSendTransaction(this.nearContractId, [action]);

    return [action, sendTransaction];
  }

  public async leave(): Promise<[Action, SendTransaction]> {
    const action: Action = {
      type: "FunctionCall",
      params: {
        methodName: "leave_challenge",
        args: { challenge_id: this.challengeAddress },
        gas: "30000000000000",
        deposit: "1",
      },
    };

    const sendTransaction = makeSendTransaction(this.ludexContractId, [action]);

    return [action, sendTransaction];
  }
}

export class Challenge {
  private _info: ChallengeInfo | undefined;
  private _infoUpdateTimestamp: number | undefined;

  private provider: providers.Provider;
  private cluster: Cluster;

  private challengeAddress: number;

  private nearContractId: string;
  private ludexContractId: string;

  constructor(
    challengeAddress: number,
    provider: providers.Provider,
    options?: ConnectionOptions
  ) {
    this.challengeAddress = challengeAddress;
    this.provider = provider;
    this.cluster = options?.cluster || "MAINNET";

    this.nearContractId =
      this.cluster === "MAINNET" ? "wrap.near" : "wrap.testnet";
    this.ludexContractId =
      this.cluster === "MAINNET" ? "ftc.ludexgg.near" : "ftc.ludex.testnet";
  }

  public get actions() {
    return new ActionsBuilder(this.challengeAddress, this.getInfo(), {
      cluster: this.cluster,
    });
  }

  public async getInfo() {
    if (
      this._info &&
      this._infoUpdateTimestamp &&
      this._infoUpdateTimestamp > Date.now() - 15_000
    ) {
      return this._info;
    }

    const res = await this.provider.query({
      request_type: "call_function",
      account_id: this.ludexContractId,
      method_name: "get_challenge",
      args_base64: Buffer.from(
        JSON.stringify({ challenge_id: this.challengeAddress })
      ).toString("base64"),
      finality: "optimistic",
    });

    const challenge = JSON.parse(
      Buffer.from((res as any).result as number[]).toString()
    );

    this._infoUpdateTimestamp = Date.now();

    this._info = {
      entryFee: new BN(challenge.entry_fee),
      providerRake: new BN(challenge.provider_rake),
      mediatorRake: new BN(challenge.mediator_rake),
      locked: challenge.locked,
      limit: challenge.limit,
      playersJoined: challenge.players_joined,
      mediator: challenge.mediator,
      ft: challenge.ft,
    };

    return this._info;
  }

  public async getPlayers() {
    const res = await this.provider.query({
      request_type: "call_function",
      account_id: this.ludexContractId,
      method_name: "get_players",
      args_base64: Buffer.from(
        JSON.stringify({ challenge_id: this.challengeAddress })
      ).toString("base64"),
      finality: "optimistic",
    });

    const players = JSON.parse(
      Buffer.from((res as any).result as number[]).toString()
    );

    return players as string[];
  }

  public async join(account: Account) {
    const challenge = await this.getInfo();

    const res = await account.functionCall({
      contractId: this.nearContractId,
      methodName: "ft_transfer_call",
      args: {
        receiver_id: this.ludexContractId,
        amount: challenge.entryFee.toString(),
        memo: null,
        msg: this.challengeAddress.toString(),
      },
      gas: new BN("60000000000000"),
      attachedDeposit: new BN("1"),
    });

    res.receipts_outcome.forEach((receipt) => {
      if (
        receipt.outcome.status === "Failure" ||
        receipt.outcome.status.hasOwnProperty("Failure")
      ) {
        const err = new Error("Failed to join challenge");
        Object.assign(err, "receipt", receipt);
        throw err;
      }
    });

    return res;
  }

  public async leave(account: Account) {
    const res = await account.functionCall({
      contractId: this.ludexContractId,
      methodName: "leave_challenge",
      args: { challenge_id: this.challengeAddress },
      gas: new BN("30000000000000"),
      attachedDeposit: new BN("1"),
    });

    res.receipts_outcome.forEach((receipt) => {
      if (
        receipt.outcome.status === "Failure" ||
        receipt.outcome.status.hasOwnProperty("Failure")
      ) {
        const err = new Error("Failed to join challenge");
        Object.assign(err, "receipt", receipt);
        throw err;
      }
    });

    return res;
  }
}
