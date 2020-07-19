Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

# 1. 做算法题

#### [LeetCode 206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

**题目：**

反转一个单链表。

**示例:**

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**解题思路:**

循环遍历链表，将每个节点p的指针赋给p.next.next节点，边界处理需要原头节点指向NULL，返回新的头节点head。链表的操作最容易出错的地方是丢失指针，画出图来整个过程就清晰了。边界处理也容易出错，引入一个“哨兵”节点在头节点前面。

原始链表是这样的：

![原始链表](http://windliang.oss-cn-beijing.aliyuncs.com/ll0.jpg)

增加“哨兵节点”：

![增加哨兵](http://windliang.oss-cn-beijing.aliyuncs.com/l00.jpg)

开始迭代，第一步保存head.next指针到next中

![开始迭代，保存next指针](http://windliang.oss-cn-beijing.aliyuncs.com/l1.jpg)

第二步head指向pre

![head指向pre](http://windliang.oss-cn-beijing.aliyuncs.com/l2.jpg)

第三步pre右移

![pre右移](http://windliang.oss-cn-beijing.aliyuncs.com/l3.jpg)

第四步head右移

![head右移](http://windliang.oss-cn-beijing.aliyuncs.com/l4.jpg)

一次迭代完成，下一次迭代得到：

![](http://windliang.oss-cn-beijing.aliyuncs.com/l5.jpg)

直到head.next为NULL时迭代终止：

![](http://windliang.oss-cn-beijing.aliyuncs.com/l6.jpg)



**解题代码：**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head is None:
            return head
        pre_p = None
        while head.next is not None:
            next_p = head.next
            head.next = pre_p
            pre_p = head
            head = next_p
        head.next = pre_p
        return head
```



# 2. 点评英文文章

阅读[《Concise Guide to Databases》](https://link.springer.com/book/10.1007%2F978-1-4471-5601-7)第三章，介绍了数据库是如何物理存储的，以及数据库操作时如何执行的。从原理上解释了数据库底层机制，但并不高深难懂。

# 3. 技术技巧

Eclipse中代码补全功能可以避免输入较长内容而不慎写错，使用部分代码+`Ctrl+Alt+/`即可补全，例如输入`pr`+`Ctrl+Alt+/`得到关键字private。

# 4. 技术分享

