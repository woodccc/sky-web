### 用过哪些loader和plugin

#### loader

css-loader：加载 CSS，支持模块化、压缩、文件导入等特性

style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS

babel-loader：把 ES6 转换成 ES5

file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件

url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去

vue-markdown-loader: 将 Markdown 文件转化为 vue component

#### Plugin

html-webpack-plugin: 为应用程序生成一个 HTML 文件，并自动注入所有生成的 bundle。

CommonsChunkPlugin: 提取 chunks 之间共享的通用模块

DllPlugin: 为了极大减少构建时间，进行分离打包

### webpack配置优化

压缩代码。删除多余的代码、注释、简化代码的写法等等方式

利用 CDN 加速。在构建过程中，将引用的静态资源路径修改为 CDN 上对应的路径

删除死代码 (Tree Shaking)。将代码中永远不会走到的片段删除掉

优化图片，对于小图可以使用 base64 的方式写入文件中

按照路由拆分代码，实现按需加载，提取公共代码

给打包出来的文件名添加哈希，实现浏览器缓存文件

### webpack打包优化(happypack、dll)

happypack 提升 Webpack 项目构建速度

DLL避免第三方不经常更新库打包，直接引入

#### 参考

[webpack打包优化解决方案](https://segmentfault.com/a/1190000011138081)

### plugin与loader的区别

#### loader

webpack 只能理解 JavaScript 和 JSON 文件。loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 模块，以供应用程序使用，以及被添加到依赖图中。

#### plugin

插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。插件目的在于解决 loader 无法实现的其他事。

### webpack执行的过程

1.初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数

2.开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译

3.确定入口：根据配置中的 entry 找出所有的入口文件

4.编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理

5.完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系

6.输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会

7.输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

> 在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 
提供的 API 改变 Webpack 的运行结果

### 如何编写一个loader、plugin


### tree-shaking作用，如何才能生效

- 使用 ES2015 模块语法（即 import 和 export）。

- 确保没有 compiler 将 ES2015 模块语法转换为 CommonJS 模块（这也是流行的 Babel preset 中 @babel/preset-env 的默认行为 - 更多详细信息请查看 文档）。

- 在项目 package.json 文件中，添加一个 "sideEffects" 属性。

- 通过将 mode 选项设置为 production，启用 minification(代码压缩) 和 tree shaking

### loader的执行顺序为什么是后写的先执行



