<template>
  <div>
      <div class="header">
           <span @click="gocolor"> 颜色↓</span>
           <span>|</span>
           <span>车款↓</span>
      </div>
      <div class="imgList">
           <div v-for="(item,index) in list.data" :key="index" class="smallbox">
                 <li v-for="(ite,ind) in item.List" :key="ind" >
                     <div v-if="ind == 0" class="active">
                       <p>{{item.Name}}</p>
                       <p>{{item.Count}}></p>
                   </div>
                     <div>
                         <img :src="ite.Url.replace('{0}',1)" alt="">
                     </div>
                     
                 </li>
           </div>
      </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    created(){
       
          console.log(this.$route.params.id)
          this.naimg(this.$route.params.id)
    },
    computed:{
         ...mapState({
            list:state=>state.Img.list
          })
    },
    methods:{
      ...mapActions({
            naimg:"Img/naimg"
        }),
        gocolor(){
            this.$router.push("/color/"+this.$route.params.id)
        }
    }
}
</script>

<style lang="scss" scoped>
   .header{
       width:100%;
       height: 40px;
       display: flex;
       justify-content: space-around;
       align-items: center;
        // span:nth-child(1){
        //     flex: 4
            
        // }
        //   span:nth-child(2){
        //     flex: 1
        // }
        //  span:nth-child(3){
        //     flex: 4
        // }
   }
   .smallbox{
       width: 100%;
       display: flex;
       flex-wrap: wrap;
        li{
            width: 120px;
            height: 120px;
            margin-right: 1%;
            position: relative;
            margin-bottom: 5px;
          
                 img{
                width: 120px;
                height: 120px;
                background-size: cover;
            
            }
           
       }
   }
//    .smallbox li:nth-child(3n){
//        margin-right: 0;
//    }
//    3的倍数
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

