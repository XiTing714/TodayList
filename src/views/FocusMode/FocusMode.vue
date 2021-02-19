<template>
  <div class="main" @mouseenter="stopInterval" @mouseleave="startInterval">
    <div class="gallery">
      <img src="~assets/img/Carousel/5.jpg">
      <img src="~assets/img/Carousel/1.jpg">
      <img src="~assets/img/Carousel/2.jpg">
      <img src="~assets/img/Carousel/3.jpg">
      <img src="~assets/img/Carousel/4.jpg">
      <img src="~assets/img/Carousel/5.jpg">
      <img src="~assets/img/Carousel/1.jpg">
    </div>
    <div class="indicator">
      <div class="on"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="button">
      <button class="left" @click="prePic"><img src="~assets/img/button.png"></button>
      <button class="right" @click="nextPic"><img src="~assets/img/button.png"></button>
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
    // 左按钮上一张图
    prePic() {
      this.currentIndex--
      if(this.currentIndex == 0) {
        this.headToTail(1.5, true)
      } else {
        this.commonSwitch(1.5, false)
      }
    },
    // 右按钮下一张图
    nextPic() {
      this.currentIndex++
      if(this.currentIndex == this.picListLength-1) {
        this.tailToHead(1.5, true)
      } else {
        this.commonSwitch(1.5, false)
      }
    },
    // 鼠标移入停止interval定时器
    stopInterval() {
      clearInterval(this.timeInterval)
    },
    // 鼠标离开时开始interval定时器
    startInterval() {
      this.autoSwitch(3000)
    },

    // 封装移动gallery函数
    galleryMove(transTime, boolVal) {
      var gallery = document.querySelector('.gallery')
      var leftBtn = document.querySelector('.left')
      var rightBtn = document.querySelector('.right')
      gallery.style.left = -this.picWidth*this.currentIndex + 'px'
      gallery.style.transition = 'left ' + transTime + 's ' + 'ease'
      leftBtn.disabled = boolVal || false
      rightBtn.disabled = boolVal || false
    },
    // 封装指示灯遍历改className函数
    indicSwitch() {
      var indicator = document.querySelector('.indicator')
      var indicatorList = indicator.getElementsByTagName('div')
      var length = indicatorList.length
      for(var i = 0; i < length; i++) {
        indicatorList[i].className = ''
      }
    },
    // 封装公共切换函数
    commonSwitch(transTime, boolVal) {
      var indicator = document.querySelector('.indicator')
      var indicatorList = indicator.getElementsByTagName('div')
      // 移动gallery
      this.galleryMove(transTime, boolVal)
      // 指示灯变化
      this.indicSwitch()
      indicatorList[this.currentIndex-1].className = 'on'
    },

    // 封装从尾到首切换函数
    tailToHead(transTime, boolVal) {
      var indicator = document.querySelector('.indicator')
      var indicatorList = indicator.getElementsByTagName('div')
      if(this.currentIndex == this.picListLength-1) {
        //移动gallery且禁用按钮：
        this.galleryMove(transTime, boolVal)
        // 指示灯变化: 
        this.indicSwitch()
        indicatorList[0].className = 'on'

        // 在transitionTime这个结束transition的时刻瞬间把left改为-500
        this.timeOut = setTimeout(() => {
          this.currentIndex = 1
          this.galleryMove(0, false)
        }, transTime*1000)
      }
    },

    // 封装从首到尾切换函数
    headToTail(transTime, boolVal) {
      var indicator = document.querySelector('.indicator')
      var indicatorList = indicator.getElementsByTagName('div')
      if(this.currentIndex == 0) {
        //移动gallery且禁用按钮:
        this.galleryMove(transTime, boolVal)
        // 指示灯变化: 
        this.indicSwitch()
        indicatorList[indicatorList.length-1].className = 'on'
        // 在1.5s这个结束transition的时刻瞬间把left改为-500
        this.timeOut = setTimeout(() => {
          this.currentIndex = indicatorList.length
          this.galleryMove(0,false)
        }, transTime*1000)
      }
    },
    
    // 封装自动切换函数
    autoSwitch(interval) {
      this.timeInterval = setInterval(() => {
        this.currentIndex++
        if(this.currentIndex == this.picListLength-1) {
          this.tailToHead(1.5, true)
        } else {
          this.commonSwitch(1.5, false)
        }
      }, interval)
    }
    
  },
  mounted() {
    this.autoSwitch(3000)
    /* console.log("加油站mounted"); */

    //给指示灯添加onclik事件
    var indicator = document.querySelector('.indicator')
    var indicatorList = indicator.getElementsByTagName('div')
    for(let i = 0; i < indicatorList.length; i++) {
      indicatorList[i].onclick = () => {
        if(i == 0 && this.currentIndex == indicatorList.length) {
          this.currentIndex++
          this.tailToHead(1.5, true)
        } else if(i == (indicatorList.length - 1) && this.currentIndex == 1) {
          this.currentIndex--
          this.headToTail(1.5, true)
        } else {
          clearTimeout(this.timeOut)
          this.currentIndex = i + 1
          this.commonSwitch(1.5, false)
        }
      }
    }
  },
  destroyed() {
    this.stopInterval()
  }
}

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* .main {
  width: 500px;
  height: 300px;
  margin: 50px auto;
  position: relative;
  overflow: hidden;
} */

.main {
  width: 1000px;
  height: 550px;
  margin: 35px auto;
  position: relative;
  overflow: hidden; 
}

.gallery, .gallery img{
  width: 1000px;
  height: 550px;
}

.gallery {
  position: absolute;
  display: flex;
  left: -1000px
}

.indicator {
  position: absolute;
  bottom: 20px;
  height: 10px;
  width: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
}

.indicator div {
  width: 10px;
  height: 10px;
  background-color: beige;
  border-radius: 50%;
  cursor: pointer;
}

.indicator .on {
  background-color: rgb(247, 80, 116);
  transition: 0.5s;
}

.button button, .button img {
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  background-color: transparent
}

.button .left:focus, .button .right:focus {
  outline: none;
}

.button .left {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.button .left img {
  transform: rotate(0.25turn);
}

.button .right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.button .right img {
  transform: rotate(-0.25turn);
}
</style>