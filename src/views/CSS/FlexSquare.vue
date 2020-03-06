<template>
  <div class="page-container">
    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import markdown from '@/article/CSS/FlexSquare.md';

export default {
  components: {
    markdown
  }
}
</script>

<style scoped lang="stylus">
.page-container
  width 100%
.demo
  width: 10%;
  padding-bottom: 10%;
  background: red;
</style>
