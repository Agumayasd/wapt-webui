import Vue from 'vue'
import Router from 'vue-router'
import Aguay from '@/components/Aguay'
import Bootstrap from '@/components/Bootstrap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/aguay',
      name: 'Aguay Part Dev',
      component: Aguay
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    }
  ]
})
