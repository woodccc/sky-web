<template>
  <div>
    <div class="demos">
      <div class="shuffle">
        <div>乱序：原地洗牌算法</div>
        <el-button @click="handleShuffle">打乱</el-button>
        <div>
          原始数组
          <span v-for="item in originShuffleArr" :key="'originShuffleArr' + item">{{item}}</span>
        </div>
        <div>乱序数组 <span v-for="item in shuffleArr" :key="'shuffleArr' + item">{{item}}</span></div>
      </div>

      <div class="uniq">
        <div>去重</div>
        <el-button disabled >去重</el-button>
        <div>
          原始数组
          <span
            v-for="(item, index) in originUniqArr" :key="'originUniqArr' + index"
          >{{item}} </span>
        </div>
        <div>
          去重数组
          <span v-for="(item, index) in uniqArr" :key="'uniqArr' + index">{{item}} </span>
        </div>
      </div>

      <div class="uniq">
        <div>flat</div>
        <el-button disabled >flat</el-button>
        <div>
          原始数组
          <span
            v-for="(item, index) in deepArray" :key="'deepArray' + index"
          >{{item}} </span>
        </div>
        <div>
          展开一级数组
          <span v-for="(item, index) in flatArray" :key="'flatArray' + index">{{item}} </span>
        </div>
        <div>
          展开2级数组
          <span v-for="(item, index) in flattenDepthArray" :key="'flattenDepthArray' + index">
            {{item}}
          </span>
        </div>
        <div>
          全部展开数组
          <span v-for="(item, index) in flattenDeepArray" :key="'flattenDeepArray' + index">
            {{item}}
          </span>
        </div>
      </div>

      <div class="filter">
        <div>过滤</div>
        <el-button disabled >过滤</el-button>
        <div>
          原始数组
          <span
            v-for="(item, index) in originUniqArr" :key="'originUniqArr' + index"
          >{{item}} </span>
        </div>
        <div>
          过滤大于等于 5 结果:
          <span v-for="(item, index) in filterArray" :key="'filterArray' + index">{{item}} </span>
        </div>
      </div>
    </div>

    <div class="markdown-body">
      <markdown/>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import markdown from '@/article/WrittenExamination/Array.md';

function shuffle(arr: Array<number>) {
  const newArr = [...arr]
  let index = newArr.length - 1;
  while (index > 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [newArr[randomIndex], newArr[index]] = [newArr[index], newArr[randomIndex]];/* eslint-disable-line */
    index -= 1;
  }
  return newArr;
}

function uniq(array: any) {
  const newArr: Array<any> = [...array]
  const result: Array<any> = [];
  const hashMap: any = {};
  for (let i = 0; i < newArr.length; i++) { /* eslint-disable-line */
    const temp = newArr[i]
    if (!hashMap[temp]) {
      hashMap[temp] = true
      result.push(temp)
    }
  }
  return result
}

function flat(array: Array<any>) {
  let result: Array<any> = []
  for (let i = 0; i < array.length; i++) { // eslint-disable-line
    if (Array.isArray(array[i])) {
      result = [...result, ...array[i]]
    } else {
      result = [...result, array[i]]
    }
  }
  return result
}

function flattenDepth(array: Array<any>, deep: number) {
  let result: Array<any> = []
  for (let i = 0; i < array.length; i++) { // eslint-disable-line
    if (deep >= 1 && Array.isArray(array[i])) {
      result = [...result, ...flattenDepth(array[i], deep - 1)]
    } else {
      result = [...result, array[i]]
    }
  }
  return result
}

function flattenDeep(array: Array<any>) {
  let result: Array<any> = []
  for (let i = 0; i < array.length; i++) { // eslint-disable-line
    if (Array.isArray(array[i])) {
      result = [...result, ...flattenDeep(array[i])]
    } else {
      result = [...result, array[i]]
    }
  }
  return result
}

function filter(arr: Array<any>, fn: Function) {
  const result = []
  for (let i = 0; i < arr.length; i++) { // eslint-disable-line
    const currentResult = fn(arr[i], i, arr)
    if (currentResult) {
      result.push(arr[i])
    }
  }
  return result
}

const originUniqArr = ['9',2,3,3,5,'8',8,2]
const deepArray = [1, [2, [3, [4]], 5]]

export default {
  components: {
    markdown
  },

  data() {
    return {
      originShuffleArr: [1,2,3,4,5,6,7,8,9],
      shuffleArr: [],
      originUniqArr,
      uniqArr: uniq(originUniqArr),
      deepArray,
      flatArray: flat(deepArray),
      flattenDepthArray: flattenDepth(deepArray, 2),
      flattenDeepArray: flattenDeep(deepArray),
      filterArray: filter(originUniqArr, (item: any) => Number(item) >= 5),
    }
  },

  methods: {
    handleShuffle() {
      this.shuffleArr = shuffle(this.originShuffleArr)
    }
  }
}
</script>

<style scoped lang="stylus">
.demos
  width 100%
  display flex
  justify-content space-around
  padding-top 16px
  >div
    flex 1
    >div
      margin 8px 0
</style>
