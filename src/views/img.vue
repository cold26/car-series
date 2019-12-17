<template>
    <div class="car-img">
        <div class="flex-row">
            <p>
                <span @click="changeFlag" v-if="!colorName">颜色∨</span>
                <span @click="changeFlag" v-else>{{colorName}}</span>
            </p>
            <p>
                <span @click="changeShowCar" v-if="!yearCar">车款∨</span>
                <span @click="changeShowCar" v-else>{{yearCar}}</span>
            </p>
        </div>
        <div class="img-default">
            <div  v-for="(item,index) in list" :key="index" class="item">
                <li v-for="(value,ide) in item.List" :key="ide" :index="ide">
                   <div v-if="ide == 0" class="active" @click="showPictureList(item)">
                       <p>{{item.Name}}</p>
                       <p>{{item.Count}}></p>
                   </div>
                   <img  v-lazy="value.Url" class="img"  @click.self="showSwiper(item,ide)">
                </li>
            </div>
        </div>
        <transition name="scroll-top">
            <!-- 选择车系颜色 -->
            <div class="wrap" v-show="flag">
                <Color :flag.sync="flag"/>
            </div>
        </transition>
         
         <transition name="scroll">
             <!-- 选择具体车款 -->
             <div class="wrap" v-show="showCar">
                <Yearcar :showCar.sync="showCar"/>
            </div>
         </transition>

             <Picture v-if="showPicture" :showPicture.sync="showPicture"/> 

          <!-- 缩放 -->
         <ImagePreview v-if="showImageSwiper" :showImageSwiper.sync="showImageSwiper"></ImagePreview>
    </div>
</template>

<script>
import Color from '@/components/image/color'
import Yearcar from '@/components/image/Yearcar'
import Picture from '@/components/image/picture'
import ImagePreview from '@/components/image/ImagePreview'
import {mapState,mapActions, mapMutations} from 'vuex'
import Vue from 'vue';

export default {
    data(){
        return {
            flag:false,
            showCar:false,
            showPicture:false,
            showImageSwiper: false

        }
    },
    components:{
        Color,
        Yearcar,
        Picture,
        ImagePreview
    },

    // 注入数据
    computed:{
        ...mapState({
            list:state=>state.img.list,
            yearCar:state=>state.img.yearCar, 
            colorName:state=>state.img.colorName, 
            colorId:state=>state.img.colorId, 
            carId:state=>state.img.carId
        })
    },
    watch:{
        colorId(){
            this.getImageList(this.$route.query.SerialID);
            console.log(this.colorId)
        },
        carId(){
            this.getImageList(this.$route.query.SerialID);
        }
    },
    methods:{
        // 注入方法
        ...mapActions({
            getImageList:'img/getImageList',
            getPictureList:"img/getPictureList",
           
        }),
        ...mapMutations({
            setCurrent:"img/setCurrent",
            setImageId:'img/setImageId',
            setPictureList: 'img/setPictureList',
            setSerialID: 'img/setSerialID'
        }),
        //图片列表
        showPictureList(value){
            //把里面的图片列表显示出来
            this.showPicture = true;
            //设置图片的ImageID
            this.setImageId(value)
        },
        //点击图片
        showSwiper(item,index){
            this.setCurrent(index)
            this.setPictureList({
                Count:item.Count,
                List:item.List,
                ImageID:item.Id
            })
            this.showImageSwiper = true
        },
        // 颜色
        changeFlag(){
            this.flag = true
        },
        // 车款
        changeShowCar(){
            this.showCar = true
        }
    },
    created(){
        this.getImageList(this.$route.query.SerialID)
        this.setSerialID(this.$route.query.SerialID)
    }
}
</script>

<style scoped lang="scss">
// 颜色组件
.scroll-top-enter,.scroll-top-leave-to{
    transform: translate3d(0, 100%, 0)
}
.scroll-top-enter-active, .scroll-top-leave-active{
    transition: transform .3s linear;
}
// 车款组件
.scroll-enter,.scroll-leave-to{
    transform: translate3d(0, 100%, 0)
}
.scroll-enter-active, .scroll-leave-active{
    transition: transform .3s linear;
}

//图片列表
.pictureList-enter,.pictureList-leave-to{
    transform: translate3d(0, 100%, 0)
}
.pictureList-enter-active, .pictureList-leave-active{
    transition: transform .3s linear;
}

.wrap{
    width: 100%;
    height: 100%;
    position: fixed;
}
.car-img{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: #f4f4f4;
    display: flex;
    flex-direction: column;
}
.flex-row p:first-child{
    border-right: 1px solid #818181;
}
.flex-row{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: #fff;
    span{
        font-size: 14px;
    }
    p{
        padding: 5px;
        flex: 1;
        text-align: center;
    }
}

.img-default {
    flex: 1;
    overflow-y: scroll;
   
   
}
.item{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li{
       width: 32%;
       height: 110px;
       margin-right: 1%;
       margin-bottom: 1%;
       position: relative;
       img{
           width: 100%;
           height: 100%;
           background-size: cover;
       }
    }
}
.item li:nth-child(3n){
    margin-right: 0;
}

.active{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.active p{
    font-size: 14px;
    color: #fff;
}

</style>