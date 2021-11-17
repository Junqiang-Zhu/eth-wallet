import Vue from 'vue'
import App from './App'
import Config from './config/config.js'
import store from './store'


const cfg = Config.cfg
const wallet = Config.wallet

Vue.config.productionTip = false

Vue.prototype.$api = store;
Vue.prototype.$cfg =  cfg;
Vue.prototype.$wallet = wallet;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
