<template>
  <!-- 首页下方的统计卡片 -->
  <section class="card">
    <ul class="list">
      <li class="item" v-for="(item,index) in cardList" :key="index" :class="'item'+index">
        <p class="numWrap">
            <span class="num">0</span>{{item.flag}}
        </p>
        <p class="text">{{item.name}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import { cardList } from 'js/gobalData'

export default {
  data() {
    return {
      cardList:cardList
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  .list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .item {
      font-size:26rpx;
      .numWrap {
        text-align:center;
        .num {
          font-size:70rpx;
        }
      }
      .text {
        text-align:center;
        color:#000;
      }
    }
    .item0 {
      color:#00A1FF;
    }
    .item1 {
      color:#57D092;
    }
    .item2 {
      color:#FF4C4C;
    }
  }
}
</style>
