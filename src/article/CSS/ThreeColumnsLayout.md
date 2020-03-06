三栏布局是很常见的一种页面布局方式。左右固定，中间自适应。实现方式有很多种方法。

```html
<div class="container">
    <div class="left">left</div>
    <div class="main">main</div>
    <div class="right">right</div>
</div>
```

### 第一种：flex

```css
.demo1
  display flex
  .left, .right
    flex-basis 100px
  .main
    flex 1
```

### 第二种：position + margin

```css
.demo2
  position relative
  .left, .right
    width 100px
    height 100%
    position absolute
    top 0
  .left
    left 0
  .right
    right 0
  .main
    width calc(100% - 200px)
    height 100%
    margin 0 100px
```

### 第三种： grid
```css
.demo3
  display grid
  grid-template-columns 100px 1fr 100px
```
