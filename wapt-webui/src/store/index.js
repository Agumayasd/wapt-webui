import Vue from 'vue'
import Vuex from 'vuex'
import Wapt from './modules/Wapt'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Wapt
  },
  strict: debug
})
