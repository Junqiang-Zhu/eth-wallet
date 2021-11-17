<template>
  <view class="content">
    <image class="logo" src="/static/ETH.png"></image>
    <view class="eth">
      <button type="primary" class="eth" @tap="createAccount">创建账户</button>
     <!-- <button type="primary" class="eth" @tap="transactionInfo">交易信息</button>
      <button type="primary" class="eth" @tap="transactionETH">交易ETH</button> -->
    <!--  <button type="primary" class="eth" @tap="transactionLDT">交易LDT</button> -->
     <!-- <button type="primary" class="eth" @tap="restoreWalletByPrivateKey">私钥恢复</button>
      <button type="primary" class="eth" @tap="restoreWalletByMnemonic">助记词恢复</button> -->
      <!-- <button type="primary" class="eth" @tap="test">合约调用</button> -->
    </view>
  </view>
</template>

<script>
let _this
import Config from '../../config/config'

export default {
  data() {
    return {
      nonce: 0,
      chainId: 0,
      from: Config.cfg.account1Address,
      to: Config.cfg.account2Address,
      privateKey: Config.cfg.account1PrivateKey,
      mnemonic: Config.cfg.mnemonic,

      testPrivateKey: Config.cfg.testPrivateKey,
      testMnemonic: Config.cfg.testMnemonic,

    }
  },
  onLoad() {
    _this = this
    _this.check()
    _this.getNonce()
    _this.getChainId()
    _this.defaultAccount()
  },
  onShow() {

  },
  methods: {
    check() {
      this.$api.check()
    },
    createAccount() {
      this.$api.createAccount()
    },
    transactionInfo() {
      this.$api.getTransactionInfo(this.$cfg.transactionHash)
    },
    async getNonce() {
      _this.nonce = await this.$api.getNonce(this.$cfg.account1Address);
    },
    async getChainId() {
      _this.chainId = await this.$api.getChainId();
    },
    async defaultAccount() {
      await this.$api.defaultAccount(this.$cfg.account1Address);
    },
    transactionETH() {
      this.$api.transfer(_this.from, _this.to, _this.privateKey, _this.nonce, _this.chainId);
    },
    transactionLDT() {
      console.log("暂未开发")
      return
      this.$api.transferLDT(_this.from, _this.to, _this.privateKey, _this.nonce, _this.chainId);
    },
    async restoreWalletByPrivateKey() {
      let restoreWallet = await this.$api.restoreWallet(_this.testPrivateKey, 1);
      console.log(restoreWallet)
    },
    async restoreWalletByMnemonic() {
      let restoreWallet = await this.$api.restoreWallet(_this.testMnemonic, 0);
      console.log(restoreWallet)
    },
    test(){
      console.log("暂未开发")
      this.$api.contractTest();
    }

  },
}
</script>

<style>
/*@import '../../uni.scss';*/
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.eth {
  margin-top: 50rpx;
}

.logo {
  margin-top: 100rpx;
  width: 150rpx;
  height: 150rpx;
}
</style>
