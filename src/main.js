import Vue from 'vue'
import App from './App'

import { Toast, Loading, hideLoading, Modal, TipModal } from 'js/dom'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


// 挂载方法，无需引入，全局使用
Vue.prototype.Toast = Toast
Vue.prototype.Loading = Loading
Vue.prototype.Modal = Modal
Vue.prototype.TipModal = TipModal
Vue.prototype.hideLoading = hideLoading



