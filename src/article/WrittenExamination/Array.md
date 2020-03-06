### 数组乱序

```javascript
// 原地洗牌算法
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
```

### 数组去重

#### 利用 es6 Set

因为 Set 是不会存在重复元素的，所以如果数组内的元素都是同一类型（对象除外）则可以利用 Set 的这一特性快速去重

```javascript
const originArr = [9,2,3,3,5,8,8,2]
uniq(arr) {
  const newArr = [...arr]
  return [...new Set(newArr)]
}
uniq(originArr) //  9 2 3 5 8
```

如果存在不同类型的话，则无法使用 Set 了

```javascript
const originArr = ['9',2,3,3,5,'8',8,2]

function uniq(array) {
  const newArr = [...array]
  const result = [];
  const hashMap = {};
  for (let i = 0; i < newArr.length; i++) {
    const temp = newArr[i]
    if (!hashMap[temp]) {
      hashMap[temp] = true
      result.push(temp)
    }
  }
  return result
}

uniq(originArr) // 9 2 3 5 8
```

### flat

```javascript
const deepArray = [1, [2, [3, [4]], 5]]
```

#### 展开一级

```javascript
function flat(array: Array<any>) {
  let result: Array<any> = []
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = [...result, ...array[i]]
    } else {
      result = [...result, array[i]]
    }
  }
  return result
}
flat(deepArray) // 1 2 [ 3, [ 4 ] ] 5
```

#### 展开多级

```javascript
function flattenDepth(array: Array<any>, deep: number) {
  let result: Array<any> = []
  for (let i = 0; i < array.length; i++) {
    if (deep >= 1 && Array.isArray(array[i])) {
      result = [...result, ...flattenDepth(array[i], deep - 1)]
    } else {
      result = [...result, array[i]]
    }
  }
  return result
}
flattenDepth(deepArray, 2) // 1 2 3 [ 4 ] 5
```

#### 展开全部

```javascript
function flattenDeep(array: Array<any>) {
  let result: Array<any> = []
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = [...result, ...flattenDeep(array[i])]
    } else {
      result = [...result, array[i]]
    }
  }
  return result
}
flattenDeep(deepArray) // 1 2 3 4 5
```

### filter

```javascript
const originUniqArr = ['9',2,3,3,5,'8',8,2]

function filter(arr: Array<any>, fn: Function) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const currentResult = fn(arr[i], i, arr)
    if (currentResult) {
      result.push(arr[i])
    }
  }
  return result
}

filter(originUniqArr, item => Number(item) >= 5) // 9 5 8 8
```


