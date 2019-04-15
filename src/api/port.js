/* 接口路径 */

import { ajax } from './request'


// 登录
export function login(data) {
    let url = 'user2/login' 

    return ajax(url, 'post', data, false)
}

// 巡查场所列表
export function patrolPlace(data) {
    let url = 'organization/list' 

    return ajax(url, 'post', data, true)
}