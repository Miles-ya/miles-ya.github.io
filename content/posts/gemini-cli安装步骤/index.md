---
title: gemini-cli安装步骤
date: '2025-11-03T20:25:26+08:00'
draft: false
tags:
  - AI
  - 工具
category: 资源
description: 介绍如何在命令行中安装、运行和卸载Google的gemini-cli工具。
updated: '2025-08-03 15:53:29'
created: '2025-07-19'
---

# 安装
1. 安装 [Node.js20](https://nodejs.org/en/download) 或更高版本
2. 安装，在cmd中运行
```
npm install -g @google/gemini-cli
```

# 运行
## 运行前需要设置命令行代理
设置代理地址（请根据你实际使用的 Clash / V2Ray HTTP 代理端口修改）

```
set https_proxy=http://127.0.0.1:10808
```

## 运行
```
gemini
```

# 卸载
```
npm uninstall -g @google/gemini-cli
```