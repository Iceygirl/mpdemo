/* 请求的封装 */

import { httpUrl } from './config'
import { toStorage } from 'js/dom'

export function ajax(url,method,data) {
    url = `${httpUrl}/sszhxf-web/${url}?token=${toStorage('userinfo').token}`
    return new Promise((resolve,reject)=>{
        wx.request({
            url, 
            data,
            method,
            success(res) {
                resolve(res.data)
            },
            fail(error) {
                Toast(error.message)
            }
          })
    })
}

