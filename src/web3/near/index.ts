import BN from "bn.js";
import { Account, Connection } from "near-api-js";

import { Action, BrowserWalletBehaviour } from "@near-wallet-selector/core";

import { Challenge as ChallengeType } from "../types";

export type Cluster = "MAINNET" | "DEVNET";

type ConnectionOptions = {
  cluster: Cluster;
};

type SignAndSendTransaction = BrowserWalletBehaviour["signAndSendTransaction"];

const makeSendTransaction = (receiverId: string, actions: Action[]) => {
  return async (signAndSendTransaction: SignAndSendTransaction) => {
    return await signAndSendTransaction({
      receiverId: receiverId,
      actions: actions,
    });
  };
};

class ActionsBuilder {
  private challengePromise: Promise<ChallengeType>;
  private cluster: Cluster;

  private challengeAddress: number;

  private nearContractId: string;
  private ludexContractId: string;

  constructor(
    challengeAddress: number,
    challengePromise: Promise<ChallengeType>,
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

  public async join() {
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
        gas: "300000000000000",
        deposit: "1",
      },
    };

    const sendTransaction = makeSendTransaction(this.nearContractId, [action]);

    return [action, sendTransaction];
  }

  public async leave(_account: Account) {
    const action: Action = {
      type: "FunctionCall",
      params: {
        methodName: "leave_challenge",
        args: { challenge_id: this.challengeAddress },
        gas: "300000000000000",
        deposit: "1",
      },
    };

    const sendTransaction = makeSendTransaction(this.ludexContractId, [action]);

    return [action, sendTransaction];
  }
}

export class Challenge {
  private _challenge: ChallengeType | undefined;
  private _challengeUpdateTimestamp: number | undefined;

  private connection: Connection;
  private cluster: Cluster;

  private challengeAddress: number;

  private nearContractId: string;
  private ludexContractId: string;

  constructor(
    challengeAddress: number,
    connection: Connection,
    options?: ConnectionOptions
  ) {
    this.challengeAddress = challengeAddress;
    this.connection = connection;
    this.cluster = options?.cluster || "MAINNET";

    this.nearContractId =
      this.cluster === "MAINNET" ? "wrap.near" : "wrap.testnet";
    this.ludexContractId =
      this.cluster === "MAINNET" ? "ftc.ludexgg.near" : "ftc.ludex.testnet";
  }

  public get actions() {
    return new ActionsBuilder(this.challengeAddress, this.getChallenge(), {
      cluster: this.cluster,
    });
  }

  public async getChallenge() {
    if (
      this._challenge &&
      this._challengeUpdateTimestamp &&
      this._challengeUpdateTimestamp > Date.now() - 15_000
    ) {
      return this._challenge;
    }

    const res = await this.connection.provider.query({
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

    this._challengeUpdateTimestamp = Date.now();

    this._challenge = {
      entryFee: new BN(challenge.entry_amount),
      providerRake: new BN(challenge.provider_rake),
      mediatorRake: new BN(challenge.mediator_rake),
      locked: challenge.locked,
      limit: challenge.limit,
      playersJoined: challenge.players_joined,
      mediator: challenge.mediator,
    };

    return this._challenge;
  }

  public async join(account: Account) {
    const challenge = await this.getChallenge();

    const res = await account.functionCall({
      contractId: this.nearContractId,
      methodName: "ft_transfer_call",
      args: {
        receiver_id: this.ludexContractId,
        amount: challenge.entryFee.toString(),
        memo: null,
        msg: this.challengeAddress.toString(),
      },
      gas: new BN("300000000000000"),
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
      gas: new BN("300000000000000"),
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
