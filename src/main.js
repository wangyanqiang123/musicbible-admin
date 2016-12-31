// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

const routes = [
  {path: '/', component: App}
]

const router = new VueRouter({
  routes
})

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: {App}
}).$mount('#app')
