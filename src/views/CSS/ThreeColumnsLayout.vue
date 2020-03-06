<template>
  <div>
    <div class="demo demo1">
      <div class="left">left</div>
      <div class="main">main</div>
      <div class="right">right</div>
    </div>

    <div class="demo demo2">
      <div class="left">left</div>
      <div class="main">main</div>
      <div class="right">right</div>
    </div>

    <div class="demo demo3">
      <div class="left">left</div>
      <div class="main">main</div>
      <div class="right">right</div>
    </div>

    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import markdown from '@/article/CSS/ThreeColumnsLayout.md';

export default {
  components: {
    markdown
  }
}
</script>

<style scoped lang="stylus">
.demo
  height 200px
  width 100%
  margin-bottom 16px
  border-radius 16px
  overflow hidden
  >div
    text-align center
    line-height 200px
  .left
    background darkseagreen
  .main
    background silver
  .right
    background darkseagreen
.demo1
  display flex
  .left, .right
    flex-basis 100px
  .main
    flex 1
.demo2
  position relative
  .left, .right
    width 100px
    height 100%
    position absolute
    top 0
  .left
    left 0
  .right
    right 0
  .main
    width calc(100% - 200px)
    height 100%
    margin 0 100px
.demo3
  display grid
  grid-template-columns 100px 1fr 100px
</style>
