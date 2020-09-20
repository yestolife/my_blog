Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

#### [LeetCode58题. 最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)

**题目描述：**

给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。如果不存在最后一个单词，请返回 0 。说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。

> 示例:
>
> 输入: "Hello World"
> 输出: 5

**解题思路：**本题在LeetCode中标签为简单题，但正确率只有30%，说明是一道容易出错的简单题。考虑的情况要全面，空字符串，只有一个空格的字符串，没有空格的字符串，以空格结尾的字符串，这些情况都要考虑。

**解题代码：**

```python
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s = s.rstrip()
        if s == '' or s == ' ':
            return 0
        if ' ' not in s:
            return(len(s))
        return len(s) - s.rfind(' ') - 1
```

## 2.点评英文文章

文章[Serverless Vs Microservices Architecture - A Deep Dive](https://hackernoon.com/serverless-vs-microservices-architecture-a-deep-dive-lw2u3w0b)深入介绍了无服务和微服务架构，对两种架构的特点、适用的场景、资源的消耗进行对比，比较长但讲得很清楚。

书籍[Problem Solving with Algorithms and Data Structures](https://www.cs.auckland.ac.nz/compsci105s1c/resources/ProblemSolvingwithAlgorithmsandDataStructures.pdf)是一本讲计算机算法和数据结构的书，开头讲到CS专业，作者认为计算机科学名字被“计算机”三个字捣乱了，其实计算机科学不仅仅是研究计算机的，而是通过计算机为工具解决问题，也就是研究算法问题。

## 3. 技术技巧

内网开发部署Python程序缺少第三方库怎么办？方法一，从[Pypi](https://pypi.org/)下载离线包，导入内网用`pip install XXX.whl`安装。这个方法有个问题，如果第三方库的依赖很多，要反复下载离线包。方法二，内网安装集成开发SDK [Anaconda](https://www.anaconda.com/)，[安装方法参考](https://www.jianshu.com/p/1888984cad82)。安装过程中遇到一个问题，优盘导出到内网centos环境，由于文件损坏，安装到一半后不能正常安装，但没有关于损坏的提示。建议下载安装包后、复制到内网后都检查一下md5值，一般下载软件包的页面都会带md5值，例如[Anaconda的md5](https://repo.anaconda.com/archive)。windows下校核md5方法`certutil -hashfile filename MD5`，Linux下校核md5方法`md5sum filename`。

## 4. 技术分析

数据分析处理中常遇到json格式，json是JavaScript语法的子集又可以独立于JavaScript，易于人机读取。在实际编码过程中，常发生[json解析错误](https://stackoverflow.com/questions/40059654/python-convert-a-bytes-array-into-json-format)，原因在于对json格式使用不准确，符号`:` `{}` `[]` `""` 必须严格[按照规范使用](https://www.w3cschool.cn/json/json-syntax.html)。

