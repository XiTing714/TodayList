<template>
  <div class="main">
    <skin class="skin">
      <skin-item v-for="(item, index) in skinColor" 
      :key="(item, index)"
      :skinColor="item">
      </skin-item>
    </skin>
    <!-- <div class="img">
      <img src="~assets/img/flower1.png" id="flo1">
      <img src="~/assets/img/flower2.png" id="flo2">
    </div> -->
  </div>
</template>

<script>
import Skin from './childComps/Skin.vue'
import SkinItem from './childComps/SkinItem.vue'

export default {
  name: 'SkinChange',
  data() {
    return {
      skinColor: [
        "#c02c38", 
        "#681752", 
        "#144a74", 
        "#253d24", 
        "#ff9900", 
        "#fc6315"]
    }
  },
  components: {
    SkinItem,
    Skin
  },
}

</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  position: relative;
}

.skin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>