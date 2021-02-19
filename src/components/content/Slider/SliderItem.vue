<template>
  <div class="slider-item">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="text">
      <slot name="slot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderItem",
  
}

</script>

<style scoped>
.slider-item {
  position: relative;
  height: 50px;
  width: 120px;
  margin: 0 auto;
}

.icon {
  position: absolute;
  height: 16px;
  width: 16px;

  top: 15px;
}

img {
  height: 16px;
  width: 16px;
}

.text {
  position: absolute;
  font-size: 18px;
  left: 35px;
  top: 10px;
}
</style>