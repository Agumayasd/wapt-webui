import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Bootstrap from '@/components/Bootstrap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    }
  ]
})
