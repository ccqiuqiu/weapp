// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import common from './common'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  modules: {
    common
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger({collapsed: false})] : []
})

export default store
