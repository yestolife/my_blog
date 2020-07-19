Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

# 1. 做算法题

[第135题，矩阵中负数个数](https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix/)

给你一个 `m * n` 的矩阵 `grid`，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 

请你统计并返回 `grid` 中 **负数** 的数目。

解题思路1:

扫描矩阵每一行，遍历每个元素，发现为负数就停止遍历，统计后面有多少元素。

解题代码1：

```python
class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        num_neg = 0
        for grid_row in grid:
            for j in range(len(grid_row)):
                if grid_row[j] < 0:
                    num_neg += len(grid_row) - j
                    break
        return num_neg
```

解题思路2：

由于是非递增排列，可以用二分法快速查找每一行的负数，每行查找的实践复杂度从O(n)降为O(logn)。

解题代码2：

```
class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        num_neg = 0
        j_end = len(grid[0]) - 1
        for grid_row in grid:
            j_start = 0
            while j_start <= j_end:
                j = (j_start+j_end) // 2
                if grid_row[j] < 0:
                    if j == 0:
                        num_neg += len(grid_row)
                        break
                    elif (grid_row[j-1] >= 0 and j > 0):
                        num_neg += len(grid_row) - j
                        break
                    else:
                        j_end = j - 1
                else:
                    j_start = j + 1         
        return num_neg
```



# 2.点评英文文章

阅读英文文章：[The Key To Accelerating Your Coding Skills](http://blog.thefirehoseproject.com/posts/learn-to-code-and-be-self-reliant/)和[A letter to myself as a fresh software engineer](https://www.florio.dev/20200328-letter-to-myself/)

两篇文章作者都是从过来人的角度，告诉还在山脚下的技术同学，爬上山会遇到什么坑和险。编程不是冲刺跑，而是马拉松。和马拉松很类似，都有一个撞墙期，会遇到需要突破的瓶颈。怎么突破瓶颈，走出舒适区呢？关注细节。编程里处处是细节，把细节处理好，是攀登的阶梯。别怕犯错，人都是从错误中学习的。引用一句话：

> The master has failed more times than the beginner has even tried.
>
> 大师失败的次数比菜鸟尝试的次数都要多。

# 3.技术技巧

最近使用Visual Studio Code这个IDE工具，发现这个工具很轻便、很快速。写Python比Pycharm更快速。采用插件式扩展IDE功能，这是一个会生长的IDE。

很多人不知道笔记本触摸板的快捷方式，一般是手边没鼠标，用触摸板临时凑活一下。其实触摸板用起来可以比鼠标更灵活，我已经不使用鼠标了。两指同时在触摸板上下滑动可以翻动页面，三指同时左右滑动可以切换任务，更多技巧[参考](https://support.microsoft.com/zh-cn/help/4027871/windows-10-touchpad-gestures)。

# 4.技术分享

Java几乎是主流编程语言的代名词，而Spring框架成为Java开发的事实标准。推荐一下Spring官网的[Quick Start](https://spring.io/quickstart)，差不多半小时之内就能用Spring Boot搭建起一个最小可执行系统。对快速了解Spring是一个好办法，别浸泡于繁琐的概念之中，亲手实践一下。