# 基础
## Go 语言主要特征

### 思想
Less can be more.
大道至简。让事情变复杂很容易，让事情变简单才难。

### 优点
- 自带 gc；
- 静态编译，编译好之后直接扔服务器运行；
- 思想简单，没有继承、多态、类等；
- 丰富的库和细致的文档；
- 语法层支持并发，拥有同步并发的 channel 类型，使开发变得非常方便；
- 简单的语法，提高开发效率，同时提高代码可读性和可维护性；
- 超级简单的交叉编译，仅需要更改环境变量

### Go 语言特点
- 自动立即回收；
- 更丰富的内置类型；
- 函数多返回值；
- 错误处理；
- 匿名函数和闭包；
- 类型和接口；
- 并发编程；
- 反射；
- 语言交互性

### Go 语言命名
1. Go 的函数、变量、常量、自定义类型、包（package）的命名方式遵循以下规则：
  - 首字符可以是任意的 Unicode 字符或下划线；
  - 剩余的字符可以是任意的 Unicode 字符、数字或下划线；
  - 字符长度不限

2. 25 个关键字<br>
    break        default      func         interface    select
    case         defer        go           map          struct
    chan         else         goto         package      switch
    const        fallthrough  if           range        type
    continue     for          import       return       var

3. 37 个保留字<br>
    Constants:<br>
    **true、  false、  iota、  nil**

    Types:<br>
    **int、int8、int16、int32、int64、uint、 uint8、 uint16、 uint32、 uint64、 uintptr、float32、 float64、 complex128、 complex64、bool  byte、 rune、 string、 error**

    Functions:<br>
    **make、 len、 cap、 new、 append、 copy、 close、 delete、 complex、 real、 imag、 panic、 recover**
4. 可见性
  - 声明在函数内部，是函数的本地值，类似private
  - 声明在函数外部，是对当前包可见(包内所有.go文件都可见)的全局值，类似protect
  - 声明在函数外部且首字母大写是所有包可见的全局值,类似public

### 语言声明
  var（声明变量）, const（声明常量）, type（声明类型） ,func（声明函数）

