<template>
  <div class="wrap" :class="{active:chuan}">
      
  </div>
</template>

<script>
export default {
   props: ["chuan"]
}
</script>

<style lang="scss" scoped>
   .wrap{
       width:100%;
       height: 100%;
       background:rgba($color: #000000, $alpha: 0.5);
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

