<template>
    <div id="app">
        <Loading v-show="show" /> 
        <router-view/>
    </div>
</template>
<script>
import Loading from '@/components/Loading'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['show'])
  },
  components: {
    Loading 
  }
}
</script>  
<style lang="scss">
html{
  font-size: calc(100vw/750*100);
}
body{
  font-size: .32rem;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
*{
    box-sizing: border-box;
}
</style>
