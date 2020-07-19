Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题
第13题，罗马数字转整数

题目详见[这里](https://leetcode-cn.com/problems/roman-to-integer/)，我的解答代码如下：

```
class Solution:
    def romanToInt(self, s: str) -> int:
        # 用字典存储罗马数字和阿拉伯数字对应关系
        roma_dic = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
        # 存储转换的数值
        num_int = 0
        # 临时存储前一个字符的数值
        c_pre = 0
        # 逆序遍历罗马数字的字符串，将数值累加，如果遇到小的罗马数字在大的罗马数字前面，则将小的罗马数字变为相应负数。
        for c in s[::-1]:
            num_c = roma_dic[c]
            if num_c < c_pre:
                num_c = 0 - num_c
            num_int += num_c
            c_pre = roma_dic[c]
        return num_int
```

这道题目用顺序遍历也可以实现，但逆序更简单一点。

## 2. 点评英文文章
翻译了一遍西北大学Knights实验室网站：[https://mystery.knightlab.com/walkthrough.html](https://mystery.knightlab.com/walkthrough.html)
用游戏的方式学习SQL，比光看书，然后对着屏幕敲敲查询语句好多了。游戏可以激励自己主动去找线索，调动起了积极性，然后加上及时的反馈，能起到很好的学习效果。这种学习方式一般在小学教育中很常见，越往后好像游戏就成了不务正业的事情。能把一件事情长期做下去，还真需要这样的游戏精神。有小步的台阶，每一步只要在现在基础上努力一下就能上去，而且上去每一步都有积极反馈。学校就是严格设计了这样的台阶，虽然不是所有人都适应，但大多数人是能走到一定的位置的。走出校园，没有人给你搭建这样的梯子，让你直接走就好了。只能自己摸索，摸着石头过河。
## 3. 技术技巧
如果做了个网页，想跟踪分析用户在网页上的行为（停留时间、点击链接等）或者用户的标签（地区、时间、入口）可以在网页中添加一段监控js代码实现。这段监控js代码在用户访问时、发生行为时、离开时都进行记录，并发送给第三方平台。国内[百度统计](https://tongji.baidu.com/web/welcome/basic)，国外[Google Analystic](https://developers.google.cn/analytics?hl=zh-cn)都能做。输入自己网页的url，自动生成js代码，粘贴到页面的head标签里就完成了。
## 4. 技术分享
这周实现了中文版的SQL游戏网站。参考我的文章[学习SQL的侦探游戏](https://editor.csdn.net/md/?articleId=104666072)。
