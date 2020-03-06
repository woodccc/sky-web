<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from '@/components/Layout/index.vue';

export default {
  name: 'home',
  components: {
    Layout,
  },
};
</script>

<style lang="stylus">
@import "./style/reset.css"
@import "./style/utils.styl"

body
  margin 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
