/**
 * Created by 熊超超 on 2018/9/20.
 */

import WXP from 'minapp-api-promise'
import * as utils from './../assets/utils'
import api from './api'

export default {
  install (Vue) {
    Vue.api = api
    Vue.prototype.$wx = WXP
    Vue.prototype.$api = api
    Vue.prototype.$utils = utils
  },
  $wx: WXP
}
