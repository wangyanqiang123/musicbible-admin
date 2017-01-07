/**
 * Created by tonychen on 16/12/31.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../view/user/Login'
import RecordList from '../view/record/List'
import RecordEdit from '../view/record/Edit'
import Layout from '../components/Layout'
import Index from '../view/Index'
import NotFound from '../view/NotFound'
Vue.use(VueRouter)

const routes = [
  {path: '/login', component: Login},
  {name: 'home',
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{path: 'recordList', component: RecordList},
    {path: 'recordEdit', component: RecordEdit},
    {path: 'index', component: Index}]},
  {path: '*', component: NotFound}
]

const router = new VueRouter({
  routes
})

export default router
