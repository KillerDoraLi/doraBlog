# 下划线

> "_" 是特殊标识符，用来忽略结果

## 下划线在 import 中

> import 用于导入其他 package

**import中下划线的作用：**
当导入一个包时，该包下的文件里所有 init 函数都会被执行。然而，有些时候并不需要把整个包都导进来，仅仅是希望它执行 init 函数而已，这个时候就可以使用 import 导入该包，即 【import_包路径】只是引用该包，仅仅是为了调用 init 函数而已。所以无法通过包名来调用包中的其他函数。

## 下划线在代码中
```go
package main

import (
    "os"
)

func main() {
  buf := make([]byte, 1024)
  f, _ := os.Open("/Users/***/Desktop/text.txt") // 忽略这个变量，正常应该会返回*os.File，error，这里忽略 error
  defer f.Close()
  for {
    n, _ := f.Read(buf)
    if n == 0 {
      break
    }
    os.Stdout.Write(buf[:n])
  }
}
```