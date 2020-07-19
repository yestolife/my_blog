Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

LeetCode[第21题](https://leetcode-cn.com/problems/merge-two-sorted-lists)，合并两个有序列表

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

解题代码：

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 is None:
            return l2
        elif l2 is None:
            return l1
        elif l1.val < l2.val:
            l = l1
            l.next=Solution.mergeTwoLists(self, l1.next, l2)
        else:
            l = l2
            l.next=Solution.mergeTwoLists(self, l1, l2.next)            
        return l
```

解题思路：

利用递归，将问题简化为两个链表节点值大小比较，小的放入新链表中，再比较两个链表。递归算法一般比较烧脑。有个简单的比喻，递归就像你在电影院黑漆漆的，不知道自己坐在第几排，可以把问题拆解为，问前一个人第几排，再加一就是自己第几排，以此类推，直到第一排的人是直到自己位置的。再层层返回累加起来排数。这里的大问题拆成了小问题，结束问题的边界条件很重要。

## 2. 点评英文文章

英文文章[What every computer science major should know](http://matt.might.net/articles/what-cs-majors-should-know/)主题是计算机专业应该掌握的知识。计算机专业应该掌握的知识包括项目经验、计算机语言、Unix哲学、技术交流、数据结构与算法、离散数学、网络、安全等几个方面。对每个方面都给出了相应的能力判别标准。如果想在计算机专业升学、就业，掌握这些知识应该差不多了。文中要求得非常全面。

## 3. 技术技巧

用Docker容器可以很方便地创造一个无环境依赖的应用运行环境，建议学习[Docker简明教程](https://blog.saymagic.cn/2015/06/01/learning-docker.html)。将容器制作为镜像文件，放在哪里都能运行。

## 4. 技术分享

这周小试了一下华为云上的无服务器架构CCI的功能，挺好玩的。直接部署一个容器镜像就可以跑起应用，而且按照资源占用需求收费，对轻应用非常适合。写了一遍部署无服务架构应用的文章[在此](https://editor.csdn.net/md/?articleId=104809042)。
