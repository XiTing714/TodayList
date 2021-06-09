<template>
  <section class="todoapp">
    <header>
      <h1 :style="{backgroundColor:$store.state.appBgColor}">今日清单</h1>
      <input class="addtodo" type="text" placeholder="请输入任务" 
              @keydown.enter="handleAdd"
              v-focus>
    </header>
    <template v-if="this.$store.state.allList.length">
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
      <main-tab-bar></main-tab-bar>
      <button id="clear" 
      @click="clearAllCompleted"
      v-show="filterTask.some(item => item.completed)">清除已完成</button>
    </div>
  </section>
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
      editIndex: null,
      cfilterText: null
    }
  },
  computed: {
    isAllToggled() {
      if (this.filterText === 'done') {
        return true
      } else {
        return false
      }
    },
    filterText() {
      return this.$store.state.filterText
    },
    filterTask() {
      if (this.filterText === 'done') {
        return this.$store.getters.doneList
      } else {
        return this.$store.getters.activeList
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
        this.$store.commit('handleAdd', addText)
        e.target.value = ''
      }
    },
    // 全选
    handleToglleAll() {
      if(this.filterTask.every(item => !item.completed)) {
        // 表示此时显示的是未完成的activeList
        this.$store.commit('handleToglleActive')
      } else {
        // 表示此时显示的是未完成的activeList
        this.$store.commit('handleToglleDone')
      }
    },
    // 完成勾选单个任务
    itemCompleted(index) {
      const id = this.filterTask[index].id
      this.$store.commit('itemCompleted', id)
    },
    // 进入编辑状态
    getEdit(index) {
      this.editIndex = index
    },
    // 保存编辑状态
    saveEdit(index, e) {
      const editText = e.target.value.trim()
      const id = this.filterTask[index].id
      if(editText) {
        //保存编辑内容, 传递修改内容和id
        this.$store.commit({
          type: 'saveEdit',
          editText,
          id
        })
        this.editIndex = null
      } else {
        //删除此项
        this.$store.commit('handleDelete', id)
        this.editIndex = null
      }
    },
     // 删除单个任务
    handleDelete(index) {
      const id = this.filterTask[index].id
      this.$store.commit('handleDelete', id)
    },
    // 删除所有已完成项目
    clearAllCompleted() {
      if(this.filterTask.every(item => item.completed)) {
        this.$store.commit('clearAllCompleted')
      }
    },
    cancelEdit() {
      this.editIndex = null
    }
  },
  watch: {
    /* todos: {
      handler(val) {
        window.localStorage.setItem('todos', JSON.stringify(val))
      }
    } */
  }
}

</script>
<style>
</style>