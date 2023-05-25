export type Challenge = {
  "version": "0.1.89",
  "name": "challenge",
  "instructions": [
    {
      "name": "getVersion",
      "accounts": [],
      "args": [],
      "returns": "string"
    },
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "provider",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolPayoutAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addPool",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolPayoutAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addLamportPool",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "providerVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updatePoolPayoutAccount",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPayoutAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createChallenge",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mediator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u16"
        },
        {
          "name": "mediatorRake",
          "type": "u64"
        },
        {
          "name": "providerRake",
          "type": "u64"
        },
        {
          "name": "expected",
          "type": "u16"
        },
        {
          "name": "verified",
          "type": "bool"
        }
      ]
    },
    {
      "name": "createExpectedPlayer",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expectedPlayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeExpectedPlayer",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expectedPlayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "join",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "providerAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "joinWithLamports",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "verifiedJoin",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "providerAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "verifiedJoinWithLamports",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "providerAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "leave",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "leaveWithLamports",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "lockChallenge",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "resolve",
      "accounts": [
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payoutTokenAccount",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "or that this is an account owned by the system program in the case of a lamport challenge"
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "payments",
          "type": {
            "defined": "PaymentArgAcc"
          }
        }
      ]
    },
    {
      "name": "cancel",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "payments",
          "type": {
            "defined": "PaymentArgAcc"
          }
        }
      ]
    },
    {
      "name": "verifyPayment",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mediatorTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "providerPayoutTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "verifyLamportsPayment",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mediatorAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "providerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "redeemPayment",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerTokenAccount",
          "isMut": true,
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "redeemLamports",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "adminCloseChallenge",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeChallenge",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "providerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "merkleResolve",
      "accounts": [
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "isCancel",
          "type": "bool"
        }
      ]
    },
    {
      "name": "redeemPaymentNode",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentStatus",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "solRedeemPaymentNode",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentStatus",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "fixVerifiedJoin",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "providerAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "provider",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "provider",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": "publicKey"
          },
          {
            "name": "payoutTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "challenge",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "provider",
            "type": "publicKey"
          },
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "mediator",
            "type": "publicKey"
          },
          {
            "name": "locked",
            "type": "bool"
          },
          {
            "name": "entryFee",
            "type": "u64"
          },
          {
            "name": "playersLimit",
            "type": "u16"
          },
          {
            "name": "playersJoined",
            "type": "u16"
          },
          {
            "name": "mediatorRake",
            "type": "u64"
          },
          {
            "name": "providerRake",
            "type": "u64"
          },
          {
            "name": "expected",
            "type": "u16"
          },
          {
            "name": "expectedCreated",
            "type": "u16"
          },
          {
            "name": "expectedJoined",
            "type": "u16"
          },
          {
            "name": "verified",
            "type": "bool"
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
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "auth",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "payer",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "payments",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "type": "publicKey"
          },
          {
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "payments",
            "type": {
              "vec": {
                "defined": "Payment"
              }
            }
          },
          {
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "total",
            "type": "u64"
          },
          {
            "name": "selfBump",
            "type": "u8"
          },
          {
            "name": "isCancel",
            "type": "bool"
          },
          {
            "name": "partial",
            "type": "bool"
          },
          {
            "name": "payoutTokenAccount",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "expectedPlayer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "selfBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "merklePayment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "type": "publicKey"
          },
          {
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "merkleRoot",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "isCancel",
            "type": "bool"
          },
          {
            "name": "selfBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "paymentStatus",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isClaimed",
            "type": "bool"
          },
          {
            "name": "claimedBy",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Payment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "paid",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "PaymentArg",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PaymentArgAcc",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payments",
            "type": {
              "vec": {
                "defined": "PaymentArg"
              }
            }
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ExpectedPlayerNotInChallenge",
      "msg": "Expected player not part of challenge"
    },
    {
      "code": 6001,
      "name": "ChallengeExpectedPlayerFull",
      "msg": "Challenge already reached expected player"
    },
    {
      "code": 6002,
      "name": "ProviderAuthorityIncorrect",
      "msg": "Provider authority incorrect, make sure to get the provider authority from the provider account"
    },
    {
      "code": 6003,
      "name": "ExpectedPlayerNotProvidedToJoin",
      "msg": "Expected player not provided on join"
    },
    {
      "code": 6004,
      "name": "NeedToBeExpectedPlayer",
      "msg": "Need to be expected player to join challenge"
    },
    {
      "code": 6100,
      "name": "Unauthorized",
      "msg": "You are not admin for this provider"
    },
    {
      "code": 6101,
      "name": "ProviderUnauthorizedChallenge",
      "msg": "The provider is not authorized for this challenge"
    },
    {
      "code": 6102,
      "name": "ProviderUnauthorizedPool",
      "msg": "The provider is not authorized for this pool"
    },
    {
      "code": 6103,
      "name": "MediatorUnauthorizedChallenge",
      "msg": "The mediator is not authorized for this challenge"
    },
    {
      "code": 6104,
      "name": "IncorrectRefundPayer",
      "msg": "Trying to close an account and refund the lamports to the incorrect payer"
    },
    {
      "code": 6200,
      "name": "LockedChallenge",
      "msg": "Challenge is locked"
    },
    {
      "code": 6201,
      "name": "UnlockedChallenge",
      "msg": "Cannot resolve unlocked challenge"
    },
    {
      "code": 6202,
      "name": "ChallengeFull",
      "msg": "Challenge is full"
    },
    {
      "code": 6203,
      "name": "VerifiedJoin",
      "msg": "Challenge must be joined using verified join"
    },
    {
      "code": 6204,
      "name": "PoolMismatch",
      "msg": "Wrong pool for the challenge"
    },
    {
      "code": 6220,
      "name": "InvalidPoolTokenAccount",
      "msg": "The provided pool token account does not match"
    },
    {
      "code": 6221,
      "name": "UnexpectedPoolType",
      "msg": "The provided pool is not a lamport pool"
    },
    {
      "code": 6230,
      "name": "InvalidPlayerTokenAccount",
      "msg": "The provided player token account does not match"
    },
    {
      "code": 6240,
      "name": "PaymentAlreadyPaid",
      "msg": "Payment already paid"
    },
    {
      "code": 6241,
      "name": "PaymentAlreadyVerified",
      "msg": "Payment already Verified"
    },
    {
      "code": 6242,
      "name": "VerifyPayment",
      "msg": "Payment needs to be verified"
    },
    {
      "code": 6243,
      "name": "PaymentLengthMismatch",
      "msg": "Must include one payment per player"
    },
    {
      "code": 6244,
      "name": "PlayerHasNoPayment",
      "msg": "Player does not have a payment, is the player part of the challenge?"
    },
    {
      "code": 6250,
      "name": "ProviderPayoutMissmatch",
      "msg": "Payout token account for provider is incorrect"
    },
    {
      "code": 6251,
      "name": "ProviderLamportPayoutMissmatch",
      "msg": "Payout payout account for provider is incorrect"
    },
    {
      "code": 6260,
      "name": "MediatorPayoutMismatch",
      "msg": "Payout for mediator is incorrect"
    },
    {
      "code": 6261,
      "name": "InvalidMint",
      "msg": "Invalid Mint"
    },
    {
      "code": 6300,
      "name": "InvalidProof",
      "msg": "Invalid proof"
    },
    {
      "code": 6301,
      "name": "ProofsMissing",
      "msg": "Missing proofs"
    },
    {
      "code": 6302,
      "name": "ProofsAccountLengthMismatch",
      "msg": "Proofs and account count mismatch"
    },
    {
      "code": 6320,
      "name": "PayoutTooLarge",
      "msg": "The sum of payouts are larger than the entry fee"
    },
    {
      "code": 6321,
      "name": "InsufficientFunds",
      "msg": "Provided user token account doesn't have enough tokens"
    },
    {
      "code": 6322,
      "name": "PaymentAmountMismatch",
      "msg": "Payment total doesn't match total entry fees paid"
    },
    {
      "code": 6323,
      "name": "PaymentAmountNotEqual",
      "msg": "Total payment amount doesn't match expected amount"
    }
  ]
};

