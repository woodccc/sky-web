### 参考

[解析vue2.0的diff算法](https://segmentfault.com/a/1190000008782928)

[vue考点 —— Diff算法](https://blog.csdn.net/zhanghuali0210/article/details/82286579)


react的diff其实和vue的diff大同小异。所以这张图能很好的解释过程。比较只会在同层级进行, 不会跨层级比较。

![](./diff.png)

diff 的规则是：

节点标签名变了，直接移除，重新添加新的节点，包括直接点

文本修改只替换内容

样式修改只替换样式

兄弟节点没有 key 是，依次对比，不同则直接删除

新增兄弟节点，后面的兄弟节点都重新加载

如果有 key，兄弟节点的变化，则只新增新的节点，其他不变
