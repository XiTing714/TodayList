<template>
  <div id="app" :style="{backgroundColor:$store.state.appBgColor}">
    <slider :sliderList="sliderList"></slider>
    <router-view></router-view>
    <!-- <today-task></today-task> -->
  </div>
</template>

<script>
import Slider from 'components/content/Slider'
/* import TodayTask from '../src/views/TodayTask' */

export default {
  name: 'App',
  components: {
    Slider,
  },
  data() {
    return {
      sliderList: [
        {
          title: '今日任务',
          routeName: '/todaytask'
        },
        {
          title: '加油站',
          routeName: '/FocusMode'
        },
        {
          title: '皮肤',
          routeName: '/SkinChange'
        },
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style>
@import "assets/css/slider.css";
@import "assets/css/TodayTask.css";

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
  overflow: scroll;
  background-color: #9b9bda;
}

/* @import 'assets/css/slider.css' */
</style>
