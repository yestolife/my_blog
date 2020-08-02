Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1\. 做算法题

#### [LeetCode 剑指 Offer 59 - II. 队列的最大值](https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/)

**题目描述：**

请定义一个队列并实现函数 `max_value` 得到队列里的最大值，要求函数`max_value`、`push_back` 和 `pop_front` 的**均摊**时间复杂度都是O(1)。若队列为空，`pop_front` 和 `max_value` 需要返回 -1

**示例 1：**

```
输入: 
["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
[[],[1],[2],[],[],[]]
输出: [null,null,null,2,1,2]
```

**示例 2：**

```
输入: 
["MaxQueue","pop_front","max_value"]
[[],[],[]]
输出: [null,-1,-1]
```

**限制：**

- `1 <= push_back,pop_front,max_value的总操作数 <= 10000`
- `1 <= value <= 10^5`

**解题思路：**

队列和栈一样是操作受限的线性表，不同的是，队列是先进先出。题目中要求是找出最大值，在入队时比较新加入元素是否大于最大值，如果更大，则更新最大值。在出队时判断是否为最大值出队，如果是则重新计算最大值。

**解题代码：**

```python
class MaxQueue:

    def __init__(self):
        self.queue = []
        self.max_num = -1


    def max_value(self) -> int:
        if len(self.queue) == 0:
            return -1 
        return self.max_num

    def push_back(self, value: int) -> None:
        self.queue.append(value)
        if value > self.max_num:
            self.max_num = value

    def pop_front(self) -> int:
        if len(self.queue) == 0:
            return -1
        if len(self.queue) == 1:
            self.max_num = -1
        if self.queue[0] == self.max_num and len(self.queue) > 1:
            self.max_num = max(self.queue[1:])
        pop_num = self.queue[0]
        self.queue = self.queue[1:]
        return pop_num
        
        


# Your MaxQueue object will be instantiated and called as such:
# obj = MaxQueue()
# param_1 = obj.max_value()
# obj.push_back(value)
# param_3 = obj.pop_front()
```





## 2. 点评英文文章

文章[Do You Know Python Has A Built-In Database?](https://towardsdatascience.com/do-you-know-python-has-a-built-in-database-d553989c87bd)介绍了Python中内置的SQLite数据库的用法。SQLite是一个轻量级的关系型数据库，具备常用数据库的各种用法。不需要下载安装，直接在Python中引入包即可`import sqlite3`。以前还用过Python起一个轻量级的服务器，`python3 -m http.server`。Python的易用性体现的淋漓精致。

## 3. 技术技巧

[Magi](https://magi.com/)是一个反馈机器学习结果的搜索引擎。Magi会向其他搜索引擎一样爬取网页信息，不一样的地方是，Magi将搜集到的数据进行结构化，提取其中信息，形成供人参考的知识。Magi比较适合在了解一个新概念时使用。

<iframe height=498 width=510 src="https://www.peak-labs.com/assets/media/posts/intro/webui.mp4"></iframe>


## 4. 技术分享

在Windows中执行curl命令，有时会报错，不能直接搬移Linux下的命令。建议使用`Invoke-WebRequest`命令替代，参考[这里](https://www.cnblogs.com/woshimrf/p/5899629.html)。

