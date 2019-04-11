<template>
  <!-- 未巡场所和场所管理 -->
  <div class="place">

    <!-- 搜索 -->
    <div class="searchWrap">
      <div class="nameWrap">
        <input type="text" v-model="searchValue.name" placeholder="快速查找" placeholder-style="color:#999;" @confim="search">
        <button class="btn" @click="search">搜索</button>
      </div>
    </div> 

    <!-- 下拉查找 --> 
    <ul class="searchList">
      <li class="item" v-for="(item,index) in searchList" :key="index"> 
        <p class="select">
          {{item.name}}<span class="downIcon"></span>
        </p>
      </li>
    </ul>

    <div class="placeList">
      <p class="total">已筛选<span class="num">11</span>家场所</p>
      <ul class="list">
        <li class="item" v-for="i in 5" :key="i">
          <div class="seg seg1">
            <h3 class="name">aaa</h3>
            <p class="detail">地址：</p>
            <p class="detail">营业状态：</p>
            <div>
              <p class="detail">电话：</p>
              <p class="detail">消防责任安全人：</p>
            </div>
            <p class="detail">巡查结果<span class="redFlag"></span></p>
            <span class="rating">三小场所</span>
          </div>
          <div class="seg seg2">
            <span class="label">巡查执行</span>
            <i class="iconfont iconjiantouarrow487"></i>
          </div>
        </li>
      </ul>
    </div>

    <page></page>
  </div>
</template>

<script> 

import page from 'components/page'

export default {
  components: {
    page
  },
  data () {
    return {
      searchList:[{
        name:'全部类型'
      },{
        name:'全部批次'
      }],
      searchValue:{
        name:''
      }
    }
  },
  onLoad(){
    wx.setNavigationBarTitle({
      title:'巡查场所',
    })
  },
  methods: {
    // 搜索
    search() {

    }
  }
}
</script>

<style lang="scss" scoped>
.place {
  .searchWrap {
    width:100%;
    padding:40rpx;
    background-color:#fff;
    position: fixed;
    top:0;
    left:0;
    .nameWrap {
      width:90%;
      position:relative;
      input {
        width:80%;
        border-radius:50rpx;
        background-color:#f4f4f4;
        padding-left:30rpx;
        height:68rpx;
        line-height:68rpx;
      }
      .btn {
        display: inline-block;
        width:20%;
        height:68rpx;
        line-height:68rpx;
        background:#00A1FF;
        border:none;
        border-radius: 50rpx;
        font-size:26rpx;
        color:#fff; 
        position:absolute;
        right:20rpx;
        top:0;
      }
    }
  }


  .searchList {
    padding-top:150rpx;
    background-color:#E7F6FF;
    display:flex;
    justify-content: space-around;
    .item {
      flex:1;
      padding:30rpx 0 30rpx 40rpx;
      .select {
        .downIcon {
          display:inline-block;
          border-top:14rpx solid #909090;
          border-left:8rpx solid transparent;
          border-right:8rpx solid transparent;
          margin-left:10rpx;
        }
      }
    }
  }

  .placeList {
    margin-bottom:10rpx;
    .total {
      height:90rpx;
      line-height:90rpx;
      font-size:24rpx;
      color:#00A1FF;
      background-color:#fff;
      text-align:center;
      .num {
        font-size:32rpx;
        font-weight:bold;
      }
    } 
    .list {
      .item {
        margin-top:10rpx;
        padding:30rpx;
        display: flex;
        justify-content: space-between;
        font-size:28rpx;
        background-color: #fff; 
        .seg {
          .name {
            font-size:36rpx;
            font-weight: bold;
            color:#444;
            margin-bottom:20rpx;
          }
          .detail {
            width:100%;
            word-break:break-all;
            line-height:40rpx;
          }
          .redFlag {
            color:#FF4C4C; 
          }
          .rating {
            display:inline-block;
            padding:8rpx 30rpx;
            border-radius:30rpx;
            background:linear-gradient(to right, #00A1FF, #007AFF);
            font-size:22rpx;
            color:#fff;
            margin-top:20rpx;
          }
          .label {
            display: inline-block;
            width:60rpx;
            color:#00A1FF;
          }
          i {
            font-size:24rpx;
            color:#00A1FF;
            margin:10rpx 0 0 10rpx;
          }
        }
        .seg1 {
          width:90%;
          border-right:2rpx solid #eee;
        }
        .seg2 {
          padding-left:30rpx;
          padding-top:50rpx;
          box-sizing:border-box;
        }
      }
    }
  }
}

</style>
