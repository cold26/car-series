<template>
    <div class="color-card">
        <header>全部颜色</header>
        <div class="c-type" >
            <span v-for="(item,index) in list" :key="index">{{item}}</span>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            list:state=>state.color.list
        })
    },
    created(){
        this.getModelImageYearColor(this.$route.query.SerialID)
    },
    methods:{
        ...mapActions({
             getModelImageYearColor:'color/getModelImageYearColor' 
        })
    },
    mounted(){
       
    }
}
</script>

<style scoped lang='scss'>
.color-card{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
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
            width: 100px;
            height: 100%;
            line-height: 40px;
            text-align: center;
        }
    }
}
</style>