Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

#### [LeetCode861题. 翻转矩阵后的得分](https://leetcode-cn.com/problems/score-after-flipping-matrix/)

**题目描述：**

有一个二维矩阵 A 其中每个元素的值为 0 或 1 。移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。返回尽可能高的分数。

> 示例：输入：[[0,0,1,1],[1,0,1,0],[1,1,0,0]]
> 输出：39
> 解释：
> 转换为 [[1,1,1,1],[1,0,0,1],[1,1,1,1]]
> 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

**解题过程：**要让数值最大，必须第一个元素为1，按行遍历把第一个元素为0的行反转。再对第二列以后的列按列遍历，对于1的个数小于行数一半的反转。用python操作过程中涉及列表生成器、字符串拼接、进制转换等方法。

**解题代码：**

```python
class Solution:
    def matrixScore(self, A: List[List[int]]) -> int:
        sum_num = 0
        for i in range(len(A)):
            if A[i][0] == 0:
                A[i] = [1-x for x in A[i]]
        for j in range(1,len(A[0])):
            if sum([x[j] for x in A]) < len(A)/2:
                for i in range(len(A)):
                    A[i][j] = 1 - A[i][j]
        for i in range(len(A)):
            sum_num += int(''.join([str(t) for t in A[i]]), 2)
        return sum_num
                
```

## 2.点评英文文章

文章[Flask Web Programming from Scratch](https://hackernoon.com/flask-web-programming-from-scratch-9ada8088fde1)介绍了基于Python的Web开发框架Flask，从最简单的登入页面开始讲解Flask框架如何搭建网页。

## 3. 技术技巧

VMware中linux虚拟机中硬盘分配需要扩容时不仅仅是在VMware修改一下配置，还要在linux中加载硬盘，可[参考这里](https://blog.csdn.net/meng8203/article/details/93169805)。

从网页或文档复制文字临时存储，通常新建一个txt存储，这个过程比较繁琐。在浏览器地址栏输入`data:text/html,<html contenteditable>`即可创建一个web版的记事本，把地址收藏起来，一点就开了临时记事本。[这篇文章](https://zserge.com/posts/awfice/)中甚至实现了简易web版的PPT、EXCEL。

使用[gogs自助搭建git](https://gogs.io/)，可极简化部署代码仓库，例如[在线体验Git](http://istester.com/page/git.html)。

## 4. 技术分享

[Jenkins](https://www.jenkins.io/zh/)是一款开源的[持续集成（CI）](https://www.ruanyifeng.com/blog/2015/09/continuous-integration.html)工具，帮助开发人员更新代码上传到代码仓库后自动化地完成测试、集成、部署。推荐[使用docker安装jenkins](https://www.jianshu.com/p/0391e225e4a6)，如果不想安装也可以[在线体验Jenkins](http://istester.com/page/232.html)。通过[实现Jenkins自动执行python脚本](https://cloud.tencent.com/developer/article/1585371)案例可以感受一下Jenkins的快速和自动化。





