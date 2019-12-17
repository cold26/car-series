<template>
    <div class="wrap">
        <div v-for="(value,key) in obj" :key="key" class="item">
            <p class="a1" :id="key">
                <span>{{key}}</span>
            </p>
            <!-- 这里是锚点链接，锚点猫的是id，既这里的key，是唯一的，在这里ABC -->
            <dl v-for="(item,index) in value" :key="index" @click="tanchu(item.MasterID)" >
                <dt>
                    <img v-lazy="item.CoverPhoto" alt />
                </dt>
                <dd>{{item.Name}}</dd>
            </dl>
        </div>
        <!-- 右边定位 -->
        <div class="b3" ref="aaa"
            @touchstart="rightTouchStart"
            @touchmove="rightTouchMove"
        >
            <div v-for="(value,key1) in rightList" :key="key1">
                <p>
                     <a :href="'#'+key1">{{value}}</a>
                </p>
            </div>
        </div>
        <!-- 弹出层 -->
        <div class="mask" :class="{active:flag}" @touchstart="touchstart" @touchend="touchend">
            <div v-for="(item,index) in arr" :key="index">
                <p class="mp" @click="flag=false">{{item.GroupName}}</p>
                <div 
                    v-for="(ite,ind) in item.GroupList" 
                    :key="ind" class="mbig" 
                    @click="goDetail(ite.SerialID)"
                    >
                    <img :src="ite.Picture" alt class="mimg" />
                    <div class="msmall">
                        <p>{{ite.AliasName}}</p>
                        <p class="zi">{{ite.DealerPrice}}</p>
                    </div>
                    <div class="line"></div>
                </div>
            </div>
        </div>         
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    data(){
        return {
            flag:false,
            pagestartX:null,
            pagestartY:null
        }
    },
    computed:{
        rightList() {
            return Object.keys(this.obj)
        },
        ...mapState({
            obj:state=>state.home.obj,
            arr:state=>state.home.arr
        })
    },
    methods:{ 
        rightTouchStart(e) {
            // let h = document.querySelector('.b3').offsetTop
            // console.log(e.target.offsetHeight)
            // let index = Math.floor((e.touches[0].clientY - h) / e.target.offsetHeight)  
            // if (index >= this.rightList.length - 1) {
            //     index = this.rightList.length - 1
            // }
            // if (index <= 0) {
            //     index = 0
            // }
            // let top = document.querySelector('#' + this.rightList[index]).offsetTop
            // window.scrollTo(0, top)
        },
        rightTouchMove(e) {
            let h = document.querySelector('.b3').offsetTop //获取右侧点击的东西到顶部的距离
            let index = Math.floor((e.touches[0].clientY - h) / e.target.offsetHeight) 
            //84行获取的是我点的那一个点距离屏幕顶部的距离-h就是滑动了那一截的距离，除以每一个Abc的高，就是几个abc，从而获取下标 
            if (index >= this.rightList.length - 1) {  //如果滑动到最下面，让下标等于最下边的
                index = this.rightList.length - 1    //这个判断是判断的临界值
            }
            if (index <= 0) {   //如果滑到最上面，让下标等于最上面
                index = 0
            }
            let top = document.querySelector('#' + this.rightList[index]).offsetTop
            window.scrollTo(0, top)    //让左边的滚动距离等于
             
        },
        ...mapActions({
            getMasterBrandList:"home/getMasterBrandList",
            getMarkList:"home/getMarkList"
        }),
        touchstart(e){
            this.pagestartX=e.targetTouches[0].pageX
             this.pagestartY=e.targetTouches[0].pageY
            // console.log(this.$refs.aaa.offsetTop)
        },
        touchend(e){
           let movepageX=e.changedTouches[0].pageX
            let movepageY=e.changedTouches[0].pageY
             if(movepageX-this.pagestartX>50&&this.pagestartY-movepageY<50){
                 this.flag=false
             }
            console.log(e)
        },
        tanchu(id){
            _hmt.push(['_trackEvent', "弹出", "弹出"]);
            this.flag = true
            this.getMarkList(id)
        },
        goDetail(id){
           
            this.$router.push({path:"/detail",query:{SerialID:id}})
        }
    },
    created() {
        this.getMasterBrandList();   
        
    },
}
</script>

<style scoped>
dl {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-top: 5px;
    margin: 0 15px 0;
}
dt > img {
    width: 40px;
    height: 40px;
    margin-right: 15px;
}
.line {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    transform: scale(1,0.5);
    background: #ccc;
}
.a1 {
    width: 100%;
    height: 30px;
    background: #f4f4f4;
    line-height: 30px;
    padding-left: 15px;
}
.a1 span {
    margin-left: 10px;
}
.b3 {
    position: fixed;
    top: 30%;
    left: 95%;
}
a {
    color: #333;
}
.mask {
  width: 80%;
  height: 100%;
  background: white;
  transform: translateX(100%);
  transition: all 1s ease;
  overflow-y: auto;
  position: fixed;
}
.mask.active {
  transition: all 1s ease;
  transform: translateX(0%);
  position: fixed;
  top: 0;
  right: 0;
}
.wrap {
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}
.mp {
    width: 100%;
    height: 30px;
    background: #f4f4f4;
    line-height: 30px;
}
.mimg {
    width: 100px;
    height: 60px;
}
.mbig {
    display: flex;
    position: relative;
}
.zi {
    color: red;
}
.item dl:last-child{
    border-bottom: none;
}
</style>