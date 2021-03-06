const cfg = {
    // 助记词
    mnemonic: "air shuffle bunker donkey switch test sleep expand check pigeon group series",
    // 账户1
    account1Address: "0x81ADd5ADa6cc125FFFaAD083c86379EFFc884E46",
    account1PrivateKey: "ecc192784daada218c2d2dc80602b07271e028a64304f9ad1c474a138914a5c4",
    // 账户2
    account2Address: "0x4625607f780224015cAbcDB020A4a2e51D79215D",
    account2PrivateKey: "eefe731e1df1403579e0792321740454fe43e1dadb0fbe08c579e69a67a094fe",

    rinkeby: "https://rinkeby.infura.io/v3/9ff3f9cf5a3b410c8d784b2c8400627c",  // infura 测试网
    mainnet: "https://mainnet.infura.io/v3/9ff3f9cf5a3b410c8d784b2c8400627c",  // infura 主网

    transactionHash: "0x34f64bc8b5a357e50ca97bffd1b13e2e6738e7015dbf3b089ce55e51dc7c8d18",  // 测试交易hash

    testPrivateKey: "a78c833ce8b5d8d1310741c8a92e199aea02d40ce6cf68603228a0971c6f490c",
    testPublicKey: "7a21837ff6769749de8973f3310726fa1b2c44a2e34a15f7f525695149f4b22fad602ba62f313563a5dcdcd450067c8398d1f7aeac2b49bdbabd374cda79a283",
    testMnemonic : "shoulder rude reward surprise jungle say skull fire early jeans silly donate",
};

const wallet = {
    RESTORE_WALLET_TYPE_MNEMONIC: 0,    // 通过助记词恢复钱包
    RESTORE_WALLET_TYPE_PRIVATE_KEY: 1, // 通过私钥恢复钱包
    RESTORE_WALLET_TYPE_KEY_STORE: 2,   // 通过keystore恢复钱包
};

