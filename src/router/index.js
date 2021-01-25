import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("views/home/Home")
  },
  {
    path: '/category',
    name: 'category',
    component: () => import("views/category/Category")
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("views/cart/Cart")
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import("views/profile/Profile")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
