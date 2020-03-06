<template>
  <div>
    <div class="demos">
      <div>
        <div class="triangle-wrapper">
          <div class="triangle"></div>
        </div>
        <div>示例 1</div>
      </div>
      <div>
        <div class="triangle-wrapper">
          <div class="triangle triangle2"></div>
        </div>
        <div>示例 2</div>
      </div>
      <div>
        <div class="triangle-wrapper">
          <div class="triangle triangle3"></div>
        </div>
        <div>示例 3</div>
      </div>
      <div>
        <div class="triangle-wrapper">
          <div class="triangle triangle4"></div>
        </div>
        <div>示例 4</div>
      </div>
      <div>
        <div class="triangle-wrapper">
          <div class="triangle triangle5"></div>
        </div>
        <div>示例 5</div>
      </div>

      <div>
        <div class="triangle-wrapper">
          <div class="triangle-by-clip-path"></div>
        </div>
        <div>示例 6</div>
      </div>
    </div>

    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import markdown from '@/article/CSS/Triangle.md';

export default {
  components: {
    markdown
  }
}
</script>

<style scoped lang="stylus">
.demos
  width 100%
  display flex
  justify-content space-around
  margin-top 16px
.triangle-wrapper
  border 1px dashed #000
  margin-bottom 8px
.triangle
  width 0
  height 0
  border-style solid
  border-width 40px
  border-color darkseagreen sandybrown goldenrod lightblue
.triangle2
  border-color darkseagreen transparent transparent transparent
  border-width 40px
.triangle3
  border-width 40px 40px 0 40px
  border-color darkseagreen transparent transparent transparent
.triangle4
  border-width 40px
  border-color darkseagreen darkseagreen transparent transparent
.triangle5
  border-width 80px 0 0 80px
  border-color darkseagreen transparent transparent transparent

.triangle-by-clip-path
  width 80px
  height 80px
  background brown
  clip-path polygon(0 0, 80px 80px, 80px 0)
</style>
