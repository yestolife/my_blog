(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{362:function(e,s,t){"use strict";t.r(s);var n=t(43),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。")]),e._v(" "),t("h1",{attrs:{id:"_1-做算法题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-做算法题"}},[e._v("#")]),e._v(" 1. 做算法题")]),e._v(" "),t("h4",{attrs:{id:"leetcode-234-回文链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-234-回文链表"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://leetcode-cn.com/problems/palindrome-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LeetCode 234. 回文链表"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("题目描述")]),e._v("：请判断一个链表是否为回文链表。你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？")]),e._v(" "),t("p",[t("strong",[e._v("示例")]),e._v("：")]),e._v(" "),t("blockquote",[t("p",[e._v("示例 1:输入: 1->2\n输出: false\n示例 2:输入: 1->2->2->1\n输出: true")])]),e._v(" "),t("p",[t("strong",[e._v("解题思路")]),e._v("：如果数组L存储字符串的回文检查，很简单"),t("code",[e._v("if L == L[::-1]")]),e._v("就能判断是否回文。而题目中使用链表存储，最简单的思路是把链表转换为数组（python中是列表），再判断是否回文。这中方法要遍历整个链表，时间复杂度O(N)，由于增加列表存储，空间复杂度O(N)。具体实现，参考代码1。题目还有进阶部分，要将空间复杂度降为O(1)，也就是不能使用额外的存储空间，只能在链表上做文章。使用快慢指针，慢指针每次前进1步，快指针每次前进2步，一直到快指针知道链表尾部，慢指针正好指向链表中间位置。慢指针继续向后推移逆转后半部分链表。最后比较链表的前半部分和后半部分判断是否回文。具体实现，参考代码2。")]),e._v(" "),t("p",[t("strong",[e._v("解题代码")]),e._v("1：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class Solution:\n    def isPalindrome(self, head: ListNode) -> bool:\n        L = []\n        while head is not None:\n            L += [head.val]\n            head = head.next\n        return L == L[::-1]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[t("strong",[e._v("解题代码")]),e._v("2：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class Solution:\n    def isPalindrome(self, head: ListNode) -> bool:\n        slow,fast,prev = head,head,None\n        while fast is not None:\n            slow = slow.next\n            fast = fast.next.next if fast.next is not None else fast.next\n        while slow is not None:\n            slow.next, slow, prev= prev, slow.next, slow\n        while head and prev:\n            if head.val != prev.val:\n                return False\n            head = head.next\n            prev = prev.next\n        return True\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br")])]),t("h1",{attrs:{id:"_2-点评英文文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-点评英文文章"}},[e._v("#")]),e._v(" 2. 点评英文文章")]),e._v(" "),t("p",[e._v("阅读"),t("a",{attrs:{href:"https://link.springer.com/book/10.1007%2F978-1-4471-5601-7",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Concise Guide to Databases》"),t("OutboundLink")],1),e._v("第二章，介绍了数据库发展的历程，数据库随着业务需求和技术更新的发展而发展出了关系型数据库、面向对象数据库、NoSQL数据库、数据仓库、云上数据库服务、空间数据库、时序数据库等等。文中详细描述了这些数据库的发展脉络，让你对数据库有更立体的认识。")]),e._v(" "),t("h1",{attrs:{id:"_3-技术技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-技术技巧"}},[e._v("#")]),e._v(" 3. 技术技巧")]),e._v(" "),t("p",[e._v("写正则表达式之后应该测试一下，避免出现逻辑漏洞，介绍一个在线正则匹配"),t("a",{attrs:{href:"https://tool.lu/regex/",target:"_blank",rel:"noopener noreferrer"}},[e._v("工具"),t("OutboundLink")],1),e._v("。这个工具不仅可以测试正则表达式，还可以生成邮箱、ip、手机号等正则表达式。")]),e._v(" "),t("h1",{attrs:{id:"_4-技术分享"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-技术分享"}},[e._v("#")]),e._v(" 4. 技术分享")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://vercel.com/guides/deploying-vuepress-to-vercel",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考官网说明"),t("OutboundLink")],1),e._v("使用"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000016333850",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress"),t("OutboundLink")],1),e._v("+"),t("a",{attrs:{href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vercel"),t("OutboundLink")],1),e._v("实现免费托管博客。注意先在本地跑通Vuepress，能正确访问页面。在配置Vercel时注意，Vercel访问github仓库权限要打开，配置编译生成时用"),t("code",[e._v("npm init -y && npm i -D vuepress && npm run build")]),e._v("，以在云端部署vuepress环境在跑页面出来。选择一文件夹public为输出，缺少的话会报错。代码参考我的"),t("a",{attrs:{href:"https://github.com/yestolife/blog/",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),t("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);s.default=r.exports}}]);