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
        <li class="item">
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
          <div class="seg">
            <span class="label">巡查执行</span>
            <i class="iconfont iconjiantouarrow487"></i></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
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
    padding:40rpx;
    background-color:#fff;
    .nameWrap {
      width:100%;
      position:relative;
      input {
        width:90%;
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
        right:0;
        top:0;
      }
    }
  }


  .searchList {
    background-color:#E7F6FF;
    display:flex;
    justify-content: space-around;
    .item {
      flex:1;
      padding:40rpx 0 40rpx 30rpx;
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
        .seg {
          .title {
            font-size:36rpx;
            font-weight: bold;
            color:#444;
            margin-bottom:20px;
          }
          .detail {
            line-height:4rpx;
          }
          .redFlag {
            color:#FF4C4C; 
          }
          .rating {

          }
          .label {

          }
          i {

          }
        }
        .seg1 {
          width:80%;
          border-right:2rpx solid #999;
        }
      }
    }
  }
}

</style>
