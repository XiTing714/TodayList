<template>
  <div class="tab-bar-item" :class="{selected:isSelected}" @click="itemClick">
    <slot name="itemName"><span>itemName</span></slot>
    <slot name="countNum"><span>countNum</span></slot>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props: {
    link: {
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
      // 判断当前活跃路径route字符串是否包含该组件属性link字符串
      // 包含，则不等于-1成立、返回true；否则表示等于-1、返回false
      return this.$route.path.indexOf(this.link) != -1
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
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
  background-color: #009688;
  border: solid 1px #00796B;
  border-radius: 4px;
}

.selected span {
  color: white;
}

</style>