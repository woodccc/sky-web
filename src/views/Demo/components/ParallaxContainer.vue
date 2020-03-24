<template>
  <div class="parallax-wrapper" ref="parallaxWrapper">
    <div class="content-container">
      <div style="height: 500px;background: #61aeee">header</div>

      <ParallaxItem
        :scrollTop="scrollTop"
        :distance="300"
        :threshold="200"
      />

      <div style="height: 300px"></div>

      <ParallaxItem
        :scrollTop="scrollTop"
        :distance="800"
        :threshold="500"
      />

      <div class="bottom">bottom</div>
    </div>
  </div>
</template>

<script>
import ParallaxItem from './ParallaxItem'

export default {
  name: "ParallaxContainer",

  data() {
    return {
      scrollTop: 0
    }
  },

  components: { ParallaxItem },

  mounted() {
    this.scrollContainer = this.$refs.parallaxWrapper
    this.scrollContainer.addEventListener('scroll', (e) => {
      this.scrollTop = e.target.scrollTop
    })
  }
}
</script>

<style scoped lang="stylus">
  .parallax-wrapper
    height 100%
    overflow scroll
    position relative

  .content-container
    height 3000px
  .bottom
    width 100%
    height 200px
    background #735c0f
</style>
