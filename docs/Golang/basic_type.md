# 基本类型

## 基本类型介绍

| 基本类型       | 长度    | 默认值  | 描述 |
| ------        | ---    | -----  | ------ |
| bool          |     1  | false  | 布尔类型 |
| byte          |     1  |     0  | unit8 |
| rune          |     4  |     0  | Unicode Code Point, int32 |
| int, unit     | 4 或 8  | 0      | 32 或 64 位 |
| int8, uint8   | 1      | 0      | -128 ~ 127, 0 ~ 255，byte是uint8 的别名 |
| int16, uint16 | 2      | 0      | -32768 ~ 32767, 0 ~ 65535 |
| int32, uint32 | 4      | 0      | -21亿~ 21亿, 0 ~ 42亿，rune是int32 的别名 |
| int64, uint64 | 8      | 0      | |
| float32       | 4      | 0.0    | |
| float64       | 8      | 0.0    | |
| complex64     | 64     | 8      | |
| complex128    | 16     |        | |
| uintptr       | 4 或 8  |        | 以存储指针的 uint32 或 uint64 整数 |
| array         |        |        | 值类型 |
| struct        |        |        | 值类型 |
| string        |        | ""     | UTF-8 字符串 |
| slice         |        | nil    | 引用类型 |
| map           |        | nil    | 引用类型 |
| channel       |        | nil    | 引用类型 |
| interface     |        | nil    | 接口 |
| function      |        | nil    | 函数 |

> 空指针 nil

### 整形
按长度分：**int8、int16、int32、int64** <br>
无符号的：**uint8、uint16、uint32、uint64** <br>
> 其中，unit8 就是我们熟知的 byte，int 16 对应 C 语言中的 short 型，int64 对应 C 语言中的 long 型。

### 浮点型

Go 语言支持两种浮点类型：**float32、float64**。

### 复数

**complex64 和 complex128**

复数有实部和虚部，complex64的实部和虚部为32位，complex128的实部和虚部为64位。

### 布尔值
> 布尔类型变量的默认值为false。<br>
  Go 语言中不允许将整型强制转换为布尔型.<br>
  布尔型无法参与数值运算，也无法与其他类型进行转换。

### 字符串
```go
s1 := "hello"
s2 := "你好"
```

### 字符串转义符
|  转义    |  含义   |
| ------  | ------  |
|  \r     |  回车符（返回行首）  |
|  \n     |  换行符（直接跳到下一行的同列位置）  |
|  \t     |  制表符   |
|  \\'    |  单引号   |
|  \\"    |  双引号   |
|  \      |  反斜杠   |

### 字符串的常用操作
|   方法   |     介绍      |
| ------  | ------  |
|  len()  |  字符串的长度  |
|  + 或者 fmt.Sprintf()  |  字符串拼接    |
| strings.split()  |  字符串切割    |
| strings.Contains()  |  字符串包含    |
| strings.HasPrefix,strings.HasSuffix  |  字符串前缀或后缀    |
| strings.Index(),strings.LastIndex()  |  字符串查找出现的位置    |
| strings.Join(a[]string, sep string)  |  Join 操作    |