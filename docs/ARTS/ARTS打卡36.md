Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

#### [LeetCode1304题. 和为零的N个唯一整数](https://leetcode-cn.com/problems/find-n-unique-integers-sum-up-to-zero/)

**题目描述：**

给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。

> 示例 1：输入：n = 5
> 输出：[-7,-1,1,3,4]
> 解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。
> 示例 2：输入：n = 3
> 输出：[-1,0,1]
> 示例 3：输入：n = 1
> 输出：[0]

**解题思路：**要求数组中元素的和为0，构造包含相反数的数组，例如[-2, -1, 0, 1, 2]，或者[-2, -1, 1, 2]。要注意n为奇数和偶数两种情况。

**解题代码：**

```python
class Solution:
    def sumZero(self, n: int) -> List[int]:
        L = []
        t = - (n // 2)
        if n % 2 == 1:
            L = [i+t for i in range(n)]
        else:
            L = [i+t for i in range(n//2)] + [-(i+t) for i in range(n//2)]
        return L
```



## 2.点评英文文章

文章[8 Free Online Games to Help You Learn Coding](https://hackernoon.com/8-free-online-games-to-help-you-learn-coding-vf1k3wld)介绍了一些帮助编程的游戏网站。游戏和学习往往是作为对立出现的，但利用游戏中即时反馈，正向激励的方式克服陡峭的学习曲线可能是个好办法。

## 3. 技术技巧

微信小程序本质上来说是只能在微信中访问的网页。因为调用的全是微信的API，所以不能在其他浏览器中打开网页。虽然有一定的技术封闭性，但借助微信生态具有开放的市场。[阮一峰的小程序教程](https://mp.weixin.qq.com/s/vfN0WvSYESSHEKYyRhiMRg)从入门一步一步教，很容易上手。

## 4.技术分享

在Linux中查看markdown文件，如果用vim，只能看到markdown的源码。[glow](https://github.com/charmbracelet/glow)工具可以用命令行中打开markdown文件并解析后展示。