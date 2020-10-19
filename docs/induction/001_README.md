---
title: 编写第一个Go程序
---

# 编写第一个Go程序

## Hello World

```go
package main //包，表明代码所在的模块

import "fmt" //引入代码依赖

// 功能实现
func main() {
    fmt.Println("Hello, World!")
}
```

相关备注：

1. 必须是main包：package main
2. 必须是main方法：func main()
3. 文件名不一定是main.go

## 关键词

|   -  |  -    | -   | - | -  |
| -------- | ----------- | ------ | --------- | ------ |
| break    | default     | func   | interface | select |
| case     | defer       | go     | map       | struct |
| chan     | else        | goto   | package   | switch |
| const    | fallthrough | if     | range     | type   |
| continue | for         | import | return    | var    |

## 接入命令行参数

```go
package main

import (
 "fmt"
 "os"
)

func main() {
 fmt.Println(os.Args)
}
// $ go run h.go abc 123
// log [/var/folders/bd/nfr83lw93gx43jwww8tsc80h0000gn/T/go-build928494040/b001/exe/h abc 123]
```
