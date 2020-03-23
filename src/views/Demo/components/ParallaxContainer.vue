<template>
  <div class="parallax-wrapper" ref="parallaxWrapper">
    <div class="content-container">
      <div>header</div>
      <div>header</div>
      <div>header</div>

      <div class="content" :style="{'transform': 'scale('+ scale +')'}">heiheihei</div>

      <div>bottom</div>
      <div>bottom</div>
      <div>bottom</div>
      <div>bottom</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParallaxContainer",

  data() {
    return {
      scale: 1,
      scrollTop:0
    }
  },

  mounted() {
    this.scrollContainer = this.$refs.parallaxWrapper
    this.scrollContainer.addEventListener('scroll', (e) => {
      this.scrollTop = e.target.scrollTop
    })
  },

  watch: {
    scrollTop(scrollTopValue) {
      let number = 500
      if (scrollTopValue < number || scrollTopValue > number + 200) return

      this.scale = (scrollTopValue - number) / 200 + 1
    }
  }
}
</script>

<style scoped lang="stylus">
  .parallax-wrapper
    height 100%
    overflow scroll
  .content-container
    height 3000px
  .content
    color: #000
    position fixed
    top 100px
    right 50px
</style>
