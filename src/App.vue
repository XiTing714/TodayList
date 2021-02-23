<template>
  <div id="app" :style="{backgroundColor:$store.state.appBgColor}">
    <slider></slider>
    <router-view></router-view>
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
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
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
