import './reset.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import "lib-flexible/flexible.js"

Vue.use(VueLazyload)


Vue.config.productionTip = false

import { Lazyload,ImagePreview  } from 'vant';
Vue.use(Lazyload, {
    error: 'https://img.yzcdn.cn/vant/apple-1.jpg',
    loading:'http://h5.chelun.com/2017/official/img/loading.gif'  
})
.use(ImagePreview)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


