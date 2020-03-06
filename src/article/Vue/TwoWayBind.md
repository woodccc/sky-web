### 参考

[剖析Vue原理&实现双向绑定MVVM](https://segmentfault.com/a/1190000006599500)

[Vue.js双向绑定的实现原理](https://www.cnblogs.com/kidney/p/6052935.html)

### 双向绑定
整理了一下，要实现mvvm的双向绑定，就必须要实现以下几点：

1、实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者

2、实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数

3、实现一个Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图

4、mvvm入口函数，整合以上三者

### 单向绑定

在用 react 时，数据是单向绑定的。比如说输入框输入的内容，在 change 事件中将 data 修改，data 又作为输入框的值。这个过程是我们手动去设置的。

而在 vue 中不一样，输入框通过双向绑定就不再需要我们手动设置 data。

### Object.defineProperty()

vue 示例是一个对象，data 是这个实例的一个属性。es 中有两种属性，分别为数据属性和访问器属性。访问器属性不包含数据值；它包含一对 getter 和 
setter 函数。在读取访问器属性时调用 getter 函数，在写入访问器属性时，调用 setter 函数。访问器属性不能直接定义，必须使用 Object.defineProperty()
来定义。

vue 则是通过 Object.defineProperty()来实现数据劫持。

view 更新 data 上面已经讲了，通过事件监听就可以实现。重点是 data 更新 view 怎么实现。

那么当我们知道什么时候数据更新了，就可以去做相应的操作更新 view 了。


