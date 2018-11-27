import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Menue from '@/components/Menue'
import Register from '@/components/Register'
import Admin from '@/components/Admin'
import About from '@/components/about/About'


Vue.use(Router)

/*---二级导航---*/

import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import Orderguid from '@/components/about/Orderguid'
import History from '@/components/about/History'

export default new Router({
  routes: [
    {path: '/',component: Home},
    {path:'/about',name:'about-link',component:About,children:[
    	{path:'/history',name:"historyLink",component:History},
    	{path:'/delivery',name:'deliveryLink',component:Delivery},
    	{path:'/orderguid',name:'orderguidLink',component:Orderguid},
    	{path:'/Contact',name:'contactLink',component:Contact}
    ]},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/menue',component:Menue},
    {path:'/admin',component:Admin},
    {path:'*',redirect:'/'},
  ],
  mode:'history'
})
