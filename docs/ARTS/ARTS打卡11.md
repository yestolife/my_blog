Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

Leetcode算法题[654. 最大二叉树](https://leetcode-cn.com/problems/maximum-binary-tree/)

**题目描述**：给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：

二叉树的根是数组中的最大元素。
左子树是通过数组中最大值左边部分构造出的最大二叉树。
右子树是通过数组中最大值右边部分构造出的最大二叉树。
通过给定的数组构建最大二叉树，并且输出这个树的根节点。

**示例**：

输入：[3,2,1,6,0,5]
输出：返回下面这棵树的根节点：
```

​    6 

 /     \

3     5
  \    / 
  2  0   
​    \
​     1
```

**解题思路**：用递归解决问题，找出当前数组（列表）最大的值，列表左边递归建树，右边也递归建树。边界条件是列表为空就返回None。

**解题代码**：

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> TreeNode:
        if len(nums) == 0: return None
        max_index = nums.index(max(nums))
        root = TreeNode(nums[max_index])
        root.left = self.constructMaximumBinaryTree(nums[0:max_index])
        root.right = self.constructMaximumBinaryTree(nums[max_index+1:])
        return root
```

## 2. 点评英文文章

文章[Why is serverless important ?](https://www.vladimircicovic.com/2019/07/why-is-serverless-important)中介绍了无服务器架构的概念、优点、缺点，无服务架构越来越受到重视，原因在于企业可以快速迭代试错，而且成本极低。但是需要采用新的技术架构，甚至变化组织架构，不适合体量大的组织。

## 3. 技术技巧

搜索某个网站中的内容，如果网站没有提供搜索功能，可以在搜索引擎中使用`site`关键字，如`site:youtube.com 蛋炒饭`。

如果想给网站添加一个搜索框，方便用户检索信息，可以[参考此文](https://24ways.org/2018/fast-autocomplete-search-for-your-website/)。

## 4. 技术分享

上周介绍了几个学习Linux的游戏，尝试了一下，对于英文功底很好的同学可以去玩玩，如果英语水平不够，也别勉强，否则查Linux命令变成了查英文字典。自己安装个Linux环境，用起来，才能慢慢学会Linux，就像学英语一样。

我自己电脑是Win10+Ubuntu双系统，每次打开Ubuntu都很慢。用`top`命令看了看跑的进程，原来以前跑的docker、mysql都在后台运行着。用`ps -ef |grep mysql`命令查找到mysql进程号，`kill -9 XXX`命令将其杀掉。再用ps命令复查一下。mysql换了个进程号还在运行。原因是有守护进程重启了mysql，不玩猫抓老鼠的游戏了，直接用`service mysql stop`命令关闭mysql。

这个过程用到了几个linux命令，而且解决了实际问题，这么学习虽然要反复查找解决办法，就像学英语总是磕磕巴巴一样，但能让你掌握。
