import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

const state = {
  todos: JSON.parse(window.localStorage.getItem('todos') || '[]')
}

const store = new Vuex.Store({
  state,
  mutations,
})

export default store