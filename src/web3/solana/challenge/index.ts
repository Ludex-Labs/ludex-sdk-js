export type Challenge = {
  "version": "0.1.59",
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
          "name": "providerAuthority",
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
          "name": "providerAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentPayer",
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
      "name": "partialResolve",
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
      "name": "startPartialResolve",
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
      "name": "Unauthorized",
      "msg": "You are not admin for this provider"
    },
    {
      "code": 6001,
      "name": "NonExaustiveRemainingAccounts",
      "msg": "Not all player accounts are present"
    },
    {
      "code": 6002,
      "name": "DifferentScale",
      "msg": "Scale is different"
    },
    {
      "code": 6003,
      "name": "PayoutMissmatch",
      "msg": "Payout doesn't match"
    },
    {
      "code": 6004,
      "name": "MediatorPayoutMissmatch",
      "msg": "Payout for mediator is incorrect"
    },
    {
      "code": 6005,
      "name": "ProviderPayoutMissmatch",
      "msg": "Payout for provider is incorrect"
    },
    {
      "code": 6006,
      "name": "LockedChallenge",
      "msg": "Challenge Locked"
    },
    {
      "code": 6007,
      "name": "UnlockedChallenge",
      "msg": "Cannot resolve unlocked Challenge"
    },
    {
      "code": 6008,
      "name": "ChallengeInactive",
      "msg": "Challenge is no longer tracked"
    },
    {
      "code": 6009,
      "name": "ChallengeFull",
      "msg": "Challenge is full"
    },
    {
      "code": 6010,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds"
    },
    {
      "code": 6011,
      "name": "HeaderMissmatch",
      "msg": "Challenge Header Missmatch"
    },
    {
      "code": 6012,
      "name": "NotPaid",
      "msg": "Can't close until all paid"
    },
    {
      "code": 6013,
      "name": "InvalidPool",
      "msg": "Pool is not in provider"
    },
    {
      "code": 6014,
      "name": "InvalidChallenge",
      "msg": "Invalid Challenge"
    },
    {
      "code": 6015,
      "name": "InvalidMint",
      "msg": "Invalid Mint"
    },
    {
      "code": 6016,
      "name": "InvalidMediator",
      "msg": "Invalid Mediator"
    },
    {
      "code": 6017,
      "name": "AlreadyJoined",
      "msg": "Already Joined"
    },
    {
      "code": 6018,
      "name": "AlreadyVerified",
      "msg": "Already Verified"
    },
    {
      "code": 6019,
      "name": "SuperAdmin",
      "msg": "Not Super Admin"
    },
    {
      "code": 6020,
      "name": "ExpectedIssue",
      "msg": "Expected higher than possible"
    },
    {
      "code": 6021,
      "name": "ChallengeExpectedPlayerFull",
      "msg": "Challenge already reached expected player"
    },
    {
      "code": 6022,
      "name": "NeedToBeExpectedPlayer",
      "msg": "Need to be expected player to join challenge"
    },
    {
      "code": 6023,
      "name": "ExpectedPlayerNotInChallenge",
      "msg": "Expected player not part of challenge"
    },
    {
      "code": 6024,
      "name": "ExpectedPlayerNotProvidedToJoin",
      "msg": "Expected player not provided on join"
    },
    {
      "code": 6025,
      "name": "VerifyPayment",
      "msg": "Payment needs to be verified"
    },
    {
      "code": 6026,
      "name": "PaymentAlreadyPaid",
      "msg": "Payment already paid"
    },
    {
      "code": 6027,
      "name": "PoolMismatch",
      "msg": "Pool mismatch"
    },
    {
      "code": 6028,
      "name": "IncorrectPaymentAmount",
      "msg": "Payment doesn't match total entry fees paid"
    },
    {
      "code": 6029,
      "name": "NoPayments",
      "msg": "No payments provided in request"
    },
    {
      "code": 6030,
      "name": "TooManyPayments",
      "msg": "Too many payments were provided"
    },
    {
      "code": 6031,
      "name": "PlayerNotInChallenge",
      "msg": "Player isn't in the challenge"
    },
    {
      "code": 6032,
      "name": "PaymentAlreadyMigrated",
      "msg": "The payment is already migrated"
    },
    {
      "code": 6033,
      "name": "InvalidProof",
      "msg": "Invalid proof"
    },
    {
      "code": 6034,
      "name": "ProofsMissing",
      "msg": "Missing proofs"
    },
    {
      "code": 6035,
      "name": "ProofsAccountLengthMismatch",
      "msg": "Proofs and account count mismatch"
    },
    {
      "code": 6036,
      "name": "VerifiedJoin",
      "msg": "Must be a verified Join"
    },
    {
      "code": 6037,
      "name": "InvalidPlayerPayer",
      "msg": "Invalid player payer"
    },
    {
      "code": 6038,
      "name": "WrongPayoutAccount",
      "msg": "Wrong payout account"
    },
    {
      "code": 6039,
      "name": "PayoutTooLarge",
      "msg": "Payouts larger than entry fee"
    },
    {
      "code": 6040,
      "name": "PaymentAmountNotEqual",
      "msg": "Total payment amount doesn't match expected amount"
    }
  ]
};

