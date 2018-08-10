import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Coach from '@/pages/coach'
import Details from '@/pages/details'
import Mine from '@/pages/mine'
import Order from '@/pages/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'coach',
      name: 'coach',
      component: Coach
    },
    {
      path: 'details',
      name: 'details',
      component: Details
    },
    {
      path: 'mine',
      name: 'mine',
      component: Mine
    },
    {
      path: 'order',
      name: 'order',
      component: Order
    }
  ]
})
