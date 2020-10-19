---
title: 条件语句
---

# 条件语句

Go语言提供下面几种条件语句：

- if 语句
- switch 语句
- select 语句

## if 语句

Go 语言中，if 语句的语法：

```shell
if 布尔条件表达式 {
 statement
} else if 布尔条件表达式 {
 statement
} else {
 statement
}
```

注意，这里的条件表达式不需要括号，举个实例：

```go
package main
func main() {
    a := 1
    b := 2
    if a < b { // if 语句有这样的语法糖 if a:= func(); a < 10 {}
        fmt.Println("a < b")
    } else if a == b {
        fmt.Println("a == b")
    } else {
        fmt.Println("a >  b")
    }
}
```

## switch 语句

Go 语言的switch语句很强大，和nodejs 的不太一样，Go语言中的Switch语法：

```go
switch expression {
    case condition:
     statement
    default:
     statement
}
```

首先，expression 可以是任何类型的值，如果没有写，则默认是 true,  condition 必须要和expression的类型一致，否则报错，并且condition可以为多个，以逗号隔开，default 子句表示当case都没有满足的条件的时候执行，同时最大的一点不同之处，没有break语句，Go程序的 switch 每一个 case 执行完了就退出 switch 而不会继续向下执行，如果需要向下执行，则需要在case{}中最后加上一句： `fallthrough`

比如：

```go
switch "2" {
    case "1", "2", "3":
     fmt.Println("1 2 3")
     fallthrough
    case "4":
     fmt.Println("4")
    default:
     fmt.Println("default")
} // => 1 2 3
  // => 4
```

## select 语句

select 语句一般用于超时控制，是Go的一个控制结构，每个case都是一个channel操作，select 将随机选取一个可以运行的case执行，如果没有可以运行的case，则select语句会阻塞，直到有可以执行的case。默认子句总是可以执行的。

语法如下:

```go
select {
    case <- ch: // 后面会讲，这个是 channel 这一块的知识
     statement
    default:
     statement
}
```

不过一般我们都不会用default,就像上面讲的，我们一般是用来做超时控制的，举个例子：

```go
package main

import (
 "fmt"
 "time"
)

func sleep(n int, res chan<- string) {
 time.Sleep(time.Duration(n) * time.Second)
 res <- "获取到了结果" // 管道里面设置数据
}

func main() {
 timeout := time.After(time.Duration(3) * time.Second)
 res := make(chan string)
 go sleep(2, res)
 select {
 case <- timeout:
  fmt.Println("超时了")
 case val := <- res: // 接收管道的数据
  fmt.Println(val)
 }
}
```

这里，我们请求一个函数，同时设置一个3s的超时，如果函数3s内没有返回数据，则select 会执行超时这个case,否则就执行了取结果的数据。当然，这个例子是没有代表性的，因为实际工程上要比这个复杂一点，因为要涉及到资源的释放之类的，后面会讲到。
