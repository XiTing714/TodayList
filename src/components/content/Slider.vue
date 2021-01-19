<template>
<div class="slider" :class="{close: isSliderClosed}">
  <div class="slider-info">
    <span>XiTing</span>
  </div>
  <div class="slider-main">
    <ul>
      <li v-for="(item, index) in sliderList" :key="(item, index)">
        <div class="li-content">
          <div class="icon">
            <img src="~assets/img/TodayTask.png">
          </div>
          <div class="text">
            <span>{{ item.title }}</span>
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
  props: {
    sliderList: {
      type: Array,
      required: true
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