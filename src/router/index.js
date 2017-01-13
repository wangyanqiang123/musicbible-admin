/**
 * Created by tonychen on 16/12/31.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../view/user/Login'
import RecordList from '../view/record/List'
import RecordEdit from '../view/record/Edit'
import RecordNew from '../view/record/New'
import ArtistList from '../view/character/artist/List'
import ArtistNew from '../view/character/artist/New'
import Layout from '../components/Layout'
import Index from '../view/Index'
import NotFound from '../view/NotFound'
Vue.use(VueRouter)

const routes = [
  {path: '/admin/login', component: Login},
  {name: 'admin',
    path: '/admin',
    component: Layout,
    children: [{path: 'record/list', component: RecordList},
    {path: 'record/edit', component: RecordEdit},
      {path: 'record/new', component: RecordNew},
    {path: 'dashboard', component: Index},
    {path: 'artist/list', component: ArtistList},
      {path: 'artist/new', component: ArtistNew}
    ]
  },
    {path: '*', component: NotFound}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
