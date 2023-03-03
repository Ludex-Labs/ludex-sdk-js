import BN from "bn.js";
import { Account, Connection } from "near-api-js";

import { Challenge as ChallengeType } from "../types";

export type Cluster = "MAINNET" | "DEVNET";

type ConnectionOptions = {
  cluster: Cluster;
};

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
      gas: "300000000000000" as any,
      attachedDeposit: "1" as any,
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
  }

  public async leave(_account: Account) {}
}

// export const joinChallenge = async (connection, account) => {
//   const exe = await account.functionCall({
//     contractId: isMainnet ? "wrap.near" : "wrap.testnet",
//     methodName: "ft_transfer_call",
//     args: {
//       receiver_id: isMainnet ? "ftc.ludexgg.near" : "ftc.ludex.testnet",
//       amount: challenge?.entryAmount + "",
//       memo: null,
//       msg: challengeAddress,
//     },
//     gas: "300000000000000" as any,
//     attachedDeposit: "1" as any,
//   });
// };

// export const leaveChallenge = async () => {};

// export const redeemPrize = async () => {};
