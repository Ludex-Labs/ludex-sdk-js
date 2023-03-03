import type BN from "bn.js";

export type Challenge = {
  entryFee: BN;
  providerRake: BN;
  mediatorRake: BN;
  locked: boolean;
  limit: number;
  playersJoined: number;
  mediator: string;
};
