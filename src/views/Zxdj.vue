<template>
   <div class="wrap" >     
      <div class="header">
          <p>可向多个商家咨询最低价，商家及时回复</p>
    </div> 
      <div class="main">
          <div class="shang">
              <img src="http://img3.bitautoimg.com/autoalbum/files/20181213/218/0144152186_3.jpg" alt="">
              <div class="shang-right">
                   <p>驭胜S350</p>
                   <p>2018款 2.0T 手自一体 四驱 超豪华版 5座 柴油</p>
              </div>
            
          </div>
          <div class="zhong">个人信息</div>
          <div class="gerenxinxi">
              <p>
                  <span>姓名</span>
                  <input type="text" placeholder="请输入你的真实姓名">
              </p>
               <p>
                   <span>手机</span>
                  <input type="text" placeholder="输入你真实的手机号码" >
               </p>
               <p class="chengshi1"  @click="tanchu">
                    <span class="c1">城市</span>
                    <span class="c2"></span>
                    <span class="c3">北京></span>
               </p>
          </div>
          <!-- <div class="gun"></div>    测试滚动对下面滑块有没有影响-->
          <div class="button1">
              <button>咨询底价</button>
          </div>
      </div>
       
      
        <Up :chuan="flag" ></Up>
   </div>
</template> 


<script>
import {mapState,mapActions} from "vuex"
import Up from "../components/up"

export default {
    data(){
        return{
            flag:false,
             msgFormSon:false
        }
    },
    created(){
        this.nashuju({carId:this.$route.query.carId,cityId:138648})
    },
    components:{
        Up
    },
    computed:{
        ...mapState({
            list:state=>state.Zxdj.list
        })

    },
    methods:{ //在mehoods里拿过来vuex里的方法，然后在生命周期里掉
        ...mapActions({
            nashuju:"Zxdj/nashuju"
        }),
        tanchu(){
            this.flag=true;
        },
     
    },
}
</script>

<style scoped lang="scss">
   .wrap{
       width:100%;
       height:100%;
        overflow-y: auto;
        // overflow: hidden;
    
     
   }
   .main{
       width: 100%;
      overflow-y: auto;
   }
   .header{
       width: 100%;
       height:37px;
      background: #79cd92;
      line-height: 37px;
   }
   .header p {
       color: white;
       text-align: center;
   }
   .shang{
       display: flex;
       width:100%;
       height: 50x;

   }
   .shang .shang-right{
       display: flex;
       flex-direction: column;

   }
   .shang .shang-right .p{
       margin-top: 10px;
    
   }
   .zhong{
       width: 100%;
       height: 30px;
       background: #ccc;
       color:#666;
       line-height: 30px;
   }
   .gerenxinxi{
      width: 355px;
      margin: 0 auto;
   }
   .gerenxinxi p{
       width:100%;
       height: 44px;
      
       border-bottom: 1px solid #ccc;
       line-height: 44px;
   }
   .gerenxinxi p span {
       font-size: 16px;
       
   }
    .gerenxinxi p input{
        width: 312px;
        height:20px;
        border: none;
        outline: none;
        text-align:right;
    }
 .gerenxinxi p input::-webkit-input-placeholder{
     font-size: 13px;
 }
 .chengshi1{
     display:flex;
     .c1{
         flex: 2
     }
     .c2{
         flex: 6
     }
     .c3{
         flex: 2
     }

 }
 .button1{
    width: 375px;
    height: 35px;
    margin-top:20px;
    text-align: center;
    button{
        width: 300px;
        height: 100%;
        background: #3aacff;
       color:white;
        outline: none;
        margin: 0 auto;
        border: none;
        border-radius: 5px;
    }
 }
 .gun{
     width:100%;
     background: red;
     height: 2000px;
 }


</style>