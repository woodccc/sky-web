<template>
  <div>
    <div class="group-header">
      <div class="group-header_title">{{label}}</div>
      <div class="group-header_description" v-if="description">{{description}}</div>
    </div>
    <AsideItem
      v-for="(item, index) in children"
      :key="index"
      :label="item.label"
      :path="item.path"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import AsideItem from '../AsideItem/index.vue';

@Component({
  components: {
    AsideItem,
  },
})
export default class AsideGroup extends Vue {
  @Prop() label!: string;

  @Prop() description?: string;

  @Prop({ default: [] }) children?: any;
}
</script>

<style scoped lang="stylus">
  @import "index.styl"
</style>
