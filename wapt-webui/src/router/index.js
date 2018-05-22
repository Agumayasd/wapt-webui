import Vue from 'vue'
import Router from 'vue-router'
import AxiosTest from '@/components/AxiosTest'

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
      path: '/test/Test',
      name: 'AxiosTest',
      component: AxiosTest
    }
  ]
})
