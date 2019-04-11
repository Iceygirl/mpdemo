<template>
  <!-- 首页 -->
  <div class="index">
    <!-- 图片 -->
    <div class="imgWrap">
      <img src="/static/images/login_bg.jpg" alt="" width="100%" >
    </div>

    <!-- menu菜单 -->
    <div class="menuWrap">
      <ul class="menu">
        <li class="menuItem" v-for="(item,index) in indexMenu" :key="index" @click="jumpTo(item.path,index)">
          <div class="iconWrap" :class="'iconWrap-'+index">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <p class="text">{{item.name}}</p>
        </li>
      </ul>
    </div>
 
    <!-- 统计情况 -->
    <div class="section">
      <h3 class="title">
        <i class="iconfont iconbaobiao"></i>工作情况统计
        <span class="time">统计时间：</span>
      </h3>
      <div class="cardWrap">
        <card></card>
      </div>
      <button class="fullBtn">累计排查统计</button>
    </div>
  </div>
</template>

<script>

import { indexMenu } from 'js/gobalData'
import card from 'components/card'

export default {
  components:{
    card
  },
  data () {
    return {
      indexMenu:indexMenu
    }
  },
  mounted() {
  },
  onLoad(){
    wx.setNavigationBarTitle({
      title:'首页',
    })
  },
  methods: {
    // 菜单页面跳转
    jumpTo(path,index) {
      let url = ''
      if(index === 0) {
        url = path + '?type='
      }
      wx.navigateTo({ 
        url: path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  .imgWrap {
    width:100%;
    height:488rpx;
    img {
      width:100%;
      height:488rpx;
    }
  }
  .menuWrap {
    padding:20rpx;
    .menu {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding:20rpx 0 14rpx;
      background:#fff;
      border-radius:4rpx;
      .menuItem {
        .iconWrap {
          width:120rpx;
          height:120rpx;
          border-radius: 50%;
          line-height: 120rpx;
          text-align:center;
          i {
            font-size:56rpx;
            color:#fff;
          }
        }
        .iconWrap-0 {
          background: linear-gradient(to bottom,#00D5FF,#00A8FF);
        }
        .iconWrap-1 {
          background: linear-gradient(to bottom,#FF9A8B,#FF5150);
        }
        .iconWrap-2 {
          background: linear-gradient(to bottom, #009EFF,#007AFA);
        }
        .text {
          font-size:26rpx;
          line-height:50rpx;
          text-align:center;
        }
      }
    }
  }

  .section {
    background:#fff;
    padding:30rpx 20rpx;
    .title {
      i {
        font-size:36rpx;
        color:#00A1FF;
        display: inline-block;
        margin-right:10rpx;
      }
      .time {
        font-size:28rpx;
        margin-left:10rpx;
        color:#999;
      }
    }
    .cardWrap {
      padding:30rpx 0 30rpx 20rpx;
    }
    .fullBtn {
      margin-top:10rpx;
    }
  }
}
</style>
