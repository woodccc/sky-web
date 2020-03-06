<template>
  <div>
    <div class="markdown-body">
      <markdown/>
    </div>

    <div class="demo">
      <div class="phone">
        <div class="other-item" v-for="i in 6" :key="'头部' + i">其他内容</div>
        <div class="tabs" style="background: darkseagreen">
          <div class="tab" v-for="index in 4" :key="index">头部Tab {{index}}</div>
        </div>
        <div class="other-item" v-for="i in 20" :key="'底部' + i">其他内容</div>
        <div class="tabs" style="background: #b3d4fc">
          <div class="tab" v-for="index in 4" :key="index">底部Tab {{index}}</div>
        </div>
        <div class="other-item" v-for="i in 40" :key="'底部' + i">其他内容</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import markdown from '@/article/CSS/Position.md';

export default {
  components: {
    markdown
  }
}
</script>

<style scoped lang="stylus">
.demo
  width 100%
  display flex
  justify-content center
  align-items center
  margin-bottom 32px
  box-sizing border-box
  .phone
    width 375px
    height 650px
    border-radius 16px
    border 1px solid #ececec
    overflow scroll
    box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    .other-item
      padding 16px
      box-sizing border-box
    .tabs
      width 100%
      height 30px
      display flex
      justify-content flex-start
      align-items center
      border 1px solid #cccccc
      border-left none
      border-right none
      position sticky
      position -webkit-sticky
      top -1px
      background #fff
      .tab
        flex 1
        height 100%
        line-height 30px
        text-align center
</style>
