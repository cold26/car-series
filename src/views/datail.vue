<template>
    <div class="detail">
       <div class="main">
           <div class="img" @click="goImg">
               <img :src="list.Picture" alt="">
               <span class="count">{{list&&list.pic_group_count}}张图片</span>
           </div>
           
           <div class="into">
                <p>{{list.market_attribute&&list.market_attribute.dealer_price}}</p>
                <p>指导价{{list.market_attribute&&list.market_attribute.official_refer_price}}</p>
              
               <div class="flex-row action">
                   <button @click="goPage(list)">{{list.BottomEntranceTitle}}</button>
               </div>
           </div>
           <div class="c-type">
               <span v-for="(item,index) in year" :key='index' @click="change(index,item)" :class="{active:selected==index}">{{item}}</span>
           </div>
           <div class="item" v-for="(item, index) in currentList" :key="index" id="item">
                <p>{{item.key}}</p>
                <ul v-for="(value, ind) in item.list" :key="ind">
                    <li class="line">
                        <p class="one">{{value.market_attribute.year}}款 {{ value.car_name }}</p>
                        <p class="two">{{ value.trans_type }}</p>
                        <p class="three">
                            <span>指导价{{ value.market_attribute.official_refer_price }}</span>
                            <span>{{ value.market_attribute.dealer_price }}起</span>
                        </p>
                        <button @click="goPrice(value)" >询问底价</button>
                    </li>
                </ul>
            </div>  
       </div>
        <div class="footer" @click="goPage(list)">
           <p>询问底价</p>
           <p>本地经销商为你报价</p> 
       </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    data(){
        return {
            selected:0
        }
    },
    computed:{
        ...mapState({
            list:state=>state.detail.list,
            currentList:state=>state.detail.currentList,
            year:state=>state.detail.year
        })
    
    },

    methods :{
        ...mapActions({
           getDetailList:"detail/getDetailList",
        }),
        ...mapMutations({tabDetailList:"detail/tabDetailList"}),
        goPage(list){
            console.log(list.list[0].car_id)
            this.$router.push({path:"/pricepage",query:{
                carId:list.list[0].car_id
            }})
        },
        goPrice(id){
            // console.log(id)

            this.$router.push({path:"/pricepage",query:{
                carId:id
            }})
        },
        change(index,item){
            this.selected = index;
            this.tabDetailList(item)
            this.getDetailList(this.$route.query.SerialID)
            // console.log(item)
        },
        goImg(){
            this.$router.push({
                path:'/img',
                query:{
                    SerialID:this.$route.query.SerialID
                }
            })
        }
    },
    created(){
        this.getDetailList(this.$route.query.SerialID)
    }
}
</script>

<style scoped>
.active{
    color: skyblue;
}
.detail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f4f4f4;
}
.main{
    width: 100%;
    flex: 1; 
    overflow-x: hidden;
}
.main .into{
    padding: 20px 10px 20px 18px;
    background: #fff;
    position: relative;
}
.main .into p:nth-child(2){
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:12px ;
    color: silver;
}
.main .into .action button{
    width: 100%;
    height: 100%;
    outline: none;
    border: 0;
    border-radius: 8px;
    background: #00afff;
    color: #fff;
}
.main .into .action{
    padding-top: .2rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 50%;
    position: absolute;
    right: 8px;
    top:15px;
    height: 43px;
}
.main .into  p:first-child{
    font-size:18px;
    color: red;
    font-weight: 500;
    
}
.main .c-type span {
    padding-right: .46rem;
    font-size: 17px;
}
.main .c-type{
   margin-top: 10px;
   width: 100%;
   height: 50px;
   padding: 0 10px;
   line-height: 50px;
   background: #fff;
}

.main .img{
    /* overflow: hidden; */
    width: 100%;
    position: relative;
}
.img img {
  /* max-width: 100%;
  max-height: 100%; */
  width: 100%;
  background-size:cover;
  /* position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%) */
}
.img span {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.31rem;
  color: #fff;
  bottom: 18px;
  right: 24px;
  padding:3px 5px;
}
.main .item {
  width: 100%;
}
.item > p {
  padding: 3px 0 3px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #999;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  background: #f4f4f4;
}
.item ul {
  width: 100%;
  height: 120px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  background: #fff;
}

.main .item ul:last-child{
    margin-bottom: 0;
}
.item ul .line > .two {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 16px;
  font-size: 13px;
  color: #999;
  padding: 0 10px;
}
.item ul .line > .one {
  height: 36px;
  line-height:36px;
  display: flex;
  font-size: 16px;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px;
}
.item ul .line > .three {
  height: 25px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #999;
}
.item ul .line > .three > span:last-child {
  color: Red;
  font-size: 15px;
  margin-left: 10px;
}
.item ul button {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: #00afff;
  border: 0;
  width: 100%;
  font-size: 17px;
  background: #fff;
  border-top: 1px solid #ccc;
}
.footer{
    width: 100%;
    background: #3aacff;
    height:50px;
    color: #fff;       
}
.footer p:first-child {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}
.footer  p:nth-child(2) {
    font-size: 16px;
    text-align: center;
}
</style>