原理都是利用闭包保存变量。

防抖是任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行，一般用于输入框实时搜索；

```javascript
function debounce(fn: Function, time: number) {
  let timer: any = null;
  return function () {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time)
  }
}
```

节流是规定函数在指定的时间间隔内只执行一次，一般用于scroll事件。

```javascript
function throttle(fn: Function, time: number) {
  let canRun = true;
  return function () {
    if (!canRun) return;

    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, time);
  }
}
```


