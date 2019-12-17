<template>
    <div class="wrapper">
        <Scroll
            ref="scroll"
            :data="pictureList"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
        >
            <ul>
                <span :key="index" 
                @click="showSwiper(index)" v-for="(item, index) in pictureList" 
                 v-lazy:background-image="item.Url.replace('{3}', item.LowSize)"
                />
            </ul>
        </Scroll>
        <ImagePreview v-if="showImageSwiper" :showImageSwiper.sync="showImageSwiper"></ImagePreview>   
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
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import Scroll from '../better-scroll/scroll';
import ImagePreview from './ImagePreview'
export default {
    data(){
        return {
            showImageSwiper:false
        }
    },
    components:{
        Scroll,
        ImagePreview
    },
    computed:{
        ...mapState({
            pictureList:state =>state.img.pictureList,
            Count:state =>state.img.Count,
            Page:state =>state.img.Page
        }),
        pullDownRefreshObj: () => {
                return {
                    threshold: 90,
                    stop: 50,
                    txt: '刷新成功'
                }
            },
        pullUpLoadObj: () => {
            return {
                threshold: 50,
                txt: {
                    more: '加载更多',
                    noMore: '没有更多数据了'
                }
            }
        }
    },
    watch: {
        pullDownRefreshObj: {
            handler(val) {
                const scroll = this.$refs.scroll.scroll
                if (val) {
                    scroll.openPullDown()
                } else {
                    scroll.closePullDown()
                }
            },
            deep: true
        },
        pullUpLoadObj: {
            handler(val) {
                const scroll = this.$refs.scroll.scroll
                if (val) {
                    scroll.openPullUp()
                } else {
                    scroll.closePullUp()
                }
            },
            deep: true
        },
        },
    methods:{
        ...mapActions({
            getPictureList:"img/getPictureList",
            refreshDispatch: 'img/getPictureList',
            loadMoreDispatch: 'img/getPictureList'
        }),
        ...mapMutations({
            setCurrent:"img/setCurrent"
        }),
        async onPullingDown() {
            await this.refreshDispatch(1);
        },
        async onPullingUp() {
            await this.loadMoreDispatch(this.Page + 1);
        },
        showSwiper(index){
            // 显示轮播
            this.showImageSwiper = true
            // 修改current
            this.setCurrent(index);
        }
        
    },
    created(){
        this.getPictureList()
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
}
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
ul span {
    display: inline-block;
    width: 32.5vw;
    height: 32.5vw;
    margin-bottom: 1.25vw;
    background-size: cover;
    background-position: center;
}
// .wrapper{
//     width: 100%;
//     height: 100%;
//     background: #fff;
//     overflow-y: scroll;
//     .img-list{
//         width: 100%;
//         display: flex;
//         justify-content: space-between;
//         flex-wrap: wrap;
//         span{
//             width: 32.75vw;
//             height: 32.75vw;
//             background-size: cover;
//             display: inline-block;
//             background-position: center;
//             margin-bottom: 1vw;
//         }
//     }
// }
</style>