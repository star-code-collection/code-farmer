// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from '@/vuex/store'
import router from './router'
import $ from 'jquery'
import 'assets/css/bootstrap.min.css'
import 'assets/js/bootstrap.min'
// 引入axios
import axios from 'axios/lib/axios'

//将axios改为Vue的原型属性，可以解决axios命令在其他组件中无法使用的问题
Vue.prototype.$ajax = axios

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
