export type DoubleSystem = {
  "version": "0.1.0",
  "name": "double_system",
  "constants": [
    {
      "name": "TOKEN_VAULT_SEED",
      "type": "bytes",
      "value": "[84, 79, 75, 69, 78, 95, 86, 65, 85, 76, 84, 95, 83, 69, 69, 68]"
    }
  ],
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
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
      "name": "withdrawToken",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenOwnerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
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
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "transferOwnership",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newOwner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setMaxAmount",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setPonzify",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ponzify",
          "type": "bool"
        }
      ]
    },
    {
      "name": "setDoubleToken",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "doubleToken",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
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
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "doubleToken",
            "type": "publicKey"
          },
          {
            "name": "maxAmount",
            "type": "u64"
          },
          {
            "name": "ponzify",
            "type": "bool"
          },
          {
            "name": "tokenAmount",
            "type": "u64"
          },
          {
            "name": "records",
            "type": {
              "vec": {
                "defined": "Record"
              }
            }
          },
          {
            "name": "lastPayIndex",
            "type": "u32"
          },
          {
            "name": "totalDepositers",
            "type": "u32"
          },
          {
            "name": "lastPayoutDate",
            "type": "i64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Record",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidOwner",
      "msg": "Invalid owner."
    },
    {
      "code": 6001,
      "name": "InsufficientBalance",
      "msg": "The amount is not enoguh."
    },
    {
      "code": 6002,
      "name": "DisMatchToken",
      "msg": "The token is not matched."
    },
    {
      "code": 6003,
      "name": "InvalidValue",
      "msg": "The max amount is invalid."
    },
    {
      "code": 6004,
      "name": "OverMaxAmount",
      "msg": "The amount should be less then max amount."
    },
    {
      "code": 6005,
      "name": "InvalidReceiver",
      "msg": "The receiver is invalid."
    },
    {
      "code": 6006,
      "name": "InvalidToken",
      "msg": "The token is invalid."
    }
  ]
};

export const IDL: DoubleSystem = {
  "version": "0.1.0",
  "name": "double_system",
  "constants": [
    {
      "name": "TOKEN_VAULT_SEED",
      "type": "bytes",
      "value": "[84, 79, 75, 69, 78, 95, 86, 65, 85, 76, 84, 95, 83, 69, 69, 68]"
    }
  ],
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
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
      "name": "withdrawToken",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenOwnerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
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
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "transferOwnership",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newOwner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setMaxAmount",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setPonzify",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ponzify",
          "type": "bool"
        }
      ]
    },
    {
      "name": "setDoubleToken",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "doubleToken",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "receiverTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultAccount",
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
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "doubleToken",
            "type": "publicKey"
          },
          {
            "name": "maxAmount",
            "type": "u64"
          },
          {
            "name": "ponzify",
            "type": "bool"
          },
          {
            "name": "tokenAmount",
            "type": "u64"
          },
          {
            "name": "records",
            "type": {
              "vec": {
                "defined": "Record"
              }
            }
          },
          {
            "name": "lastPayIndex",
            "type": "u32"
          },
          {
            "name": "totalDepositers",
            "type": "u32"
          },
          {
            "name": "lastPayoutDate",
            "type": "i64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Record",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidOwner",
      "msg": "Invalid owner."
    },
    {
      "code": 6001,
      "name": "InsufficientBalance",
      "msg": "The amount is not enoguh."
    },
    {
      "code": 6002,
      "name": "DisMatchToken",
      "msg": "The token is not matched."
    },
    {
      "code": 6003,
      "name": "InvalidValue",
      "msg": "The max amount is invalid."
    },
    {
      "code": 6004,
      "name": "OverMaxAmount",
      "msg": "The amount should be less then max amount."
    },
    {
      "code": 6005,
      "name": "InvalidReceiver",
      "msg": "The receiver is invalid."
    },
    {
      "code": 6006,
      "name": "InvalidToken",
      "msg": "The token is invalid."
    }
  ]
};
