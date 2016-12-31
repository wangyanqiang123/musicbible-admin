// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Hello from './components/Hello'

const routes = [
  {path: '/', component: Hello},
  {path: '/hello', component: Hello}
]

const router = new VueRouter({
  routes
})

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  router,
  store,
  components: {App}
}).$mount('#app')
