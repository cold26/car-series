<template>
    <div class="wrapper">
        <ul class="img-list">
            <span v-for="(item,index) in pictureList" :key = 'index'
            :style="{backgroundImage:`url(${item.Url})`}"
            >

            </span>
            <!-- {{pictureList}} -->
            <!-- 
                /**
                * list 下拉刷新 加载更多
                * @props {
                *   list: {
                *     query?: {[key:string]:any}, 查询条件
                *     limit?: number, 每次查询的数量 默认10
                *     count: number, 最后一次查询结果返回的长度 用来控制loadMore的显示与否
                *     refreshDispatch?: string pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
                *     loadMoreDispatch: string loadMore 查询的store dispacthName
                *     value: Array<{[key:string]:any}> 查询结果
                *   }
                * }
                * slotName: 'item' 显示列表项
                */
             -->
        </ul>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            pictureList:state =>state.img.pictureList
        })
    },
    methods:{
        ...mapActions({
            getPictureList:"img/getPictureList"
        }),
        ...mapMutations({

        })
    },
    created(){
        
    }
}
</script>

<style scoped lang="scss">
.wrapper{
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: scroll;
    .img-list{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        span{
            width: 32.75vw;
            height: 32.75vw;
            background-size: cover;
            display: inline-block;
            background-position: center;
            margin-bottom: 1vw;
        }
    }
}
</style>