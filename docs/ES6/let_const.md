# let 和 const

## 1 块级作用域
块级作用域在哪？
答案是：
  - 函数体内
  - {} 中间

### 1.1 变量提升

var 定义的变量存在变量提升的问题，即变量可以在定义之前使用，只不过值为 undefined。例如

```js
console.log(foo); // 输出undefined
var foo = 2;
```

let 和 const 纠正了这一现象，使得一个变量必须在定义之后才可以被使用。

```js
console.log(foo); // 报错ReferenceError
let foo = 2;
```

### 1.2 暂时性死区
  **在 ES6 中规定，如果区块中存在 let 或 const 命令，那么这个区块对所定义的这些变量从一开始就形成了封闭作用域，无论区块外是否有全局定义的同名变量，区块内部只要在定义之前使用，就报错。**

### 1.3 不可重复声明