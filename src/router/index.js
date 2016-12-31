/**
 * Created by tonychen on 16/12/31.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello'
import Login from '../components/user/Login'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Login},
  {path: '/hello', component: Hello}
]

const router = new VueRouter({
  routes
})

export default router
