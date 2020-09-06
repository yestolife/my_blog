Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

#### [LeetCode83题. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

**题目描述：**

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

> 示例 1:
>
> 输入: 1->1->2
> 输出: 1->2
> 示例 2:
>
> 输入: 1->1->2->3->3
> 输出: 1->2->3

**解题思路：**

链表是有序的，依次遍历链表，并记录当前节点的值，比较下一个节点的值。如果一样则是重复，删除下一个节点，如果不一样则未重复，递进到下一个节点。删除链表中的节点很简单，把删除节点的next指针赋给前一个节点即可。因为链表是在变化的，需要关注边界的处理。

**解题代码：**

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        
        def deleteItem(deNode: ListNode, preNode: ListNode):
            print("delete"+str(deNode.val) )
            preNode.next = deNode.next
            
        if head is None:
            return None
        L = head
        num = L.val
        
        while L is not None and L.next is not None:
            if L.next.val == num:
                deleteItem(L.next, L)
            else:
                num = L.next.val
                L = L.next    
        return head
```

## 2. 点评英文文章

文章[Learning When and When Not to Leverage AI in Your Products ](https://hackernoon.com/learning-when-and-when-not-to-leverage-ai-in-your-products-rw1p3u07)介绍了哪些场景下比较适合给产品添加AI功能。这文章破除了对AI的迷信，AI不是万能药，当作噱头更不可取。

## 3. 技术技巧

数据分析中比较头疼的一个问题是数据源的获取，巧妇难为无米之炊。[Kaggle](https://www.kaggle.com/datasets)上有很多商业、科技、城市等等相关主题的数据集。一些城市也开放了共有数据集给数据分析师、市政规划师、城市黑客研究，例如[上海](https://data.sh.gov.cn/view/data-resource/index.html)、[杭州](https://data.hz.zjzwfw.gov.cn/?page=dataOpen)、[纽约](https://opendata.cityofnewyork.us/)、[旧金山](https://datasf.org/opendata/)等。粗略浏览下来，国内城市数据偏向于信息的公示而且获取需要审批，国外偏向于信息的共享而且获取是开放的。如果自己有数据想要共享出来，可以参考[开放数据手册](https://opendatahandbook.org/guide/zh_CN/how-to-open-up-data/#menu)。

## 4. 技术分享

文章[A Beginner's Guide to the Dark Web and Online Anonymity](https://hackernoon.com/a-beginners-guide-to-the-dark-web-and-online-anonymity-2p2j3uwi)给初学者介绍了如何进入暗~网，比较基础性的介绍，打开世界最黑暗的大门，作者也奉劝大家不要做坏事，也不要暴露自己的任何信息。