<template>
    <!-- 分页组件 -->
    <section class="page">
        <div class="top">
            <p class="pageItem" @click="toPage('first')">首页</p>
            <div class="wrap">
                <span @click="toPage('prev')">上一页</span>
                <label>|</label>
                <span @click="toPage('next')">下一页</span>
            </div>
            <p class="pageItem" @click="toPage('last')">尾页</p>
        </div>
        <p class="total">当前第{{curPage}}页/共{{totalPage}}页 总数：{{total}}条</p>
    </section>
</template>

<script>
import { pages } from 'api/config'

export default {
    props:{
        current:{
            type:Number,
            default:1
        },
        total:{
            type:Number,
            default:0
        }
    },
    computed: {
        totalPage() {
            return this.total > 0 ? ((this.total%pages.pageSize === 0) ? parseInt(this.total/pages.pageSize) :(parseInt(this.total/pages.pageSize) + 1)) : 1
        }
    },
    data() {
        return {
            curPage:1
        }
    },
    watch: {
        current(val) {
            this.curPage = val
        }
    },
    methods:{
        toPage(str) {
            if(str === 'first') {

                // 点击首页
                if(this.curPage === 1) return 
                this.curPage = 1

            } else if(str === 'prev') {

                // 点击上一页
                if(this.curPage === 1) return
                this.curPage --

            } else if(str === 'next') {

                // 点击下一页
                if(this.curPage === this.totalPage) return
                this.curPage ++

            } else if(str === 'last') {

                // 点击尾页
                if(this.curPage === this.totalPage) return
                this.curPage = this.totalPage
            }

            this.$emit('pageChange',this.curPage)
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    padding:60rpx 30rpx 40rpx;
    background-color:#fff;
    width:100%;
    box-sizing: border-box;
    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        font-size:28rpx;
        .pageItem {
            color:#999;
        }
        .wrap {
            border:2rpx solid #000;
            border-radius: 50rpx;
            span {
                display:inline-block;
                padding:20rpx 70rpx;
            }
        }
    }
    
    .total {
        text-align:center;
        font-size:26rpx;
        color:#999;
        margin-top:20rpx;
    } 
}
</style>
