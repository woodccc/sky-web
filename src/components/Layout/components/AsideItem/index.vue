<template>
  <div class="aside-item">
    <router-link :to="path" v-if="path">
      <el-link>{{label}}</el-link>
    </router-link>
    <el-link :disabled="!done" v-else>{{label}}</el-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AsideItem extends Vue {
  @Prop({ default: '' }) label!: string

  @Prop({ default: false }) done?: boolean

  @Prop({ default: '' }) path?: string
}
</script>

<style scoped lang="stylus">
  @import "index.styl"
</style>
