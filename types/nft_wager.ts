export type NftWager = {
  "version": "0.1.0",
  "name": "nft_wager",
  "instructions": [
    {
      "name": "initializeProvider",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "manager",
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
      ],
      "returns": null
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
        }
      ],
      "returns": null
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
          "name": "manager",
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
      "args": [],
      "returns": null
    },
    {
      "name": "addOffering",
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
      ],
      "returns": null
    },
    {
      "name": "removeOffering",
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
      "args": [],
      "returns": null
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
      "args": [],
      "returns": null
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
      ],
      "returns": null
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
      "args": [],
      "returns": null
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
      "args": [],
      "returns": null
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
      "args": [],
      "returns": null
    }
  ],
  "accounts": [
    {
      "name": "manager",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "feeVault",
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
            "name": "manager",
            "type": "publicKey"
          },
          {
            "name": "mediator",
            "type": "publicKey"
          },
          {
            "name": "limit",
            "type": "u8"
          },
          {
            "name": "currentAmountJoined",
            "type": "u8"
          },
          {
            "name": "ready",
            "type": "bool"
          },
          {
            "name": "offerings",
            "type": "u8"
          },
          {
            "name": "playersAccepted",
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
            "name": "game",
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
            "name": "tokenAccount",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "selfBump",
            "type": "u8"
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
            "name": "game",
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
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not admin for this provider"
    },
    {
      "code": 6001,
      "name": "NotPaidYet",
      "msg": "Not all of the payments have been paid yet"
    },
    {
      "code": 6002,
      "name": "PaymentOfferingMissmatch",
      "msg": "Payment and offering Missmatch"
    },
    {
      "code": 6003,
      "name": "IncorrectNftDestination",
      "msg": "Nft destination incorrect"
    },
    {
      "code": 6004,
      "name": "PublicKeyMismatch",
      "msg": "PublicKey Mismatch"
    }
  ]
};

export const IDL: NftWager = {
  "version": "0.1.0",
  "name": "nft_wager",
  "instructions": [
    {
      "name": "initializeProvider",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "manager",
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
      ],
      "returns": null
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
        }
      ],
      "returns": null
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
          "name": "manager",
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
      "args": [],
      "returns": null
    },
    {
      "name": "addOffering",
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
      ],
      "returns": null
    },
    {
      "name": "removeOffering",
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
      "args": [],
      "returns": null
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
      "args": [],
      "returns": null
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
      ],
      "returns": null
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
      "args": [],
      "returns": null
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
      "args": [],
      "returns": null
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
      "args": [],
      "returns": null
    }
  ],
  "accounts": [
    {
      "name": "manager",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "feeVault",
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
            "name": "manager",
            "type": "publicKey"
          },
          {
            "name": "mediator",
            "type": "publicKey"
          },
          {
            "name": "limit",
            "type": "u8"
          },
          {
            "name": "currentAmountJoined",
            "type": "u8"
          },
          {
            "name": "ready",
            "type": "bool"
          },
          {
            "name": "offerings",
            "type": "u8"
          },
          {
            "name": "playersAccepted",
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
            "name": "game",
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
            "name": "tokenAccount",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "selfBump",
            "type": "u8"
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
            "name": "game",
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
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not admin for this provider"
    },
    {
      "code": 6001,
      "name": "NotPaidYet",
      "msg": "Not all of the payments have been paid yet"
    },
    {
      "code": 6002,
      "name": "PaymentOfferingMissmatch",
      "msg": "Payment and offering Missmatch"
    },
    {
      "code": 6003,
      "name": "IncorrectNftDestination",
      "msg": "Nft destination incorrect"
    },
    {
      "code": 6004,
      "name": "PublicKeyMismatch",
      "msg": "PublicKey Mismatch"
    }
  ]
};
