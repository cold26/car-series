import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';
Vue.use(Vuex)
//引入子模块

import home from './modules/home'
import detail from './modules/detail'
import Zxdj from './modules/Zxdj'
import City from './modules/city'

export default new Vuex.Store({
   modules :{
     home,
     detail,
     Zxdj,
     City
   },
   plugins:[creareLogger()]

})