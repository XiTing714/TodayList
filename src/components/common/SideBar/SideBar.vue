<template>
  <div class="side-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SideBar'

}

</script>

<style scoped>
.side-bar {
  width: 180px;
  height: 100vh;
}
</style>