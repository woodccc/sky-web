<template>
  <div class="page-container">
    <div class="demos">
      <div class="demo demo1 outer">
        <div class="inner">demo1</div>
      </div>
      <div class="demo demo2 outer">
        <div class="inner">demo2</div>
      </div>
      <div class="demo demo3 outer">
        <div class="inner">demo3</div>
      </div>
      <div class="demo demo4 outer">
        <div class="inner">demo4</div>
      </div>
    </div>
    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import markdown from '@/article/CSS/VerticalCenter.md';

export default {
  components: {
    markdown
  }
}
</script>

<style scoped lang="stylus">
  .demos
    width 100%
    height 200px
    display flex
    justify-content space-around
    align-items center
    background #ccc
    border-radius 16px
    margin-bottom 16px
    .demo
      width 200px
      height 200px
      background #b3d4fc
      .inner
        background #222222
        color #fff
        text-align center
        line-height 100px

    .demo1
      display flex
      justify-content center
      align-items center

    .demo2
      position relative
      .inner
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)

    .demo3
      position relative
      .inner
        width 100px
        height 100px
        position absolute
        left 50%
        top 50%
        margin-left -50px
        margin-top -50px

    .demo4
      position relative
      .inner
        width 100px
        height 100px
        position absolute
        left 0
        top 0
        bottom 0
        right 0
        margin auto
</style>
