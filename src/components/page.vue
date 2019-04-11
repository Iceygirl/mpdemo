<template>
    <section class="page">
        <div class="top">
            <p class="pageItem">首页</p>
            <div class="wrap">
                <span>上一页</span>
                <label>|</label>
                <span>下一页</span>
            </div>
            <p class="pageItem">尾页</p>
        </div>
        <p class="total">当前第1页/共2页 总数：200条</p>
    </section>
</template>

<script>
export default {
    
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
