import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/home/HomeView'
import FavView from '@/components/fav/FavView'
import HistoryView from '@/components/history/HistoryView'
import ConfigView from '@/components/config/ConfigView'
import ListView from '@/components/list/ListView'
import articleView from '@/components/article/AlView'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/fav',
      component: FavView
    },
    {
      path: '/history',
      component: HistoryView
    },
    {
      path: '/config',
      component: ConfigView
    },
    {
    	path:"/list/:id",
      	name:"list",
      	component: ListView
    },
    {
    	path:"/article",
    	component:articleView
    }
    
  ]
})
	  