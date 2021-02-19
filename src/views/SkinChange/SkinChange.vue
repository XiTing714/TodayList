<template>
  <div>
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
.skin {
  margin: 100px auto;
}

/* .img {
  margin-top: -150px;
  border: solid 1px;
  position: relative;
}

#flo1 {
  width: 300px;
  height: 300px;
  position: absolute;
  top: -150px;

}

#flo2 {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 450px;
}
 */

</style>