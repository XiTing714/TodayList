<template>
  <section class="main">
    <div class="all-toggle" 
        :class="{alltoggled: isAllToggled}"
        @click="handleToglleAll">
      <img src="~assets/img/alltoggle.png">
    </div>
    <ul class="todo-list">
      <li v-for="(item, index) in this.$store.state.todos.filter(item => !item.completed)" :key="(item, index)" 
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
  </section>
</template>

<script>
export default {
  name: 'AllTask',
  data() {
    return {
      activeTask: this.$store.state.todos.filter(item => !item.completed),
      editIndex: null
    }
  },
  computed: {
    isAllToggled() {
      return this.activeTask.every(item => item.completed == true)
    },
  },
  /* watch: {
    activeTask: {
      handler(val) {
        window.localStorage.setItem('todos', JSON.stringify(val))
      }
    }
  }, */
  methods: {
    // 全选
    handleToglleAll() {
      this.$store.commit('ToggleAllInactive')
    },
    // 单个项目勾选
    itemCompleted(index) {
      this.$store.commit('itemCompletedInactive', index)
    },
    // 删除单个项目
    handleDelete(index) {
      this.$store.commit('itemDeleteInactive', index)
    },
    // 双击进入编辑状态
    getEdit(index) {
      /* console.log('已双击'); */
      this.editIndex = index
    },
    // 敲回车键、失去焦点保存编辑
    saveEdit(index, e) {
      /* console.log('保存编辑') */
      const editText = e.target.value.trim()
      this.$store.commit('saveEditInactive', {
        index,
        editText
      })
      this.editIndex = null
    },
    // 按esc键取消编辑
    cancelEdit() {
      this.editIndex = null
    }
  }

}

</script>
<style scoped>
.main {
  position: relative;
}

.all-toggle {
  position: absolute;
  top: -44px;
  left: 15px;

  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.all-toggle img {
  width: 28px;
  height: 28px;
  opacity: 0.2;
  transition: opacity 0.2s ease-out;
}

.alltoggled img {
  opacity: 0.5;
}

.all-toggle img:hover {
  cursor: pointer;
  opacity: 0.5;
}

.todo-list {
  margin: 0;
  background-color: white;
}

.todo-list li {
  position: relative;
}

.todo-list li {
  list-style: none;
  margin-left: -40px;
  width: 516px;
  height: 30px;
  font-size: 24px;
  color: rgb(54, 53, 53);
  padding: 16px;

  border: solid 1px #999;
  border-top: none;
}

.li-content {
  position: relative;
}

.toggle {
  position: absolute;
  top: 5px;
  left: 0px;

  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: rgb(196, 191, 191);
  transition: background-color 0.2s ease-out;
}

.toggle img {
  width: 26px;
  height: 26px;
}

.toggle:hover {
  background-color: #009688;
  cursor: pointer;
}

.li-content .checked {
  background-color: #FF6666;
}

.li-content .title {
  color: #cdcdcd;
	text-decoration: line-through;
}


.label {
  position: absolute;
  top: 6px;
  left: 50px;
  line-height: 25px;
}

.delete-button {
  position: absolute;
  top: 2px;
  right: 0px;
}

.delete {
  font-size: 28px;
  border: none;
  background-color: white;
  color: #999;
  transition: color 0.2s ease-out;
  display: none;
}

.delete:after {
  content: '×';
}

.todo-list li:hover .delete {
  display: block;
}

.delete:hover{
  color: #b83f45;
}

.edit {
  position: absolute;
  top: -1px;
  left: 50px;

  font-size: 24px;
  width: 456px;
  height: 62px;
  padding: 0 20px;
  border: solid 1px;
  border-bottom: none;

  display: none;
}

.edit:last-child {
  border: solid 1px;
}

.editing .edit {
  display: block;
}

.editing .li-content {
  display: none;
}
</style>