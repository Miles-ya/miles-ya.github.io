---
title: 1.2 Hello, Cargo!
date: '2025-10-10T16:16:58+08:00'
draft: false
---

Cargo 是Rust的构建系统和包管理器。
我们可以使用Cargo构建代码和下载依赖库并编译这些库。

### 我们首先要确定是否安装了Cargo。
```bash
cargo --version
```
如果出现了版本号说明安装成功!

### 使用Cargo创建项目
```bash
cargo new hello_world
cd hello_world
```

[](Pasted%20image%2020251009192357.png)

我们可以看到目录里有3个文件
1. main.rs 
	程序文件，就像C语言里的.c文件
	创建项目的时候，main.rs里面是Hello, world!
	这就是传承
2. cargo.toml
	cargo配置文件
	使用TOML格式
	```toml
	[package]             //表明下面的语句用来配置一个包
	name = "hello_cargo"  //项目名称
	version = "0.1.0"     //项目版本
	edition = "2024"      //要使用的rust版本
	
	[dependencies]        //在下放罗列项目依赖（crates）
	```
3. .gitignore
	这是一个Git 文件，在创建项目的时候会初始化git

### 构建 Cargo 项目
在目录下输入以下命令，进行构建项目

```bash
cargo build
```

这个命令会创建一个可执行文件， target/debug/hello_world（在 Windows 上是 target\debug\hello_world.exe）

还有一个新文件：Cargo.lock，这个文件记录项目依赖的实际版本

### 运行 Cargo 项目

```bash
cargo run
```

我们通常不需要先运行`cargo build`可以直接运行 `cargo run` 。
`cargo run` 会在运行之前构建项目


### 检查 Cargo 项目

Cargo 还提供了一个叫 `cargo check` 的命令。该命令快速检查代码确保其可以编译，但并不产生可执行文件。
```bash
cargo check
```

### 发布（release）构建

当项目最终准备好发布时，可以使用 `cargo build --release` 来优化编译项目。这会在 *target/release* 而不是 *target/debug* 下生成可执行文件。这些优化可以让 Rust 代码运行的更快，不过启用这些优化也需要消耗更长的编译时间。这也就是为什么会有两种不同的配置：一种是为了开发，你需要快速且频繁地重新构建；另一种是为用户构建最终程序，它们不会经常重新构建，并且希望程序运行得越快越好。如果你在基准测试代码的运行时间，请确保运行 `cargo build --release` 并使用 *target/release* 下的可执行文件进行测试。

## 总结

* 可以使用 `cargo new` 创建项目。
* 可以使用 `cargo build` 构建项目。
* 可以使用 `cargo run` 一步构建并运行项目。
* 可以使用 `cargo check` 在不生成二进制文件的情况下构建项目来检查错误。
* 可以使用 `cargo build --release` 来优化编译项目。

关于更多 Cargo 的信息，请查阅[其文档](https://doc.rust-lang.org/cargo/)。