### [Generator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)

调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的 迭代器 （iterator ）对象。

当这个迭代器的 next() 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现yield的位置为止，yield 后紧跟迭代器要返回的值。

next()方法返回一个对象，这个对象包含两个属性：value 和 done，value 属性表示本次 yield 表达式的返回值，done 属性为布尔类型，表示生成器后续是否还有 yield 语句，即生成器函数是否已经执行完毕并返回。

调用 next()方法时，如果传入了参数，那么这个参数会传给上一条执行的 yield语句左边的变量。

### 与 [async 函数](http://es6.ruanyifeng.com/#docs/async)的区别

async 函数是 es7 标准引入。可以看做是 Generator 函数的语法糖。

Generator 函数调用后返回的是一个迭代器对象，并没有实际执行函数内部。需要执行器或者调用 next() 才会执行。

而 async 函数是自带执行器，与普通函数一模一样，只要一行。

### 改进点

1. 内置执行器。

Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。

2. 更好的语义。

async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

3. 更广的适用性。

co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 象)。

4. 返回值是 Promise。

async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。

进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。
