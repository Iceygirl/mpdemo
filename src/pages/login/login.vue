<template>
  <div class="login">
    <div class="bg">
      <img src="/static/images/index_bg.jpg" alt="">
    </div>
    <div class="form">
      <label>用户名：</label>
      <input class="input" type="text" v-model="form.username" placeholder="请输入用户名">
      <label class="pass">密码：</label>
      <input class="input" type="password" v-model="form.password" placeholder="请输入密码">
      <button hover-class="active" class="toLogin">登录</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        username:'',
        password:''
      }
    }
  },
  mounted() {
  },
  onLoad(){
    wx.setNavigationBarTitle({
      title:'登录',
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.login {
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
    .toLogin {
      width:90%;
      border-radius: 60rpx;
      background-color:#ea6f5a;
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
