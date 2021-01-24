<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}

</script>

<style scoped>
.tab-bar {
  position: absolute;
  top: 11px;
  right: 150px;
  width: 250px;

  display: flex;
  justify-content: space-around;
}
</style>