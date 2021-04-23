const ABI = [
  {
    constant: false,
    inputs: [
      {
        name: "_myAddress",
        type: "address",
      },
    ],
    name: "getNum",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setNum",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "num",
        type: "uint256",
      },
      {
        indexed: false,
        name: "sender",
        type: "address",
      },
    ],
    name: "numberAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "num",
        type: "uint256",
      },
      {
        indexed: false,
        name: "sender",
        type: "address",
      },
    ],
    name: "numberGot",
    type: "event",
  },
];

const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";

export { ABI, contractAddress };
