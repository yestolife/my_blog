Algorithm做算法题，Review点评英文文章，Tip总结技术技巧，Share做技术分享。每周打卡一次，这就是ARTS打卡。

# 1. 做算法题

#### Leetcode[1221. 分割平衡字符串](https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/)

题目：
在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。

给出一个平衡字符串 `s`，请你将它分割成尽可能多的平衡字符串。

返回可以通过分割得到的平衡字符串的最大数量**。**

 **示例 ：**

```
输入：s = "RLRRLLRLRL"
输出：4
解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 'L' 和 'R'。
```

解题思路：把R转换为+1，L转换为-1，依次遍历字符串，并同时累加转换数字的值。累加得到0的次数就是分割平衡字符串的数量。

解题代码：

```
class Solution:
    def balancedStringSplit(self, s: str) -> int:
        num_balance = 0
        num_temp = 0
        for c in s:
            if c is 'R':
                num_temp += 1
            if c is 'L':
                num_temp -= 1
            if num_temp == 0:
                num_balance += 1
        return num_balance
```



# 2.点评英文文章

[文章GitHub Protips: Tips, tricks, hacks, and secrets from Lee Reilly](https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/)，写了一些GitHub上的使用技巧，有些是企业版GitHub使用，有些是安装插件后使用，还有一些隐藏的实用技巧。例如：在任何代码仓库位置输入字母`t`就可以进行模糊查找代码中的内容。点击代码边的行号可以复制或引用该行代码。GitHub对Markdown语法做了一些扩充，如代码折叠、现实十六进值颜色、添加图标等。文中还有一个只有程序员看得懂的笑话：

> Most software engineers prefer to use dark mode because, wait for it… *light attracts more bugs*.

# 3. 技术技巧

http协议已经在web世界快要销声匿迹了，取而代之的是更加的 https。把网站升级为https可参考[阮一峰的文章](http://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html)。不知道为啥，阮的博客自己还是http的。

# 4. 技术分享

反向代理是常用的web技术，简单来说是代理将服务器集群对客户端屏蔽，客户端只要访问一个url，后面提供服务的是集群中的某一台服务器。反向代理有什么用处呢，可以实现负载均衡，分布式部署，甚至翻越大山。例如，在“外网”服务器上部署反向代理服务，代理指向古哥。在内网只要访问外网服务器的域名，就能实现访问古哥。能提供反向代理服务的组件很多，如[Envoy](https://fuckcloudnative.io/posts/use-envoy-proxy-access-google/)，[Nginx](https://zhgcao.github.io/2016/06/09/nginx-reverse-proxy-google/)，[Caddy](https://ichon.me/post/1027.html)。Envoy是云原生的代理服务，用docker部署很方便，就是docker镜像拉去太慢了。国内有一些镜像源服务，如[Daocloud](https://hub.daocloud.io/)，可惜搜索不到Envoy。Nginx是目前常用的中间件，代理过程需要重新编译Nginx，比较复杂，但很容易搜到相关操作方法。Caddy是一个轻量级中间件，两行命令就能实现反向代理，还可以自动生成证书，但用的人少。网上很多教程是基于v1版本的，如果用v2版本，可参考[Caddy官网版本更新说明](https://caddyserver.com/docs/v2-upgrade)，转换v1配置到v2。