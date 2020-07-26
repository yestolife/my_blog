Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1\. 做算法题

#### [Leetcode 面试题 03.02. 栈的最小值](https://leetcode-cn.com/problems/min-stack-lcci/)

**题目：**

请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。

**示例：**

> MinStack minStack = new MinStack();
> minStack.push(-2);
> minStack.push(0);
> minStack.push(-3);
> minStack.getMin();   --> 返回 -3.
> minStack.pop();
> minStack.top();      --> 返回 0.
> minStack.getMin();   --> 返回 -2.

**解题思路：**

栈是一种操作受限的线性表，元素按照先进后出的顺序操作。数组就是线性表，但可以随机访问，通过封装压栈（push），弹栈（pop），读栈（top）操作可以进行限制。题目要求能获得栈的最小值，在每次压栈的时候判断是否最小值，记录下来。问题在于弹栈的时候，把最小值弹出去了怎么办？先判断是否栈顶是最小值，如果是，弹栈后重新计算最小值。题目要求操作的时间复杂度为O(1)，每次弹栈都计算最小值的话，时间复杂度为O(n)。在极端情况下，栈顶是最小值，重新计算最小值时间复杂度O(n)。一般情况下，栈顶不一定是最小值，不用再找最小值，时间复杂度O(1)。

**解题代码：**

```python
class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.items = []
        self.min_item = None


    def push(self, x: int) -> None:
        self.items.append(x)
        if self.min_item is None or x < self.min_item:
            self.min_item = x

    def pop(self) -> None:
        if len(self.items) > 0:
            if self.items[-1] == self.min_item:
                del self.items[-1]
                if len(self.items) > 0:
                    self.min_item = min(self.items)
                else:
                    self.min_item = None
            else:
                del self.items[-1]

    def top(self) -> int:
        return self.items[-1]

    def getMin(self) -> int:
        return self.min_item


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
```



##  2. 点评英文文章

阅读[《Concise Guide to Databases》](https://link.springer.com/book/10.1007%2F978-1-4471-5601-7)第四章Relational Database，主要介绍了关系型数据库的基本概念，从数据库设计范式到基础SQL语法，使用案例讲解概念是很好的方法，从具体的例子中更能感受到概念的本质内涵。

## 3. 技术技巧

介绍一款清单APP，“[滴答清单](https://www.dida365.com/)”。比手机自带的备忘录功能强大不少。可以导入手机备忘录，平滑过渡。带有打卡分析功能，每一份坚持都留下脚印。内置番茄钟让你专注每一分钟。我觉得最强大的功能是，能在通知栏显示，而且常驻bar中，完成或者暂缓点击才能标记消失。以前用自带的备忘录，手一滑就没有了。想知道时间都去哪了，滴答清单告诉你。

## 4. 技术分享
给自己的网站添加全文搜索，有个简单的办法，[docsearch](https://docsearch.algolia.com/docs/apply)中填写网站地址和邮箱就完了。docsearch会自动爬取网站，构建索引，反馈给预留的邮箱一段js代码，把代码插入网站中即可。详细过程参考[这里](https://learnku.com/articles/12400/using-algolia-docsearch-to-easily-realize-document-total-station-search)。
