
// initial state
// shape: [{ id, quantity }]
const state = {
  count: 0,
  msg: null
}
const mutations = {
  increment (state) {
    // mutate state
    state.count++
  },
  ShowTexte (state) {
    // mutate state
    state.msg = 'Bonjour'
  }
}

export default {
  state,
  mutations
}
