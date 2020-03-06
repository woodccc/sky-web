<template>
  <div>
    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script lang="ts">

// @ts-ignore
import markdown from '@/article/ES6/ArrowFunction.md';

export default {
  components: {
    markdown
  },

  created() {
    function outter() {
      // console.log('this.a2', this.a)
      this.a = 90
      // console.log('this.a3', this.a)
      const obj = {
        a: 10,
        b: () => {
          // console.log('b---this.a', this.a)
        },
        c: function () { // eslint-disable-line
          // console.log('c---this.a', this.a)
        }
      }
      var a = 50 // eslint-disable-line
      obj.b() // 20
      obj.c() // 10
    }

    this.a = 30
    // console.log('this.a1', this.a)

    var a = 20 // eslint-disable-line
    outter.call(this)
  }
}
</script>

<style scoped lang="stylus">

</style>
