import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AxiosTest from '@/components/AxiosTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
