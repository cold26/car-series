<template>
    <div class="preview">
        <van-image-preview
        v-model="showPreview"
        :images="list"
        @change="change"
        :start-position="current"
        >
             <template v-slot:index>{{`${current+1}/${count}`}}</template>
        </van-image-preview>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState({
            pictureList: state=>state.img.pictureList,
            current: state=>state.img.current,
            count: state=>state.img.Count,
            page: state=>state.img.Page
        }),
        list(){
            return this.pictureList.map(item=>{
                return item.Url.replace('{0}', item.HighSize)
            })
        },
        showPreview: {
            get () {
                return this.showImageSwiper
            },
            set (value) {
                this.$emit("update:showImageSwiper",false)
            }
        }
    },
    props: {
        showImageSwiper: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        ...mapMutations({
            setCurrent: 'img/setCurrent'
        }),
        ...mapActions({
            getPictureList: 'img/getPictureList'
        }),
        change(index){
            // 提前两张加载下一页图片
            console.log(index)
            if (index > this.pictureList.length-2){
                if (this.pictureList.length < 30){
                    this.getPictureList(1)
                }else{
                    this.getPictureList(this.page + 1);
                }
            }
            this.setCurrent(index);
        },
        hideImageSwiper(){
            this.$emit("update:showImageSwiper",false)
        }
    }
}
</script>

<style lang="scss">
    .preview /deep/ .van-image-preview__overlay{
        background: #000;
    }
</style>