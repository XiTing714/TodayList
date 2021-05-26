<template>
  <div class="main">
    <div class="block">
      <el-carousel trigger="click" height="550px">
        <el-carousel-item>
          <img src="~assets/img/Carousel/1.jpg">
        </el-carousel-item>
        <el-carousel-item>
          <img src="~assets/img/Carousel/2.jpg">
        </el-carousel-item>
        <el-carousel-item>
          <img src="~assets/img/Carousel/3.jpg">
        </el-carousel-item>
        <el-carousel-item>
          <img src="~assets/img/Carousel/4.jpg">
        </el-carousel-item>
        <el-carousel-item>
          <img src="~assets/img/Carousel/5.jpg">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FocusMode',
  data() {
    return {
      msg: '专注模式',
      currentIndex: 1,
      picWidth: 1000,
      timeOut: null,
      timeInterval: null
      
    }
  },
  computed: {
    picListLength() {
      var gallery = document.querySelector('.gallery')
      var picList = gallery.getElementsByTagName('img')
      return picList.length
    }
  },
  methods: { 

  }
}

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.main {
  width: 100%;
  height: 100%;
  position: relative;
}


.block {
  width: 1000px;
  height: 550px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.el-carousel {
  width: 1000px;
  height: 550px;
}

.el-carousel__item img {
  width: 1000px;
  height: 550px;
  }

</style>