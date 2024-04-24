# let 和 const

## 1. 块级作用域
块级作用域在哪？
答案是：
  - 函数体内
  - {} 中间
### 1.1. 为什么需要块级作用域？
  - 内部变量可能会覆盖外部变量
  ```js
  var tmp = new Date();
  function f() {
    console.log(tmp);
    if (false) {
      var tmp = 'hello world';
    }
  }
  f(); // undefined
  ```
  - 用于循环的变量泄露为全局变量
  ```js
  var s = 'hello';
  for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
  }
  console.log(i); // 5
  ```
## 2. 变量提升

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

## 3. 暂时性死区
  **在 ES6 中规定，如果区块中存在 let 或 const 命令，那么这个区块对所定义的这些变量从一开始就形成了封闭作用域，无论区块外是否有全局定义的同名变量，区块内部只要在定义之前使用，就报错。**

## 4. 不可重复声明
let 不允许在同一个作用域内，重复声明同一个变量
```js
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}
```
## 5. Babel 中编译
```js
let value = 1;
// 编译为
var value = 1;
```
```js
if (false) {
  let value = 1;
}
console.log(value); // Uncaught ReferenceError: value is not defined
// 编译为
if (false) {
  var _value = 1;
}
console.log(value)
```
本质是改变变量名，使内外部变量名不一样。

循环中的 let 赋值：
```js
var funcs = [];
for (let i = 0; i < 10; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // 0
// Babel 巧妙的编译成了：

var funcs = [];

var _loop = function _loop(i) {
    funcs[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
funcs[0](); // 0
```
