---
title: ubuntu 24 Ibus输入法导入dict词库教程
tags: ["工具", "方法", "ubuntu"]
date: 2025-11-08T13:35:31.767Z
draft: false
---

---
我最近刚把为我的主力系统换为ubuntu，简直是太好用了
缺点也很明显，什么都需要折腾
我昨天写文章的时候，用自带的ibus输入法，简直了，每敲几个词就要按方向键找一半天
因此便有了这篇文章

这是一个大佬自建拼音输入法词库，百万常用词汇量
https://github.com/wuhgit/CustomPinyinDictiona

从这个仓库的 [Releases](https://github.com/wuhgit/CustomPinyinDictionary/releases)下载CustomPinyinDictionary_Fcitx_20250101.tar.gz并解压

因为解压后的文件后缀是dict
我们用txt导入到ibus


```bash
sudo apt install libime-bin
libime_pinyindict -d CustomPinyinDictionary_Fcitx.dict CustomPinyinDictionary_Fcitx.txt
```

执行这两条命令即可转换为txt文件

右击任务栏的输入法，选择首选项

![Pasted image 20250910101213.png](../../images/ubuntu 24 Ibus输入法导入dict词库教程/Pasted%20image%2020250910101213.png)


选择【用户数据-用户词典-导入】
![Pasted image 20250910101321.png](../../images/ubuntu 24 Ibus输入法导入dict词库教程/Pasted%20image%2020250910101321.png)

然后选择你的txt文件，完成导入。