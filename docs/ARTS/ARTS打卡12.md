Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

# 1\. 做算法题

Leetcode[55. 二叉树的深度](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/)

**题目**：输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，

        3
       / \
      9  20
        /  \
       15   7
返回它的最大深度 3 。

**解题思路**：这题用递归再适合不过了，而递归算法不大符合常用思维方式。举个例子以便于理解递归算法，而且便于代码编写。

> 电影院里黑漆漆的，你不知道自己正坐在第几排，可以打开灯数一下，但会影响别人看电影。还有个办法，问前面一排的人是坐在第几排，然后加1就是自己的排数。但前面那位老兄和你一样也不知道自己第几排，没关系，继续向前问下去，直到第一排一定知道自己是第一排。前排反馈给后一排，后一排人加1再反馈给后排，以此类推，到了你的座位，就知道了自己的排数是前面一排加1。这就是递归算法。

**解题代码**：

```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if root is None://如果节点本身为空，深度为0
            return 0
        
        if root.left is None and root.right is None:
            return 1//如果左右节点都为空，深度为1，到了“第一排”
        else:
            return max(self.maxDepth(root.left), self.maxDepth(root.right))+1//取左右子树的高度，让后加1就是本层的高度
```

# 2. 点评英文文章

文章[What every developer should know about TCP](https://robertovitillo.com/what-every-developer-should-know-about-tcp/)简单介绍了TCP协议如何三次握手，如何控制流量拥塞。TCP协议不仅是计算机通信的规约，还能探测网络的带宽和延时情况，并调节发送速度。

# 3. 技术技巧

很多人会买一本Linux基础书作为工具书，遇到问题就去查工具书。其实Linux本身就自带了很强大的帮助文件，`man command`和 `info command`都是对命令的详细解释， `command --help`是命令自带的简易帮助。虽然这些帮助文件是英文的，看起来有一点费力，但英文解释更容易理解和记忆命令。例如常用的删除命令`rm -rf`，但如何理解命令中每一个字母的含义呢，`rm`是remove删除的意思，`-r`是recursive递归的意思，`-f`是force强制的意思。

# 4. 技术分享

Linux中删除文件时，可能出现权限不足的报错，习惯性地就用sudo命令提权，再删除文件。这容易误解为用户不具有该文件的写权限，所以不能删除。实际上删除文件不是依靠用户具有该文件的写权限，而是用户具有该文件所在目录的写权限。这都和Linux文件系统有关，文件的元信息存储在所在目录中。