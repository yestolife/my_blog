Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

# 1. 做算法题

[第807题，保持城市天际线](https://leetcode-cn.com/problems/max-increase-to-keep-city-skyline)

在二维数组`grid`中，`grid[i][j]`代表位于某处的建筑物的高度。 我们被允许增加任何数量（不同建筑物的数量可能不同）的建筑物的高度。 高度 0 也被认为是建筑物。

最后，从新数组的所有四个方向（即顶部，底部，左侧和右侧）观看的“天际线”必须与原始数组的天际线相同。 城市的天际线是从远处观看时，由所有建筑物形成的矩形的外部轮廓。 建筑物高度可以增加的最大总和是多少？

解题思路：初看题目可能会发懵，怎么转换为程序呢？其实从天际线转换为数学含义就是从一个方向看二维数组`grid`的最大值组成的一维数组。这个一位数组就是城市建筑顶端在天空勾勒出的线条，看图最明白了：

![上海天际线](https://tse3-mm.cn.bing.net/th?id=OIP.LX2Us7h3JhqKAu2gplg0vAHaEo&pid=Api&rs=1)

城市的天际线往往是城市的标志，浮光掠影看一眼就就能找到天际线上的标志性建筑。如果随意起高楼，天际线会慢慢改变，如何保卫天际线呢？还是转换为二维数组`grid`，如果每个位置都能加盖高楼，最高能盖到多少层才不会突破天际线。答案是同时不超过横向和纵向最高层。看下面代码：

解题代码：

```python
class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        sum_max = 0
        max_left = [max(grid_i) for grid_i in grid] #横向最大值
        max_top = []
        for j in range(len(grid[0])):
            max_top.append(max([grid_i[j] for grid_i in grid])) #纵向最大值
        
        for i in range(len(grid[:][0])):
            for j in range(len(grid[0][:])):
                sum_max += min(max_left[i], max_top[j]) - grid[i][j] #每个坐标点都不超过横纵向的最大值，并计算加高的层数
                
        return sum_max
```

代码中使用了循环生成列表的python语法，`[f(example) for example in example_list]`，从列表`example_list`循环取出元素`example`，并通过`f()`处理`example`后生成新的列表。`

# 2.点评英文文章

阅读英文文章：[5 Top Cloud Databases that Works Wonders!](https://hackernoon.com/5-top-cloud-databases-that-works-wonders-7e628810e3ac)

云数据库是数据库发展的新方向。随着应用的上云，数据上云仿佛成了必然。云上的数据库作为云提供的一种服务，具备了云服务的很多优点，可伸缩、低成本、无需考虑硬件。有说法说虚拟化的数据库性能不行，但老牌数据库大厂Oracle都在SaaS层建云上数据库，还有什么比这个更有说服力的。损失一点性能，却能带来更多的成本降低、效率提升，利大于弊。听业界的朋友说，现在DBA正在走下坡，除了传统企业还在使用单体的数据库，很多企业已经在使用云上数据库了，只需要简单的DB运维即可。

# 3.技术技巧

最近看到一本书[Cloudera Hadoop大数据平台实战指南](https://item.jd.com/12526612.html)，介绍了大数据组件的使用，适合入门级阅读，快速上手大数据。

# 4. 技术分享

云平台降低了企业信息化的门槛，未来是几个云巨头为千万家企业提供云服务，企业IT水平趋于一致，将在更高维度开展竞争。企业信息系统上云的过程，涉及到数据的上云。最近了解了华为云，有个微认证课程[MySQL数据库迁移上云](https://edu.huaweicloud.com/certifications/f0dd6fb4deed40e29b018ea09f764a3d)认证。

首先是1小时左右的视频课程，介绍基本概念。成本驱动（服务器、机房环境、DBA成本大大减少）、技术趋势、业务诉求使数据库上云成为必然趋势。数据库上云有两种方式，ECS自建数据库，使用云数据库。如果需要对数据库有较大的控制权，使用ECS搭数据库方式。数据管理服务DAS，简化的数据库管理工具，支持RDS实例管理和ECS自建库的数据管理。可完成少量数据的备份或迁移。数据复制服务DRS，业务中断事件短、数据量大、操作简单应用场景：数据库在线迁移、DB实时同步。云数据迁移CDM，提供同构、异构数据源之间批量数据迁移服务，应用场景：本地数据迁移上云、云上数据迁移到本地、云上服务之间数据迁移。DRS和CDM的区别，CDM目标是数据集成，一般是数据导入数据仓库的场景，也可用于小部分迁移场景，迁移不是主要功能，别被名字迷惑。在业务中断要求高、数据量100G以上，迁移简单易用的场景使用DRS。DRS在线迁移场景：VPC内DB在线迁移、公网DB在线迁移、VPN在线迁移、容灾。

接下来是理论考试，题目不多，但对知识掌握要求比较全面。

最后是实操考试，有实验手册，先熟悉清楚实验的要求，并下载安装相关的资源，再开始实验。

