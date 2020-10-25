Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

#### [LeetCode1002题. 查找常用字符](https://leetcode-cn.com/problems/find-common-characters/)

**题目描述：**给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。

> 示例 1：输入：["bella","label","roller"]
> 输出：["e","l","l"]
> 示例 2：输入：["cool","lock","cook"]
> 输出：["c","o"]

**解题思路：**当A为1个字符串构成的列表时，直接返字符列表；当A有多个字符串组成，以第一个字符串为基准查找后面字符串中是否出现相同元素，并统计个数。

**解题代码：**

```python
class Solution:
    def commonChars(self, A: List[str]) -> List[str]:
        if len(A) == 1:
            return list(A[0])

        s = list(A[0])
        s_num = [0]*len(A[0])
        s_return = []

        for i in range(len(s)):
            if s[i] in s_return:
                continue
            s_num[i] = A[0].count(s[i])
            for s_A in A[1:]:
                if s_A.count(s[i]) == 0:
                    s_num[i] = 0
                    break
                elif s_A.count(s[i]) < s_num[i]:
                    s_num[i] = s_A.count(s[i])
            if s_num[i] > 0:
                s_return += s[i] * s_num[i]  
                  
        return s_return
```





## 2. 点评英文文章

文章[Awesome Data Engineering](https://awesomedataengineering.com/)介绍了数据工程专业进阶的路线和学习资源，内容非常丰富。对致力于数据工程专业人士是个宝库。

## 3. 技术技巧

把文件发送到另外一台电脑，常用的有几种方法：U盘拷贝、QQ传文件、网盘中转。都有的U盘插拔或账号登入操作，有没有更便捷的方式？有个[拷贝工具](https://www.v2fy.com/p/016-copy-tool/)，通过4个字符就能传输数据。

## 4. 技术分享

用Docker方式部署Hbase，[极速体验Hbase](https://juejin.im/entry/6844903619993550855)，省去了安装Hadoop、zookeeper等底层依赖的过程。

