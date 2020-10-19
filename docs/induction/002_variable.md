---
title: 变量、常量
---

# 变量、常量

变量名的规则和其它语言都类似, **只能由字母、数字和下划线取名，且不能以数字开头**:

`var variable data_types = value`

其实声明变量的方式由很多种

```go
// 第一种 这种方式必须要指定类型
// 如果a没有被赋值，则a的值默认是该类型的零值，int->0,string->"",bool->false
var a int
a = 1
// 第二种 声明的时候直接赋值，如果没有给定类型，会自动推导出来
var a int = 1
var a = 1 // fmt.Printf("%T", a) => int
// 第三种 声明常量,常量声明的时候必须要赋值，类型可以写可以不写，会自动推导，常量不可被修改
const a = 1
const (
    a = 100
    b
) // a、b都是int 值都是100，只有const可以这样用
// 第一种 这种方式必须要指定类型
// 如果a没有被赋值，则a的值默认是该类型的零值，int->0,string->"",bool->false var a int
a=1
// 第二种 声明的时候直接赋值，如果没有给定类型，会自动推导出来 var a int = 1
var a = 1 // fmt.Printf("%T", a) => int
// 第三种 声明常量,常量声明的时候必须要赋值，类型可以写可以不写，会自动推导，常量不可被修改 const a = 1
 const (
  a = iota  //0
  b         //1
  c         //2
  d = "pdf" // iota+1
  e = 100   // iota+2
  f = iota  //5
  g         //6
 )
 fmt.Println(a, b, c, d, e, f, g) // 0 1 2 pdf 100 5 6
// iota 是一个特殊常量，z在下一行的时候会自动递增，只在一个const()作用域有效，用作枚举很方便

// 第四种 自动推导
a := 1
b := ""
```

变量的声明是可以多个变量可以一起声明的:

```go
var ( a,
b,
c int
) // a、b、c都被声明为int 类型
var (
    a,
    b,
    c int
    d,
    e,
    f string
) // a、b、c都被声明为int 类型,d、e、f都被声明为字符串类型

a, b := 1, "" // a 是int，b是string，这种方式最常用，因为函数的返回值可以是多个
```
