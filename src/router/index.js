import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/About.vue')
  }, {
    path: '/detail',
    name: 'datail',
    component: () => import('../views/datail.vue')
  }, {
    path: '/pricepage',
    name: 'pricepage',
    component: () => import('../views/Zxdj.vue')
  },{
    path: '/img',
    component: () => import('../views/Img.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
