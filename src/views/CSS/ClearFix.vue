<template>
  <div>
    <div class="outer clearfix">
      <div class="inner">inner</div>
    </div>

    <div class="outer">
      <div class="inner">inner</div>
      <div class="clear"></div>
    </div>

    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import markdown from '@/article/CSS/ClearFix.md';

export default {
  components: {
    markdown
  }
}
</script>

<style scoped lang="stylus">
  .outer
    background darkseagreen
    margin-bottom 8px
  .inner
    width 100px
    height 100px
    background #b3d4fc
    float right
  .clearfix:after
    content ''
    clear both
    height 0
    visibility hidden
    display block
  .clear
    clear both
</style>
