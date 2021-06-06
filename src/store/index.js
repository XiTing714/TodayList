import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
<<<<<<< Updated upstream
  appBgColor: JSON.parse(window.localStorage.getItem('appBgColor')) || 'green',
  filterText: 'all'
=======
  appBgColor: JSON.parse(window.localStorage.getItem('appBgColor')) || '#ff9900',
  filterText: 'all',
  allList: JSON.parse(window.localStorage.getItem('toDoList') || '[]')
>>>>>>> Stashed changes
}

const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store