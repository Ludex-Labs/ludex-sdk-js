import { Challenge, IDL } from '../types/challenge_idl';
import { Connection, Cluster } from '@solana/web3.js';
import { AnchorProvider, Program, Wallet } from '@project-serum/anchor';
import {
  LUDEX_CHALLENGE_PROGRAM_ID,
  LUDEX_CHALLENGE_PROGRAM_ID_DEVNET,
} from './constants';
import { Options } from './types';

let program: Program<Challenge>;
let currentConnection: Connection;

export const getProgram = (connection: Connection, options?: Options) => {
  if (program && connection === currentConnection) {
    return program;
  }

  let provider;
  if (options?.wallet) {
    provider = new AnchorProvider(connection, options.wallet, {
      commitment: 'finalized',
    });
  }

  program = new Program<Challenge>(
    IDL,
    getProgramId(options?.cluster),
    provider
  );
  currentConnection = connection;

  return program;
};

export const getProgramId = (cluster?: Cluster) => {
  if (cluster && cluster === 'devnet') {
    return LUDEX_CHALLENGE_PROGRAM_ID_DEVNET;
  }

  return LUDEX_CHALLENGE_PROGRAM_ID;
};
