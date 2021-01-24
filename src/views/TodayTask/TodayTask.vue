<template>
  <div>
    <section class="todoapp">
      <header>
        <h1>待办清单</h1>
        <input class="addtodo" type="text" placeholder="请输入任务" 
               @keydown.enter="handleAdd"
               v-focus>
      </header>
      <template v-if="todos.length">
        <router-view></router-view>
      </template>
      <footer>
        <main-tab-bar></main-tab-bar>
        <button id="clear" 
        @click="clearAllCompleted"
        v-show="filterTodos.filter(item => item.completed).length">清除已完成</button>
      </footer>
    </section>
  </div>
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
      todos: this.$store.state.todos,
      filterText: 'all'
    }
  },
  /* created() {
    console.log(this.todos);
  }, */
  /* watch: {
    todos: {
      handler(val) {
        // console.log(val);
        window.localStorage.setItem('todos', JSON.stringify(val))
      },
      deep: true
    }
  }, */
  computed: {
    /* isAllToggled() {
      return this.todos.every(item => item.completed == true)
    }, */
    filterTodos() {
      if(this.filterText === 'active') {
        return this.todos.filter(item => !item.completed)
      } else if(this.filterText === 'done') {
        return this.todos.filter(item => item.completed)
      } else {
        return this.todos
      }
      /* switch(this.filterText) {
        case 'active':
          return this.todos.filter(item => !item.completed)
          break;
        case 'done':
          return this.todos.filter(item => item.completed)
          break;
        default: 
          return this.todos
          break
      } */
    }
  },
  methods: {
    // 改变路由
    /* routerChangeAll() {
      this.$router.push('/todaytask/all')
    }, */
    /* routerChangeActive() {
      this.$router.push('/todaytask/active')
    },
    routerChangeDone() {
      this.$router.push('/todaytask/done')
    }, */
    // 添加项目
    handleAdd(e) {
      /* console.log(e.target.value); */
      const value = e.target.value
      const addText = value.trim()
      this.$store.commit('increTask', addText)
      e.target.value = ''
    },
    // 删除所有已完成项目
    clearAllCompleted() {
      let length = this.$store.state.todos.length
      for(let i = 0; i < length; i++) {
        if(this.$store.state.todos[i].completed) {
          this.$store.state.todos.splice(i, 1)
          i--
        }
      }
    },
  },
}

</script>
<style>
</style>