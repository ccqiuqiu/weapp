/**
 * Created by 熊超超 on 2018/9/19.
 */

import Fly from 'flyio/dist/npm/wx'
import * as utils from '../assets/utils'
import app from '../main'

const instance = new Fly()

// 定义公共headers
instance.config.headers = {}
// 设置超时
// instance.config.timeout = 45000
// 设置请求地址
// instance.config.baseURL = 'https://www.ccqiuqiu.win/weapi'
instance.config.baseURL = 'http://127.0.0.1:3000'

// 默认配置
const defaultConfig = {
  showLoading: true, // 是否展示loading
  showErrorTip: true, // 是否展示默认错误提示
  limitTime: 300, // 接口请求在此时间内完成则不显示loading
}
const errorMap = {
  500: '服务器异常',
}

// 添加请求拦截器
instance.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['token'] = app.$wx.getStorageSync('token')
  // 打印出请求体
  console.log(request.body)
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
instance.interceptors.response.use(
  (response) => {
    if (response.data.success) {
      return Promise.resolve(response.data.data)
    } else {
      return Promise.reject(response.data.error)
    }
  }, error => {
    return {code: error.status, message: errorMap[error.status] || error.message}
  }
)

let promises = []
let loadingTimer = null

export default function(method, url, data, config) {
  const req = instance.request(url, data, {method})
  config = {...defaultConfig, ...config}
  // 开启loading
  clearTimeout(loadingTimer) // 多个接口时需要清除上一个loading
  loadingTimer = setTimeout(() => {
    config.showLoading && utils.showLoading()
  }, config.limitTime)

  // 计算当前的promise是否全部加载完成
  promises.push(req.catch(e => {}))
  Promise.all(promises).then(() => {
    promises = [] // 所有请求完后清除promise数组
    clearTimeout(loadingTimer) // 请求完成则直接清除loading计时器
    utils.hideLoading()
  })

  return req.then((data) => ({data})).catch((error) => {
    if (error.code === 401) {
      /* eslint-disable no-undef */
      const pages = getCurrentPages()
      app.$router.replace('/pages/login?url=/' + pages[pages.length - 1].route)
      return
    }
    if (config.showErrorTip) {
      utils.showToast(error.message, 'none')
    }
    return {error}
  })
}
