<template>
  <div class="shangla-wrap">
    <div class="top">
        刷新...
    </div>
    <div class="wrap-content">
        <div class="content">
            <div  v-for="(item,index) in shuju" :key="index">
                <img :src="item.Url.replace('{0}',item.HighSize)" alt="">
            </div>
        </div>
    </div>
    <div class="bottom">
        加载...
    </div>
  </div>
</template>

<script>
import axios from "axios"
import BScroll from 'better-scroll'

export default {
    data(){
       return{
           shuju:[],
           Page: 1,
           flag:false
       }
    },
   created(){
      axios.get("http://baojia.chelun.com/v2-car-getCategoryImageList.html",{
          params:{
           SerialID:2593,
           ImageID:6,
           Page	:this.page,
         PageSize:30
          }
      }).then(res=>{
          console.log(res.data,1111111)
 
          this.shuju = res.data.data.List
      })
   },
   mounted() {
       let bScroll = new BScroll('.wrap-content', {
            pullDownRefresh: {
                threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
            },
            pullUpLoad: {
                threshold: -50 // 往上滑超过50px 触发再次加载
            },
       })
       console.log(bScroll)//打印得是一个对象

        bScroll.on('pullingUp', () => {  //绑定一个上拉时间，超过52的这个值时触发这个事件
            if (this.flag) return  
            this.flag = true
            let p = this.page + 1
            axios.get("http://baojia.chelun.com/v2-car-getCategoryImageList.html",{
                params:{
                SerialID:2593,
                ImageID:6,
                Page:p,
                PageSize:30
                }
            }).then(res=>{
                    console.log(res.data,1111111)
                    let arr = this.shuju.concat(res.data.data.List)
                    this.shuju = arr
                    bScroll.refresh()
                    bScroll.finishPullUp()
                    this.flag = false
                })
            })
   }
}
</script>

<style scoped>
.shangla-wrap, .wrap-content {
    height: 100%;
    overflow: hidden;
}
    .top, .bottom {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
   img{
       width: 100%;
       height: 200px;
   }
</style>