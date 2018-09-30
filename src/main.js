import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'
import expandVue from './global/expandVue'

Vue.config.productionTip = false
App.store = store
App.mpType = 'app'

Vue.use(MpvueRouterPatch) // https://github.com/F-loat/mpvue-router-patch
Vue.use(expandVue)

const app = new Vue({
  store,
  ...App,
})
app.$mount()
export default app
