import Vue from 'vue'

// 设置,获取本地存储
export function toStorage(key,val) {
    if(val) {
        return wx.setStorageSync(key, val)
    }
    return wx.getStorageSync(key)
}


// 删除本地存储
export function removeStorage(key) {
    return wx.removeStorageSync(key)
}


// 显示成功Toast
export function Toast(title,isShowIcon) {
    let config = {}
    if(isShowIcon) {
        config = {
            title:title,
            icon:'success'
        }
    }
    return 
}