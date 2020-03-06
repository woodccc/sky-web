<template>
  <div>

    <div class="demo">
      <div class="orders">
        <div>
          <span>打招呼，吃午饭,睡 3s，吃晚饭，睡 5s</span>
          <el-button @click="handleClick(1)">执行</el-button>
        </div>
      </div>

      <div class='output'>
        <div v-for="(message, index) in messages" :key="index">{{message}}</div>
      </div>
    </div>

    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script>

// @ts-ignore
import markdown from '@/article/WrittenExamination/LazyMan.md';

/* eslint-disable */
function _lazyMan(name, callback) {
  this.name = name
  this.queue = []
  this.callback = callback

  this.queue.push(() => {
    const message = `Hi, my name is ${this.name}`
    this.callback(message)
    this.next()
  })

  setTimeout(() => {
    this.next()
  }, 0)
}

_lazyMan.prototype.next = function () {
  const fn = this.queue.shift()
  fn && fn()
}

_lazyMan.prototype.eat = function (string) {
  this.queue.push(() => {
    const message = `Now, eat ${string}`
    this.callback(message)
    this.next()
  })
  return this
}

_lazyMan.prototype.sleep = function (time) {
  this.queue.push(() => {
    this.callback(`Now, I will sleep for a moment`)
    setTimeout(() => {
      this.callback(`Wake up after ${time}ms`)
      this.next()
    }, time)
  })
  return this
}

function LazyMan(name, callback) {
  return new _lazyMan(name, callback)
}

export default {
  components: {
    markdown
  },

  data() {
    return {
      messages: []
    }
  },

  methods: {
    handleClick() {
      this.messages = []
      const callback = (message) => this.messages.push(message)
      LazyMan('wood', callback)
        .eat('午饭')
        .sleep(3000)
        .eat('晚饭')
        .sleep(5000)
    }
  }
}
</script>

<style scoped lang="stylus">
.demo
  display flex
  justify-content space-around
  >div
    flex 1
    height 300px
    box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    border-radius 16px
    margin 16px
    padding 8px
</style>
