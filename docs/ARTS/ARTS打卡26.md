Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

**题目：**

给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，arr2 中的每个元素都出现在 arr1 中，对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

> 示例：
>
> 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
> 输出：[2,2,2,1,4,3,3,9,6,7,19]

**解题思路：**

题目中对arr1的排序是安装arr2顺序进行的，可以用hash表对arr1中元素计数，按照arr2中元素顺序和计数结果生成新列表，再加上不在arr2中元素排序的新列表，得到最终排序列表。新增加的hash表空间与arr1大小有关，空间复杂度O(n)，n为arr1元素个数。时间复杂度分两个部分，一是计算哈希表O(n)，二是对不在arr2中的元素进行排序O(mlog(m))，m为不在arr2中元素个数。最终时间复杂度为O(n + mlog(m))。

**解题代码：**

```python
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        in_arr2 = []
        not_in_arr2 = []
        Hash = {}

        for num1 in arr1:
            Hash[num1] = Hash.get(num1, 0) + 1
        
        arr1 = set(arr1)
        for num1 in arr1:
            if num1 not in arr2:
                not_in_arr2 += [num1] * Hash[num1]
        not_in_arr2.sort()

        for num2 in arr2:
            in_arr2 +=  [num2] * Hash[num2]

        return in_arr2 + not_in_arr2

```



## 2. 点评英文文章

文章《[How to Learn Any Programming Language](https://hackernoon.com/how-to-learn-any-programming-language-h1313unr)》介绍了学习编程的方法，总结一下就是定目标、列计划、多实践。道理讲起来都很朴素，要实际一步一步坚持去做到的人还真不多。只看一门编程语言的语法很容易，但写出优秀的代码还要长久的练习，编程真的很像手艺人打磨技艺。

文章《["I would rather feel machine judging me, than people judging me" - Jeremy Morgan during AMA](https://hackernoon.com/i-would-rather-feel-machine-judging-me-than-people-judging-me-jeremy-morgan-during-ama-i263uv8)》是一篇采访，其中有一句启发很大：

> *"...remember, you're not being paid to write code, you're being paid to solve problems.* "
>
> 记住，你不是因为写代码而拿工资，而是因为解决问题而获得收入。

## 3. 技术技巧

[廖雪峰的Java课程](https://www.liaoxuefeng.com/wiki/1252599548343744)中Java代码可以在线执行，原理应该是本地浏览器输入代码，在服务器端执行代码，再将结果反馈给浏览器。找到一个开源的[在线Java IDE编码工具](https://github.com/TangBean/OnlineExecutor)，能实现相似的功能。

## 4. 技术分享

使用[Python库docx](https://python-docx.readthedocs.io/en/latest/)可以实现word文档自动生成、编辑、处理，进而完成自动生成报表功能。python-docx处理word文档[安装和入门参考](https://blog.pangao.vip/python-docx处理word文档/)。
