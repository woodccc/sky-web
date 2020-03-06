盒模型由 margin + border + padding + content 四个属性组成

## 两种标准
* W3C的标准盒模型
* IE盒模型

### W3C的标准盒模型

width = content，不包含 border + padding

### IE盒模型
width = border + padding + content

### 相互转换

二者之间可以通过CSS3的 box-sizing 属性来转换。
box-sizing: content-box 是W3C盒模型
box-sizing: border-box 是IE盒模型

box-sizing 默认值为 content-box，也就是不包括 padding 和 border 在内。