export const IDL: Challenge = {
  "version": "0.1.59",
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
          "name": "providerAuthority",
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
          "name": "providerAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentPayer",
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
      "name": "partialResolve",
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
      "name": "startPartialResolve",
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
      "name": "Unauthorized",
      "msg": "You are not admin for this provider"
    },
    {
      "code": 6001,
      "name": "NonExaustiveRemainingAccounts",
      "msg": "Not all player accounts are present"
    },
    {
      "code": 6002,
      "name": "DifferentScale",
      "msg": "Scale is different"
    },
    {
      "code": 6003,
      "name": "PayoutMissmatch",
      "msg": "Payout doesn't match"
    },
    {
      "code": 6004,
      "name": "MediatorPayoutMissmatch",
      "msg": "Payout for mediator is incorrect"
    },
    {
      "code": 6005,
      "name": "ProviderPayoutMissmatch",
      "msg": "Payout for provider is incorrect"
    },
    {
      "code": 6006,
      "name": "LockedChallenge",
      "msg": "Challenge Locked"
    },
    {
      "code": 6007,
      "name": "UnlockedChallenge",
      "msg": "Cannot resolve unlocked Challenge"
    },
    {
      "code": 6008,
      "name": "ChallengeInactive",
      "msg": "Challenge is no longer tracked"
    },
    {
      "code": 6009,
      "name": "ChallengeFull",
      "msg": "Challenge is full"
    },
    {
      "code": 6010,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds"
    },
    {
      "code": 6011,
      "name": "HeaderMissmatch",
      "msg": "Challenge Header Missmatch"
    },
    {
      "code": 6012,
      "name": "NotPaid",
      "msg": "Can't close until all paid"
    },
    {
      "code": 6013,
      "name": "InvalidPool",
      "msg": "Pool is not in provider"
    },
    {
      "code": 6014,
      "name": "InvalidChallenge",
      "msg": "Invalid Challenge"
    },
    {
      "code": 6015,
      "name": "InvalidMint",
      "msg": "Invalid Mint"
    },
    {
      "code": 6016,
      "name": "InvalidMediator",
      "msg": "Invalid Mediator"
    },
    {
      "code": 6017,
      "name": "AlreadyJoined",
      "msg": "Already Joined"
    },
    {
      "code": 6018,
      "name": "AlreadyVerified",
      "msg": "Already Verified"
    },
    {
      "code": 6019,
      "name": "SuperAdmin",
      "msg": "Not Super Admin"
    },
    {
      "code": 6020,
      "name": "ExpectedIssue",
      "msg": "Expected higher than possible"
    },
    {
      "code": 6021,
      "name": "ChallengeExpectedPlayerFull",
      "msg": "Challenge already reached expected player"
    },
    {
      "code": 6022,
      "name": "NeedToBeExpectedPlayer",
      "msg": "Need to be expected player to join challenge"
    },
    {
      "code": 6023,
      "name": "ExpectedPlayerNotInChallenge",
      "msg": "Expected player not part of challenge"
    },
    {
      "code": 6024,
      "name": "ExpectedPlayerNotProvidedToJoin",
      "msg": "Expected player not provided on join"
    },
    {
      "code": 6025,
      "name": "VerifyPayment",
      "msg": "Payment needs to be verified"
    },
    {
      "code": 6026,
      "name": "PaymentAlreadyPaid",
      "msg": "Payment already paid"
    },
    {
      "code": 6027,
      "name": "PoolMismatch",
      "msg": "Pool mismatch"
    },
    {
      "code": 6028,
      "name": "IncorrectPaymentAmount",
      "msg": "Payment doesn't match total entry fees paid"
    },
    {
      "code": 6029,
      "name": "NoPayments",
      "msg": "No payments provided in request"
    },
    {
      "code": 6030,
      "name": "TooManyPayments",
      "msg": "Too many payments were provided"
    },
    {
      "code": 6031,
      "name": "PlayerNotInChallenge",
      "msg": "Player isn't in the challenge"
    },
    {
      "code": 6032,
      "name": "PaymentAlreadyMigrated",
      "msg": "The payment is already migrated"
    },
    {
      "code": 6033,
      "name": "InvalidProof",
      "msg": "Invalid proof"
    },
    {
      "code": 6034,
      "name": "ProofsMissing",
      "msg": "Missing proofs"
    },
    {
      "code": 6035,
      "name": "ProofsAccountLengthMismatch",
      "msg": "Proofs and account count mismatch"
    },
    {
      "code": 6036,
      "name": "VerifiedJoin",
      "msg": "Must be a verified Join"
    },
    {
      "code": 6037,
      "name": "InvalidPlayerPayer",
      "msg": "Invalid player payer"
    },
    {
      "code": 6038,
      "name": "WrongPayoutAccount",
      "msg": "Wrong payout account"
    },
    {
      "code": 6039,
      "name": "PayoutTooLarge",
      "msg": "Payouts larger than entry fee"
    },
    {
      "code": 6040,
      "name": "PaymentAmountNotEqual",
      "msg": "Total payment amount doesn't match expected amount"
    }
  ]
};
