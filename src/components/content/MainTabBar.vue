<template>
  <tab-bar>
    <tab-bar-item cfilterText="all">
      <span slot="itemName">全部</span>
      <span slot="countNum">({{ this.todos.length }})</span>
    </tab-bar-item>
    <tab-bar-item cfilterText="active">
      <span slot="itemName">待办</span>
      <span slot="countNum">({{ this.todos.filter((item) => !item.completed).length }})</span>
    </tab-bar-item>
    <tab-bar-item cfilterText="done">
      <span slot="itemName">已完成</span>
      <span slot="countNum">({{ this.todos.filter((item) => item.completed).length }})</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/TabBar/TabBar.vue'
import TabBarItem from 'components/common/TabBar/TabBarItem.vue'


export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }

}

</script>
<style>
</style>