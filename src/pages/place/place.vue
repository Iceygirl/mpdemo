<template>
  <!-- 未巡场所和场所管理 -->
  <div class="place">

    <!-- 搜索 -->
    <div class="searchWrap">
      <div class="nameWrap">
        <input type="text" v-model="unit.name" placeholder="快速查找" placeholder-style="color:#999;" @confirm="search">
        <button class="btn" @click="search">搜索</button>
      </div>
    </div>  

    <!-- 下拉查找 --> 
    <ul class="searchList">
      <li class="item" v-for="(item,index) in placeSearchList" :key="index"> 
        <picker :range="item.range"  @change="(e)=>{ return pickerChange(item,e)}" >
          <p class="select">
            {{item.range[item.selectedIndex]}}<span class="downIcon"></span>
          </p>
        </picker>
      </li>  
    </ul>


    <div class="placeList">
      <p class="total">已筛选<span class="num">{{total}}</span>家场所</p>
      <ul class="list">
        <li class="item" v-for="(item,index) in placeList" :key="index">
          <div class="seg seg1">
            <h3 class="name">{{item.name}}</h3>
            <p class="detail">地址：{{item.address}}</p>
            <p class="detail">营业状态：{{item.status}}</p>
            <div v-show="pageType === 'all'">
              <p class="detail">电话：{{item.headPhone}}</p>
              <p class="detail">消防责任安全人：{{item.head}}</p>
            </div>
            <p class="detail">巡查结果：<span class="redFlag">{{item.patrol}}</span></p>
            <div v-show="item.patrol === '不合格'">
              <p class="detail">分数：<span class="redFlag">{{item.lastTotalValue}}分</span></p>
              <p class="detail">整改期限：<span class="redFlag">{{item.fixedTime}}</span></p>
            </div>
            <span class="rating">{{item.rating}}</span>
          </div>
          <div class="seg seg2">
            <span class="label">巡查执行</span>
            <i class="iconfont iconjiantouarrow487"></i>
          </div>
        </li>
      </ul>
    </div>

    <page :current="current" :total="total" @pageChange="pageChange"></page>
  </div>
</template>

<script> 
 
import page from 'components/page'
import { patrolPlace } from 'api/port'
import { pages, ERR_OK, likeSearchStr } from 'api/config'
import { failRequest } from 'js/util'
import time from 'time-formater'
import { placeSearchList } from 'js/gobalData'
 
export default {
  components: {
    page
  },
  data () {
    return {  
      pageType:'',
      current:1,
      total:0,
      placeSearchList:placeSearchList,
      placeList:[],
      searchValue:{
        batch:'',
        patrol:0,
        status:1,
        type:1
      },
      unit: {
        name:''
      }
    }
  },
  onLoad(){
    wx.setNavigationBarTitle({
      title:'巡查场所',
    })

    this.pageType = this.$root.$mp.query.type
    this.pageType = 'all' 
    // 如果是未巡查的话不需要显示全部状态的搜索项
    if(this.pageType === 'patrol') {
      this.placeSearchList.splice(0,1)
    }
  },
  mounted() {
    this._getPlaceList()
  },
  methods: {
    // 获取场所列表
    _getPlaceList(page) {
      this.Loading('加载中..')
      pages.page = page !== undefined ? page : 1
      let data = {
        ...pages,
        searchValue:this.searchValue
      }
      // 这里很奇怪，访问接口的时候入参会增加__newReference参数，需要把它删除
      if(!data.searchValue.__newReference) delete data.searchValue.__newReference
     
      patrolPlace(data) 
        .then(res=>{
          if(res.code === ERR_OK) {
            let result = res.result
            this.total = result.total
            let arr = [], obj = {}
            result.list.map(item=>{
              obj = {
                name:item.name,
                address:item.address,
                status:item.status === 0 ? '停业' : '营业中',
                headPhone:item.headPhone,
                head:item.head,
                patrol:item.patrol === 0 ? '未巡查' : ( item.patrol === 1 ? '合格' : '不合格' ),
                rating:item.rating
              }
              if(obj.patrol === '不合格') {
                obj.fixedTime = time(item.fixedTime).format('YYYY-MM-DD')
                obj.lastTotalValue = item.lastTotalValue
              }
              arr.push(obj)
            }) 

            this.placeList = arr
          } else {
            failRequest(res.code,res.message)
          }
          this.hideLoading() 
        })  
        .catch(error=>{
          this.hideLoading()
        })
    },
    // 搜索下拉选择
    pickerChange(item,e) {
      item.selectedIndex = e.mp.detail.value 
    },
    // 分页
    pageChange(page) {
      this.current = page
      this._getPlaceList(this.current)
    },
    // 过滤SearchValue,供搜索
    filterSearchValue() {

      // 按场所名称搜索
      if(this.unit.name) {
        this.searchValue.name = this.unit.name + likeSearchStr
      } else {
        delete this.searchValue.name
      }


    },
    // 搜索
    search() {
      this.filterSearchValue()
      this.current = 1
      this._getPlaceList(this.current)
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
            font-size:26rpx;
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
          padding-right:10rpx;
          border-right:2rpx solid #eee;
        }
        .seg2 {
          padding-left:30rpx;
          padding-top:70rpx;
          box-sizing:border-box;
        }
      }
    }
  }
}

</style>
