<template>
  <div>
    <skin class="skin">
      <skin-item v-for="(item, index) in skinColor" 
      :key="(item, index)"
      :skinColor="item">
      </skin-item>
    </skin>
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
</style>