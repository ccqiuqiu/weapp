/**
 * https://github.com/F-loat/mpvue-entry
 */
module.exports = [
  // 首页
  {
    path: 'pages/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config: {
      navigationBarTitleText: '首页',
      usingComponents: {
        'i-button': '../iView/button/index',
        'i-tabs': '../iView/tabs/index',
        'i-tab': '../iView/tab/index',
        'i-badge': '../iView/badge/index'
      }
    }
  },
  {
    path: 'pages/login',
    config: {
      navigationBarTitleText: '登录',
      usingComponents: {
        'i-input': '../iView/input/index',
        'i-button': '../iView/button/index',
        'i-panel': '../iView/panel/index',
        'i-message': '../iView/message/index'
      }
    }
  },
  //
  {
    path: 'pages/travel',
    config: {
      navigationBarTitleText: '行程'
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
  {
    path: 'pages/flight',
    config: {
      navigationBarTitleText: '航班',
      enablePullDownRefresh: true,
      usingComponents: {
        'i-card': '../iView/card/index',
        'i-cell-group': '../iView/cell-group/index',
        'i-cell': '../iView/cell/index'
      }
    }
  },
  {
    path: 'pages/book',
    config: {
      navigationBarTitleText: '预定',
      usingComponents: {
      }
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
