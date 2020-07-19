Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

# 1. 做算法题

Leetcode第1266题，[访问所有点的最小时间](https://leetcode-cn.com/problems/minimum-time-visiting-all-points/)

题目描述：

> 平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi]。请你计算访问所有这些点需要的最小时间（以秒为单位）。你可以按照下面的规则在平面上移动：每一秒沿水平或者竖直方向移动一个单位长度，或者跨过对角线（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。必须按照数组中出现的顺序来访问这些点。

举例说明：

> 输入：points = [[1,1],[3,4],[-1,0]]
> 输出：7
> 解释：一条最佳的访问路径是： [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
> 从 [1,1] 到 [3,4] 需要 3 秒 
> 从 [3,4] 到 [-1,0] 需要 4 秒
> 一共需要 7 秒
>
> ![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/11/24/1626_example_1.png)

解题思路：

乍一看很复杂的样子，最短路径？其实题目给了很强的约束，按照数组顺序走，而且每次走一格（水平、垂直、对角线）。最快的路线就是，能走对角线的尽量走，通过对角线走到下个点附近后，水平或垂直移过去。两点之间具体走多少步（秒），就是下一个点横纵坐标分别和上一个点横纵坐标相减，取绝对值的最大值。

解题代码：

```
class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        step_time = 0
        for i in range(0,len(points)-1):
            step_time += max(abs(points[i+1][0] - points[i][0]), abs(points[i+1][1] - points[i][1]))
        return step_time
```



# 2.点评英文文章

[文章How The Halving Will Impact Bitcoin's Price and Production](https://hackernoon.com/how-the-halving-will-impact-bitcoins-price-and-production-idn232wr)分析了比特币挖矿奖励减半对成本和价格的影响。对成本的影响毫无疑问，直接使得挖矿成本提高一倍。比如1度电可以挖出1个BTC，减半了，挖出1个BTC就需要2度电。作者分析比特币交易价格也会随着成本上升而上升，我不敢苟同。价格不仅和成本有关，和需求也有关。一件商品无论成本多高，没有多少人无需要，它的价格也高不到哪去。举个例子，你生产自行车，给自行车故意刷很多遍油漆，增加了成本，但顾客并不会因此而买单，价格和刷一遍漆是一样的。

# 3. 技术技巧

使用docker时，默认要用root账户执行docker命令，每次sudo一下有点麻烦。如何在普通账户下直接运行docker？[参考这里实现非root执行docker](https://blog.csdn.net/lynnyq/article/details/79080405)。

# 4. 技术分享

因为疫情远程办公，经常使用wps和石墨文档作为在线协作写材料的工具，很实用的工具。复工后公司内网没有一款类似的协作Office工具，靠邮件传来传去，有点不是适应了。找了一款开源免费，而且可以内网离线部署的在线协作Office工具，[毕升Office](https://ibisheng.cn/)。写了一篇内网部署毕升Office的[文章](https://www.jianshu.com/p/22b9298b2d16)。