# 内置类型和函数

## 内置类型

### 值类型
```
  bool
  int(32 or 64), int8, int16, int32, int64
  uint(32 or 64), uint8(byte), uint16, uint32, uint64
  float32, float64
  string
  complex64, complex128
  array    -- 固定长度的数组
```

### 引用类型（指针类型）
```
  slice   -- 序列数组(最常用)
  map     -- 映射
  chan    -- 管道
```

## 内置函数
GO 语言拥有一些不需要导入操作就可以使用的内置函数，他们有时可以针对不同的类型进行操作，例如：len、cap、append，或必须用于系统级的操作，如 panic。
因此它们需要直接获得编译器的支持。

```
    append            -- 用来追加元素到数组、slice 中,返回修改后的数组、slice
    close             -- 主要用来关闭 channel
    delete            -- 从 map 中删除 key 对应的 value
    panic             -- 停止常规的 goroutine  （panic 和 recover：用来做错误处理）
    recover           -- 允许程序定义 goroutine 的 panic 动作
    imag              -- 返回 complex 的实部   （complex、real imag：用于创建和操作复数）
    real              -- 返回 complex 的虚部
    make              -- 用来分配内存，返回 Type 本身(只能应用于 slice, map, channel)
    new               -- 用来分配内存，主要用来分配值类型，比如 int、struct。返回指向 Type 的指针
    cap               -- capacity 是容量的意思，用于返回某个类型的最大容量（只能用于切片和 map）
    copy              -- 用于复制和连接 slice，返回复制的数目
    len               -- 来求长度，比如 string、array、slice、map、channel ，返回长度
    print、println    -- 底层打印函数，在部署环境中建议使用 fmt 包
```

## 内置接口 error
```
  type error interface { //只要实现了Error()函数，返回值为String的都实现了err接口
    Error()  String
  }
```