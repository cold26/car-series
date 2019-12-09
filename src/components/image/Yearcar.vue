<template>
    <div class="yearcar">
        <header @click="changeHide()">全部车款</header>
        <div class="c-type">
            <span v-for="(item,index) in year" :key="index" 
                @click="changeIndex(index)" 
                :class="{active:selectIndex == index}"
            >{{item}}
            </span>
        </div>
        <div class="main">
            <div v-for="(item,index) in currentList" :key="index" class="item">
                <p>{{item.key}}</p>
                <ul>
                    <div class="ulDiv"  v-for="(val,i) in item.list" :key="i">
                         <li>
                            <p>{{val.market_attribute.year}}款 {{val.car_name}}</p> 
                            <span>{{val.market_attribute.dealer_price_min}}起</span>
                        </li>
                        <li>
                            <p>{{val.horse_power}}马力{{val.gear_num}}挡{{val.trans_type}}</p>
                            <span>指导价 ：{{val.market_attribute.official_refer_price}}</span>
                        </li>
                    </div>
                   
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return {
            selectIndex:0,
        }
    },
    computed:{
        ...mapState({
            currentList:state=>state.detail.currentList,
            year:state=>state.detail.year
        })
    },
    methods:{
        changeIndex(index){
            this.selectIndex = index
        },
        changeHide(){
            this.$emit('update:showCar',false)
        }
    },
    created(){
        let list = this.$store.state;
        
        console.log(list.detail,"list")
        console.log(this.$store,"1113222")
    }
}
</script>

<style scoped lang='scss'>
.active{
    color: #00afff;
}
.yearcar{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    overflow-x: hidden;
    overflow-y:scroll;
    header{
        width: 100%;
        height:50px;
        line-height:50px;
        text-align: center;
        color: #00afff;
        font-size: 16px;
        background: #fff;
    }
    .c-type{
        width: 100%;
        height: 50px;
        display: flex;
        overflow-x: scroll;
        align-items: center;
        padding:0 10px;
        background: #fff;
        margin: 10px 0;
        margin-bottom: 0;
        span{
            width: 50px;
            font-size: 14px;
            flex-shrink: 1;
        }
    }
    
}
.main{
    flex: 1;
    // overflow-y: scroll;
    // overflow: auto;
}
.item{
    flex-shrink: 1;
}
.item p{
    padding:5px;
}
.item ul{
    padding: 10px 10px;
    background: #fff;
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 25px;

        span{
            color: red;
        }
    }
}
.ulDiv{
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    
}
.ulDiv li:first-child p{
    font-size: 16px;
}
.ulDiv li:last-child p,.ulDiv li:last-child span{
    font-size: 12px;
    color:#818181; 
}

</style>