export type NftChallenge = {
  "version": "0.1.95",
  "name": "nft_challenge",
  "instructions": [
    {
      "name": "getVersion",
      "accounts": [],
      "args": [],
      "returns": "string"
    },
    {
      "name": "initializeProvider",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "provider",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "feeVault",
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
          "name": "fee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateManager",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "manager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeVault",
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
          "name": "fee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createChallenge",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "manager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mediator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mediatorVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        },
        {
          "name": "fee",
          "type": "u64"
        },
        {
          "name": "mediatorFee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "join",
      "accounts": [
        {
          "name": "playerAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mediatorVault",
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
        }
      ],
      "args": []
    },
    {
      "name": "addEscrowlessOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
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
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addEscrowedOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offeringTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
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
        },
        {
          "name": "associatedTokenProgram",
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
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addSolOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
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
        }
      ]
    },
    {
      "name": "removeEscrowlessOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
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
      "name": "removeEscrowedOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offeringTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
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
      "name": "removeSolOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
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
      "name": "accept",
      "accounts": [
        {
          "name": "playerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": true,
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
      "name": "createPayment",
      "accounts": [
        {
          "name": "mediator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "manager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
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
            "vec": {
              "defined": "PaymentArg"
            }
          }
        }
      ]
    },
    {
      "name": "createCancelPayment",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "manager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
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
            "vec": {
              "defined": "PaymentArg"
            }
          }
        }
      ]
    },
    {
      "name": "verifyPayment",
      "accounts": [
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenOriginAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenDestinationAccount",
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
      "name": "verifySolPayment",
      "accounts": [
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reciever",
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
      "name": "redeem",
      "accounts": [
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
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTokenOriginAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTokenAccountDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAuthority",
          "isMut": true,
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
      "name": "redeemSol",
      "accounts": [
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAuthority",
          "isMut": true,
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
          "name": "manager",
          "isMut": false,
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
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gamePayer",
          "isMut": true,
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
      "name": "manager",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "fee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "provider",
            "type": "publicKey"
          },
          {
            "name": "mediator",
            "type": "publicKey"
          },
          {
            "name": "playersLimit",
            "type": "u8"
          },
          {
            "name": "currentNumberJoined",
            "type": "u8"
          },
          {
            "name": "ready",
            "type": "bool"
          },
          {
            "name": "offeringsCount",
            "type": "u8"
          },
          {
            "name": "playersAccepted",
            "type": "u8"
          },
          {
            "name": "mediatorVault",
            "type": "publicKey"
          },
          {
            "name": "fee",
            "type": "u64"
          },
          {
            "name": "mediatorFee",
            "type": "u64"
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
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "accepted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "offering",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "offeringTokenAccount",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "mint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "isEscrowed",
            "type": "bool"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "selfBump",
            "type": "u8"
          },
          {
            "name": "playerTokenAccount",
            "type": {
              "option": "publicKey"
            }
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
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "payments",
            "type": {
              "vec": {
                "defined": "Payment"
              }
            }
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
            "name": "offering",
            "type": "publicKey"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "winner",
            "type": "publicKey"
          },
          {
            "name": "verify",
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
            "name": "offering",
            "type": "publicKey"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "winner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
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
      "name": "MediatorUnauthorizedChallenge",
      "msg": "The mediator is not authorized for this challenge"
    },
    {
      "code": 6200,
      "name": "ChallengeNotAccepted",
      "msg": "Challenge hasn't been accepted by all the players"
    },
    {
      "code": 6201,
      "name": "ChallengeFull",
      "msg": "Challenge is full"
    },
    {
      "code": 6220,
      "name": "InvalidPlayerTokenAccount",
      "msg": "The provided player token account does not match"
    },
    {
      "code": 6221,
      "name": "PlayerUnauthorized",
      "msg": "The signer doesn't have the authority over the player"
    },
    {
      "code": 6222,
      "name": "PlayerAlreadyAccepted",
      "msg": "The player has already accepted"
    },
    {
      "code": 6223,
      "name": "PlayerGameMissmatch",
      "msg": "The player and game don't match"
    },
    {
      "code": 6230,
      "name": "Escrowed",
      "msg": "Offering is escrowed"
    },
    {
      "code": 6231,
      "name": "NotEscrowed",
      "msg": "Offering is not escrowed"
    },
    {
      "code": 6232,
      "name": "NotFreezable",
      "msg": "Is not freezable"
    },
    {
      "code": 6240,
      "name": "NotPaidYet",
      "msg": "Not all of the payments have been paid yet"
    },
    {
      "code": 6241,
      "name": "PaymentOfferingMissmatch",
      "msg": "Payment and offering Missmatch"
    },
    {
      "code": 6242,
      "name": "IncorrectNftDestination",
      "msg": "Nft destination incorrect"
    },
    {
      "code": 6243,
      "name": "InvalidDestination",
      "msg": "Asset destination incorrect"
    },
    {
      "code": 6244,
      "name": "IsNotSolOffering",
      "msg": "Is not sol offering"
    },
    {
      "code": 6245,
      "name": "PublicKeyMismatch",
      "msg": "PublicKey Mismatch"
    }
  ]
};

export const IDL: NftChallenge = {
  "version": "0.1.95",
  "name": "nft_challenge",
  "instructions": [
    {
      "name": "getVersion",
      "accounts": [],
      "args": [],
      "returns": "string"
    },
    {
      "name": "initializeProvider",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "provider",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "feeVault",
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
          "name": "fee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateManager",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "manager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeVault",
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
          "name": "fee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createChallenge",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "manager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mediator",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mediatorVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        },
        {
          "name": "fee",
          "type": "u64"
        },
        {
          "name": "mediatorFee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "join",
      "accounts": [
        {
          "name": "playerAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "provider",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mediatorVault",
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
        }
      ],
      "args": []
    },
    {
      "name": "addEscrowlessOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
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
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addEscrowedOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offeringTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
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
        },
        {
          "name": "associatedTokenProgram",
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
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addSolOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
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
        }
      ]
    },
    {
      "name": "removeEscrowlessOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
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
      "name": "removeEscrowedOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offeringTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
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
      "name": "removeSolOffering",
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
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
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
      "name": "accept",
      "accounts": [
        {
          "name": "playerAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": true,
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
      "name": "createPayment",
      "accounts": [
        {
          "name": "mediator",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "manager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
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
            "vec": {
              "defined": "PaymentArg"
            }
          }
        }
      ]
    },
    {
      "name": "createCancelPayment",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "manager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payment",
          "isMut": true,
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
            "vec": {
              "defined": "PaymentArg"
            }
          }
        }
      ]
    },
    {
      "name": "verifyPayment",
      "accounts": [
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenOriginAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftTokenDestinationAccount",
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
      "name": "verifySolPayment",
      "accounts": [
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "reciever",
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
      "name": "redeem",
      "accounts": [
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
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTokenOriginAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTokenAccountDestination",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAuthority",
          "isMut": true,
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
      "name": "redeemSol",
      "accounts": [
        {
          "name": "payment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offering",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "player",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "playerAuthority",
          "isMut": true,
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
          "name": "manager",
          "isMut": false,
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
          "name": "game",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gamePayer",
          "isMut": true,
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
      "name": "manager",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "fee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "provider",
            "type": "publicKey"
          },
          {
            "name": "mediator",
            "type": "publicKey"
          },
          {
            "name": "playersLimit",
            "type": "u8"
          },
          {
            "name": "currentNumberJoined",
            "type": "u8"
          },
          {
            "name": "ready",
            "type": "bool"
          },
          {
            "name": "offeringsCount",
            "type": "u8"
          },
          {
            "name": "playersAccepted",
            "type": "u8"
          },
          {
            "name": "mediatorVault",
            "type": "publicKey"
          },
          {
            "name": "fee",
            "type": "u64"
          },
          {
            "name": "mediatorFee",
            "type": "u64"
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
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "accepted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "offering",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "offeringTokenAccount",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "mint",
            "type": {
              "option": "publicKey"
            }
          },
          {
            "name": "isEscrowed",
            "type": "bool"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "selfBump",
            "type": "u8"
          },
          {
            "name": "playerTokenAccount",
            "type": {
              "option": "publicKey"
            }
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
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "payments",
            "type": {
              "vec": {
                "defined": "Payment"
              }
            }
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
            "name": "offering",
            "type": "publicKey"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "winner",
            "type": "publicKey"
          },
          {
            "name": "verify",
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
            "name": "offering",
            "type": "publicKey"
          },
          {
            "name": "player",
            "type": "publicKey"
          },
          {
            "name": "winner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
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
      "name": "MediatorUnauthorizedChallenge",
      "msg": "The mediator is not authorized for this challenge"
    },
    {
      "code": 6200,
      "name": "ChallengeNotAccepted",
      "msg": "Challenge hasn't been accepted by all the players"
    },
    {
      "code": 6201,
      "name": "ChallengeFull",
      "msg": "Challenge is full"
    },
    {
      "code": 6220,
      "name": "InvalidPlayerTokenAccount",
      "msg": "The provided player token account does not match"
    },
    {
      "code": 6221,
      "name": "PlayerUnauthorized",
      "msg": "The signer doesn't have the authority over the player"
    },
    {
      "code": 6222,
      "name": "PlayerAlreadyAccepted",
      "msg": "The player has already accepted"
    },
    {
      "code": 6223,
      "name": "PlayerGameMissmatch",
      "msg": "The player and game don't match"
    },
    {
      "code": 6230,
      "name": "Escrowed",
      "msg": "Offering is escrowed"
    },
    {
      "code": 6231,
      "name": "NotEscrowed",
      "msg": "Offering is not escrowed"
    },
    {
      "code": 6232,
      "name": "NotFreezable",
      "msg": "Is not freezable"
    },
    {
      "code": 6240,
      "name": "NotPaidYet",
      "msg": "Not all of the payments have been paid yet"
    },
    {
      "code": 6241,
      "name": "PaymentOfferingMissmatch",
      "msg": "Payment and offering Missmatch"
    },
    {
      "code": 6242,
      "name": "IncorrectNftDestination",
      "msg": "Nft destination incorrect"
    },
    {
      "code": 6243,
      "name": "InvalidDestination",
      "msg": "Asset destination incorrect"
    },
    {
      "code": 6244,
      "name": "IsNotSolOffering",
      "msg": "Is not sol offering"
    },
    {
      "code": 6245,
      "name": "PublicKeyMismatch",
      "msg": "PublicKey Mismatch"
    }
  ]
};
