清除浮动主要是为了防止父元素塌陷。清除浮动的方法有很多，常用的是 clearfix 伪类。

### 方法一：clearfix
```html
<div class="outer clearfix">
    <div class="inner">inner</div>
</div>
```

```css
.outer
  background darkseagreen
  .inner
    width 100px
    height 100px
    background #b3d4fc
    float right
  .clearfix:after
    content ''
    clear both
    height 0
    visibility hidden
    display block
```

### 方法二：额外加一个div，clear:both

```html
<div class="outer">
  <div class="inner">inner</div>
  <div class="clear"></div>
</div>
```

```css
.outer
  background darkseagreen
  .inner
    width 100px
    height 100px
    background #b3d4fc
    float right
  .clear
    clear both
```
