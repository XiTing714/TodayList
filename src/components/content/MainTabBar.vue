<template>
  <tab-bar>
    <tab-bar-item link="/todaytask/all">
      <span slot="itemName">全部</span>
      <span slot="countNum">({{ $store.state.todos.length }})</span>
    </tab-bar-item>
    <tab-bar-item link="/todaytask/active">
      <span slot="itemName">待办</span>
      <span slot="countNum">({{ $store.state.todos.filter((item) => !item.completed).length }})</span>
    </tab-bar-item>
    <tab-bar-item link="/todaytask/done">
      <span slot="itemName">已完成</span>
      <span slot="countNum">({{ $store.state.todos.filter((item) => item.completed).length }})</span>
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

  }

}

</script>
<style>
</style>