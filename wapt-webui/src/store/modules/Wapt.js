import { HTTP } from '@/utils/http'
// initial state
// shape: [{ id, quantity }]
const state = {
  waptState: []
}

const actions = {

  LOAD_WAPT_JSON: function ({ commit }) {
    HTTP.get('v1/hosts').then((response) => {
      commit('STORE_WAPT', { list: response.data })
    }, (err) => {
      console.log(err)
    })
  }
}

const mutations = {
  STORE_WAPT: (state, {list}) => {
    state.waptState = list
  }
}

export default {
  state,
  mutations,
  actions
}
