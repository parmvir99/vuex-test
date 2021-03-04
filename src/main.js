import Vue from 'vue'
import App from './App.vue'
/* eslint-disable */
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

let http = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 1000 * 60 * 3
})

Vue.http = http

export const bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
