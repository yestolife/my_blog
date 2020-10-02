Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

#### [LeetCdoe面试题 17.26. 稀疏相似度](https://leetcode-cn.com/problems/sparse-similarity-lcci/)

**题目描述：**

两个(具有不同单词的)文档的交集(intersection)中元素的个数除以并集(union)中元素的个数，就是这两个文档的相似度。例如，{1, 5, 3} 和 {1, 7, 2, 3} 的相似度是 0.4，其中，交集的元素有 2 个，并集的元素有 5 个。给定一系列的长篇文档，每个文档元素各不相同，并与一个 ID 相关联。它们的相似度非常“稀疏”，也就是说任选 2 个文档，相似度都很接近 0。请设计一个算法返回每对文档的 ID 及其相似度。只需输出相似度大于 0 的组合。请忽略空文档。为简单起见，可以假定每个文档由一个含有不同整数的数组表示。

输入为一个二维数组 docs，docs[i] 表示 id 为 i 的文档。返回一个数组，其中每个元素是一个字符串，代表每对相似度大于 0 的文档，其格式为 {id1},{id2}: {similarity}，其中 id1 为两个文档中较小的 id，similarity 为相似度，精确到小数点后 4 位。以任意顺序返回数组均可。

> 示例:输入: 
> [
>   [14, 15, 100, 9, 3],
>   [32, 1, 9, 3, 5],
>   [15, 29, 2, 6, 8, 7],
>   [7, 10]
> ]
> 输出:
> [
>   "0,1: 0.2500",
>   "0,2: 0.1000",
>   "2,3: 0.1429"
> ]

**解题思路：**

Python中集合有交和并运算，将题目中的列表转换为集合后可得到交集、并集大小。题目的难点在于相似度保留4位小数。由于计算机[二进制无法精确表示浮点数](https://blog.csdn.net/renwotao2009/article/details/51637163)，round函数做四舍五入可能不精确，为了消除二进制存储浮点数会截断（变小）的影响，浮点数加上[1e-9](https://docs.python.org/3/library/math.html#math.isclose)后进行round计算。

**解题代码：**

```python
class Solution:
    def computeSimilarities(self, docs: List[List[int]]) -> List[str]:
        def div_fun(x:int, y:int) -> str:
            div = x / y + 1e-9 
            div_str = str(round(div, 4))
            if len(div_str) < 6:
                div_str = div_str + '0'*(6-len(div_str))
            return div_str
            
        L_str = []
        
        for i in range(len(docs)):
            docs[i] = set(docs[i])
            
        for i in range(len(docs)):
            for j in range(i+1, len(docs)):
                intersection_ij = docs[i] & docs[j]
                union_ij = docs[i] | docs[j]
                if len(intersection_ij) == 0:
                    continue
                else:
                    similarity_ij =  div_fun(len(intersection_ij),len(union_ij))
                    L_str.append(str(i)+','+str(j)+': '+similarity_ij)
                    
        return L_str
```



## 2.点评英文文章

文章《[What is Python Good for?](https://hackernoon.com/10-reasons-to-learn-python-in-2018-f473dc35e2ee)》是一名Java程序员写的，推荐使用Python作为一项兵器加入到程序员的武器库中。文中列举了Python的诸多优点，总结一下主要是易上手、生态丰富、框架成熟、应用广泛，就像AK47自动步枪。

## 3. 技术技巧

独立博客想要引导到微信公众号上，除了在文章末尾放一张公众号的二维码，还有什么办法呢？可以使用[openwrite](https://openwrite.cn/)实现readmore功能，需要关注微信公众号，从公众号获取验证码才能继续阅读文章。

## 4. 技术分享

学习[PyFlink教程](https://enjoyment.cool/2020/03/16/Apache-Flink-%E8%A7%86%E9%A2%91%E7%B3%BB%E5%88%97-%E5%BF%85%E4%BF%AE%E8%AF%BE%EF%BC%81%E4%B8%80%E5%B0%8F%E6%97%B6%E5%90%83%E9%80%8FPyFlink/)，python与flink结合是发展的必然，python应用于数据分析和机器学习领悟，flink应用于大数据流计算领悟，两者结合互相提升。将flink的能力输出python用户，python生态的计算功能运行到flink上，相辅相成。目前pyflink1.11可支持python数据处理库pandas，并可实现kmeans等算法。



