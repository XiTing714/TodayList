export default {
  //添加任务
  handleAdd(state, addText) {
    const length = state.allList.length
    state.allList.push({
      id: length ? length + 1 : 1,
      title: addText,
      completed: false
    })
  },
  //全选未完成
  handleToglleActive(state) {
    state.allList.forEach(item => {
      item.completed = item.completed ? true : true
    })
  },
  //全选已完成
  handleToglleDone(state) {
    state.allList.forEach(item => {
      item.completed = item.completed ? false : false
    })
  },
  //单项勾选
  itemCompleted(state, id) {
    const index = state.allList.findIndex(item => item.id === id)
    state.allList[index].completed = !state.allList[index].completed
  },
  //保存编辑内容
  saveEdit(state, payLoad) {
    const index = state.allList.findIndex(item => item.id === payLoad.id)
    state.allList[index].title = payLoad.editText
  },
  //删除单项
  handleDelete(state, id) {
    const index = state.allList.findIndex(item => item.id === id)
    state.allList.splice(index, 1)
  },
  //删除所有完成项
  clearAllCompleted(state) {
    let length = state.allList.length
      for(let i = 0; i < length; i++) {
        if(state.allList[i].completed) {
          state.allList.splice(i, 1)
        }
      }
  },
  changeSkin(state, skinColor) {
    /* console.log(skinColor); */
    state.appBgColor = skinColor
    window.localStorage.setItem('appBgColor', JSON.stringify(state.appBgColor))
  },
  changeFilterText(state, cfilterText) {
    state.filterText = cfilterText
  },
}