Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

#### [LeetCode 905. 按奇偶排序数组](https://leetcode-cn.com/problems/sort-array-by-parity/)

**题目描述：**

给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

你可以返回满足此条件的任何数组作为答案。

> 示例：
>
> 输入：[3,1,2,4]
> 输出：[2,4,3,1]
> 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。

**解题思路：**

有两个思路，一是从数组的首尾向中间遍历，对比前后两个数的奇偶，分四种情况处理，偶-奇（不动），偶-偶（后面的偶数插入数组前部），奇-偶（交换），奇-奇（前面的奇数插入最后）。不占用额外空间，空间复杂度为O(1)。遍历数组时间复杂度O(n)，存在数组数据搬移，整体时间复杂度达到O(n^2)。第二种思路是，创建一个和原数组A一样大小的数组B，遍历一遍A，A中元素为偶数就复制到B的前部，为奇数就放到B的后部。空间复杂度为O(n)，时间复杂度为O(n)。第一种思路情况太多，还要考虑边界，编码复杂。第二种思路比较简单，采用第二种方式，代码如下。

**解题代码：**

```python
class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        B = [-1]*len(A)
        pre, back = 0, len(A)-1
        for i in range(len(A)):
            if A[i] % 2 == 0:
                B[pre] = A[i]
                pre += 1
            else:
                B[back] = A[i]
                back -= 1
        return B
```

## 2. 点评英文文章

文章《[Learning How to Learn is More Important than Learning to Code](https://hackernoon.com/learning-how-to-learn-is-more-important-than-learning-to-code-gy9c3u5c)》介绍了学习如何学习的方法，有三个，分别是给正反馈，发散，睡眠。大脑需要鼓励，可以用番茄钟计时，集中精力一段时间后，奖励自己一下。大脑是发散的，别总专在一段代码里，散散步也许更有用。大脑需要休息，大脑是最消耗能量的器官，睡一个好觉才有精力干活。

## 3. 技术技巧

收到一封github的邮件，说我的代码仓库中某个依赖包出现了漏洞。当时将信将疑，会不会是钓鱼邮件？登入github看看，有一条消息提醒，点开看看和邮件内容一致，看来不是诈骗邮件了。接着继续看如何修复漏洞，github已经自动pull了一个依赖修复文件，我只需要点击Merge就完了。修复代码漏洞这么简单？原来github具有自动发现漏洞、提醒用户并把依赖升级PR做好，具体[github自动修补过程参考这里](https://blog.csdn.net/cpongo3/article/details/89027707)。

## 4. 技术分享

docsearch是一个比较方便给网站添加搜索引擎的工具。免费版本搜索引擎有限制，只能搜技术手册类的网页。我尝试把[自己的博客](https://my-blog.yestolife.vercel.app/)添加docsearch搜索引擎。在[docsearch官网](https://docsearch.algolia.com/docs/apply)提交了我的网站和邮箱地址。等了半个月，终于等到了邮件回复，原来是人工后台审核网站是否符合技术手册类要求。回复是判断我的博客不属于技术手册类，不过代码是开源的，可以自己部署，部署[docsearch参考](https://docsearch.algolia.com/docs/run-your-own)。
### 4.1 环境准备
需要安装jq和Docker。jq是一个简单的json解析工具。在centos下[安装jq方法参考](https://blog.csdn.net/markximo/article/details/80449626)。
Docker是容器管理工具，使用Docker环境运行docsearch，安装[Docker方法参考](https://www.runoob.com/docker/centos-docker-install.html)。注意在Linux内核版本3.8以上才能用Docker，也就是说[Centos6以下的版本都不行](https://www.linuxidc.com/Linux/2018-02/150834.htm)。只能[安装Centos7](https://www.jianshu.com/p/a63f47e096e8)以上版本。
### 4.2 部署安装
参考官网过程部署docsearch，[参考](https://docsearch.algolia.com/docs/run-your-own)，并[配置vuepress](https://www.echoxu.cn/vuepress/#%E4%BD%BF%E7%94%A8-algolia-%E6%90%9C%E7%B4%A2)。拉取Docker镜像时可能在国内很慢，可以使用阿里云的镜像加速功能，[Docker镜像加速参考](https://developer.aliyun.com/article/29941)。
### 4.3 调试运行

执行`docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper`之后开始爬取网页，并将索引结果反馈给docsearch，在[官网的dashboard](https://www.algolia.com/)可以看到爬取、请求等情况。
