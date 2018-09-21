/**
 * Created by 熊超超 on 2018/9/20.
 */
import $wx from 'minapp-api-promise'
import {$Message} from 'iview-weapp/dist/base'

// 显示loading
export const showLoading = (title = '加载中...') => {
  $wx.showLoading({ title: title, mask: true })
}
// 隐藏loading
export const hideLoading = () => {
  $wx.hideLoading()
}
// 显示toast
export const showToast = (title, icon = 'success', duration = 2000, image) => {
  $wx.showToast({ title, icon, mask: true, image })
}

export const setTitle = title => $wx.setNavigationBarTitle({ title })

export const message = (content, type = 'default', duration = 3000) => $Message({content, type, duration: duration / 1000})
