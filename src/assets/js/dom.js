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


// 显示Toast
export function Toast(title,isShowIcon) {
    let config = {
        title
    }
    // isShowIcon表示是否显示成功icon
    config.icon = isShowIcon ?  'success' : 'none'
    return wx.showToast(config)
}

 
// 显示加载中
export function Loading(title) {
    return  wx.showLoading({
                title: title
            })
} 

// 隐藏加载中
export function hideLoading(title) {
    return  wx.hideLoading()
}

// 显示弹框Modal
export function Modal(title,content,success,fail) {
    return wx.showModal({
        title,
        content,
        success,
        fail
    })
}

// 显示弹框Modal,提示加确定按钮
export function TipModal(content) {
    return wx.showModal({
        content,
        showCancel:false
    })
}



