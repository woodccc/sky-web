<template>
  <div>
    <div class="demos">
      <div class="debounce">
        <div>防抖</div>
        <el-input @input="handleChange" placeholder="防抖" v-model="inputValue"/>

        <div>{{count}}</div>
      </div>

      <div class="throttle">
        <div>节流</div>
        <el-input @input="handleChange2" placeholder="节流" v-model="inputValue2"/>

        <div>{{count2}}</div>
      </div>
    </div>

    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script lang="ts">

// @ts-ignore
import markdown from '@/article/WrittenExamination/DebounceAndThrottle.md';

function debounce(fn: Function, time: number) {
  let timer: any = null;
  // eslint-disable-next-line
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments);
    }, time)
  }
}

function throttle(fn: Function, time: number) {
  let canRun = true;
  // eslint-disable-next-line
  return function () {
    if (!canRun) return;

    canRun = false;
    setTimeout(() => {
      // eslint-disable-next-line
      fn.apply(this, arguments);
      canRun = true;
    }, time);
  }
}

export default {
  components: {
    markdown
  },

  data() {
    return {
      count: 0,
      count2: 0,
      inputValue: '',
      inputValue2: '',
    }
  },

  methods: {
    // eslint-disable-next-line
    handleChange: debounce(function () {
      this.add();
    }, 500),

    add() {
      this.count += 1
    },

    add2() {
      this.count2 += 1
    },

    // eslint-disable-next-line
    handleChange2: throttle(function () {
      this.add2();
    }, 1000)
  }
}
</script>

<style scoped lang="stylus">
.demos
  padding-top 32px
  box-sizing border-box
  width 100%
  height 300px
  display flex
  justify-content space-around
  flex-grow 16px
  margin-bottom 32px
  >div
    width 45%
    height 100%
    border-radius 32px
    box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    padding 16px
    box-sizing border-box
</style>
