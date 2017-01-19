/**
 * Created by tonychen on 16/12/31.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../view/user/Login'
import RecordList from '../view/record/List'
import RecordEdit from '../view/record/Edit'
import RecordNew from '../view/record/New'
import CharacterList from '../view/character/List'
import CharacterNew from '../view/character/New'
import ArticleList from '../view/article/List'
import ArticleNew from '../view/article/New'
import LabelList from '../view/label/List'
import BannerList from '../view/banner/List'
import BannerNew from '../view/banner/New'
import BillboardList from '../view/billboard/List'
import Layout from '../components/Layout'
import Index from '../view/Index'
import NotFound from '../view/NotFound'
Vue.use(VueRouter)

const routes = [
    {path: '/admin/login', component: Login},
    {
        name: 'admin',
        path: '/admin',
        component: Layout,
        children: [
            {path: 'record/list', component: RecordList},
            {path: 'record/edit', component: RecordEdit},
            {path: 'record/new', component: RecordNew},
            {path: 'dashboard', component: Index},
            {path: 'character/list', component: CharacterList},
            {path: 'character/new', component: CharacterNew},
            {path: 'article/list', component: ArticleList},
            {path: 'article/new', component: ArticleNew},
            {path: 'label/list', component: LabelList},
            {path: 'banner/list', component: BannerList},
            {path: 'banner/new', component: BannerNew},
            {path: 'billboard/list', component: BillboardList}
        ]
    },
    {path: '*', component: NotFound}
]

const router = new VueRouter({
    routes
})

export default router
