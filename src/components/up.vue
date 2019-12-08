<template>
  <div class="wrap" :class="{active:chuan}">
     <div v-if="list.length!=0">

         <div v-for="(item,index) in list.data" :key="index">
             <p @click="renderCity(item.CityID)">{{item.CityName}}</p> 
         </div>
         <div v-for="(item) in listRight.data" :key="item.CityID">
             <p>{{item.CityName}}</p>
         </div>
         

      </div>
  </div>
</template>

<script>

import {mapState,mapActions} from 'vuex'

export default {
   props: ["chuan"],
   data(){
      return{
         canshu:null
      }
   },
   computed:{
      ...mapState({
      list: state => state.Up.list 
    }),
     ...mapState({
      listRight: state => state.Right.listright 
    })

    
   },
    created(){   
          this.getSheng()
    },
    methods:{
         ...mapActions({
            getSheng:"Up/getSheng"
        }),
          ...mapActions({
            getShi:"Right/getShi"
        }),
        renderCity(index){
           
         
           this.getShi(index)
        }
    }
}
</script>

<style lang="scss" scoped>
   .wrap{
       width:100%;
       height: 100%;
       background:white;
       z-index: 100;
      
       position: fixed;
       left: 0;
       top: 0;
        transform: translateY(100%);
    //  transform: translateY(100%);
   }  
   .active{
        transform: translateY(0%);
        transition: all 1s;
   }
</style>>

