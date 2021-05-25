<template>
  <tab-bar>
    <tab-bar-item cfilterText="all" @itemclick="testclick">
      <span slot="itemName">全部</span>
      <span slot="countNum">({{ todos.length }})</span>
    </tab-bar-item>
    <tab-bar-item cfilterText="active" @itemclick="testclick">
      <span slot="itemName">待办</span>
      <span slot="countNum">({{ todos.filter((item) => !item.completed).length }})</span>
    </tab-bar-item>
    <tab-bar-item cfilterText="done" @itemclick="testclick">
      <span slot="itemName">已完成</span>
      <span slot="countNum">({{ todos.filter((item) => item.completed).length }})</span>
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
  },
  methods: {
    testclick(cfilterText) {
      //console.log(cfilterText)
      this.$store.commit('changeFilterText', cfilterText)
    }
  }

}

</script>
<style>
</style>