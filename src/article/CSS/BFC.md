### 定义
BFC 是 Block formatting context 的缩写，也就是块级格式化上下文。

### 如何触发 BFC

只要元素满足下面任一条件即可触发 BFC 特性：

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

### 应用

1.外边距重叠
2.清除浮动
3.阻止元素被浮动元素覆盖

### 参考

[10 分钟理解 BFC 原理](https://zhuanlan.zhihu.com/p/25321647)
