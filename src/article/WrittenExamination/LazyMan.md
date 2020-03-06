### 实现下面功能

```
实现一个LazyMan，可以按照以下方式调用:
LazyMan("Wood")输出:
Hi! My name is Wood!
 
LazyMan("Hank").sleep(10).eat("dinner")输出
Hi! My name is Wood!
//等待10秒..
Wake up after 10
Eat dinner~
 
LazyMan("Hank").eat("dinner").eat("supper")输出
Hi! My name is Wood!
Eat dinner~
Eat supper~
 
LazyMan("Hank").sleepFirst(5).eat("supper")输出
Hi! My name is Wood!
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
 
以此类推。
```
