<template>
  <div>
    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script lang="ts">

// @ts-ignore
import markdown from '@/article/ES6/GeneratorPromiseAsync.md';

/* eslint-disable */
export default {
  components: {
    markdown
  },

  created() {
    function task1() {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('task 1 执行完毕')
          resolve()
        }, 1000)
      })
    }

    function task2() {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('task 2 执行完毕')
          resolve()
        }, 2000)
      })
    }

    function* gen() {
      yield task1();
      yield task2();
    }

    function runner(gen: any) {
      const g = gen()

      return new Promise(resolve => {
        function run(): any {
          const result = g.next()
          if (result.done) {
            return resolve(result.value)
          } else {
            return run()
          }
        }
        run()
      })
    }

    async function asyncFn() {
      await task1()
      await task2()
    }

    // asyncFn()
    runner(gen)
  }
}
</script>

<style scoped lang="stylus">

</style>
