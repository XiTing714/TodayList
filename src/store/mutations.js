export default {
  changeSkin(state, skinColor) {
    /* console.log(skinColor); */
    state.appBgColor = skinColor
    window.localStorage.setItem('appBgColor', JSON.stringify(state.appBgColor))
  },

  changeFilterText(state, cfilterText) {
    state.filterText = cfilterText
  },
}