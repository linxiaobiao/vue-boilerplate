import Vue from 'vue'
import App from './App.vue'
import './common/init.js'
import router from './router'
import store from './store'
import commonMixins from '@/mixins'

Vue.config.productionTip = false

// 全局mixins
Vue.mixin(commonMixins)

// 移动端调试工具
const VConsole = require('vconsole')
const vconsole = new VConsole()
Vue.use(vconsole)

console.log(window.location.href)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
