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
        'i-icon': '../../static/iView/icon/index'
      }
    }
  },
  //
  {
    path: 'pages/login',
    config: {
      navigationBarTitleText: '登录',
      usingComponents: {
        'i-input': '../../static/iView/input/index',
        'i-button': '../../static/iView/button/index',
        'i-panel': '../../static/iView/panel/index',
        'i-message': '../../static/iView/message/index'
      }
    }
  },
  //
  {
    path: 'pages/counter',
    config: {
      navigationBarTitleText: 'counter'
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
