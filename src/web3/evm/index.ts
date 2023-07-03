import BN from 'bn.js';
import { ethers, providers, Signer } from 'ethers';

import { erc20 } from './contracts/erc20';
import { FtChallengePool } from './generated/contracts/FtChallengePool';
import { Ludex } from './generated/contracts/Ludex';
import { FtChallengePool__factory } from './generated/factories/FtChallengePool__factory';
import { Ludex__factory } from './generated/factories/Ludex__factory';

import type { Challenge as BaseChallengeType } from "../types";
export type Cluster = "MAINNET" | "DEVNET" | "GOERLI" | "MUMBAI";

type ConnectionOptions = {
  cluster: Cluster;
};

type ChallengeState = "OPEN" | "LOCKED" | "CANCELED" | "RESOLVED";

const mapState = (state: number): ChallengeState => {
  switch (state) {
    case 0:
      return "OPEN";
    case 1:
      return "LOCKED";
    case 2:
      return "CANCELED";
    case 3:
      return "RESOLVED";
    default:
      throw new Error("Invalid state");
  }
};

type ChallengeType = BaseChallengeType & {
  state: ChallengeState;
};

export class Challenge {
  private _info: ChallengeType | undefined;
  private _infoUpdateTimestamp: number | undefined;

  private providerOrSigner: Signer | providers.Provider;
  private mint: string;

  private challengeAddress: string;

  private ludexContract: Ludex;
  private challengeContract: Promise<FtChallengePool>;

  constructor(
    mint: string,
    challengeAddress: string,
    providerOrSigner: Signer | providers.Provider,
    _options?: ConnectionOptions
  ) {
    this.challengeAddress = challengeAddress;
    this.ludexContract = Ludex__factory.connect(
      "0x324CF40b85A6f9024E402BE8354033257439cDd1",
      providerOrSigner
    );
    this.challengeContract = this.ludexContract
      .ftwagers(mint)
      .then((address) =>
        FtChallengePool__factory.connect(address, providerOrSigner)
      );

    this.providerOrSigner = providerOrSigner;
    this.mint = mint;
  }

  public async getInfo() {
    if (
      this._info &&
      this._infoUpdateTimestamp &&
      this._infoUpdateTimestamp > Date.now() - 15_000
    ) {
      return this._info;
    }

    const challenge = await (
      await this.challengeContract
    ).wagers(this.challengeAddress);
    const [
      mediator,
      _fee, // I think we just ignore this now?
      entryFee,
      providerAmount,
      mediatorAmount,
      limit,
      amountJoined,
      state,
    ] = challenge;

    this._infoUpdateTimestamp = Date.now();
    this._info = {
      entryFee: new BN(entryFee.toString()),
      providerRake: new BN(providerAmount.toString()),
      mediatorRake: new BN(mediatorAmount.toString()),
      locked: false,
      limit: limit.toNumber(),
      playersJoined: amountJoined.toNumber(),
      mediator: mediator,
      state: mapState(state),
    };

    return this._info;
  }

  public async getPlayers() {
    const players = await (
      await this.challengeContract
    ).players(this.challengeAddress, 256);

    return players;
  }

  public async join(_player: string) {
    const info = this.getInfo();
    const erc20Contract = erc20
      .attach(this.mint)
      .connect(this.providerOrSigner);

    await (
      await erc20Contract.approve(
        (
          await this.challengeContract
        ).address,
        ethers.BigNumber.from((await info).entryFee),
        {
          gasLimit: "500000",
          gasPrice: "50000000000",
        }
      )
    ).wait();

    const tx = await (
      await this.challengeContract
    ).join(this.challengeAddress, {
      gasLimit: "500000",
      gasPrice: "50000000000",
    });

    return tx.wait();
  }

  public async leave() {
    const tx = await (
      await this.challengeContract
    ).leave(this.challengeAddress, {
      gasLimit: "500000",
      gasPrice: "50000000000",
    });

    return tx.wait();
  }
}
