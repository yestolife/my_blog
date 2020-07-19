(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{364:function(s,t,a){"use strict";a.r(t);var n=a(43),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。")]),s._v(" "),a("h1",{attrs:{id:"_1-做算法题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-做算法题"}},[s._v("#")]),s._v(" 1. 做算法题")]),s._v(" "),a("h4",{attrs:{id:"leetcode-206-反转链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-206-反转链表"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[s._v("LeetCode 206. 反转链表"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("题目：")])]),s._v(" "),a("p",[s._v("反转一个单链表。")]),s._v(" "),a("p",[a("strong",[s._v("示例:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("输入: 1->2->3->4->5->NULL\n输出: 5->4->3->2->1->NULL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("解题思路:")])]),s._v(" "),a("p",[s._v("循环遍历链表，将每个节点p的指针赋给p.next.next节点，边界处理需要原头节点指向NULL，返回新的头节点head。链表的操作最容易出错的地方是丢失指针，画出图来整个过程就清晰了。边界处理也容易出错，引入一个“哨兵”节点在头节点前面。")]),s._v(" "),a("p",[s._v("原始链表是这样的：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://windliang.oss-cn-beijing.aliyuncs.com/ll0.jpg",alt:"原始链表"}})]),s._v(" "),a("p",[s._v("增加“哨兵节点”：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://windliang.oss-cn-beijing.aliyuncs.com/l00.jpg",alt:"增加哨兵"}})]),s._v(" "),a("p",[s._v("开始迭代，第一步保存head.next指针到next中")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://windliang.oss-cn-beijing.aliyuncs.com/l1.jpg",alt:"开始迭代，保存next指针"}})]),s._v(" "),a("p",[s._v("第二步head指向pre")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://windliang.oss-cn-beijing.aliyuncs.com/l2.jpg",alt:"head指向pre"}})]),s._v(" "),a("p",[s._v("第三步pre右移")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://windliang.oss-cn-beijing.aliyuncs.com/l3.jpg",alt:"pre右移"}})]),s._v(" "),a("p",[s._v("第四步head右移")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://windliang.oss-cn-beijing.aliyuncs.com/l4.jpg",alt:"head右移"}})]),s._v(" "),a("p",[s._v("一次迭代完成，下一次迭代得到：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://windliang.oss-cn-beijing.aliyuncs.com/l5.jpg",alt:""}})]),s._v(" "),a("p",[s._v("直到head.next为NULL时迭代终止：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://windliang.oss-cn-beijing.aliyuncs.com/l6.jpg",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("解题代码：")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Definition for singly-linked list.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# class ListNode:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     def __init__(self, x):")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         self.val = x")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         self.next = None")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverseList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ListNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ListNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" head "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head\n        pre_p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            next_p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n            head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pre_p\n            pre_p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head\n            head "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" next_p\n        head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pre_p\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h1",{attrs:{id:"_2-点评英文文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-点评英文文章"}},[s._v("#")]),s._v(" 2. 点评英文文章")]),s._v(" "),a("p",[s._v("阅读"),a("a",{attrs:{href:"https://link.springer.com/book/10.1007%2F978-1-4471-5601-7",target:"_blank",rel:"noopener noreferrer"}},[s._v("《Concise Guide to Databases》"),a("OutboundLink")],1),s._v("第三章，介绍了数据库是如何物理存储的，以及数据库操作时如何执行的。从原理上解释了数据库底层机制，但并不高深难懂。")]),s._v(" "),a("h1",{attrs:{id:"_3-技术技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-技术技巧"}},[s._v("#")]),s._v(" 3. 技术技巧")]),s._v(" "),a("p",[s._v("Eclipse中代码补全功能可以避免输入较长内容而不慎写错，使用部分代码+"),a("code",[s._v("Ctrl+Alt+/")]),s._v("即可补全，例如输入"),a("code",[s._v("pr")]),s._v("+"),a("code",[s._v("Ctrl+Alt+/")]),s._v("得到关键字private。")]),s._v(" "),a("h1",{attrs:{id:"_4-技术分享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-技术分享"}},[s._v("#")]),s._v(" 4. 技术分享")])])}),[],!1,null,null,null);t.default=e.exports}}]);