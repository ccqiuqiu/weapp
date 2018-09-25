/**
 * https://github.com/F-loat/mpvue-entry
 */
module.exports = [
  // 首页
  {
    path: 'pages/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config: {
      navigationBarTitleText: '首页',
      enablePullDownRefresh: true,
      usingComponents: {
        'i-button': '../../static/iView/button/index',
        'i-tabs': '../../static/iView/tabs/index',
        'i-tab': '../../static/iView/tab/index',
        'i-badge': '../../static/iView/badge/index'
      }
    }
  },
  //
  {
    path: 'pages/travel',
    config: {
      navigationBarTitleText: '航程'
    }
  },
  {
    path: 'pages/message',
    config: {
      navigationBarTitleText: '消息'
    }
  },
  {
    path: 'pages/user',
    config: {
      navigationBarTitleText: '我的'
    }
  },
  // 分包
  {
    path: 'packageA/logs',
    subPackage: true,
    config: {
      navigationBarTitleText: '查看启动日志'
    }
  }
]
