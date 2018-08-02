import http from '@/utils/http'
import 'whatwg-fetch'

const state = {
  waptState: []
}

const actions = {
  LOAD_WAPT_JSON: function ({ commit }) {
    fetch(process.env.API_URL + 'v1/hosts', {
      credentials: 'include'
    })
      .then(http.checkStatus)
      .then(http.parseJSON)
      .then((response) => {
        commit('STORE_WAPT', { list: response.result })
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

const getters = {

  hostsOkState: state => {
    return state.waptState.filter(hostsStatus => hostsStatus.host_status === 'OK')
  },
  hostsWarnState: state => {
    return state.waptState.filter(hostsStatus => hostsStatus.host_status === 'TO-UPGRADE')
  },
  hostsErrorState: state => {
    return state.waptState.filter(hostsStatus => hostsStatus.host_status === 'ERROR')
  },
  hostsErrorStateCount: (state, getters) => {
    return getters.hostsErrorState.length
  },
  hostsWarnStateCount: (state, getters) => {
    return getters.hostsWarnState.length
  },
  hostsOkStateCount: (state, getters) => {
    return getters.hostsOkState.length
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
