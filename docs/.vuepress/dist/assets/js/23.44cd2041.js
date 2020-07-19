(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{367:function(t,e,n){"use strict";n.r(e);var r=n(43),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。")]),t._v(" "),n("h1",{attrs:{id:"_1-做算法题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-做算法题"}},[t._v("#")]),t._v(" 1. 做算法题")]),t._v(" "),n("p",[t._v("Leetcode第1266题，"),n("a",{attrs:{href:"https://leetcode-cn.com/problems/minimum-time-visiting-all-points/",target:"_blank",rel:"noopener noreferrer"}},[t._v("访问所有点的最小时间"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("题目描述：")]),t._v(" "),n("blockquote",[n("p",[t._v("平面上有 n 个点，点的位置用整数坐标表示 points[i] = [xi, yi]。请你计算访问所有这些点需要的最小时间（以秒为单位）。你可以按照下面的规则在平面上移动：每一秒沿水平或者竖直方向移动一个单位长度，或者跨过对角线（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。必须按照数组中出现的顺序来访问这些点。")])]),t._v(" "),n("p",[t._v("举例说明：")]),t._v(" "),n("blockquote",[n("p",[t._v("输入：points = [[1,1],[3,4],[-1,0]]\n输出：7\n解释：一条最佳的访问路径是： [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]"),n("br"),t._v("\n从 [1,1] 到 [3,4] 需要 3 秒\n从 [3,4] 到 [-1,0] 需要 4 秒\n一共需要 7 秒")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/11/24/1626_example_1.png",alt:""}})])]),t._v(" "),n("p",[t._v("解题思路：")]),t._v(" "),n("p",[t._v("乍一看很复杂的样子，最短路径？其实题目给了很强的约束，按照数组顺序走，而且每次走一格（水平、垂直、对角线）。最快的路线就是，能走对角线的尽量走，通过对角线走到下个点附近后，水平或垂直移过去。两点之间具体走多少步（秒），就是下一个点横纵坐标分别和上一个点横纵坐标相减，取绝对值的最大值。")]),t._v(" "),n("p",[t._v("解题代码：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Solution:\n    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:\n        step_time = 0\n        for i in range(0,len(points)-1):\n            step_time += max(abs(points[i+1][0] - points[i][0]), abs(points[i+1][1] - points[i][1]))\n        return step_time\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h1",{attrs:{id:"_2-点评英文文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-点评英文文章"}},[t._v("#")]),t._v(" 2.点评英文文章")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://hackernoon.com/how-the-halving-will-impact-bitcoins-price-and-production-idn232wr",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章How The Halving Will Impact Bitcoin's Price and Production"),n("OutboundLink")],1),t._v("分析了比特币挖矿奖励减半对成本和价格的影响。对成本的影响毫无疑问，直接使得挖矿成本提高一倍。比如1度电可以挖出1个BTC，减半了，挖出1个BTC就需要2度电。作者分析比特币交易价格也会随着成本上升而上升，我不敢苟同。价格不仅和成本有关，和需求也有关。一件商品无论成本多高，没有多少人无需要，它的价格也高不到哪去。举个例子，你生产自行车，给自行车故意刷很多遍油漆，增加了成本，但顾客并不会因此而买单，价格和刷一遍漆是一样的。")]),t._v(" "),n("h1",{attrs:{id:"_3-技术技巧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-技术技巧"}},[t._v("#")]),t._v(" 3. 技术技巧")]),t._v(" "),n("p",[t._v("使用docker时，默认要用root账户执行docker命令，每次sudo一下有点麻烦。如何在普通账户下直接运行docker？"),n("a",{attrs:{href:"https://blog.csdn.net/lynnyq/article/details/79080405",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考这里实现非root执行docker"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h1",{attrs:{id:"_4-技术分享"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-技术分享"}},[t._v("#")]),t._v(" 4. 技术分享")]),t._v(" "),n("p",[t._v("因为疫情远程办公，经常使用wps和石墨文档作为在线协作写材料的工具，很实用的工具。复工后公司内网没有一款类似的协作Office工具，靠邮件传来传去，有点不是适应了。找了一款开源免费，而且可以内网离线部署的在线协作Office工具，"),n("a",{attrs:{href:"https://ibisheng.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("毕升Office"),n("OutboundLink")],1),t._v("。写了一篇内网部署毕升Office的"),n("a",{attrs:{href:"https://www.jianshu.com/p/22b9298b2d16",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),n("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);e.default=s.exports}}]);