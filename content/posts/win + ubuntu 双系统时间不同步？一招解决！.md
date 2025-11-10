---
title: win + ubuntu 双系统时间不同步？一招解决！
tags: ["工具", "ubuntu"]
date: 2025-11-08T13:35:25.727Z
draft: false
---

---
这是一个非常经典的双系统问题，根源在于 Windows 和 Ubuntu
  对硬件时钟（RTC）时间的解释方式不同：

   * Windows 默认将硬件时间当作“本地时间 (Local Time)”。
   * Ubuntu (以及其他Linux发行版) 默认将硬件时间当作“世界标准时间 (UTC)”。

  这就导致了一个系统调准时间后，另一个系统启动时会错误地解读时间，造成时间偏差。

  最简单且推荐的解决方法是：让 Ubuntu 使用本地时间（Local 
  Time）来同步硬件时钟，而不是 UTC。

  您只需要在 Ubuntu 的终端里执行下面这一条命令即可：

timedatectl set-local-rtc 1 --adjust-system-clock

  这个命令的作用是：
   * set-local-rtc 1: 告诉系统，硬件时钟（RTC）存储的是本地时间。1代表“是”。
   * --adjust-system-clock: 同时调整当前的系统时间以匹配。

  执行这个命令后，您可以在 Ubuntu 中手动设置一次正确的时间。之后，当您在两个系统
  之间切换时，时间就应该能保持同步了。