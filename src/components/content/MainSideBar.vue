<template>
<div class="main-side-bar">
  <transition name="modal">
    <side-bar v-if="isBarShow" class="side-bar">
      <side-bar-item class="side-bar-item">
        <img slot="icon" src="~assets/img/TodayTask.png">
        <h3 slot="text">今日任务</h3>
      </side-bar-item>
      <side-bar-item>
        <img slot="icon" src="~assets/img/TodayTask.png">
        <h3 slot="text">待办项目</h3>
      </side-bar-item>
      <side-bar-item>
        <img slot="icon" src="~assets/img/TodayTask.png">
        <h3 slot="text">已完成项目</h3>
      </side-bar-item>
      <side-bar-item>
        <img slot="icon" src="~assets/img/TodayTask.png">
        <h3 slot="text">专注模式</h3>
      </side-bar-item>
    </side-bar>
  </transition>

  <div class="show-bar" @click="handleBarShow"></div>
</div>

</template>

<script>
import SideBar from 'components/common/SideBar/SideBar'
import SideBarItem from 'components/common/SideBar/SideBarItem'

export default {
  name: 'MainSideBar',
  components: {
    SideBar,
    SideBarItem
  },
  data() {
    return {
      isBarShow: true
    }
  },
  methods: {
    handleBarShow() {
      this.isBarShow = !this.isBarShow
    }
  }

}

</script>
<style scoped>
.main-side-bar {
  display: flex;
}

.side-bar {
  background-color: #A5AAAB;
}

.side-bar-item h3 {
  color:  #1E1F26;
}


.show-bar {
  width: 20px;
  height: 20px;
  background-color: slateblue;
}

.show-bar:hover {
  cursor: pointer;
}


.modal-leave-active {
  transition: transform 3s linear, opacity 3s linear;
  width: 20px;
}

.modal-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

</style>