export const IDL: Challenge = {
  "version": "0.1.89",
  "name": "challenge",
  "instructions": [
    {
      "name": "getVersion",
      "accounts": [],
      "args": [],
      "returns": "string"
    },
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "provider",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolPayoutAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addPool",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "poolPayoutAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addLamportPool",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "providerVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updatePoolPayoutAccount",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolPayoutAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createChallenge",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mediator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u16"
        },
        {
          "name": "mediatorRake",
          "type": "u64"
        },
        {
          "name": "providerRake",
          "type": "u64"
        },
        {
          "name": "expected",
          "type": "u16"
        },
        {
          "name": "verified",
          "type": "bool"
        }
      ]
    },
    {
      "name": "createExpectedPlayer",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expectedPlayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeExpectedPlayer",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "expectedPlayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "join",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "providerAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "joinWithLamports",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "verifiedJoin",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "providerAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "verifiedJoinWithLamports",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "providerAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "leave",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "leaveWithLamports",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "lockChallenge",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "resolve",
      "accounts": [
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payoutTokenAccount",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "or that this is an account owned by the system program in the case of a lamport challenge"
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "payments",
          "type": {
            "defined": "PaymentArgAcc"
          }
        }
      ]
    },
    {
      "name": "cancel",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "payments",
          "type": {
            "defined": "PaymentArgAcc"
          }
        }
      ]
    },
    {
      "name": "verifyPayment",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mediatorTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "providerPayoutTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "verifyLamportsPayment",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mediatorAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "providerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "redeemPayment",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerTokenAccount",
          "isMut": true,
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "redeemLamports",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "adminCloseChallenge",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeChallenge",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "providerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "merkleResolve",
      "accounts": [
        {
          "name": "challenge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "root",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "isCancel",
          "type": "bool"
        }
      ]
    },
    {
      "name": "redeemPaymentNode",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentStatus",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
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
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "solRedeemPaymentNode",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentStatus",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "index",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "fixVerifiedJoin",
      "accounts": [
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "challenge",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "providerAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "provider",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "provider",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": "publicKey"
          },
          {
            "name": "payoutTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "challenge",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "provider",
            "type": "publicKey"
          },
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "mediator",
            "type": "publicKey"
          },
          {
            "name": "locked",
            "type": "bool"
          },
          {
            "name": "entryFee",
            "type": "u64"
          },
          {
            "name": "playersLimit",
            "type": "u16"
          },
          {
            "name": "playersJoined",
            "type": "u16"
          },
          {
            "name": "mediatorRake",
            "type": "u64"
          },
          {
            "name": "providerRake",
            "type": "u64"
          },
          {
            "name": "expected",
            "type": "u16"
          },
          {
            "name": "expectedCreated",
            "type": "u16"
          },
          {
            "name": "expectedJoined",
            "type": "u16"
          },
          {
            "name": "verified",
            "type": "bool"
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
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "auth",
            "type": "publicKey"
          },
          {
            "name": "tokenAccount",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "payer",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "payments",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "type": "publicKey"
          },
          {
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "payments",
            "type": {
              "vec": {
                "defined": "Payment"
              }
            }
          },
          {
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "total",
            "type": "u64"
          },
          {
            "name": "selfBump",
            "type": "u8"
          },
          {
            "name": "isCancel",
            "type": "bool"
          },
          {
            "name": "partial",
            "type": "bool"
          },
          {
            "name": "payoutTokenAccount",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "expectedPlayer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "selfBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "merklePayment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payer",
            "type": "publicKey"
          },
          {
            "name": "challenge",
            "type": "publicKey"
          },
          {
            "name": "merkleRoot",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "isCancel",
            "type": "bool"
          },
          {
            "name": "selfBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "paymentStatus",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isClaimed",
            "type": "bool"
          },
          {
            "name": "claimedBy",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Payment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "paid",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "PaymentArg",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PaymentArgAcc",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payments",
            "type": {
              "vec": {
                "defined": "PaymentArg"
              }
            }
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ExpectedPlayerNotInChallenge",
      "msg": "Expected player not part of challenge"
    },
    {
      "code": 6001,
      "name": "ChallengeExpectedPlayerFull",
      "msg": "Challenge already reached expected player"
    },
    {
      "code": 6002,
      "name": "ProviderAuthorityIncorrect",
      "msg": "Provider authority incorrect, make sure to get the provider authority from the provider account"
    },
    {
      "code": 6003,
      "name": "ExpectedPlayerNotProvidedToJoin",
      "msg": "Expected player not provided on join"
    },
    {
      "code": 6004,
      "name": "NeedToBeExpectedPlayer",
      "msg": "Need to be expected player to join challenge"
    },
    {
      "code": 6100,
      "name": "Unauthorized",
      "msg": "You are not admin for this provider"
    },
    {
      "code": 6101,
      "name": "ProviderUnauthorizedChallenge",
      "msg": "The provider is not authorized for this challenge"
    },
    {
      "code": 6102,
      "name": "ProviderUnauthorizedPool",
      "msg": "The provider is not authorized for this pool"
    },
    {
      "code": 6103,
      "name": "MediatorUnauthorizedChallenge",
      "msg": "The mediator is not authorized for this challenge"
    },
    {
      "code": 6104,
      "name": "IncorrectRefundPayer",
      "msg": "Trying to close an account and refund the lamports to the incorrect payer"
    },
    {
      "code": 6200,
      "name": "LockedChallenge",
      "msg": "Challenge is locked"
    },
    {
      "code": 6201,
      "name": "UnlockedChallenge",
      "msg": "Cannot resolve unlocked challenge"
    },
    {
      "code": 6202,
      "name": "ChallengeFull",
      "msg": "Challenge is full"
    },
    {
      "code": 6203,
      "name": "VerifiedJoin",
      "msg": "Challenge must be joined using verified join"
    },
    {
      "code": 6204,
      "name": "PoolMismatch",
      "msg": "Wrong pool for the challenge"
    },
    {
      "code": 6220,
      "name": "InvalidPoolTokenAccount",
      "msg": "The provided pool token account does not match"
    },
    {
      "code": 6221,
      "name": "UnexpectedPoolType",
      "msg": "The provided pool is not a lamport pool"
    },
    {
      "code": 6230,
      "name": "InvalidPlayerTokenAccount",
      "msg": "The provided player token account does not match"
    },
    {
      "code": 6240,
      "name": "PaymentAlreadyPaid",
      "msg": "Payment already paid"
    },
    {
      "code": 6241,
      "name": "PaymentAlreadyVerified",
      "msg": "Payment already Verified"
    },
    {
      "code": 6242,
      "name": "VerifyPayment",
      "msg": "Payment needs to be verified"
    },
    {
      "code": 6243,
      "name": "PaymentLengthMismatch",
      "msg": "Must include one payment per player"
    },
    {
      "code": 6244,
      "name": "PlayerHasNoPayment",
      "msg": "Player does not have a payment, is the player part of the challenge?"
    },
    {
      "code": 6250,
      "name": "ProviderPayoutMissmatch",
      "msg": "Payout token account for provider is incorrect"
    },
    {
      "code": 6251,
      "name": "ProviderLamportPayoutMissmatch",
      "msg": "Payout payout account for provider is incorrect"
    },
    {
      "code": 6260,
      "name": "MediatorPayoutMismatch",
      "msg": "Payout for mediator is incorrect"
    },
    {
      "code": 6261,
      "name": "InvalidMint",
      "msg": "Invalid Mint"
    },
    {
      "code": 6300,
      "name": "InvalidProof",
      "msg": "Invalid proof"
    },
    {
      "code": 6301,
      "name": "ProofsMissing",
      "msg": "Missing proofs"
    },
    {
      "code": 6302,
      "name": "ProofsAccountLengthMismatch",
      "msg": "Proofs and account count mismatch"
    },
    {
      "code": 6320,
      "name": "PayoutTooLarge",
      "msg": "The sum of payouts are larger than the entry fee"
    },
    {
      "code": 6321,
      "name": "InsufficientFunds",
      "msg": "Provided user token account doesn't have enough tokens"
    },
    {
      "code": 6322,
      "name": "PaymentAmountMismatch",
      "msg": "Payment total doesn't match total entry fees paid"
    },
    {
      "code": 6323,
      "name": "PaymentAmountNotEqual",
      "msg": "Total payment amount doesn't match expected amount"
    }
  ]
};
