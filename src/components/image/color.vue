<template>
    <div class="color-card">
        <header @click="funColorId()">全部颜色</header>
        <div class="c-type" >
            <span v-for="(item,index) in list" :key="index" @click="changeIndex(index)" :class="{active:currentIndex==index}">{{item.key}}</span>
        </div>
         <ul v-if="list.length">
           <div>
               <li v-for="(item,index) in list[currentIndex].color" :key="index" @click="funColorId(item.ColorId)">
                   <b :style="{background:item.Value}"></b><span>{{item.Name}}</span> 
               </li>
            </div>
        </ul>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            currentIndex:0
        }
    },
    computed:{
        ...mapState({
            list:state=>state.color.list,
            arr:state=>state.color.arr,
        })
    },
    created(){
        this.getModelImageYearColor(this.$route.query.SerialID)
    },
    methods:{
        ...mapActions({
             getModelImageYearColor:'color/getModelImageYearColor' 
        }),
        //改变下标
        changeIndex(index){
            this.currentIndex = index
        },
        funColorId(ColorId){
            console.log(ColorId)
            this.$emit('update:flag',false)
            console.log()
        }
    },
    mounted(){
       
    }
}
</script>

<style scoped lang='scss'>
.active{
    color: #00afff;
}
.color-card{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    display: flex;
    flex-direction: column;
    header{
        width: 100%;
        height: 40px;
        font-size: 16px;
        color:#00afff;
        line-height: 40px;
        text-align: center;
        background: #fff;
    }
    .c-type{
        display: flex;
        width: 100%;
        height: 40px;
        margin-top: 10px;
        background: #fff;
        overflow-x: scroll;
        span{
            display: inline-block;
            width: 50px;
            height: 100%;
            line-height: 40px;
            text-align: center;
            scale:0;
            flex-shrink: 0;
        }
    }
   
}
 ul{
    margin-top: 10px;
    background: #fff;
    width: 100%;
    flex: 1;
    div{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
            width: 46%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1%;
            border: 1px solid #000;
            b{
                display: inline-block;
                width: 14px;
                height: 14px;
                border: 1px solid #000;
                margin-right: 5px;
            }
            span{
                font-size: 14px;
            }
        }
    }
}
div li:nth-child(odd){
    margin-right: 2%;
    margin-left: 2%;
}
</style>