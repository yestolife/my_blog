module.exports = {
  title: 'Andytl的世界',
  description: 'Don\'t trust, verify.',
  head: [
    ['link', { rel: 'icon', href: '/andy.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', 
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  },
  themeConfig: {
    algolia: {
      appId: "JW6A7D9FTI", //当你使用的是自建algolia服务器或者API调用时需要填写此项,否则会报错invaild apikey or IndexName
      apiKey: "6ce2bea7483d5bf481c1b0fbecc9d3d7", //填写你的Search-Only API Key
      indexName: "test", //填写你的index名称,Indices >>>> 你的application名 >>>> Copy Index Name
    },
  },
  themeConfig: {
    nav:[
      { text: 'ARTS打卡', link: '/ARTS/' }, // 内部链接 以docs为根目录
      { text: 'Github', link: 'https://github.com/yestolife' }, // 外部链接
      // 下拉列表
      {
        text: '博客',
        items: [
          { text: '简书', link: 'https://www.jianshu.com/u/e783b7139f94' },
          { text: 'CSDN', link: 'https://blog.csdn.net/Andytl'},
		  { text: '公众号：Andytl的世界', link: 'https://weixin.sogou.com/weixin?type=1&s_from=input&query=andytl&ie=utf8&_sug_=n&_sug_type_='}
        ]
      },
	  { text: '代谷歌', link: 'https://mirror.yestolife.vercel.app/' }
    ],
	//displayAllHeaders: true,
	//sidebar: 'auto',
	sidebar:[
            {
              title: 'ARTS打卡记录',
			  path: '/ARTS/',
			  sidebarDepth: 1,
              children: [
                ['/ARTS/ARTS打卡1', 'ARTS打卡1-你有未来吗？'], 
				['/ARTS/ARTS打卡2', 'ARTS打卡2-用游戏学SQL'], 
				['/ARTS/ARTS打卡3', 'ARTS打卡3-小试无服务器架构'],
				['/ARTS/ARTS打卡4', 'ARTS打卡4-未来能预测吗'],
				['/ARTS/ARTS打卡5', 'ARTS打卡5-云上数据库'],
				['/ARTS/ARTS打卡6', 'ARTS打卡6-编程是马拉松'],
				['/ARTS/ARTS打卡7', 'ARTS打卡7-开源协作Office部署'],
				['/ARTS/ARTS打卡8', 'ARTS打卡8-反向代理实现谷歌搜索'],
				['/ARTS/ARTS打卡9', 'ARTS打卡9-为什么程序员喜欢暗背景'],
				['/ARTS/ARTS打卡10', 'ARTS打卡10-抓住海森堡Bug'],
				['/ARTS/ARTS打卡11', 'ARTS打卡11-用是最好的学'],
				['/ARTS/ARTS打卡12', 'ARTS打卡12-递归的形象解释'],
				['/ARTS/ARTS打卡13', 'ARTS打卡13-少即是多'],
				['/ARTS/ARTS打卡14', 'ARTS打卡14-神奇的Git'],
				['/ARTS/ARTS打卡15', 'ARTS打卡15-github上图片终于可以显示了'],
				['/ARTS/ARTS打卡16', 'ARTS打卡16-自动监控服务器'],
				['/ARTS/ARTS打卡17', 'ARTS打卡17-自动监控多台服务器'],
				['/ARTS/ARTS打卡18', 'ARTS打卡18-免费访问“外网”'],
				['/ARTS/ARTS打卡19', 'ARTS打卡19-微习惯的力量'],
				['/ARTS/ARTS打卡20', 'ARTS打卡20-部署vuepress博客'],
				['/ARTS/ARTS打卡21', 'ARTS打卡21-vupress博客可以访问了'],
				['/ARTS/ARTS打卡22', 'ARTS打卡22-给网站添加全局搜索'],
				['/ARTS/ARTS打卡23', 'ARTS打卡23-Python自带迷你数据库'],
				['/ARTS/ARTS打卡24', 'ARTS打卡24-初探任务调度'],
				['/ARTS/ARTS打卡25', 'ARTS打卡25-搭建网页全文搜索'],
				['/ARTS/ARTS打卡26', 'ARTS打卡26-Python实现自动化报表'],
				['/ARTS/ARTS打卡27', 'ARTS打卡27-可视化管理Docker容器'],
				['/ARTS/ARTS打卡28', 'ARTS打卡28-找到数据源'],
				['/ARTS/ARTS打卡29', 'ARTS打卡29-重拾机器学习'],
				['/ARTS/ARTS打卡30', 'ARTS打卡30-别轻视简约的JSON'],
				['/ARTS/ARTS打卡31', 'ARTS打卡31-像松鼠一样敏捷的Flink流处理'],
				['/ARTS/ARTS打卡32', 'ARTS打卡32-Flink与Python更配'],
				['/ARTS/ARTS打卡33', 'ARTS打卡33-Flink SQL流计算初探'],
				['/ARTS/ARTS打卡34', 'ARTS打卡34-使用Jenkins自动化构建项目'],
				['/ARTS/ARTS打卡35', 'ARTS打卡35-极速体验Hbase'],
				['/ARTS/ARTS打卡36', 'ARTS打卡36-初识小程序'],
				['/ARTS/ARTS打卡37', 'ARTS打卡37-初探Ajax技术'],
              ]
            },
          ]
	}
};