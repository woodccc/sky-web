<template>
  <div class="home">
    <div class="content">{{poem.content}}</div>
    <div class="author">《 {{poem.origin}} 》 - {{poem.author}}</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      poem: {}
    }
  },
  mounted() {
    const that = this
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://v1.jinrishici.com/all.json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        that.poem = JSON.parse(xhr.responseText)
      }
    }
    xhr.send()
  }
}
</script>

<style scoped lang="stylus">
  .home
    display flex
    flex-direction column
    justify-content center
    align-items center
    height calc(100vh - 60px)

  .content
    margin-bottom 24px
    font-size 48px
    font-weight 700

  .author
    display flex
    font-size 24px
    font-weight 500
    align-self flex-end
    padding-right 20vw
</style>
