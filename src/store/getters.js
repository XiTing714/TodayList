export default {
  activeList(state) {
    return state.allList.filter(item => !item.completed) || []
  },

  doneList(state) {
    return state.allList.filter(item => item.completed) || []
  },
}