<template>
  <article class="todoapp">
    <header>
      <h1 :style="{backgroundColor:$store.state.appBgColor}">今日清单</h1>
      <input class="addtodo" type="text" placeholder="请输入任务" 
              @keydown.enter="handleAdd"
              v-focus>
    </header>
    <template v-if="todos.length">
      <div class="main">
        <div class="all-toggle" 
            :class="{alltoggled: isAllToggled}"
            @click="handleToglleAll">
          <img src="~assets/img/alltoggle.png">
        </div>
        <ul class="todo-list">
          <li v-for="(item, index) in filterTask" :key="(item, index)" 
              :class="{editing: editIndex === index}"
              >
            <div class="li-content">
              <div class="toggle" :class="{checked: item.completed}" @click="itemCompleted(index)">
                <img src="~assets/img/toggle.png">
              </div>
              <div class="label" :class="{title: item.completed}">
                <label @dblclick="getEdit(index)">{{ item.title }}</label>
              </div>
              <div class="delete-button">
                <button class="delete" @click="handleDelete(index)"></button>
              </div>
            </div>
        <input class="edit"
              v-edit-focus="editIndex === index"
              :value="item.title" 
              @keydown.enter="saveEdit(index, $event)"
              @blur="saveEdit(index, $event)"
              @keydown.esc="cancelEdit">
      </li>
    </ul>
      </div>
    </template>
    <div class="footer">
      <main-tab-bar :todos="todos"></main-tab-bar>
      <button id="clear" 
      @click="clearAllCompleted"
      v-show="filterTask.some(item => item.completed)">清除已完成</button>
    </div>
  </article>
</template>

<script>
import Vue from 'vue'
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

Vue.directive('edit-focus', {
  update(el, binding) {
    if(binding.value) {
      el.focus()
    }
  }
})

import MainTabBar from 'components/content/MainTabBar'

export default {
  name: 'TodayTask',
  components: {
    MainTabBar
  },
  data() {
    return {
      todos: JSON.parse(window.localStorage.getItem('todos') || '[]')  ,
      editIndex: null
    }
  },
  computed: {
    isAllToggled() {
      return this.todos.every(item => item.completed == true)
    },
    filterText() {
      return this.$store.state.filterText
    },
    filterTask() {
      if(this.filterText === 'active') {
        return this.todos.filter(item => !item.completed)
      } else if(this.filterText === 'done') {
        return this.todos.filter(item => item.completed)
      } else {
        return this.todos
      }
    }
  },
  methods: {
    // 添加项目
    handleAdd(e) {
      /* console.log(e.target.value); */
      const value = e.target.value
      const addText = value.trim()
      if(addText.length) {
        this.todos.push({
          id: this.todos.length ? this.todos.length + 1 : 1,
          title: addText,
          completed: false
      })
      e.target.value = ''
      }
    },
    // 全选
    handleToglleAll() {
      if(this.filterTask.some(item => !item.completed)) {
        this.filterTask.forEach(item => {
          item.completed = true
        })
      } else {
        this.filterTask.forEach(item => {
          item.completed = false
        })
      }
    },
    // 完成勾选单个任务
    itemCompleted(index) {
      this.filterTask[index].completed = !this.filterTask[index].completed
    },
    // 进入编辑状态
    getEdit(index) {
      this.editIndex = index
    },
    // 保存编辑状态
    saveEdit(index, e) {
      let editText = e.target.value.trim()
      if(editText) {
        this.filterTask[index].title = editText
      } else {
        this.filterTask.splice(index, 1)
      }
    },
     // 删除单个任务
    handleDelete(index) {
      this.filterTask.splice(index, 1)
    },
    // 删除所有已完成项目
    clearAllCompleted() {
      let length = this.todos.length
      for(let i = 0; i < length; i++) {
        if(this.filterTask[i].completed) {
          this.filterTask.splice(i, 1)
        }
      }
    },
  },
  watch: {
    todos: {
      handler(val) {
        window.localStorage.setItem('todos', JSON.stringify(val))
      }
    }
  }
}

</script>
<style>
</style>