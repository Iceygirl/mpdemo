/* 公用的方法 */

import { removeStorage, Toast} from 'js/dom'


export function failRequest(code,message) {
  Toast(message)
    
  // 登录信息过期的话跳转登录页
  if( (code === '1002' && message.indexOf('请传递token') !== -1) || code === '1003' || code === '1004') {
    // removeStorage('userinfo')
    setTimeout(() => {
        wx.reLanch({
            url:'/pages/login/main'
        })
    }, 500) 
  }
}