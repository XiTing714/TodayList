<template>
<div class="slider" :class="{open: isSliderClosed}">
  <div class="slider-info">
    <div class="user-name">UserName</div>
    <span class="user-email">useremail@gmail.com</span>
  </div>

  <main-side-menu class="main-side-menu"></main-side-menu>
  
  <div class="slider-btn" @click="handleSlideState">
    <!-- <span>></span> -->
    <img src="~assets/img/menu.png">
  </div>
</div>

</template>

<script>
import MainSideMenu from 'content/MainSideMenu.vue'

export default {
  name: 'Slider',
  components: {
    MainSideMenu
  },
  data() {
    return {
      isSliderClosed: false
    }
  },
  methods: {
    handleSlideState() {
      this.isSliderClosed = !this.isSliderClosed
    },
    routerChange(item) {
      // console.log(item.routeName);
      this.$router.push(item.routeName)
    }
  }

}

</script>

<style scoped>
.slider {
  z-index: 999;
  position: fixed;
  width: 200px;
  height: 100%;
  left: -200px;
  top: 50%;
  transform: translate(0, -50%);
  transition: 1s;
  background-color: rgb(255, 255, 255);
}

.slider.open {
  left: 0px;
}

.slider-info {
  position: absolute;
  top: 0;
  left: 0;
  height: 150px;
  width: 100%;

  font-size: 24px;
  line-height: 48px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  
}

.user-name {
  font-size: 26px;
  font-weight: 600;
  margin-top: 48px;
  
}

.user-email {
  display: block;
  margin-top: -10px;
  font-size: 12px;
}

.main-side-menu {
  position: absolute;
  top: 160px;
}

.slider-btn {
  position: absolute;
  top: 4px;
  right: -32px;
  color: aqua;
  font-size: 20px;
  transform: rotate(0.5turn);
  transition: 1s;
}

.slider-btn img {
  width: 24px;
  height: 24px;
}

.slider.open .slider-btn {
  transform: rotate(1turn);
  right: 4px;
}

.slider-btn:hover {
  cursor: pointer;
}

</style>