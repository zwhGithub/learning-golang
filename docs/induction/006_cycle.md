---
title: 循环语句
---

# 循环语句

Go的循环语句和nodejs也不太一样，我们先看语法：

```go
// 第一种
for init; condition; post { // 注意，这里可以省略任意一项，如果只有condition可以不要分号，
    statement
}
// 我们经常会使用死循环+select来做一下事情
for {
    select {
        case xxx
    }
}

// 第二种
for k,v := range mapValue {

}
// 由于Go定义了变量，就必须要使用，所以不需要的变量可以用 _ 代替,比如
for _, v := range mapValue {

}
```
