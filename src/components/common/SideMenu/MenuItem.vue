<template>
  <div class="menu-item" @click="routerChange()">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    routerChange() {
      this.$router.push(this.link)
    }
  }
  
}

</script>

<style scoped>
.menu-item {
  position: relative;
  height: 50px;
  width: 200px;
  margin: 0 auto;
  transition: 0.3s;
}

.menu-item:hover {
  background-color: rgb(122, 115, 116);
  cursor: pointer;
}

.icon {
  position: absolute;
  height: 16px;
  width: 16px;

  top: 15px;
  left: 35px;
}

img {
  height: 16px;
  width: 16px;
}

.text {
  position: absolute;
  font-size: 18px;
  left: 70px;
  top: 10px;
}
</style>