/**
 * Created by tonychen on 16/12/31.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/user/Login'
import RecordList from '../view/record/RecordList'
import RecordEdit from '../view/record/RecordEdit'
import Index from '../view/Index'
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Login},
  {name: 'home', path: '/home', component: Index},
  {name: 'recordList', path: '/recordList', component: RecordList},
  {name: 'recordEdit', path: '/recordEdit', component: RecordEdit}
]

const router = new VueRouter({
  routes
})

export default router
