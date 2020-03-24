<template>
  <div class="content">
    <div class="left" :style="leftStyle">left</div>
    <div class="right" :style="rightStyle">right</div>
  </div>
</template>

<script>
export default {
  name: "ParallaxItem",

  data() {
    return {
      proportion: 0
    }
  },

  props: {
    scrollTop: Number,
    distance: Number,
    threshold: Number,
  },

  watch: {
    scrollTop(scrollTopValue) {
      if (scrollTopValue < this.threshold) return this.init(0)
      if (scrollTopValue >= this.threshold + this.distance) return this.init(1)

      this.proportion = (scrollTopValue - this.threshold) / this.distance
    }
  },

  computed: {
    leftStyle() {
      return {
        // transform: `scale(${this.scale}) rotate(${this.rotate})`
        transform: `translateY(${- this.proportion * 300}px)`
      }
    },
    rightStyle() {
      return {
        // transform: `scale(${this.scale}) rotate(${this.rotate})`
        transform: `translateY(${- this.proportion * 100}px)`
      }
    }
  },

  methods: {
    init(proportion) {
      this.proportion = proportion
    }
  }
}
</script>

<style scoped lang="stylus">
  .content
    color: #000
    position relative
    height 300px
    display flex
    justify-content flex-start
    >div
      width 50%
      height 100%
    .left
      background #5c6370
    .right
      background #005cc5
</style>
