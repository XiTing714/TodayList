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
      skinColor: ["green", "red", "blue", "yellow", "purple", "white"]
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