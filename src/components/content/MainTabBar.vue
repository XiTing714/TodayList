<template>
  <tab-bar>
    <tab-bar-item cfilterText="all" @itemclick="testclick">
      <span slot="itemName">未完成</span>
      <span slot="countNum">({{ this.$store.getters.activeList.length }})</span>
    </tab-bar-item>
    <tab-bar-item cfilterText="done" @itemclick="testclick">
      <span slot="itemName">已完成</span>
      <span slot="countNum">({{ this.$store.getters.doneList.length }})</span>
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