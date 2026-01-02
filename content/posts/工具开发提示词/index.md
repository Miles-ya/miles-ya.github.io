---
title: 工具开发提示词
date: '2025-12-25T20:03:10+08:00'
draft: false
tags:
  - 工具
  - 提示词
  - 项目
category: 资源
description: 为创建单页Web工具提供核心架构约束、功能开发指南和代码风格要求。
updated: '2026-01-01 20:03:10'
created: '2025-12-25'
---

```
我想创建一个单页 Web 工具（Single-page HTML Tool）。请严格遵循以下原则进行开发：

### 1. 核心架构约束

- **单文件架构**：所有 HTML、CSS 和 JavaScript 必须包含在一个 `.html` 文件中。
    
- **零构建依赖**：严禁使用 React, Vue, JSX 或任何需要 `npm install` / 构建步骤的框架。
    
- **原生优先**：优先使用原生 DOM API。如果逻辑极其复杂，可以使用 CDN 引入微型库（如 Preact 配合 htm，或简单的 CSS 框架如 Piccolo/MVP.css）。
    

### 2. 功能开发指南

- **持久化存储**：
    
    - **URL 状态**：将非敏感配置、短数据编码到 URL（使用 `URLSearchParams` 或 Base64 hash），确保链接可分享。
        
    - **localStorage**：用于保存 API Key、用户偏好或草稿，实现“自动保存”功能。
        
- **数据处理**：
    
    - **零服务器上传**：使用 `<input type="file">` 和 `FileReader` API 在本地处理文件（如图片转换、PDF 预览、CSV 解析）。
        
    - **跨域调用**：利用支持 CORS 的公开 API（如 GitHub, PyPI, JSONPlaceholder 等）。
        
- **增强体验**：
    
    - **剪贴板增强**：支持直接粘贴（`paste` 事件）图片或链接并自动解析。
        
    - **文件导出**：使用 `Blob` 和 `URL.createObjectURL` 实现本地文件下载。
        

### 3. 代码风格

- 保持代码可读、模块化，方便我后续通过“复制粘贴”进行微调。
    
- 包含必要的样式，让工具看起来现代、简洁且适配移动端。
    
---

**现在，请为我执行以下任务：** [在此处输入你的需求，例如：做一个能把 JSON 转成 YAML 的工具]
```