// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'

import ElementUI from 'element-ui'
import router from './router'
import '../theme/index.css'
import Index from './view/Index'
import Home from './components/Layout'
import Search from './components/Search'
import ApiConfig from './api'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.component(Index.name, Index)
Vue.component(Home.name, Home)
Vue.component(Search.name, Search)
ApiConfig.config()
/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  router,
  store,
  components: {App}
}).$mount('#app')
