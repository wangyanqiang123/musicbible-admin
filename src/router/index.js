/**
 * Created by tonychen on 16/12/31.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/user/Login'
import RecordList from '../view/record/RecordList'
import RecordEdit from '../view/record/RecordEdit'
import Home from '../view/Home'
import Index from '../view/Index'
Vue.use(VueRouter)

const routes = [
  {path: '/login', component: Login},
  {name: 'home',
    path: '/',
    component: Home,
    children: [{path: 'recordList', component: RecordList},
    {path: 'recordEdit', component: RecordEdit},
    {path: 'index', component: Index}]}
]

const router = new VueRouter({
  routes
})

export default router
