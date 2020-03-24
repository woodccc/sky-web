<template>
  <div class="layout" :style="{'grid-template-columns': asideFold ? '1fr 4fr' : '0fr 5fr'}">
    <div class="side">
      <div class="percentage">
        <el-progress :show-text="false" :percentage="percentage"/>
      </div>
      <AsideGroup
        v-for="(asideGroup, index) in asideDataWithRoute"
        :key="index"
        :label="asideGroup.label"
        :description="asideGroup.description"
        :children="asideGroup.children"
      />
    </div>
    <div class="main">
      <h1 class="title">
        <div class="icon-container" @click="handleToggleAsideFold">
          <i v-if="asideFold" class="el-icon-s-fold"></i>
          <i v-else class="el-icon-s-unfold"></i>
        </div>
        {{currentAsideItemLabel}}
      </h1>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import _ from 'lodash';

import { Component, Prop, Vue } from 'vue-property-decorator';
import AsideGroup from './components/AsideGroup/index.vue';

import asideData from '@/constants/aside';
import routes from '@/router/routes';

@Component({
  components: {
    AsideGroup,
  },
})
export default class Layout extends Vue {
  asideFold: Boolean = false;

  @Prop() private msg!: string;

  get asideDataWithRoute(): any {
    return asideData.map(group => ({
      ...group,
      children: group.children.map((asideItem) => {
        const route = routes.find(routeItem => routeItem.name === asideItem.name);
        return {
          ...asideItem,
          path: route ? route.path : ''
        };
      })
    }));
  }

  get allAsideItems() {
    const allAsideItems = this.asideDataWithRoute.map((group: any) => group.children);
    return _.flatten(allAsideItems);
  }

  get currentAsideItem() {
    return _.find(this.allAsideItems, (item: any) => item.name === this.$route.name);
  }

  get currentAsideItemLabel() {
    return _.get(this.currentAsideItem, 'label', '');
  }

  get percentage() : number {
    const hadDone = _.filter(this.allAsideItems, ((item: any) => item.path));
    return Number(((hadDone.length / this.allAsideItems.length) * 100).toFixed(2));
  }

  handleToggleAsideFold() {
    this.asideFold = !this.asideFold
  }
}
</script>

<style scoped lang="stylus">
  @import "index.styl"
  .main h1
    position relative
  .icon-container
    height 100%
    position absolute
    left 0
    top 0
    display flex
    flex-direction column
    justify-content center
</style>
