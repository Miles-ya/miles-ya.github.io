---
title: 2.1 猜数字游戏
date: '2025-10-12T19:22:58+08:00'
draft: false
---

## 题目
编写一个猜数字的小游戏程序，要求如下：

- 程序在启动时随机生成一个 1 到 100（包含）之间的整数作为目标数字。
- 程序不断提示用户输入一个猜测的数字。
- 如果用户输入的不是有效整数，程序应忽略该输入并重新提示。
- 每次用户输入有效数字后，程序应判断该数字与目标数字的大小关系：
	- 如果相等，输出 “你赢了”，并结束程序；
	- 如果大于目标数字，输出 “太大”；
	- 如果小于目标数字，输出 “太小”。
- 游戏持续进行，直到用户猜中为止。


## 创建项目

我们使用Cargo创建项目，Cargo的具体使用方法在上一篇文章中。[1.2 Hello, Cargo!](../1.2%20Hello,%20Cargo!/)
```bash
cargo new guessing_game
cd guessing_game
```
这里不做过多解释

## 逐行讲解
### 导入依赖
> use rand::Rng;
- **作用**：导入 rand crate(依赖)中的Rng trait(类似于接口)
- **解释**：rand 中的 Rng 定义了生成随机数的方法（如 gen_range ）。为了能调用这个方法需要先导入这个依赖。

> use std::cmp::Ordering;
- **作用**：导入 std （标准库）中的 Ordering 枚举类型。
- **解释**：Ordering 有三个值：Less、Equal、Greater，用于表示两个之比较的结果。根 if 类似。

> use std::io;
- **作用**：导入标准输入输出模块 std::io。
- **解释** ：用来处理用户的依赖。
### 主函数开始
> fn main() {
- **作用**：程序的入口点。所有 Rust 程序从 mian 函数开始执行。

> 	println!("猜数字!");
- **作用**：打印信息到控制台
 	  
> 	let num = rand::thread_rng().gen_range(1..=100);
- **作用**：生成一个1到100之间的随即整数给变量 num 。
- **解释** ：
	- `rand::thread_rng()`：获取一个线程本地的随机数生成器。
	- `.gen_range(1..=100)`：设置一个范围。
		- `1..=100` 是一个闭合区间，`[1,100]`
		- `1..100` 是一个左闭右开区间，`[1,100)`

> 	loop {
- **作用**：死循环，直到 `break;`推出循环。

> 		println!("请输入一个数字");
- **作用**：打印信息到控制台

> 		let mut guess = String::new();
- **作用**：创建一个可变的空字符串 `guess`，用于存储用户输入的内容。
- **解释** ：
	- `let`是用于声明变量的关键字，声明的变量默认不可变。
	- `mut` 用于声明可变变量。
	- `String::new()`是标准库中提供构造空字符串的方法。

> 		io::stdin().read_line(&mut guess).expect("错误");
- **作用**：获取一行文本，存入`guess`。
- **解释** ：
	- `io::stdin()` 标准输入流的句柄。
	- `.read_line(&mut guess)`将用户输入的内容追加到`guess`字符串中。会保留换行符`\n`。
	- `&mut guess` 是一个可变字符串的引用
	- `.expect("错误");`用于在程序崩溃时，输出传入的错误分析。

> 		println!("你的猜测是{guess}");
- **作用**：打印信息到控制台

> 		let guess: u32 = match guess.trim().parse() {
> 			Ok(num) => num,
> 			Err( ) => continue,
> 		};
- **作用**：将用户输入的字符串改为`u32`数字类型。
- **解释** ：
	- `.trim()`去除字符串首尾的的空白字符（尤其是换行符）。
	- `.parse()`将字符串转换为数字。
	- `match`表达式处理两种情况。
		- `Ok(num)`：解析成功，将 `num` 赋值给 `guess`（类型为 `u32`）。
		- `Err(_)`：解析失败，则执行 `continue`，跳过本次循环剩余部分，重新提示输入。

> 		match guess.cmp(&num) {
- **作用**：比较用户猜测的数字`guess`和目标数字`num`。
- **解释** ：
	- `.cmp(&num)` 用于比较用者（`guess`） 和参数（`&num`）的大小。
	- `cmp` 的参数需要是引用（`&T`），因为它不需要获取参数的所有权。

> 			Ordering::Equal => {
> 				println!("你赢了");
> 				break;
> 			}
- **作用**：如果相等，打印胜利信息，并用 `break` 退出 `loop` 循环，程序结束。

> 			
> 		Ordering::Greater => println!("太大"),
> 		Ordering::Less => println!("太小"),
- **作用**：判断大小，进行相应输出，因为没有 `break`，所以会继续下一轮循环。

> 		}
> 	
> 	}
> }




**小tips**：
如果你学过其他语言可能会好奇为什么不直接读取数字而是字符串？


### 完整程序

```rust
use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
	println!("猜数字!");
	  
	let num = rand::thread_rng().gen_range(1..=100);
	  
	loop {
		println!("请输入一个数字");
		  
		let mut guess = String::new();
		io::stdin().read_line(&mut guess).expect("错误");
		  
		println!("你的猜测是{guess}");
		  
		let guess: u32 = match guess.trim().parse() {
			Ok(num) => num,
			Err(_) => continue,
		};
		  
		match guess.cmp(&num) {
			Ordering::Equal => {
				println!("你赢了");
				break;
			}
			
		Ordering::Greater => println!("太大"),
		Ordering::Less => println!("太小"),
		}
	
	}
}

```
