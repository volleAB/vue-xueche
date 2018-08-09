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
      name: '首页',
      component: Home,
      children: [
        {
          path: 'coach',
          name: '教练',
          component: Coach
        },
        {
          path: 'details',
          name: '详情',
          component: Details
        },
        {
          path: 'mine',
          name: '我的',
          component: Mine
        },
        {
          path: 'order',
          name: '预约',
          component: Order
        }
      ]
    }
  ]
})
