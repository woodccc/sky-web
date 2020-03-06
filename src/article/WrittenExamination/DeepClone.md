### 递归实现

```javascript
deepClone(object) {
      if (!object || typeof object !== 'object') return object

      let result = Array.isArray(object) ? [] : {}

      for (let key in object) {
        if (object.hasOwnProperty(key)) {
          if (object[key] && typeof object[key] === 'object') {
            result[key] = deepClone(object[key])
          } else {
            result[key] = object[key]
          }
        }
      }
      return result
    }
```

### json 实现

```javascript
deepClone(object) {
  return JSON.parse(JSON.stringify(Object));
}
```
