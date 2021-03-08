import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

const state = {
  appBgColor: JSON.parse(window.localStorage.getItem('appBgColor')) || 'white',
  filterText: 'all'
}

const store = new Vuex.Store({
  state,
  mutations,
})

export default store