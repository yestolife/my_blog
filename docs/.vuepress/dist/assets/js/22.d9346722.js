(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{369:function(s,t,n){"use strict";n.r(t);var a=n(43),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。")]),s._v(" "),n("h1",{attrs:{id:"_1-做算法题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-做算法题"}},[s._v("#")]),s._v(" 1. 做算法题")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix/",target:"_blank",rel:"noopener noreferrer"}},[s._v("第135题，矩阵中负数个数"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("给你一个 "),n("code",[s._v("m * n")]),s._v(" 的矩阵 "),n("code",[s._v("grid")]),s._v("，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。")]),s._v(" "),n("p",[s._v("请你统计并返回 "),n("code",[s._v("grid")]),s._v(" 中 "),n("strong",[s._v("负数")]),s._v(" 的数目。")]),s._v(" "),n("p",[s._v("解题思路1:")]),s._v(" "),n("p",[s._v("扫描矩阵每一行，遍历每个元素，发现为负数就停止遍历，统计后面有多少元素。")]),s._v(" "),n("p",[s._v("解题代码1：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("countNegatives")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("List"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        num_neg "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" grid_row "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grid_row"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" grid_row"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    num_neg "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grid_row"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" j\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" num_neg\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("解题思路2：")]),s._v(" "),n("p",[s._v("由于是非递增排列，可以用二分法快速查找每一行的负数，每行查找的实践复杂度从O(n)降为O(logn)。")]),s._v(" "),n("p",[s._v("解题代码2：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Solution:\n    def countNegatives(self, grid: List[List[int]]) -> int:\n        num_neg = 0\n        j_end = len(grid[0]) - 1\n        for grid_row in grid:\n            j_start = 0\n            while j_start <= j_end:\n                j = (j_start+j_end) // 2\n                if grid_row[j] < 0:\n                    if j == 0:\n                        num_neg += len(grid_row)\n                        break\n                    elif (grid_row[j-1] >= 0 and j > 0):\n                        num_neg += len(grid_row) - j\n                        break\n                    else:\n                        j_end = j - 1\n                else:\n                    j_start = j + 1         \n        return num_neg\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h1",{attrs:{id:"_2-点评英文文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-点评英文文章"}},[s._v("#")]),s._v(" 2.点评英文文章")]),s._v(" "),n("p",[s._v("阅读英文文章："),n("a",{attrs:{href:"http://blog.thefirehoseproject.com/posts/learn-to-code-and-be-self-reliant/",target:"_blank",rel:"noopener noreferrer"}},[s._v("The Key To Accelerating Your Coding Skills"),n("OutboundLink")],1),s._v("和"),n("a",{attrs:{href:"https://www.florio.dev/20200328-letter-to-myself/",target:"_blank",rel:"noopener noreferrer"}},[s._v("A letter to myself as a fresh software engineer"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("两篇文章作者都是从过来人的角度，告诉还在山脚下的技术同学，爬上山会遇到什么坑和险。编程不是冲刺跑，而是马拉松。和马拉松很类似，都有一个撞墙期，会遇到需要突破的瓶颈。怎么突破瓶颈，走出舒适区呢？关注细节。编程里处处是细节，把细节处理好，是攀登的阶梯。别怕犯错，人都是从错误中学习的。引用一句话：")]),s._v(" "),n("blockquote",[n("p",[s._v("The master has failed more times than the beginner has even tried.")]),s._v(" "),n("p",[s._v("大师失败的次数比菜鸟尝试的次数都要多。")])]),s._v(" "),n("h1",{attrs:{id:"_3-技术技巧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-技术技巧"}},[s._v("#")]),s._v(" 3.技术技巧")]),s._v(" "),n("p",[s._v("最近使用Visual Studio Code这个IDE工具，发现这个工具很轻便、很快速。写Python比Pycharm更快速。采用插件式扩展IDE功能，这是一个会生长的IDE。")]),s._v(" "),n("p",[s._v("很多人不知道笔记本触摸板的快捷方式，一般是手边没鼠标，用触摸板临时凑活一下。其实触摸板用起来可以比鼠标更灵活，我已经不使用鼠标了。两指同时在触摸板上下滑动可以翻动页面，三指同时左右滑动可以切换任务，更多技巧"),n("a",{attrs:{href:"https://support.microsoft.com/zh-cn/help/4027871/windows-10-touchpad-gestures",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("h1",{attrs:{id:"_4-技术分享"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-技术分享"}},[s._v("#")]),s._v(" 4.技术分享")]),s._v(" "),n("p",[s._v("Java几乎是主流编程语言的代名词，而Spring框架成为Java开发的事实标准。推荐一下Spring官网的"),n("a",{attrs:{href:"https://spring.io/quickstart",target:"_blank",rel:"noopener noreferrer"}},[s._v("Quick Start"),n("OutboundLink")],1),s._v("，差不多半小时之内就能用Spring Boot搭建起一个最小可执行系统。对快速了解Spring是一个好办法，别浸泡于繁琐的概念之中，亲手实践一下。")])])}),[],!1,null,null,null);t.default=e.exports}}]);