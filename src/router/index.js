/**
 * Created by tonychen on 16/12/31.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello'
import Login from '../components/user/Login'
import AdminHome from '../view/AdminHome'
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Login},
  {name: 'hello', path: '/adhome', component: AdminHome, children: [{path: 'hello', component: Hello}]},
  {name: 'adhome', path: '/adhome', component: AdminHome}
]

const router = new VueRouter({
  routes
})

export default router
