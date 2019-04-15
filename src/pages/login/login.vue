<template>
  <!-- 登录 -->
  <div class="login"> 
    <div class="bg">
      <img src="/static/images/login_bg.jpg" alt="">
    </div>
    <div class="form">
      <label>用户名：</label>
      <input class="input" type="text" v-model="form.userName" placeholder="请输入用户名" placeholder-style="color:#999;" @confirm="_toLogin">
      <label class="pass">密码：</label>
      <input class="input" type="password" v-model="form.password" placeholder="请输入密码" placeholder-style="color:#999;" @confirm="_toLogin">
      <button hover-class="active" class="toLoginBtn" @click="_toLogin">登录</button>
    </div>
  </div>
</template>

<script>

import WxValidate from 'js/WxValidate'
import { login } from 'api/port'
import { ERR_OK } from 'api/config'
import { failRequest } from 'js/util'
import { toStorage } from 'js/dom'

export default {
  data () {
    return {
      form: {
        userName:'',
        password:''
      }
    }
  },
  onLoad(){
    // 设置页面标题
    wx.setNavigationBarTitle({
      title:'登录',
    }) 

    this.initValidate()
  },
  mounted() {
  }, 
  methods: {
    // 登录表单字段验证
    initValidate() {
    
      const loginRule = {
          userName: {
              required:true,
              rangelength:[0,30],
              startPaiCha:false
          },
          password: {
              required:true
          }
      }
      
      const loginMess = {
          userName: {
              required:'请输入用户名',
              rangelength:'用户名长度需小于30个字符'
          },
          password: {
              required:'请输入密码'
          }
      }
    
      // 初始化校验规则
      this.WxValidate = new WxValidate(loginRule, loginMess)
      
      this.WxValidate.addMethod('startPaiCha', (value, param) => {
          return this.WxValidate.optional(value) ||  /^paicha/.test(value) === param
      }, '用户名不能以paicha开头')
    },
    // 登录
    _toLogin() {

      //校验表单
      if (!this.WxValidate.checkForm(this.form)) {
        const error = this.WxValidate.errorList[0] 
        this.TipModal(error.msg)
        return
      }

      this.Loading('登录中...')

      // 验证通过
      let data = {
        type:1, //用于服务器判断是否是小程序
        openid:'oKRd75RrAXrPw51a9GPhVVnmhCco',  //暂时写死
        ...this.form
      }
      if(!data.__newReference) delete data.__newReference  
      login(data)
        .then(res=>{
          if(res.code === ERR_OK) {
            this.Toast('登录成功',true)
            // toStorage('userinfo',res.result)
            toStorage('token',res.result.token)
            wx.switchTab({
              url: '/pages/index/main'
            })
          } else {
            failRequest(res.code,res.message)
          }
          this.hideLoading()
        })
        .catch(error=>{
          this.hideLoading()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height:100%;
  background:#fff;
  .bg {
    width:100%;
    height:480rpx;
    overflow: hidden;
    img {
      width:100%;
      height: 100%;
    }
  }
  .form {
    padding:60rpx 40rpx;
    label {
      display: block;
      font-size:36rpx;
      line-height: 60rpx;
    }
    label.pass {
      margin-top:20rpx;
    }
    .input {
      font-size:32rpx;
      height: 82rpx;
      border-bottom:2rpx solid #eee;
    }
    .toLoginBtn {
      width:90%;
      border-radius: 60rpx;
      background-color:#00A1FF;
      color:#fff;
      height:80rpx;
      line-height: 80rpx;
      font-size:38rpx;
      margin-top:80rpx;
    }
    .active {
      background-color:aquamarine;
      transition: 0.5s;
    }
  }
}
</style>
