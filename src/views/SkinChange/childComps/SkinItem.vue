<template>
  <div class="skin-item" 
  :style="{backgroundColor:skinColor}"
  @click="changeSkin">
  </div>
</template>

<script>
export default {
  name: 'SkinItem',
  props: {
    skinColor: {
      type: String,
      required: true
    }
  },
  methods: {
    changeSkin() {
      /* console.log(this.skinColor); */
      this.$store.commit('changeSkin', this.skinColor)
    }
  }

}

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.skin-item {
  width: 150px;
  height: 150px;
  border: solid 2px transparent;
  margin: 4px;
}

.skin-item:hover {
  cursor: pointer;
  border: solid 2px olivedrab;
}

</style>