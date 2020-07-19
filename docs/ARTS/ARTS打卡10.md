Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

# 1\. 做算法题

LeetCode算法题[461\. 汉明距离](https://leetcode-cn.com/problems/hamming-distance/)

题目：两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。给出两个整数 x 和 y，计算它们之间的汉明距离。注意：  0 ≤ x, y < 2^31。示例：输入: x = 1, y = 4，输出: 2，因为1 的二进制(0 0 0 1)，4 的二进制(0 1 0 0)，二进制位不同的个数为2，汉明距离就为2。

解题思路：

最简单的方法是把十进制数转换为二进制，然后比较不同的个数。但这个过程用异或运算就能搞定，异或就是计算两个数字中的不同。

解题代码：

```
class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        return bin(x^y).count('1')
```

# 2\. 点评英文文章

文章[All About Heisenbug](https://qa-platforms.com/all-about-heisenbug/)，介绍了一种奇特的软件Bug，海森堡bug，用了物理学家海森堡（Heisenberg）命名。著名的海森堡测不准定律是说不可能同时测准物质的位置和动量。海森堡Bug意思是指那些在修复中会消失或改变行为的Bug。文中介绍了发生此类Bug的原因和处理方法。你是否也碰到过这样的Bug呢。

# 3\. 技术技巧

学习Linux命令总是让人头疼，学了不马上用就会忘，忘了又要从新学。Linux学习的路径虽然不陡峭，一点一点敲命令即可，但每次都是书到用时方恨少。要完成一个任务，左查查命令，右查查参数，像没学过一样。为了走出这个怪圈，除了多练习，多实践，还可以通过游戏的方式学习。由浅入深，这篇[文章](https://opensource.com/article/19/10/learn-bash-command-line-games)介绍了三个Bash学习的命令行游戏。学了马上就用，用了马上就又反馈。

# 4\. 技术分享

Zookeeper默认可以[未授权访问](http://www.polaris-lab.com/index.php/archives/41/)，这让黑客有了可乘之机，通过未授权访问漏洞，收集敏感信息，为攻击做好准备。[参考此文](https://www.cnblogs.com/sevck/p/5225634.html)复现一遍Zookeeper无授权访问漏洞，可以看到很多服务器信息，虽然没有直接把家里的财务物送人，但无异于把家里的地图和盘托出。Zookeeper漏洞修复[参考此文](https://blog.csdn.net/baidu_39459954/article/details/90748332)。基本原理是通过添加路由表，在防火墙上只允许白名单IP地址访问Zookeeper服务。