import Vue from 'vue'
import Router from 'vue-router'
import search from '../views/search/router.js'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect:'/search',
    },
    ...search,
  ],
})