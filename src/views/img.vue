<template>
    <div class="car-img">
        <div class="flex-row">
            <span @click="change">颜色∨</span>
            <span>|</span>
            <span>车款∨</span>
        </div>
        <div class="img-default">
            <div  v-for="(item,index) in list" :key="index" class="item">
                <li v-for="(value,ide) in item.List" :key="ide" :index="ide">
                   <!-- <div :class="{active:ide == 0}"> -->
                   <div v-if="ide == 0" class="active">
                       <p>{{item.Name}}</p>
                       <p>{{item.Count}}></p>
                   </div>
                   <img :src=value.Url alt="" class="img">
                </li>
            </div>
        </div>
        <transition name="scroll-top">
            <!-- 选择车系颜色 -->
            <div class="wrap" v-show="flag">
                <Color :flag.sync="flag"/>
            </div>

            <!-- 选择具体车款 -->

        </transition>
    </div>
</template>

<script>
import Color from '@/components/image/color'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            flag:false
        }
    },
    components:{
        Color,
    },
    computed:{
        ...mapState({
            list:state=>state.img.list
        })
    },
    methods:{
        ...mapActions({
            getImageList:'img/getImageList'
        }),
        change(){
            this.flag = true
            console.log(this.flag)
        }
    },
    created(){
        // console.log(this.$store.state.img,"11111111")
        this.getImageList(this.$route.query.SerialID)
    }
}
</script>

<style scoped lang="scss">
.scroll-top-enter,.scroll-top-leave-to{
    transform: translate3d(0, 100%, 0)
}
.scroll-top-enter-active, .scroll-top-leave-active{
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

.flex-row{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    background: #fff;
    span{
        font-size: 14px;
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