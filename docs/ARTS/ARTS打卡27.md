Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

**题目：**

#### [LeetCode第1470题. 重新排列数组](https://leetcode-cn.com/problems/shuffle-the-array/)

给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。

请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。

> 示例 1：输入：nums = [2,5,1,3,4,7], n = 3
> 输出：[2,3,5,4,1,7] 
> 解释：由于 x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 ，所以答案为 [2,3,5,4,1,7]
> 示例 2：
>
> 输入：nums = [1,2,3,4,4,3,2,1], n = 4
> 输出：[1,4,2,3,3,2,4,1]
> 示例 3：
>
> 输入：nums = [1,1,2,2], n = 2
> 输出：[1,2,1,2]

**解题思路：**

依次取出第i个元素和第i+n个元素拼接在一起。

**解题代码：**

```python
class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        nums_return = []
        for i in range(n):
            nums_return.append(nums[i])
            nums_return.append(nums[i+n])
        return nums_return
```

## 2. 点评英文文章

文章《[How to Avoid n00b Programming Mistakes](https://hackernoon.com/how-to-avoid-n00b-programming-mistakes-if273xdw)》介绍了9个无效的学习编程路径，引以为戒。编程是一门手艺，手艺不可能一天就搞定，需要很强的基本工。看看英文里三天打鱼两天晒网，单打独斗，光看不练假把式，是骡子是马拿出来遛遛怎么说。

## 3. 技术技巧

git工具gitlab类似于github，不过gitlab是可以私有化部署在公司内网，[gitlab部署方法参考](https://www.jianshu.com/p/080a962c35b6)。

Visual Studio Code可以离线安装插件，[插件安装方法参考](https://blog.csdn.net/u012814856/article/details/80684376)。

## 4. 技术分享

Docker容器应用越来越多，对Docker容器的管理往往依赖后台的命令，不是很方便，操作有一点门槛。使用[pontainer](https://www.portainer.io/)，可视化地管理Docker容器，安装简洁，操作方便。[安装和使用pontainer方法参考](https://my.oschina.net/zhengqingya/blog/3066410)。