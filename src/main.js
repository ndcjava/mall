// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import Mint from 'mint-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import './style/theme.css'
import './style/characters.css'
//自定义工具
import http from './service/http'
import config from './service/config'
import storage from './service/storage'
import loginout from './service/loginout'


Vue.prototype.$http = http
Vue.prototype.$config = config
Vue.prototype.$storage = storage
Vue.prototype.$loginout = loginout
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.use(ElementUI)

Vue.use(Mint)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
