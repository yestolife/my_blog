Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

## 1. 做算法题

[第237题，删除链表中的节点node](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)

难点：

没有前一节点的指针，无法把node节点指针的next赋给前一节点，以达到删除node的目的。

解题巧妙之处：

可以拷贝node的next节点作为node节点。偷梁换柱，把下一个节点完全拷贝过来，顺手把下一个节点给“删除”了。

代码如下：

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        node.val = node.next.val
        node.next = node.next.next
```

## 2. 点评英文文章

文章[Deep learning: the final frontier for signal processing and time series analysis?](https://medium.com/@alexrachnog/deep-learning-the-final-frontier-for-signal-processing-and-time-series-analysis-734307167ad6)

标题翻译过来是深度学习是否是信号处理或时序分析的终点？

文中综述了传统信号处理中一些算法，也介绍了一遍深度学习中的几种算法。最后得出开放性结论，神经网络已经可以非常好地近似传统算法进行信号处理，是否很有可能取代这些传统信号处理算法。

这篇文章是在搜索signal processing data analysis中找到的。最近发现信号处理与数据分析有很多相似之处，使用相同的统计学工具、都是在大量信息中提取有价值的知识、都需要找到合适的工具对付相应的信号或数据。甚至很多时候觉得两者就是同一回事。也有[对比signal processing与data analysis的讨论1](https://dsp.stackexchange.com/questions/29415/what-is-the-real-difference-between-dsp-and-ai-data-science)，[讨论2](https://dsp.stackexchange.com/questions/26697/is-deep-learning-killing-image-processing-computer-vision)。甚至图像处理中的大神级任务[Elad也发声了](https://sinews.siam.org/Details-Page/deep-deep-trouble)。

## 3. 技术技巧

（1）如何分享python执行过程？

使用[jupyter notebook](https://www.cnblogs.com/nxld/p/6566380.html)可以方便地展示python代码运行过程，特别是在数据分析领域，所见即所得，一段代码后就跟着运行结果。把生成的ipynb文件通过github分享给别人，可以直接预览结果，[例如京东手机销售案例](https://github.com/yestolife/jd_phone_sale_anaysis/blob/master/learn_note20190721.ipynb)。

（2）除了展示执行结果，想修改python代码怎么办？

有个办法是把ipynb文件下载到本地，配置好相关依赖环境，再用jupyter notebook打开ipynb文件进行修改。

（3）如果本地环境配置复杂，而又想快速复原运行过程怎么办？

[《如何在ipad上运行python》](https://zhuanlan.zhihu.com/p/36830594)中介绍了使用mybinder实现云端的jupyter notebook。直接在[mybinder](https://mybinder.org/)导入包含ipynb文件的github url就行，binder自动创建相关依赖环境的docker镜像，把环境封装在容器中。生成分享链接，在云端即可执行ipynb。随时随地都可以复原python运行过程。而且可以修改python代码，实现自己的修改。例如前面提到的京东手机销售案例的mybinder[版本](https://mybinder.org/v2/gh/yestolife/jd_phone_sale_anaysis/master)。

## 4. 技术分享

[prophet](https://facebook.github.io/prophet/)是[Facebook开源](https://github.com/facebook/prophet)的基于时间序列的分析工具。智能化程度比较高，输入参数只有时间戳和数值，即可提取时间序列中的明显特征，做预测分析。[prophet安装](https://blog.csdn.net/anshuai_aw1/article/details/83377735)后可参考[prophet教程](https://blog.csdn.net/anshuai_aw1/article/details/83412058#commentBox)跑简单入门级demo。用conda list可以看到fbprophet是否安装好。通过mybinder也可以不在本地安装prophet，直接利用mybinder运行prophet：[![](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/yestolife/prophet/master)。[深入理解prophet参考这篇](https://www.biaodianfu.com/fbprophet.html)。使用prophet进行[比特币价格预测案例](https://towardsdatascience.com/bitcoin-predictive-price-modeling-with-facebooks-prophet-b66efd0169a0)。prophet的时间序列预测前提是对象序列是有明显内在周期规律的，而且未来也是按照这个规律运行的。但现实中未来一定与现实和过去不同，新的变化一直在出现。









