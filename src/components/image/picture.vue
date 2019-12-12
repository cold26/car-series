<template>
    <div class="wrapper">
        <van-image-preview
            v-model="show"
            :images="list"
            @change="onChange"
            >
            <template v-slot:index>第{{ index }}页</template>
        </van-image-preview>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data() {
        return {
            show: true,
            index: 0
        }
    },
    computed:{
        ...mapState({
            pictureList:state =>state.img.pictureList
        }),
        list() {
            return this.pictureList.map(item => {
                return item.Url.replace('{0}', item.HighSize)
            })
        }
    },
    methods:{
        ...mapActions({
            getPictureList:"img/getPictureList"
        }),
        ...mapMutations({

        }),
        onChange(index) {
            this.index = index;
        }
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