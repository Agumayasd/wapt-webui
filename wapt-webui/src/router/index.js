import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Hosts from '@/components/Hosts'
import Login from '@/components/Login'

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
      path: '/hosts',
      name: 'Hosts',
      component: Hosts
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
