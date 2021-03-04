import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'parmvir'
    },
    records: null
  },
  getters: {
    user: state => state.user,
    records: state => state.records
  },
  mutations: {
    storeRecords (state, payload) {
      state.records = payload
    }
  },
  actions: {
    storeRecords: ({ commit, state }, obj) => commit('storeRecords', obj)
  }
})
