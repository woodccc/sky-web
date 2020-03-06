### Vue.nextTick

> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

### 用处

1. 在生命周期中需要用到 dom，或者需要等待 dom 更新完成
2. 数据变化后立即进行的操作，这个操作依赖 dom

### 实现原理

[参考](https://www.cnblogs.com/liuhao-web/p/8919623.html)

#### 总结

> 1. vue用异步队列的方式来控制DOM更新和nextTick回调先后执行

> 2. microtask因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕

> 3. 因为兼容性问题，vue不得不做了microtask向macrotask的降级方案
