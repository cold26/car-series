import './reset.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import "lib-flexible/flexible.js"

Vue.use(VueLazyload)


Vue.config.productionTip = false
import Vant from 'vant';
import { Lazyload } from 'vant';
Vue.use(Lazyload, {
    error: 'https://img.yzcdn.cn/vant/apple-1.jpg',
    loading:'https://img.yzcdn.cn/vant/apple-2.jpg'  
});
import { List } from 'vant';
import 'vant/lib/index.css';


Vue.use(List);
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


