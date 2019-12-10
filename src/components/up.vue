<template>
  <div class="wrap" :class="{active:chuan}" >
    <div v-if="list.length!=0" :class="{active2:gai}">
       <div class="top1"><span>自动定位</span></div>
       <div  class="top2"><span>北京</span> </div>
        <div class="top1"><span>省市</span></div>
      <div v-for="(item,index) in list.data" :key="index" class="left1">
        <p @click="renderCity(item.CityID)">{{item.CityName}}</p>
        <p>＞</p>
      </div>
      <div class="right" :class="{active1:flag}">
        <div class="touming" @click="boxdisappear"></div>
        <div class="baise">
          <div v-for="(item) in listRight.data" :key="item.CityID" class="a1">
            <p @click="closeFather(item.CityName)">{{item.CityName}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  props: ["chuan"],
  data() {
    return {
      canshu: null,
      flag: false,
    
      gai:false
    };
  },
  computed: {
    ...mapState({
      list: state => state.Up.list
    }),
    ...mapState({
      listRight: state => state.Right.listright
    }),
    ...mapState({
        listfu:state=>state.Zxdj.list
    })
  },
  created() {
    this.getSheng();
  },
  methods: {
     ...mapMutations({
        setCityName: 'Up/setCityName'
     }),
     closeFather(cityName) {
        this.$emit('update:chuan', false) //update关键字，第二个参数false是往回传的值
        this.setCityName(cityName)
        this.nashuju({cityId:202,carId:131315})
     },
    ...mapActions({
      getSheng: "Up/getSheng"
    }),
    ...mapActions({
      getShi: "Right/getShi"
    }),
     ...mapActions({
      nashuju: "Zxdj/nashuju"
    }),
    renderCity(index) {
        this.$emit('func',index)
      this.getShi(index);
      this.flag = true;
      //  this.zichuanfu=true
      //    this.$emit('func',this.zichuanfu)
      this.gai=true;
      console.log(this.gai)
      
    },
    boxdisappear(){
       this.flag=false
       this.gai=false;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  
  background: white;
  z-index:10;
  overflow-x: hidden;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateY(100%);
  z-index: 20;
   .left1{
      z-index: 20;
      display: flex;
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #ccc;
       p:nth-child(1){
           flex:9;
         margin-left: 10px;
          margin-left: 10px;
           font-size: 14px;
       }
        p:nth-child(2){
           flex:1;
           color:#999
       }

   }
   .top1{
      width: 100%;
      height: 20px;
      background: #f4f4f4;
      span{
         margin-left: 10px;
          margin-left: 10px;
           font-size: 14px;
      }
   }
   .top2{
       width: 100%;
       height: 35px;
       line-height: 35px;
       span{
           margin-left: 10px;
           font-size: 14px;
       }
   }
  //  transform: translateY(100%);
}
.active {
  transform: translateY(0%);
  transition: all 1s;
}
.right {
   overflow-y: hidden;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(100%);
 
  display: flex;
  &.active1 {
    transform: translateX(0);
     transition: all 1s;
  }
  .touming {
    width: 30%;
    height: 100%;
  }
  .baise {
    width: 70%;
    height: 100%;
    background:white;
    overflow-y: scroll;
    .a1{
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #ccc;
    }
  }
}
.active2{
   height: 667px;
    overflow: hidden;
}
</style>>

