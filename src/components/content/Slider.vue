<template>
<div class="slider" :class="{open: isSliderClosed}">
  <div class="slider-info">
    <div class="user-name">UserName</div>
    <span class="user-email">useremail@gmail.com</span>
  </div>
  <div class="slider-main">
    <ul>
      <li v-for="(item, index) in sliderList" :key="(item, index)"
          @click="routerChange(item)">
        <div class="li-content">
          <div class="icon">
            <img src="~assets/img/Slider/TodayTask.png">
          </div>
          <div class="text">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="slider-btn" @click="handleSlideState">
    <!-- <span>></span> -->
    <img src="~assets/img/menu.png">
  </div>
</div>

</template>

<script>

export default {
  name: 'Slider',
  data() {
    return {
      isSliderClosed: false
    }
  },
  props: {
    sliderList: {
      type: Array,
      required: true
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
<style>


</style>