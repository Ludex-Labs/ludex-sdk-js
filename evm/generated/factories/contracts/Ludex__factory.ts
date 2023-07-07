/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Ludex, LudexInterface } from "../../contracts/Ludex";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_mediator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenType",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_entryAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_providerAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_mediatorAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ludexId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_verified",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_out",
        type: "uint256",
      },
    ],
    name: "createFtWager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_mediator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_entryAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_providerAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_mediatorAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ludexId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_verified",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_out",
        type: "uint256",
      },
    ],
    name: "createNativeWager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ftwagers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nativeChallenges",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "updateFtPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum UpdateOperation",
        name: "ftupdate",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_tokenType",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "updateFtWager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_native_pool",
        type: "address",
      },
    ],
    name: "updateNativePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum UpdateOperation",
        name: "nativeUpdate",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "updateNativeWager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5061001d610022565b6100e2565b600054610100900460ff161561008e5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100e0576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b608051611b7d61011960003960008181610695015281816106d50152818161075e0152818161079e01526108160152611b7d6000f3fe6080604052600436106100ef5760003560e01c806301ffc9a7146100f45780630226021c146101295780631bba11b91461014b578063248a9ca31461016b5780632a0acc6a146101995780632f2ff15d146101bb57806336568abe146101db5780633659cfe6146101fb5780634f1ef2861461021b57806352d1902d1461022e57806354e4af3f146102435780635c0218161461027b5780638129fc1c146102b15780638af77615146102c65780638de3f9ff146102e657806391d1485414610306578063a217fddf14610326578063d547741f1461033b578063dce5363b1461035b578063e0c075d11461037b575b600080fd5b34801561010057600080fd5b5061011461010f366004611511565b61039b565b60405190151581526020015b60405180910390f35b34801561013557600080fd5b50610149610144366004611565565b6103d2565b005b34801561015757600080fd5b50610149610166366004611601565b6104dc565b34801561017757600080fd5b5061018b61018636600461162b565b6105db565b604051908152602001610120565b3480156101a557600080fd5b5061018b600080516020611b2883398151915281565b3480156101c757600080fd5b506101496101d6366004611644565b6105f0565b3480156101e757600080fd5b506101496101f6366004611644565b61060c565b34801561020757600080fd5b50610149610216366004611674565b61068a565b6101496102293660046116a7565b610753565b34801561023a57600080fd5b5061018b610809565b34801561024f57600080fd5b5060fc54610263906001600160a01b031681565b6040516001600160a01b039091168152602001610120565b34801561028757600080fd5b50610263610296366004611674565b60fb602052600090815260409020546001600160a01b031681565b3480156102bd57600080fd5b506101496108b7565b3480156102d257600080fd5b506101496102e1366004611674565b6109f9565b3480156102f257600080fd5b5061014961030136600461176a565b610a34565b34801561031257600080fd5b50610114610321366004611644565b610b6c565b34801561033257600080fd5b5061018b600081565b34801561034757600080fd5b50610149610356366004611644565b610b97565b34801561036757600080fd5b506101496103763660046117a9565b610bb3565b34801561038757600080fd5b506101496103963660046117d7565b610cd0565b60006001600160e01b03198216637965db0b60e01b14806103cc57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600080516020611b288339815191526103ea81610db6565b6001600160a01b038a8116600090815260fb60205260409020541661044b5760405162461bcd60e51b815260206004820152601260248201527146745761676572506f6f6c2065786973747360701b60448201526064015b60405180910390fd5b6001600160a01b03808b16600090815260fb602052604090819020549051633e00524b60e21b8152911690819063f801492c9061049c908f908e908e908e908e908e908e908e908e90600401611850565b600060405180830381600087803b1580156104b657600080fd5b505af11580156104ca573d6000803e3d6000fd5b50505050505050505050505050505050565b600080516020611b288339815191526104f481610db6565b60008360018111156105085761050861189c565b14156105745760fc546040516301670ba960e01b8152600481018490526001600160a01b039091169081906301670ba990602401600060405180830381600087803b15801561055657600080fd5b505af115801561056a573d6000803e3d6000fd5b5050505050505050565b60018360018111156105885761058861189c565b14156105d65760fc5460405163c4d252f560e01b8152600481018490526001600160a01b0390911690819063c4d252f590602401600060405180830381600087803b15801561055657600080fd5b505050565b60009081526065602052604090206001015490565b6105f9826105db565b61060281610db6565b6105d68383610dc0565b6001600160a01b038116331461067c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610442565b6106868282610e46565b5050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106d35760405162461bcd60e51b8152600401610442906118b2565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610705610ead565b6001600160a01b03161461072b5760405162461bcd60e51b8152600401610442906118ec565b61073481610ec9565b6040805160008082526020820190925261075091839190610ee1565b50565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561079c5760405162461bcd60e51b8152600401610442906118b2565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107ce610ead565b6001600160a01b0316146107f45760405162461bcd60e51b8152600401610442906118ec565b6107fd82610ec9565b61068682826001610ee1565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108a45760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c6044820152771b1959081d1a1c9bdd59da0819195b1959d85d1958d85b1b60421b6064820152608401610442565b50600080516020611ae183398151915290565b600054610100900460ff16158080156108d75750600054600160ff909116105b806108f857506108e63061105b565b1580156108f8575060005460ff166001145b61095b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610442565b6000805460ff19166001179055801561097e576000805461ff0019166101001790555b61098661106a565b61098e61106a565b6109996000336110d7565b6109b1600080516020611b28833981519152336110d7565b8015610750576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b600080516020611b28833981519152610a1181610db6565b5060fc80546001600160a01b0319166001600160a01b0392909216919091179055565b600080516020611b28833981519152610a4c81610db6565b6000846001811115610a6057610a6061189c565b1415610adb576001600160a01b03838116600090815260fb6020526040908190205490516301670ba960e01b81526004810185905291169081906301670ba990602401600060405180830381600087803b158015610abd57600080fd5b505af1158015610ad1573d6000803e3d6000fd5b5050505050610b66565b6001846001811115610aef57610aef61189c565b1415610b66576001600160a01b03838116600090815260fb60205260409081902054905163c4d252f560e01b815260048101859052911690819063c4d252f590602401600060405180830381600087803b158015610b4c57600080fd5b505af1158015610b60573d6000803e3d6000fd5b50505050505b50505050565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b610ba0826105db565b610ba981610db6565b6105d68383610e46565b600080516020611b28833981519152610bcb81610db6565b6000829050806001600160a01b03166321df0da76040518163ffffffff1660e01b815260040160206040518083038186803b158015610c0957600080fd5b505afa158015610c1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c419190611926565b6001600160a01b0316846001600160a01b031614610c9f5760405162461bcd60e51b815260206004820152601b60248201527a0e8ded6cadc82c8c8e4cae6e640c8decae640dcdee840dac2e8c6d602b1b6044820152606401610442565b6001600160a01b03938416600090815260fb6020526040902080546001600160a01b03191691909416179092555050565b600080516020611b28833981519152610ce881610db6565b60fc546001600160a01b0316610d355760405162461bcd60e51b81526020600482015260126024820152714e617469766520506f6f6c2065786973747360701b6044820152606401610442565b60fc54604051633e00524b60e21b81526001600160a01b0390911690819063f801492c90610d77908e908e908e908e908e908e908e908e908e90600401611850565b600060405180830381600087803b158015610d9157600080fd5b505af1158015610da5573d6000803e3d6000fd5b505050505050505050505050505050565b61075081336110e1565b610dca8282610b6c565b6106865760008281526065602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610e023390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610e508282610b6c565b156106865760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600080516020611ae1833981519152546001600160a01b031690565b600080516020611b2883398151915261068681610db6565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610f14576105d683611145565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f4d57600080fd5b505afa925050508015610f7d575060408051601f3d908101601f19168201909252610f7a91810190611943565b60015b610fe05760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610442565b600080516020611ae1833981519152811461104f5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610442565b506105d68383836111df565b6001600160a01b03163b151590565b600054610100900460ff166110d55760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610442565b565b6106868282610dc0565b6110eb8282610b6c565b61068657611103816001600160a01b03166014611204565b61110e836020611204565b60405160200161111f929190611988565b60408051601f198184030181529082905262461bcd60e51b8252610442916004016119f7565b61114e8161105b565b6111b05760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610442565b600080516020611ae183398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6111e8836113a6565b6000825111806111f55750805b156105d657610b6683836113e6565b60606000611213836002611a40565b61121e906002611a5f565b6001600160401b0381111561123557611235611691565b6040519080825280601f01601f19166020018201604052801561125f576020820181803683370190505b509050600360fc1b8160008151811061127a5761127a611a77565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106112a9576112a9611a77565b60200101906001600160f81b031916908160001a90535060006112cd846002611a40565b6112d8906001611a5f565b90505b6001811115611350576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061130c5761130c611a77565b1a60f81b82828151811061132257611322611a77565b60200101906001600160f81b031916908160001a90535060049490941c9361134981611a8d565b90506112db565b50831561139f5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610442565b9392505050565b6113af81611145565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606113f18361105b565b61144c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610442565b600080846001600160a01b0316846040516114679190611aa4565b600060405180830381855af49150503d80600081146114a2576040519150601f19603f3d011682016040523d82523d6000602084013e6114a7565b606091505b50915091506114cf8282604051806060016040528060278152602001611b01602791396114d8565b95945050505050565b606083156114e757508161139f565b8251156114f75782518084602001fd5b8160405162461bcd60e51b815260040161044291906119f7565b60006020828403121561152357600080fd5b81356001600160e01b03198116811461139f57600080fd5b6001600160a01b038116811461075057600080fd5b8035801515811461156057600080fd5b919050565b6000806000806000806000806000806101408b8d03121561158557600080fd5b8a356115908161153b565b995060208b01356115a08161153b565b985060408b0135975060608b0135965060808b0135955060a08b0135945060c08b0135935060e08b013592506115d96101008c01611550565b91506101208b013590509295989b9194979a5092959850565b80356002811061156057600080fd5b6000806040838503121561161457600080fd5b61161d836115f2565b946020939093013593505050565b60006020828403121561163d57600080fd5b5035919050565b6000806040838503121561165757600080fd5b8235915060208301356116698161153b565b809150509250929050565b60006020828403121561168657600080fd5b813561139f8161153b565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156116ba57600080fd5b82356116c58161153b565b915060208301356001600160401b03808211156116e157600080fd5b818501915085601f8301126116f557600080fd5b81358181111561170757611707611691565b604051601f8201601f19908116603f0116810190838211818310171561172f5761172f611691565b8160405282815288602084870101111561174857600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060006060848603121561177f57600080fd5b611788846115f2565b925060208401356117988161153b565b929592945050506040919091013590565b600080604083850312156117bc57600080fd5b82356117c78161153b565b915060208301356116698161153b565b60008060008060008060008060006101208a8c0312156117f657600080fd5b89356118018161153b565b985060208a0135975060408a0135965060608a0135955060808a0135945060a08a0135935060c08a0135925061183960e08b01611550565b91506101008a013590509295985092959850929598565b6001600160a01b03999099168952602089019790975260408801959095526060870193909352608086019190915260a085015260c0840152151560e08301526101008201526101200190565b634e487b7160e01b600052602160045260246000fd5b6020808252602c90820152600080516020611ac183398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c90820152600080516020611ac183398151915260408201526b6163746976652070726f787960a01b606082015260800190565b60006020828403121561193857600080fd5b815161139f8161153b565b60006020828403121561195557600080fd5b5051919050565b60005b8381101561197757818101518382015260200161195f565b83811115610b665750506000910152565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8152600083516119ba81601785016020880161195c565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516119eb81602884016020880161195c565b01602801949350505050565b6020815260008251806020840152611a1681604085016020870161195c565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611a5a57611a5a611a2a565b500290565b60008219821115611a7257611a72611a2a565b500190565b634e487b7160e01b600052603260045260246000fd5b600081611a9c57611a9c611a2a565b506000190190565b60008251611ab681846020870161195c565b919091019291505056fe46756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a2646970667358221220db7ceced8e87965e18db3838ad34c7bf262f565f51732b6071e509ef9460049164736f6c63430008090033";

type LudexConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LudexConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ludex__factory extends ContractFactory {
  constructor(...args: LudexConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Ludex> {
    return super.deploy(overrides || {}) as Promise<Ludex>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Ludex {
    return super.attach(address) as Ludex;
  }
  override connect(signer: Signer): Ludex__factory {
    return super.connect(signer) as Ludex__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LudexInterface {
    return new utils.Interface(_abi) as LudexInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ludex {
    return new Contract(address, _abi, signerOrProvider) as Ludex;
  }
}
