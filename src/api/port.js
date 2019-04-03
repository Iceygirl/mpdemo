/* 接口路径 */

import { ajax } from './request'


// 登录
export function login(data) {
    let url = 'user2/login' 

    return ajax(url, 'post', data)
}