<template>
  <div id="app">
    <slider></slider>
  </div>
</template>

<script>
import Slider from './components/content/Slider'

export default {
  name: 'App',
  components: {
    Slider
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
