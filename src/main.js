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
import 'vant/lib/index.css';
import { List } from 'vant';

Vue.use(List);
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


