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
      ]
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
      "args": []
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
      ]
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
      ]
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
      "args": []
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
      ]
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
