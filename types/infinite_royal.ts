export type InfiniteRoyal = {
  "version": "0.1.0",
  "name": "infinite_royal",
  "instructions": [
    {
      "name": "initializeGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rakeTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mediator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "cost",
          "type": "u64"
        },
        {
          "name": "rake",
          "type": "u64"
        }
      ],
      "returns": null
    },
    {
      "name": "joinGame",
      "accounts": [
        {
          "name": "playerAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "playerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": null
    },
    {
      "name": "resolvePlayer",
      "accounts": [
        {
          "name": "mediatorAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerSolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "winnings",
          "type": "u64"
        }
      ],
      "returns": null
    }
  ],
  "accounts": [
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "cost",
            "type": "u64"
          },
          {
            "name": "rake",
            "type": "u64"
          },
          {
            "name": "rakeTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "mediator",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "game",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "SuperAdmin",
      "msg": "Not Super Admin"
    }
  ]
};

export const IDL: InfiniteRoyal = {
  "version": "0.1.0",
  "name": "infinite_royal",
  "instructions": [
    {
      "name": "initializeGame",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rakeTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mediator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "cost",
          "type": "u64"
        },
        {
          "name": "rake",
          "type": "u64"
        }
      ],
      "returns": null
    },
    {
      "name": "joinGame",
      "accounts": [
        {
          "name": "playerAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "playerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": null
    },
    {
      "name": "resolvePlayer",
      "accounts": [
        {
          "name": "mediatorAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerSolAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "winnings",
          "type": "u64"
        }
      ],
      "returns": null
    }
  ],
  "accounts": [
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "cost",
            "type": "u64"
          },
          {
            "name": "rake",
            "type": "u64"
          },
          {
            "name": "rakeTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "mediator",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "player",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "game",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "SuperAdmin",
      "msg": "Not Super Admin"
    }
  ]
};
import * as anchor from '@project-serum/anchor'
import { Program } from '@project-serum/anchor';
import { getAssociatedTokenAddress, NATIVE_MINT, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { _ludexChallengeApi, poll, transferWrappedSol, ApiConfig } from './utils';

/* TODO: COMING SOON */
export class InfiniteRoyalAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>
  constructor(apiKey: string) {
    this.ludexChallengeApi = _ludexChallengeApi(apiKey, 'infiniteRoyal');
  }
}

/* TODO: COMING SOON */
export class InfiniteRoyalTXClient {
  tx = new anchor.web3.Transaction();
  challengeKey: anchor.web3.PublicKey;
  programAddress: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  constructor(connection: anchor.web3.Connection, challengeKey: string) {
    this.challengeKey = new anchor.web3.PublicKey(challengeKey);
    this.connection = connection;
    this.programAddress = new anchor.web3.PublicKey("24BjgpzTbBQf9ggzMMC4UogA6GxeqmuaAAAiL3Y3suBu");
  }

  async send(signers: anchor.web3.Signer[]) {
    const sig = await this.connection.sendTransaction(this.tx, signers);
    const latestBlockHash =
      await this.connection.getLatestBlockhash();
    this.connection.confirmTransaction({
      signature: sig, blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    });
    return sig;
  }

  getTx() {
    return this.tx.serialize().toString();
  }
}