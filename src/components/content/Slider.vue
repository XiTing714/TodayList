<template>
<div class="slider" :class="{close: isSliderClosed}">
  <div class="slider-info">
    <span>XiTing</span>
  </div>
  <div class="slider-main">
    <ul>
      <li>
        <div class="li-content">
          <div class="icon">
            <img src="~assets/img/TodayTask.png">
          </div>
          <div class="text">
            <span>1ag哈哈</span>
          </div>
        </div>
      </li>
      <li>
        <div class="li-content">
          <div class="icon">
            <img src="~assets/img/TodayTask.png">
          </div>
          <div class="text">
            <span>1ag哈哈</span>
          </div>
        </div>
      </li>
      <li>
        <div class="li-content">
          <div class="icon">
            <img src="~assets/img/TodayTask.png">
          </div>
          <div class="text">
            <span>1ag哈哈</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="slider-btn" @click="handleSlideState">
    <span>></span>
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
  methods: {
    handleSlideState() {
      this.isSliderClosed = !this.isSliderClosed
    }
  }

}

</script>
<style>


</style>