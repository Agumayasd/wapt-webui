import Vue from 'vue'
import Router from 'vue-router'
import AxiosTest from '@/components/AxiosTest'
import Bootstrap from '@/components/Bootstrap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'AxiosTest',
      component: AxiosTest
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    }
  ]
})
