---
title: 1.1 安装Rust环境
date: '2025-11-08T21:35:52+08:00'
draft: false
tags:
  - RUST
category: 项目
description: 介绍在macOS、Linux等类Unix系统上使用rustup安装Rust环境的方法和验证命令
updated: '2025-09-14 23:20:22'
created: '2025-09-14'
---

### macOS、Linux 或其他类 Unix 操作系统使用 rustup安装

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```


检查是否安装成功
```bash
rustc --version
```

如果您想卸载 Rust，可以运行 `rustup self uninstall` 。