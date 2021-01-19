<template>
  <div id="app">
    <slider :sliderList="sliderList"></slider>
  </div>
</template>

<script>
import Slider from './components/content/Slider'

export default {
  name: 'App',
  components: {
    Slider
  },
  data() {
    return {
    sliderList: [
      {
        title: '今日任务'
      },
      {
        title: '待办项目'
      },
      {
        title: '已完成项目'
      },
      {
        title: '专注模式'
      },
      {
        title: '皮肤'
      },
    ]
  }
  }
}
</script>

<style>
@import "assets/css/slider.css";

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: #29292D;
}

/* @import 'assets/css/slider.css' */
</style>
