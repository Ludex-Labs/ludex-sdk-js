export type Challenge = {
  "version": "0.1.0",
  "name": "challenge",
  "instructions": [
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
          "type": "u8"
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
          "type": "u8"
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
          "isMut": false,
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
          "name": "playerAuth",
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
            "type": "u8"
          },
          {
            "name": "playersJoined",
            "type": "u8"
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
            "type": "u8"
          },
          {
            "name": "expectedCreated",
            "type": "u8"
          },
          {
            "name": "expectedJoined",
            "type": "u8"
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
    }
  ]
};

export const IDL: Challenge = {
  "version": "0.1.0",
  "name": "challenge",
  "instructions": [
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
          "type": "u8"
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
          "type": "u8"
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
          "isMut": false,
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
          "name": "playerAuth",
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
            "type": "u8"
          },
          {
            "name": "playersJoined",
            "type": "u8"
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
            "type": "u8"
          },
          {
            "name": "expectedCreated",
            "type": "u8"
          },
          {
            "name": "expectedJoined",
            "type": "u8"
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
    }
  ]
};

import * as anchor from '@project-serum/anchor'
import { Program } from '@project-serum/anchor';
import { getAssociatedTokenAddress, NATIVE_MINT, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { _ludexChallengeApi, poll, transferWrappedSol, ApiConfig } from './utils';


export class ChallengeAPIClient {
  ludexChallengeApi: <T>(config: ApiConfig) => Promise<T>
  constructor(apiKey: string) {
    this.ludexChallengeApi = _ludexChallengeApi(apiKey);
  }

  async _apiCreateChallenge(payoutId: number) {
    return this.ludexChallengeApi<{ id: number }>({ method: 'POST', body: JSON.stringify({ payoutId }) });
  }

  async _apiGetChallenge(id: number) {
    return this.ludexChallengeApi<{
      id: number, chainId?: string,
      creatingAt?: string,
      createdAt?: string,
      endedAt?: string,
      lockingAt?: string,
      lockedAt?: string,
      cancelingAt?: string,
      canceledAt?: string,
      resolvingAt?: string,
      resolvedAt?: string,
      verifyingAt?: string,
      verifiedAt?: string,
      redeemingAt?: string,
      redeemedAt?: string,
    }>({ method: 'GET', path: id.toString() });
  }

  async _apiLockChallenge(id: number) {
    await this.ludexChallengeApi({ method: 'HEAD', path: `${id}?action=lock` });
  }

  async _apiCancelChallenge(id: number) {
    await this.ludexChallengeApi({ method: 'HEAD', path: `${id}?action=cancel` });
  }

  async _apiResolveChallenge(id: number, winner: string, lock: boolean = false) {
    await this.ludexChallengeApi({ method: 'HEAD', path: `${id}?action=resolve&winner=${winner}&lock=${lock.toString()}` });
  }

  async create(payoutId: number) {
    const challengeId = (await this._apiCreateChallenge(payoutId)).id;
    const challenge = await poll(() => this._apiGetChallenge(challengeId), ({ chainId }) => chainId !== undefined, 1000);
    return { challengeId, ChainId: challenge.chainId! };
  }

  async lock(id: number, skipConfirmation: boolean = false) {
    await this._apiLockChallenge(id);
    if (!skipConfirmation) {
      await poll(() => this._apiGetChallenge(Number(id)), ({ lockedAt }) => lockedAt === undefined, 1000);
    }
  }

  async cancel(id: number, skipConfirmation: boolean = false) {
    await this._apiCancelChallenge(id);
    if (!skipConfirmation) {
      await poll(() => this._apiGetChallenge(Number(id)), ({ canceledAt }) => canceledAt === undefined, 1000);
    }
  }

  async resolve(id: number, winner: string, skipConfirmation: boolean = false) {
    await this._apiResolveChallenge(id, winner);
    if (!skipConfirmation) {
      await poll(() => this._apiGetChallenge(Number(id)), ({ resolvedAt }) => resolvedAt === undefined, 1000);
    }
  }

  async resolveWithPayment(id: string, payment: { to: string, amount: number }[], skipConfirmation?: boolean) { }
}

export class ChallengeTXClient {
  tx = new anchor.web3.Transaction();
  challengeKey: anchor.web3.PublicKey;
  programAddress: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  constructor(isMainnet: boolean, connection: anchor.web3.Connection, challengeKey: string) {
    this.challengeKey = new anchor.web3.PublicKey(challengeKey);
    this.connection = connection;
    this.programAddress = new anchor.web3.PublicKey(isMainnet ? "BuPvutSnk9NdTZHFiA6UZm6oPwGszp6ozMwoAgJMDBGR"
      : "CoiJYvDgj8BqQr8MEBjyXKfsQFrYQSYdwEuzjivE2D7");
  }

  async join(_user: string) {
    const program = new Program<Challenge>(
      IDL,
      this.programAddress,
    );
    const user = new anchor.web3.PublicKey(_user);
    const [player, _pbump] = await anchor.web3.PublicKey.findProgramAddress(
      [
        this.challengeKey.toBuffer(),
        user.toBuffer(),
      ],
      this.programAddress
    );

    const challenge = await program.account.challenge.fetch(this.challengeKey);
    const pool = await program.account.pool.fetch(challenge.pool);
    const provider = await program.account.provider.fetch(challenge.provider);
    let userTokenAccount: anchor.web3.PublicKey;

    userTokenAccount = await getAssociatedTokenAddress(user, pool.mint);
    if (pool.mint === NATIVE_MINT) {
      transferWrappedSol(user, userTokenAccount, challenge.entryFee.toNumber(), this.tx);
    }

    this.tx.add(await program.methods.join().accounts({
      provider: challenge.provider,
      pool: challenge.pool,
      poolTokenAccount: pool.tokenAccount,
      challenge: this.challengeKey,
      player: player,
      providerAuthority: provider.authority,
      user: user,
      userTokenAccount: userTokenAccount,
      payer: user,
      mint: pool.mint,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: anchor.web3.SystemProgram.programId
    }).instruction());

    return this;
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