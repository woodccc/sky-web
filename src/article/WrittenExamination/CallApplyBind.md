call、apply、bind是ES5中能改变this指向的方法。

### 区别

#### call和apply
call和apply的传参不同，call接收逗号分隔的参数，apply接收数组（如何记不清这两个方法的区别的话，可以记apply接收array，都是a开头的，这样比较好记），调用都会立即执行。

#### bind
而bind调用完返回的是一个函数，需要再次调用才会执行。

### 实现一个call/apply

```javascript
Function.prototype.myCall = function(context){ 
    if(typeof this != 'function'){
        throw new TypeError('this is not a function')
    }
    context.fn = this;
    var arr = [];
    for(var i = 1; i< arguments.length; i++){
        arr.push('argument[' + i + ']')
    }
    var result = eval('context.fn(' +arr+ ')');
    delete context.fn;
    return result;
}
```

```javascript
Function.prototype.myApply = function(context,arr){ 
    if(typeof this != 'function'){
        throw new TypeError('this is not a function')
    }
    context.fn = this;
    var result= [];
    if(!arr){
        result = context.fn()
    }else{
        var args = [];
        for(var i = 1; i< arr.length; i++){
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' +args+ ')');
    }
    delete context.fn;
    return result;
}
```

```javascript
Function.prototype.myBind = function(context){
    if(typeof this != 'function'){
        throw new TypeError('this is not a function')
    }
    var self = this;
    var args = Array.prototype.slice.call(arguments,1);
    var F = function(){};
    F.prototype = this.prototype;
    var bound = function(){
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof F ? this: context, args.concat(bindArgs))
    };
    bound.prototype = new F();
    return bound;
}
```
