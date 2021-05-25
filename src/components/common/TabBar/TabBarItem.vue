<template>
  <div class="tab-bar-item" :class="{selected:isSelected}">
    <div @click="itemClick">
      <slot name="itemName"><span>itemName</span></slot>
      <slot name="countNum"><span>countNum</span></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props: {
    cfilterText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    isSelected() {
      return this.$store.state.filterText === this.cfilterText
    }
  },
  methods: {
    itemClick() {
      this.$emit('itemclick', this.cfilterText)
    }
  }

}

</script>

<style scoped>
.tab-bar-item {
  padding: 1px 6px;
}

.tab-bar-item:hover {
  cursor: pointer;
}

.tab-bar-item span {
  color: black;
  font-size: 14px;
}

.selected {
  font-weight: 570;
  background-color: rgb(116, 117, 155);
  border: solid 1px rgb(167, 168, 189);
  border-radius: 4px;
}

.selected span {
  color: white;
}

</style>