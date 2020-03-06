### 利用 border 实现三角形

利用 border 实现三角形，只要是利用 border-width 和 border-color 配合。border-width 控制三角形大小与方向，border-color 控制颜色。

例如示例 1，实现了一个四个方向的三角形，中间的内容区域宽高都为 0。

```css
.triangle
  width 0
  height 0
  border-style solid
  border-width 40px
  border-color darkseagreen sandybrown goldenrod lightblue
```

#### 示例 2

要实现向下单方向的等腰直角三角形，则将其他三个方向的颜色设置为 0 即可。但是，这样子实现的三角形，border-width 控制的实际上是三角形的高。下面部分实际是透明的，并且也是有 40px 的高度。

```css
.triangle2
  border-color darkseagreen transparent transparent transparent
  border-width 40px
```

#### 示例 3

实现一个下面透明部分不占用高度的三角形。利用不同方向的 border-width 控制，将下面的宽度设置为 0。

```css
.triangle3
  border-width 40px 40px 0 40px
  border-color darkseagreen transparent transparent transparent
```

#### 示例 4
实现一个右上↗方向的等腰直角三角形，第一种方法很简单，将上右方向颜色设置为一样，同时把其他两个方向颜色设置为透明。

```css
.triangle4
  border-width 40px
  border-color darkseagreen darkseagreen transparent transparent
```

#### 示例 5
同示例 4 的效果。第二种方法，只给上面设置颜色，其他方向为透明。同时控制不同方向的宽度。

```css
.triangle5
  border-width 80px 0 0 80px
  border-color darkseagreen transparent transparent transparent
```

### 利用 clip-path

利用 clip-path 实现示例 4 的效果。这种方法就比较灵活了，根据位置裁剪掉需要透明的部分就行了。

```css
.triangle-by-clip-path
  width 80px
  height 80px
  background brown
  clip-path polygon(0 0, 80px 80px, 80px 0)
```

