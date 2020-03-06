### ES5

#### 组合继承

组合继承是指将原型链和借用构造函数的技术组合到一起，从而发挥二者之所长的一种继承模式。也叫伪经典继承。

```javascript
function Parent(name, age) {
  this.name = name
  this.age = age
}

Parent.prototype.sayName = function() {
  console.log(this.name)
}

function Child(name, age) {
  // 继承属性
  Parent.call(this, name, age)
}

// 继承方法
Child.prototype = new Parent()
Child.prototype.constructor = Child

const child = new Child('wood', 18)

child.sayName() // wood
```

#### 原型式继承

```javascript
const person = {
  name: 'wood',
  age: '18'
}

const anotherPerson = Object.create(person, {
  name: {
    value: 'jack'
  }
})
```

#### 寄生组合式继承

寄生组合式继承是引用类型最理想的继承范式。

```javascript
function inheritPrototype(subType, superType) {
  let prototype = object(subType, superType)
  prototype.constructor = subType
  subType.prototype = prototype
}

function Parent(name, age) {
  this.name = name
  this.age = age
}

Parent.prototype.sayName = function() {
  console.log(this.name)
}

function Child(name, age) {
  // 继承属性
  Parent.call(this, name, age)
}

// 继承方法
inheritPrototype(Child, Parent)

const child = new Child('wood', 18)

child.sayName() // wood
```
