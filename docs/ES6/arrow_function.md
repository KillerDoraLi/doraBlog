# 箭头函数

## 1. 箭头函数的形式

```js
let sum = (a, b) => a + b;
```

## 2. 箭头函数和普通函数的比较

### 2.1 没有 this

**箭头函数没有 this,所以需要通过查找作用域链来确定 this 的值**
也就是说，箭头函数的 this 就是它定义时当前的 this

### 2.2 箭头函数没有 arguments，普通函数有 arguments

arguments 对象是什么？<br/>

> MDN 上是这样定义的：**arguments 是一个对应于传递给函数的参数的类数组对象。**<br>

我理解这个 arguments 就是参数的类数组，使用 Array.from() 就可以把它转换成真正的数组。

```js
function func1(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1
  console.log(arguments[1]);
  // Expected output: 2
  console.log(arguments[2]);
  // Expected output: 3
}
func1(1, 2, 3);
```

### 2.3 箭头函数不能通过 new 关键词调用

Javascript 函数有两个内部方法，[[Call]] 和 [[Construct]]。<br>
当通过 new 调用函数时，执行 [[construct]] 方法，创建一个实例对象，然后再执行函数体，将 this 绑定到实例上。<br>
当直接调用时，执行 [[Call]] 方法，直接执行函数体。<br>

箭头函数没有 [[construct]] 方法，所以不能通过 new 关键词调用。如果通过 new 调用，会报错。<br>

```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```

### 2.4 没有 new.target

因为不能通过 new 调用，所以不会有 new.target.

> 什么是 new.target?
> new 是从构造函数生成实例对象的命令。ES6 为 new 命令引入了一个 new.target 属性，该属性一般用在构造函数之中，返回 new 命令作用于的那个构造函数。如果构造函数不是通过 new 命令或 Reflect.construct()调用的，new.target 会返回 undefined，因此这个属性可以用来确定构造函数是怎么调用的。

### 2.5 箭头函数没有原型

因为不能通过 new 调用，所以也没有构建原型的需求，于是箭头函数也不存在 [[prototype]] 属性。

### 2.6 箭头函数没有 super

连原型都没有，自然也不能通过 super 来访问原型的属性，所以箭头函数也是没有 super 的，不过跟 this、arguments、new.target 一样，这些值由外围最近一层非箭头函数决定。
