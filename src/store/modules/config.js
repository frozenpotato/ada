import { make } from 'vuex-pathify'

const state = {
  list: [],
  active: {
    gender: '',
    name: ''
  }
}

export default {
  namespaced: true,
  state,
  getters: make.getters(state),
  mutations: make.mutations(state),
  actions: {
    ...make.actions(state),
    resetConfig ({ commit, state }) {
      const newActive = {
        gender: '',
        name: ''
      }

      commit('SET_ACTIVE', newActive)
    },
    setConfigActive ({ commit, state }, active) {
      commit('SET_ACTIVE', active)
    }
  }
}