const contract = {
    address: "0x34a6DF640AEfECE1bda1E300c9936f817E7eBFb8",
    abi: [
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{"name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}],
            "name": "approve",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "transferFrom",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [{"name": "", "type": "uint8"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{"name": "amount", "type": "uint256"}],
            "name": "withdrawEther",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{"name": "_value", "type": "uint256"}],
            "name": "burn",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{"name": "_value", "type": "uint256"}],
            "name": "unfreeze",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "balanceOf",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [{"name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{"name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "freezeOf",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{"name": "_value", "type": "uint256"}],
            "name": "freeze",
            "outputs": [{"name": "success", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"}],
            "name": "allowance",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{"name": "initialSupply", "type": "uint256"}, {
                "name": "tokenName",
                "type": "string"
            }, {"name": "decimalUnits", "type": "uint8"}, {"name": "tokenSymbol", "type": "string"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {"payable": true, "stateMutability": "payable", "type": "fallback"},
        {
            "anonymous": false, "inputs": [{"indexed": true, "name": "from", "type": "address"},
                {"indexed": true, "name": "to", "type": "address"}, {
                    "indexed": false,
                    "name": "value",
                    "type": "uint256"
                }], "name": "Transfer", "type": "event"
        },
        {
            "anonymous": false, "inputs": [{"indexed": true, "name": "from", "type": "address"},
                {"indexed": false, "name": "value", "type": "uint256"}], "name": "Burn", "type": "event"
        },
        {
            "anonymous": false, "inputs": [{"indexed": true, "name": "from", "type": "address"},
                {"indexed": false, "name": "value", "type": "uint256"}], "name": "Freeze", "type": "event"
        }, {
            "anonymous": false, "inputs": [{"indexed": true, "name": "from", "type": "address"},
                {"indexed": false, "name": "value", "type": "uint256"}], "name": "Unfreeze", "type": "event"
        }],
    code : "60806040523480156200001157600080fd5b506040516200174a3803806200174a8339810180604052810190808051906020019092919080518201929190602001805190602001909291908051820192919050505083600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550836003819055508260009080519060200190620000b792919062000137565b508060019080519060200190620000d092919062000137565b5081600260006101000a81548160ff021916908360ff16021790555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050620001e6565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017a57805160ff1916838001178555620001ab565b82800160010185558215620001ab579182015b82811115620001aa5782518255916020019190600101906200018d565b5b509050620001ba9190620001be565b5090565b620001e391905b80821115620001df576000816000905550600101620001c5565b5090565b90565b61155480620001f66000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100dd578063095ea7b31461016d57806318160ddd146101d257806323b872dd146101fd578063313ce567146102825780633bed33ce146102b357806342966c68146102e05780636623fc461461032557806370a082311461036a5780638da5cb5b146103c157806395d89b4114610418578063a9059cbb146104a8578063cd4217c1146104f5578063d7a78db81461054c578063dd62ed3e14610591575b005b3480156100e957600080fd5b506100f2610608565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610132578082015181840152602081019050610117565b50505050905090810190601f16801561015f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017957600080fd5b506101b8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106a6565b604051808215151515815260200191505060405180910390f35b3480156101de57600080fd5b506101e7610741565b6040518082815260200191505060405180910390f35b34801561020957600080fd5b50610268600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610747565b604051808215151515815260200191505060405180910390f35b34801561028e57600080fd5b50610297610b6b565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102bf57600080fd5b506102de60048036038101908080359060200190929190505050610b7e565b005b3480156102ec57600080fd5b5061030b60048036038101908080359060200190929190505050610c46565b604051808215151515815260200191505060405180910390f35b34801561033157600080fd5b5061035060048036038101908080359060200190929190505050610d98565b604051808215151515815260200191505060405180910390f35b34801561037657600080fd5b506103ab600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f64565b6040518082815260200191505060405180910390f35b3480156103cd57600080fd5b506103d6610f7c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561042457600080fd5b5061042d610fa2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561046d578082015181840152602081019050610452565b50505050905090810190601f16801561049a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104b457600080fd5b506104f3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611040565b005b34801561050157600080fd5b50610536600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112cd565b6040518082815260200191505060405180910390f35b34801561055857600080fd5b50610577600480360381019080803590602001909291905050506112e5565b604051808215151515815260200191505060405180910390f35b34801561059d57600080fd5b506105f2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114b1565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561069e5780601f106106735761010080835404028352916020019161069e565b820191906000526020600020905b81548152906001019060200180831161068157829003601f168201915b505050505081565b600080821115156106b657600080fd5b81600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001905092915050565b60035481565b6000808373ffffffffffffffffffffffffffffffffffffffff16141561076c57600080fd5b60008211151561077b57600080fd5b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156107c757600080fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401101561085457600080fd5b600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156108dd57600080fd5b610926600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836114d6565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b2600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836114ef565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a7b600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836114d6565b600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610bda57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610c42573d6000803e3d6000fd5b5050565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610c9457600080fd5b600082111515610ca357600080fd5b610cec600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836114d6565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d3b600354836114d6565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5836040518082815260200191505060405180910390a260019050919050565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610de657600080fd5b600082111515610df557600080fd5b610e3e600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836114d6565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610eca600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836114ef565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167f2cfce4af01bcb9d6cf6c84ee1b7c491100b8695368264146a94d71e10a63083f836040518082815260200191505060405180910390a260019050919050565b60056020528060005260406000206000915090505481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110385780601f1061100d57610100808354040283529160200191611038565b820191906000526020600020905b81548152906001019060200180831161101b57829003601f168201915b505050505081565b60008273ffffffffffffffffffffffffffffffffffffffff16141561106457600080fd5b60008111151561107357600080fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156110bf57600080fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401101561114c57600080fd5b611195600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826114d6565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611221600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826114ef565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60066020528060005260406000206000915090505481565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561133357600080fd5b60008211151561134257600080fd5b61138b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836114d6565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611417600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836114ef565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167ff97a274face0b5517365ad396b1fdba6f68bd3135ef603e44272adba3af5a1e0836040518082815260200191505060405180910390a260019050919050565b6007602052816000526040600020602052806000526040600020600091509150505481565b60006114e483831115611519565b818303905092915050565b600080828401905061150f84821015801561150a5750838210155b611519565b8091505092915050565b80151561152557600080fd5b505600a165627a7a72305820241b324f3bacb2fd72e8e7c8eb7b7ab85b8d34c7557c6f3670b25029fd2371b0002900000000000000000000000000000000000000000000000000000002540be4000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000116c696e64656e207465737420746f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000034c44540000000000000000000000000000000000000000000000000000000000"


}

export default {
    cfg,
    wallet,
    contract
}
