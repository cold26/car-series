<template>
    <div class="yearcar">
        <header>全部车款</header>
        <div class="c-type">
            <span v-for="(item,index) in year" :key="index">{{item}}</span>
        </div>
        <div class="main">
            <div v-for="(item,index) in currentList" :key="index">
                <p>{{item.key}}</p>
                <ul v-for="(val,i) in item.list" :key="i">
                    <div>
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
    computed:{
        ...mapState({
            currentList:state=>state.detail.currentList,
            year:state=>state.detail.year
        })
    },
    created(){
        let list = this.$store.state;
        
        console.log(list.detail,"list")
        console.log(this.$store,"1113222")
    }
}
</script>

<style scoped lang='scss'>
.yearcar{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
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
ul{
    p{
        padding:0 10px;
        
    }
    div{
        display: flex;
        height: 50px;
        padding: 10px;
        background: #fff;
    }
}
ul>li:first-child{
    p{
        font-size: 15px;
    }
    span{
        color:red;
    }
}
</style>