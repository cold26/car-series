import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex)
//引入子模块
import home from './modules/home'
import detail from './modules/detail'
export default new Vuex.Store({
   modules :{
     home,
     detail
   },
   plugins:[creareLogger()]

})