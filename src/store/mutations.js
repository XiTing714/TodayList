export default {
  changeSkin(state, skinColor) {
    /* console.log(skinColor); */
    state.appBgColor = skinColor
    window.localStorage.setItem('appBgColor', JSON.stringify(state.appBgColor))
  },

  // 增加项目并存储于本地
  increTask(state, addText) {
    if(addText.length) {
      state.todos.push({
        id: state.todos.length ? state.todos.length + 1 : 1,
        title: addText,
        completed: false
      })

      window.localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  // 1.1 AllTask全选
  ToggleAllInall(state) {
    const incompletedLength = state.todos.filter(item => !item.completed).length
    if(incompletedLength) {
      state.todos.forEach(item => {
        item.completed = true
      })
    } else {
      state.todos.forEach(item => {
        item.completed = false
      })
    }
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  // 1.2 AllTask单个项目勾选
  itemCompletedInall(state, index) {
    state.todos[index].completed = !state.todos[index].completed
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  // 1.3 AllTask单个项目删除
  itemDeleteInall(state, index) {
    state.todos.splice(index, 1)
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  // 1.4 AllTask保存编辑
  saveEditInall(state, payload) {
    if(payload.editText) {
      state.todos[payload.index].title = payload.editText
    } else {
      state.todos.splice(payload.index, 1)
    }
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },

  // 2.1 ActiveTask全选
  ToggleAllInactive(state) {
    state.todos.filter(item => !item.completed).forEach(item => {
      item.completed = true
    })
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  // 2.2 ActiveTask单个项目勾选
  itemCompletedInactive(state, index) {
    state.todos.filter(item => !item.completed)[index].completed = !state.todos.filter(item => !item.completed)[index].completed
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  // 2.3 ActiveTask单个项目删除
  itemDeleteInactive(state, index) {
    state.todos.filter(item => !item.completed).splice(index, 1)
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  // 2.4 ActiveTask保存编辑
  saveEditInactive(state, payload) {
    if(payload.editText) {
      state.todos.filter(item => !item.completed)[payload.index].title = payload.editText
    } else {
      state.todos.filter(item => !item.completed).splice(payload.index, 1)
    }
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },


  // 3.1 DoneTask全选
  ToggleAllIndone(state) {
    state.todos.filter(item => item.completed).forEach(item => {
      item.completed = false
    })
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  // 3.2 DoneTask单个项目勾选
  itemCompletedIndone(state, index) {
    state.todos.filter(item => item.completed)[index].completed = !state.todos.filter(item => item.completed)[index].completed
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  // 3.3 DoneTask单个项目删除
  itemDeleteIndone(state, index) {
    state.todos.filter(item => item.completed).splice(index, 1)
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },
  // 3.4 DoneTask保存编辑
  saveEditIndone(state, payload) {
    if(payload.editText) {
      state.todos.filter(item => item.completed)[payload.index].title = payload.editText
    } else {
      state.todos.filter(item => item.completed).splice(payload.index, 1)
    }
    window.localStorage.setItem('todos', JSON.stringify(state.todos))
  },


  
}