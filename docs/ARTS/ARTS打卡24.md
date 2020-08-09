Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1\. 做算法题

#### [LeetCode 面试题 08.05. 递归乘法](https://leetcode-cn.com/problems/recursive-mulitply-lcci/)

**题目描述：**

递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。

> 示例1:
>
> 输入：A = 1, B = 10
> 输出：10
> 示例2:
>
> 输入：A = 3, B = 4
> 输出：12

**解题思路：**乘法运算本质上是诺干个加法的简写形式，例如`A=3，B=4`，`A*B`是`A`加了`B`次`A`，`3 * 4 = 3 + 3 + 3 + 3 `。可以用循环累加的方式实现，但题目是用递归。把多次累加的问题拆分为较大的数字（不妨认为是B）加上自己（B）的A-1次再加B。

**解题代码：**

```
class Solution:
    def multiply(self, A: int, B: int) -> int:
        if A > B:
            A, B = B, A
        if A == 1:
            return B
        else:
            return B + self.multiply(A-1, B)
```

## 2. 点评英文文章,

文章《[How to Automate Your GitHub Profile README](https://www.freecodecamp.org/news/go-automate-your-github-profile-readme/)》介绍了如何使用Github中的[Action](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)功能自动更新主页的封面。文中一步一步教，过程比较容易复现。查了下该文章所在的网站[freecodecamp](https://www.freecodecamp.org/news/)上很多这类具有操作性的文章，翻翻能找到不少好玩的。

## 3. 技术技巧

以前用过Zabbix、Logstash监控服务器，在服务器上跑一个探针，定时发送性能数据出来以实现监控。很多时候除了监控服务器本身的，还要把应用服务监控起来。可能服务器一切正常，但应用不可用。[nagios](https://www.nagios.org/)是用于监控应用的开源工具，在应用的外部进行测试，模拟用户登入页面，打开功能，还能监控网络情况。

## 4. 技术分享

[xxl-job](https://github.com/xuxueli/xxl-job)是大众点评开源的分布式任务调度平台。分布式是指平台可以集群方式部署，而且可以横向扩展。任务调度是指为系统在特定时间或时间段执行特定任务，例如电商系统每晚1点执行销售金额统计任务。xxl-job比较容易上手，官网有详细的配置Demo，补充一些过程资料：安装环境中要求Mysql5.7+（[安装方法](https://blog.csdn.net/LB_AUTO/article/details/106041858)）,JDK1.8+([安装方法](https://blog.csdn.net/ThinkWon/article/details/94353907))Marken3+([安装方法](https://www.yiibai.com/maven/maven_environment_setup.html))，初始化时在Mysql中执行sql文件的[参考方法](https://blog.csdn.net/qq_25925973/article/details/87931335)。



