import Vue from 'vue'
import Vuex from 'vuex'
import state from './rootState.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state
})

export default store
