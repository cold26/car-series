import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';

Vue.use(Vuex)

//引入子模块

import home from './modules/home'
import detail from './modules/detail'
import Zxdj from './modules/Zxdj'
import City from './modules/city'
<<<<<<< HEAD
import Img from "./modules/img"
import Color from "./modules/color"
import Up from "./modules/up"
import Right from "./modules/Right"
=======
import img from './modules/img'
import color from './modules/color'

>>>>>>> zyh
export default new Vuex.Store({
   modules :{
     home,
     detail,
     Zxdj,
     City,
<<<<<<< HEAD
     Img,
     Color,
     Up,
     Right
=======
     img,
     color
>>>>>>> zyh
   },
   plugins:[creareLogger()]

})