<template>
  <div class="skin">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Skin'
}

</script>

<style scoped>
.skin {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  
}
</style>