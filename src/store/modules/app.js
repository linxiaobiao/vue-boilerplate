import { getUrlParams } from '@/common/init'

const state = {
  urlParams: getUrlParams(),
  demo: 111
}

// getters
const getters = {
  getDemo: state => state.demo
}

// actions
const actions = {
  // setDemo ({ commit }) {
  //   commit('saveDemo')
  // }
}

// mutations
const mutations = {
  // saveDemo (state, params) {
  //   state.demo = params
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
