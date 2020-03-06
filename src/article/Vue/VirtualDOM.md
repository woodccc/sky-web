### 参考

[vue核心之虚拟DOM(vdom)](https://www.jianshu.com/p/af0b398602bc)

[vue：虚拟dom的实现](https://segmentfault.com/a/1190000013469565)

[详解Vue中的虚拟DOM](https://www.cnblogs.com/fundebug/p/vue-virtual-dom.html)

### JS操作真实DOM的代价！
用我们传统的开发模式，原生JS或JQ操作DOM时，浏览器会从构建DOM树开始从头到尾执行一遍流程。在一次操作中，我需要更新10个DOM节点，浏览器收到
第一个DOM请求后并不知道还有9次更新操作，因此会马上执行流程，最终执行10次。例如，第一次计算完，紧接着下一个DOM更新请求，这个节点的坐标值就
变了，前一次计算为无用功。计算DOM节点坐标值等都是白白浪费的性能。
所以直接操作DOM的代价仍旧是昂贵的。

### Virtual DOM 是什么？

Virtual DOM 其实就是一棵以 JavaScript 对象( VNode 节点)作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象。最终
可以通过一系列操作使这棵树映射到真实dom上。简单来说，可以把Virtual DOM 理解为一个简单的JS对象。操作 js 对象相比直接操作dom 来说，要快的多。
再借助 diff 算法，来计算出真正需要更新的节点，最大限度地减少DOM操作，从而显著提高性能。

### 为何需要Virtual DOM？
> 具备跨平台的优势

由于 Virtual DOM 是以 JavaScript 对象为基础而不依赖真实平台环境，所以使它具有了跨平台的能力，比如说浏览器平台、Weex、Node 等。

> 操作 DOM 慢，js运行效率高。我们可以将DOM对比操作放在JS层，提高效率。

因为DOM操作的执行速度远不如Javascript的运算速度快，因此，把大量的DOM操作搬运到Javascript中，运用patching算法来计算出真正需要更新的节点，最大限度地减少DOM操作，从而显著提高性能。

> 提升渲染性能

Virtual DOM的优势不在于单次的操作，而是在大量、频繁的数据更新下，能够对视图进行合理、高效的更新。
