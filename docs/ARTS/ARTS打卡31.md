Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

#### [LeetCode771题. 宝石与石头](https://leetcode-cn.com/problems/jewels-and-stones/)

**题目描述：**
给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

>示例 1:
输入: J = "aA", S = "aAAbbbb"
输出: 3
示例 2:
输入: J = "z", S = "ZZ"
输出: 0

**解题思路：**
本题比较简单，将J中的字符在S中查找统计数量即可，Python中count函数就是做这个事的。不消耗额外空间，空间复杂度O(1)。遍历字符串J，并且每次在S中查找，时间复杂度O(len(J)*len(S))。
**解题代码：**
```python
class Solution:
def numJewelsInStones(self, J: str, S: str) -> int:
	count_num = 0
	for j in J:
		count_num += S.count(j)
	return count_num
```



## 2.点评英文文章
文章[20 Future Technologies That Will Change the World by 2050 ](https://hackernoon.com/20-future-technologies-that-will-change-the-world-by-2050-hr7q3td8)介绍了20项可能在未来改变世界的前沿技术，非常开脑洞。用DNA做计算，能随时间推移的四维打印等等，最让我意外的是零知识证明居然也在榜上，作为区块链中的一项技术，零知识证明能解决很多信息传播问题。

## 3. 技术技巧
程序对文件读写中常出现编码问题。文件读写一般分两种模式，字符串和字节，分别对应`r`,`w`和`rb`,`wb`。如果写用`w`，读用`rb`就会发生解析错误。字符串的编码也常出错，`gbk`,`utf-8`容易用混合，读写要一致，才能正确编解码。关于[文档读写参考这里](https://zhuanlan.zhihu.com/p/57533731)，关于[编解码问题参考这里](https://blog.csdn.net/vevenlcf/article/details/86552164)。
有时候程序需要远程调用另外一台服务器上的方法，这个过程称为远程过程调用（Remote Procedure Call， RPC）。[xmlrpc](https://www.cnblogs.com/weiyinfu/p/5293871.html)是基于xml格式和http协议的RPC方法，Python、Java、C++中均有相应的库可以调用。

## 4. 技术分享

Flink是Apache基金会的顶级开源项目，大有取代Hadoop、Spark之势。在B站尚硅谷频道的[Flink课程](https://www.bilibili.com/video/BV1Qp4y1Y7YN?from=search&seid=17855425502369727345)能详细了解。官网的安装部署文档简洁，例如Flink[安装部署参考这里](https://ci.apache.org/projects/flink/flink-docs-release-1.7/tutorials/local_setup.html)，[Windows下启动Flink参考这里](https://ci.apache.org/projects/flink/flink-docs-release-1.7/tutorials/flink_on_windows.html)。部署好Flink后在Flink中跑一个word count [demo参考1](https://juejin.im/post/6844903839447924750),[参考2](http://www.louisvv.com/archives/2110.html)，其中涉及到用[Marven构建Flink程序参考这里](https://blog.csdn.net/guangcheng0312q/article/details/100117525)。
初级的Flink操作完成后，研究一些解决实际问题。如何解决Kafka消费入库到Hbase中？有[kafka+flink+hbase数据整合案例参考](https://www.cnblogs.com/smartloli/p/10245105.html)，也可以用成熟的方案[华为云DLI组件实现跨源连接](https://support.huaweicloud.com/devg-dli/dli_09_0150.html)。


<script src="https://my.openwrite.cn/js/readmore.js" type="text/javascript"></script>  <script> const btw = new BTWPlugin(); btw.init({ id: 'container', blogId: '24169-1601654159088-962', name: 'Andytl的世界', qrcode: 'http://mp.weixin.qq.com/rr?timestamp=1601653977&src=3&ver=1&signature=jHnpcLX6S7DtSllwj2Pc35x77NBc3aG2P2foAx1gXpxq1R8yjdxhK3fLaSUhEnfT5e2G4VcmVfLRXHVX1AtXL5gfub0vRANkSEvpFr8G9sU=', keyword: 'get', }); </script>

