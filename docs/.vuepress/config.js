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
              ]
            },
          ]
	}
};