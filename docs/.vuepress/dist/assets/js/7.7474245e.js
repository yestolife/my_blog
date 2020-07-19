(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(s,e,n){"use strict";n.r(e);var t=n(43),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。")]),s._v(" "),n("h2",{attrs:{id:"_1-做算法题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-做算法题"}},[s._v("#")]),s._v(" 1. 做算法题")]),s._v(" "),n("p",[s._v("Leetcode算法题"),n("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-binary-tree/",target:"_blank",rel:"noopener noreferrer"}},[s._v("654. 最大二叉树"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("strong",[s._v("题目描述")]),s._v("：给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：")]),s._v(" "),n("p",[s._v("二叉树的根是数组中的最大元素。\n左子树是通过数组中最大值左边部分构造出的最大二叉树。\n右子树是通过数组中最大值右边部分构造出的最大二叉树。\n通过给定的数组构建最大二叉树，并且输出这个树的根节点。")]),s._v(" "),n("p",[n("strong",[s._v("示例")]),s._v("：")]),s._v(" "),n("p",[s._v("输入：[3,2,1,6,0,5]\n输出：返回下面这棵树的根节点：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n​    6 \n\n /     \\\n\n3     5\n  \\    / \n  2  0   \n​    \\\n​     1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[n("strong",[s._v("解题思路")]),s._v("：用递归解决问题，找出当前数组（列表）最大的值，列表左边递归建树，右边也递归建树。边界条件是列表为空就返回None。")]),s._v(" "),n("p",[n("strong",[s._v("解题代码")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def constructMaximumBinaryTree(self, nums: List[int]) -> TreeNode:\n        if len(nums) == 0: return None\n        max_index = nums.index(max(nums))\n        root = TreeNode(nums[max_index])\n        root.left = self.constructMaximumBinaryTree(nums[0:max_index])\n        root.right = self.constructMaximumBinaryTree(nums[max_index+1:])\n        return root\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"_2-点评英文文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-点评英文文章"}},[s._v("#")]),s._v(" 2. 点评英文文章")]),s._v(" "),n("p",[s._v("文章"),n("a",{attrs:{href:"https://www.vladimircicovic.com/2019/07/why-is-serverless-important",target:"_blank",rel:"noopener noreferrer"}},[s._v("Why is serverless important ?"),n("OutboundLink")],1),s._v("中介绍了无服务器架构的概念、优点、缺点，无服务架构越来越受到重视，原因在于企业可以快速迭代试错，而且成本极低。但是需要采用新的技术架构，甚至变化组织架构，不适合体量大的组织。")]),s._v(" "),n("h2",{attrs:{id:"_3-技术技巧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-技术技巧"}},[s._v("#")]),s._v(" 3. 技术技巧")]),s._v(" "),n("p",[s._v("搜索某个网站中的内容，如果网站没有提供搜索功能，可以在搜索引擎中使用"),n("code",[s._v("site")]),s._v("关键字，如"),n("code",[s._v("site:youtube.com 蛋炒饭")]),s._v("。")]),s._v(" "),n("p",[s._v("如果想给网站添加一个搜索框，方便用户检索信息，可以"),n("a",{attrs:{href:"https://24ways.org/2018/fast-autocomplete-search-for-your-website/",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考此文"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("h2",{attrs:{id:"_4-技术分享"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-技术分享"}},[s._v("#")]),s._v(" 4. 技术分享")]),s._v(" "),n("p",[s._v("上周介绍了几个学习Linux的游戏，尝试了一下，对于英文功底很好的同学可以去玩玩，如果英语水平不够，也别勉强，否则查Linux命令变成了查英文字典。自己安装个Linux环境，用起来，才能慢慢学会Linux，就像学英语一样。")]),s._v(" "),n("p",[s._v("我自己电脑是Win10+Ubuntu双系统，每次打开Ubuntu都很慢。用"),n("code",[s._v("top")]),s._v("命令看了看跑的进程，原来以前跑的docker、mysql都在后台运行着。用"),n("code",[s._v("ps -ef |grep mysql")]),s._v("命令查找到mysql进程号，"),n("code",[s._v("kill -9 XXX")]),s._v("命令将其杀掉。再用ps命令复查一下。mysql换了个进程号还在运行。原因是有守护进程重启了mysql，不玩猫抓老鼠的游戏了，直接用"),n("code",[s._v("service mysql stop")]),s._v("命令关闭mysql。")]),s._v(" "),n("p",[s._v("这个过程用到了几个linux命令，而且解决了实际问题，这么学习虽然要反复查找解决办法，就像学英语总是磕磕巴巴一样，但能让你掌握。")])])}),[],!1,null,null,null);e.default=a.exports}}]);