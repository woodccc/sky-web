<template>
  <div>
    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script lang="ts">

// @ts-ignore
import markdown from '@/article/Vue/TwoWayBind.md';

export default {
  components: {
    markdown
  }
}
</script>

<style scoped lang="stylus">

</style>
