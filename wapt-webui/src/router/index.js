import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/utils/auth'
import Dashboard from '@/components/Dashboard'
import Hosts from '@/components/Hosts'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {requiresAuth: true}
    },
    {
      path: '/hosts',
      name: 'Hosts',
      component: Hosts,
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  // Check if route require auth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    await auth.checkAuthStatus().then((e) => {
      console.log(e)
      return true
    })
    // console.log('a -> ' + a)
    // if (a === true) {
    //   console.log('passed')
    //   next()
    // } else {
    //   console.log('blocked')
    //   next({
    //     path: '/login',
    //     query: { redirect: to.fullPath }
    //   })
    // }
  } else {
    next()
  }
})

export default router
