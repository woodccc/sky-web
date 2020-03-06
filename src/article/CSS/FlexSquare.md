### 方法1：利用CSS3的vw单位

vw 会把视口的宽度平均分为100份

```css
.square {
    width: 10vw;
    height: 10vw;
    background: red;
}
```

### 方法2：利用margin或者padding的百分比计算是参照父元素的width属性

```css
.square {
    width: 10%;
    padding-bottom: 10%; 
    height: 0; // 防止内容撑开多余的高度
    background: red;
}
```
