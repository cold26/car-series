<template>
    <div class="box">
        <div class="mark">
            <div v-for="(item,index) in list" :key="index" class="item">
                <h4>{{item.GroupName}}</h4>
                <div v-for="(item1,index1) in item.GroupList" :key='index1' class="items">
                    <div class="left"><img :src=item1.CoverPhoto alt=""></div>
                    <div class="right">
                        <p>{{item1.AliasName}}</p>
                        <p>{{item1.DealerPrice}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["list"],
    data(){
        return {
            
        }
    },
    created(){
        
    }
}
</script>

<style scoped lang='scss'>
.box{
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    position: fixed;
    background: #fff;
    .mark{
        width: 100%;
        height: 100%;
        overflow: scroll;
        h4{
            background: #f2f2f2;
            height: 25px;
            line-height: 25px;
            font-weight: normal;
        }
     
        .items{
            display: flex;
            align-items: center;
            height: 70px;
            padding: 5px 0;
            border-bottom: 1px solid #ccc;
            .left{
                width: 40%;
                height: 100%;
                img{
                    height: 100%;
                    width: 100%;
                    background-size: cover;
                }
            }
            .right{
                flex: 1;
                height: 100%;
            }
        }
        
     }
   }
</style>