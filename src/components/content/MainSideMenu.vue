<template>
  <Menu>
    <menu-item link="/todaytask">
      <img src="~assets/img/Slider/TodayTask.png" slot="icon">
      <span slot="text">今日清单</span>
    </menu-item>
    <menu-item link="/inspire">
      <img src="~assets/img/Slider/Inspire.png" slot="icon">
      <span slot="text">加油站</span>
    </menu-item>
    <menu-item link="/skin">
      <img src="~assets/img/Slider/Skin.png" slot="icon">
      <span slot="text">皮肤</span>
    </menu-item>
  </Menu>
</template>

<script>
import Menu from 'common/SideMenu/Menu.vue'
import MenuItem from 'common/SideMenu//MenuItem.vue'

export default {
  name: 'MainSideMenu',
  components: {
    Menu,
    MenuItem
  }
}

</script>
<style>
</style>