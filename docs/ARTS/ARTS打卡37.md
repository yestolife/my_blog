Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

#### [LeetCode1051题. 高度检查器](https://leetcode-cn.com/problems/height-checker/)

**题目描述：**学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。请你返回能让所有学生以 非递减 高度排列的最小必要移动人数。注意，当一组学生被选中时，他们之间可以以任何可能的方式重新排序，而未被选中的学生应该保持不动。

> 示例：输入：heights = [1,1,4,2,1,3]
> 输出：3 
> 解释：
> 当前数组：[1,1,4,2,1,3]
> 目标数组：[1,1,1,2,3,4]
> 在下标 2 处（从 0 开始计数）出现 4 vs 1 ，所以我们必须移动这名学生。
> 在下标 4 处（从 0 开始计数）出现 1 vs 3 ，所以我们必须移动这名学生。
> 在下标 5 处（从 0 开始计数）出现 3 vs 4 ，所以我们必须移动这名学生。
> 示例 2：输入：heights = [5,1,2,3,4]
> 输出：5
> 示例 3：输入：heights = [1,2,3,4,5]
> 输出：0

**解题思路：**题目可以转化成：为了得到非递减数组需要移动多少元素。可以用排序算法得到非递减的数组，比较非递减数组和原始数组之间的差异得到移动了多少元素。值得注意的是Python中列表的拷贝问题，保存原始列表时如果使用`height_ori=height`，对`height`的操作会影响到`height_ori`。要使用`heights_ori = heights[:]`进行拷贝。[Python列表拷贝原理参考](https://www.cnblogs.com/ifantastic/p/3811145.html)。

**解题代码：**

```python
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        heights_ori = heights[:]
        heights.sort()
        res = 0
        for i in range(len(heights)):
            if heights[i] != heights_ori[i]:
                res += 1
        return res
```



## 2.点评英文文章

文章[7 Best Coding Apps For Kids that Help Gamify Programming](https://hackernoon.com/7-best-coding-apps-for-kids-that-help-gamify-programming-2q6r3z27)介绍了7个教孩子编程的APP。未来可能不需要那么多程序员，AI的自动编程能力会超过大多数程序员，但学习编程可以锻炼逻辑思维能力、理解机器处理问题的流程、解决实际问题的能力。记得小时候学计算机兴趣班，还是DOS系统，记各种指令让一只小乌龟走到目的地。那个过程比较痛苦，因为小学的我压根没有英文基础。现在的孩子应该英文的坎能够跨过去，能看到更广阔的世界。

## 3. 技术技巧

目前应用最多的数据处理软件不是Mysql、Oracle等数据库，而是家喻户晓的Excel。网上由很多关于Excel使用技巧的文章，但Excel再强大也不如主流数据库的处理能力。数据库软件虽然对数据管理能力更强大，但使用门槛比较高。[黑帕云](https://hipacloud.com/)是一个像Excel一样熟悉，又兼顾数据库的强大的表格数据处理工具。不仅有在线协同编写，还对表格有行级的权限控制。除了对二维表的数据展示，还有对数据视图的呈现。

## 4.技术分享

[Ajax](https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX/Getting_Started)技术，Asysnchronous JavaScript And XML（异步的JavaScript和XML）是一种不用刷新前端页面，与服务器通信并交换数据、更新页面的技术。听起来很复杂的样子，其实常用的登入页面如果登入失败，在前端跳出一个对话框提示，这就是用到Ajax。