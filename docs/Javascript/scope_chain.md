# 作用域链

## 是什么
当寻找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级（词法层面上的父级）执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象，这样由多个执行上下文的变量对象组成的链表就构成了一个作用域链。

> 以函数创建和激活这两个时期来分析作用域链如何变化
### 1. 函数创建
函数的作用域在函数定义时就确定了，这是因为函数有一个内部属性 `[[scope]]`，当函数创建的时候，就会保存所有父变量对象到其中，可以理解为 `[[scope]]` 就是所有父变量对象的层级链。
> tips：`[[scope]]` 并不代表完整的作用域链！

**举个 🌰**
```js
function foo() {
  function bar() {
    ...
  }
}
```
函数创建时，各自的 `[[scope]]` 为：

```js
foo.[[scope]] = [
  globalContext.VO
];
bar.[[scope]] = [
  fooContext.AO,
  globalContext.VO
]
```
### 2. 函数激活
当函数激活时，进入函数上下文，创建 AO/VO 后，就会将活动对象添加到作用域的前端。<br>
这时候执行上下文的作用域链，我们命名为 **Scope**。

`Scope = [AO].concat([[scope]])`

至此，作用域链创建完毕。