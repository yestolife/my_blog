Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

# 1. 做算法题

Leetcode[1290题， 二进制链表转整数](https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

题目：给你一个单链表的引用结点 `head`。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。

请你返回该链表所表示数字的十进制值 。

示例：

```
输入：head = [1,0,1]
输出：5
解释：二进制数 (101) 转化为十进制数 (5)
```

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/12/15/graph-1.png)

解题思路：链表遍历是按一个方向顺序遍历的，直到最后一个节点的next指针为None。二进制数转换为十进制数最简单的方法就是每个为1位置的权重相加。例如1011的十进制为8+2+1。但本题中链表存储二进制值，按照顺序遍历，并不知道当前位置的权重。要转变思路了，每向后跳转一次，把累加的十进制数乘2.

解题代码：

```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        num = 0
        while head is not None:
            num *= 2
            num += head.val
            head = head.next
        return num
```

# 2. 点评英文文章

[文章Why Apple Will Become More Powerful Amid the COVID-19 Pandemic](https://hackernoon.com/why-apple-will-become-more-powerful-amid-the-covid-19-pandemic-wx1q3231)阐述了苹果公司为什么能在新冠疫情中发挥作用。首先介绍了苹果和谷歌（Android）在接触检测方面的合作，利用手机蓝牙检测是否最近接触过感染者，很黑科技，但受限于使用人数、隐私保护等方面。文章再强调了苹果在软硬件方面的实力，更重要的是苹果将智能穿戴设备应用于数字医疗。虽然有些像吹牛的样子，但最后也说明了一下苹果遇到的困难，缺乏白宫助力、与保护隐私对立、经济下行等。

# 3. 技术技巧

介绍一个谷歌搜索的代理网站，[https://google.fuckcloudnative.io/](https://google.fuckcloudnative.io/)。利用反向代理实现谷歌搜索，原理见[此文](https://fuckcloudnative.io/posts/use-envoy-proxy-access-google/)。

# 4. 技术分享

Web技术是当今互联网发展中不能错过一项技术。入门要学html、JavaScript、CSS，学完这些再做个网站，估计兴趣都磨灭。如果只了解最少必要的知识，就能做出一个像样的网站出来，兴趣会被点燃。Mozilla的[Web入门](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web)，就是这样的课程。初学者花1-2天都能制作出简单的网页，而且了解一些底层的原理。