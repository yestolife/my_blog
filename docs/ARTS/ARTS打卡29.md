Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

#### [Leetode73题. 矩阵置零](https://leetcode-cn.com/problems/set-matrix-zeroes/)

**题目描述：**

给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

> 示例 1:输入: 
> [
>   [1,1,1],
>   [1,0,1],
>   [1,1,1]
> ]
> 输出: 
> [
>   [1,0,1],
>   [0,0,0],
>   [1,0,1]
> ]
> 示例 2:输入: 
> [
>   [0,1,2,0],
>   [3,4,5,2],
>   [1,3,1,5]
> ]
> 输出: 
> [
>   [0,0,0,0],
>   [0,4,5,0],
>   [0,3,1,0]
> ]

**解题思路：**

题目要求用原地算法，也就是说只能在给定的M*N大小的矩阵中操作，不能额外开辟空间存储矩阵。在原地进行操作，最简单的想法是遍历矩阵，发现元素为0就把对应的行和列都置0，但这样使得遍历到下一个0时判断不了是原始的0，还是操作置0。还可以通过设置标记的方法，例如遍历到一个元素为0，就把对应行和列的第一个元素置0，然后扫描第一行和第一列，如果为0则把对应的行或列置0。这里需要考虑第一行第一个元素，因为它为0有几种情况，本身就是0，第一行有0，第一列有0。用两个布尔值is_col和is_row来标记。

**解题代码：**

```python
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        L_row = list(range(len(matrix)))
        L_col = list(range(len(matrix[0])))
        is_col = False
        is_row = False

        for i in L_row:
            for j in L_col:
                if matrix[i][j] == 0:
                    matrix[0][j] = 0
                    matrix[i][0] = 0
                    if j == 0: is_col = True
                    if i == 0: is_row = True

        for i in L_row[1:]:
            if matrix[i][0] == 0:
                matrix[i] = [0]*len(matrix[0])

        for j in L_col[1:]:
            if matrix[0][j] == 0:
                for t in range(len(matrix)): matrix[t][j] = 0

        if matrix[0][0] == 0:
            if is_row is True:
                matrix[0] = [0]*len(matrix[0])
            if is_col is True:
                for t in range(len(matrix)): matrix[t][0] = 0


                
```

## 2. 点评英文文章

文章[MongoDB History](https://www.quickprogrammingtips.com/mongodb/mongodb-history.html)介绍了非常流行NoSQL数据库MongoDB的历史、设计理念和现状。它的名称与芒果无关，而是Humangous Database，巨大的数据库。作为一款开源数据库，市值达到100亿，堪称开典范。基于云开发应用架构的技术栈MEAR或MEAN中的M指的就是MongoDB，可见它在目前的江湖地位。

## 3. 技术技巧

有时候抢一些名额需要通过网页填写表单，如何才能快人一步呢。如果能在抢注之前看到表单网页，可以通过js代码自动填写好，例如`document.getElementById('username').value = 'Jim'`。根据表单内容编写好js脚本。3-2-1倒计时一到，就执行脚本，把该填的都自动填好提交，而别人还在敲击键盘填写表单。

## 4. 技术分享

kaggle上有一些关于Python、Pandas、机器学习算法的[课程](https://www.kaggle.com/learn/overview)，对数据分析入门很有帮助。课程中用在线Notebook进行实操，学习一个知识点立马就能得到反馈，明显能感受到知识看着简单，用一用才知道深浅。