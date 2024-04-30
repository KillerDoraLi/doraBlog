# 执行上下文

## 顺序执行？
关于 Javascript 的执行顺序，可能会有一个直观印象就是顺序执行，比如以下这段代码：

```js
var foo = function () {
  console.log('foo1');
}
foo();  // foo1

var foo = function () {
  console.log('foo2');
}
foo(); // foo2
```
然而，真的都是顺序执行吗？让我们看看下面这段代码：

```js
function foo () {
  console.log('foo1');
}
foo(); // foo2

function foo () {
  console.log('foo2');
}
foo(); // foo2
```
这是因为 `Javascript` 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会有一个“准备”工作，比如上面第一个例子中的**变量提升**，第二个例子中的**函数提升**。

## 可执行代码
可执行代码（executable code）的类型：**全局代码、函数代码、eval 代码**。
 
举个🌰：当执行一个函数的时候，就会进行一些准备工作，更专业的说法就叫做“**执行上下文（execution context）**”。

## 执行上下文栈

但我们创建了那么多函数，如何对这些执行上下文进行管理呢？<br>
基于这个问题，Javascript 创建了**执行上下文栈**（**Execution context stack，ECS**）来管理执行上下文。<br>

为了模拟执行上下文栈的行为，我们来定义执行上下文栈是一个数组：

```js
ECStack = [];
```

当 Javascript 开始解释执行代码的时候，最先遇到的是全局代码，所以初始化的时候就会向 ECStack 中压入一个全局执行上下文（GlobalContext）。并且只有当整个程序执行完毕之后，才会将全局执行上下文从栈中弹出。所以程序执行结束之前，栈底永远有个 GlobalContext。

```js
ECStack = [GlobalContext];
```

OK，现在来分析下这段代码：

```js
function fun3() {
  console.log('fun3')
}
function fun2() {
  fun3();
}
function fun1() {
  fun2();
}
fun1();
```
当函数 `fun1` 被执行的时候，会先执行 `fun2`，然后执行 `fun3`，最后执行 `GlobalContext`。
```js
ECStack = [GlobalContext]
// 先执行 fun1, 所以先创建 fun1 的执行上下文
ECStack.push(fun1)
// fun1 中执行 fun2，然后创建 fun2 的执行上下文
ECStack.push(fun2)
// fun2 中执行 fun3，然后创建 fun3 的执行上下文
ECStack.push(fun3)
// fun3()，弹出 fun3 的执行上下文
ECStack.pop()
// fun2()，弹出 fun2 的执行上下文
ECStack.pop()
// fun1，弹出 fun1 的执行上下文
ECStack.pop()
```