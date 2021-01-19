<template>
  <div class="side-bar-item">
      <div class="icon"><slot name="icon"></slot></div>
      <div class="text"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',

}

</script>

<style scoped>
.side-bar-item {
  border-bottom: solid 1px;
}

.side-bar-item:hover {
  background-color: salmon;
  cursor: pointer;
}


.side-bar-item .icon {
  display: inline-block;
  vertical-align: middle;
  margin-left: 35px;
}

.side-bar-item img {
  height: 18px;
  width: 18px;
}

.side-bar-item .text {
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
}



</style>