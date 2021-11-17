import Web3 from 'web3';
import Config from '../config/config'
import Tx from 'ethereumjs-tx'
import { ethers } from 'ethers';
import Contract from 'web3-eth-contract'

// web3单例
let provider = (() => {
    let web3Instance = null;
    return {
        getInstance: () => {
            if (!web3Instance) {
                web3Instance = new Web3(Config.cfg.rinkeby);
            }
            return web3Instance;
        }
    }
})();

// 合约单例
let contractProvider = (() => {
    let contractInstance = null;
    return {
        getInstance: () => {
            if (!contractInstance) {
                Contract.setProvider(Config.cfg.rinkeby);
                contractInstance = new Contract(Config.contract.abi, Config.contract.address);
            }
            return contractInstance;
        }
    }
})();


// 检查web3
function check() {
    let web = provider.getInstance();
    console.log("web3实例", web)
    console.log("web3版本", web.version)
}

// 账户列表
function listAccount() {
    let web = provider.getInstance();
    // 返回账户列表
    web.eth.getAccounts().then(console.log);
}

// 是否是地址
function isAddress() {
    let web = provider.getInstance();
    // 是否是地址 (true/false)
    let result = web.utils.isAddress(address);
}

// 生成地址
function createAddress(){
    let web = provider.getInstance();
    let address = web.utils.randomHex(32);
}

// 生成私钥
function createPrivateKey(){
    let web = provider.getInstance();
    let privateKey = web.utils.randomHex(33);
}

// 创建账户
function createAccount() {
    let web = provider.getInstance();
    let account = web.eth.accounts.create(web.utils.randomHex(32));
    console.log("创建账户", account)
}

// 交易签名
function transactionSign(to, privateKey, nonce, chainId) {
    let web = provider.getInstance();
    // 交易签名
    web.eth.accounts.signTransaction({
        to: to,
        value: '10000000000000000',
        gas: 2000000,
        gasPrice: '234567897654321',
        nonce: nonce,
        chainId: chainId,
    }, privateKey, function (err, data) {
    }).then(res => {
        console.log(res)
    });
}

// 交易信息
function getTransactionInfo(transactionHash) {
    let web = provider.getInstance();
    web.eth.getTransaction(transactionHash).then(res => {
        console.log(res)
    });
}

// 获取nonce
// nonce详解 https://blog.csdn.net/sinat_34070003/article/details/79919431)
async function getNonce(address) {
    let web = provider.getInstance();
    let nonce = 0
    await web.eth.getTransactionCount(address, function (err, data) {
        nonce = data
    })
    return nonce
}

// eth转账
async function transfer(from, to, privateKey, nonce, chainId) {
    let web = provider.getInstance();
    // 交易数据
    let rawTx = {
        "from": from,
        "nonce": web.utils.toHex(parseInt(nonce)),
        "gasPrice": web.utils.toHex('2000000000'),
        "gasLimit": web.utils.toHex(50000),
        "to": to,
        "value": web.utils.toHex('2000000000000000'),
        "chainId": web.utils.toHex(chainId)  // rinkeby chain
    };

    let privateKeyB = Buffer.from(privateKey, 'hex');
    let tx = new Tx(rawTx);
    // 私钥签名
    tx.sign(privateKeyB);
    let serializedTx = tx.serialize();
    // 交易
    web.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        .on('transactionHash', function (hash) {
            console.log('Txn:' + hash);
        })
        .on('receipt', function (receipt) {
            console.log('Receipt:' + receipt);
        })
        .on('error', function (error) {
            console.log('error:' + error);
        });
}

// TODO LDT代币转账
async function transferLDT(from, to, privateKey, nonce, chainId) {
    let web = provider.getInstance();
    // 交易数据
    let rawTx = {
        "from": from,
        "nonce": web.utils.toHex(parseInt(nonce)),
        "gasPrice": web.utils.toHex('2000000000'),
        "gasLimit": web.utils.toHex(50000),
        "to": to,
        "value": web.utils.toHex('2000000000000000'),
        "chainId": web.utils.toHex(chainId)  // rinkeby chain
    };

    let privateKeyB = Buffer.from(privateKey, 'hex');
    let tx = new Tx(rawTx);
    // 私钥签名
    tx.sign(privateKeyB);
    let serializedTx = tx.serialize();
    // 交易
    web.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        .on('transactionHash', function (hash) {
            console.log('Txn:' + hash);
        })
        .on('receipt', function (receipt) {
            console.log('Receipt:' + receipt);
        })
        .on('error', function (error) {
            console.log('error:' + error);
        });
}

// 当前链id
async function getChainId() {
    let web = provider.getInstance();
    let chainId
    await web.eth.net.getId(function (err, data) {
        console.log("当前链id",data)
        chainId = data
    })
    return chainId
}

// 默认账户
async function defaultAccount(address) {
    let web = provider.getInstance();
    web.eth.defaultAccount = address;
    console.log("默认账户为:", web.eth.defaultAccount)
}

//用于恢复钱包
//pwd 可选，密码。主要是keystore会用到
function restoreWallet(value,restoreWalletType) {
    // 助记词test：flat immune palm include muscle rail gadget clown sea detail engage chief
    if (value==null || value=="") {
        return "";
    }
    let wallet = "";

    switch (restoreWalletType) {
        case Config.wallet.RESTORE_WALLET_TYPE_MNEMONIC:
            wallet = ethers.Wallet.fromMnemonic(value);
            break;
        case Config.wallet.RESTORE_WALLET_TYPE_PRIVATE_KEY:
            wallet = new ethers.Wallet(value);
            break;
        case Config.wallet.RESTORE_WALLET_TYPE_KEY_STORE:
            wallet = ethers.Wallet.fromEncryptedJson(value, "pwd");
            break;
        default:
            return "";
    }
    // TODO 将当前恢复的钱包加密缓存本地
    return wallet
}

// TODO 合约
async function contractTest(){

    let contract = contractProvider.getInstance();

   // console.log(contract)
    let web = provider.getInstance();
    var contract1 = new web.eth.Contract(Config.contract.abi,Config.contract.address);
    console.log(contract1)
}


export default {
    check,
    createAccount,
    getTransactionInfo,
    getNonce,
    getChainId,
    transfer,
    defaultAccount,
    transactionSign,
    listAccount,
    isAddress,
    createAddress,
    createPrivateKey,
    transferLDT,
    restoreWallet,
    contractTest
}
