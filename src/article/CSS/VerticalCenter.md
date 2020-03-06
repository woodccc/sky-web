垂直居中的方法，如果全写出来，有10多种。flex、position + transform、position + 负margin是最常见的三种情况。

```html
<div class="outer">
    <div class="inner"></div>
</div>
```

### 方法一：flex

```css
.outer{
    display: flex;
    justify-content: center;
    align-items: center
}
```

### 方法二： position + transform, inner宽高未知

```css
.outer{
    position:relative;
}
.inner{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
```

### 方法三：position + 负margin, inner宽高已知
    
```css
.outer{
    position: relative;
}
.inner{
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```

### 方法四：position + margin auto，定位 0, inner宽高已知
    
```css
.outer{
    position: relative;
}
.inner{
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
```

