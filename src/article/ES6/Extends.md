### ES5 的继承

ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。

### [ES6 的继承](https://es6.ruanyifeng.com/#docs/class-extends)

ES6 的继承机制完全不同

实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），

然后再用子类的构造函数修改this。
