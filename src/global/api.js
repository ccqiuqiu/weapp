/**
 * Created by 熊超超 on 2018/9/19.
 */

import request from './conn'

export default {
  test: () => request('get', '/v1/test'),
  reg: (data = {}, config = {}) => request('post', '/v1/public/wxReg', data, config),
  login: (data = {}, config = {}) => request('post', '/v1/public/wxLogin', data, config)
}
