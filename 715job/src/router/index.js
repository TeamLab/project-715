import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'LogInView',
    component: () => import(/* webpackChunkName: "login", webpackPrefetch:true */ '../views/LogInView.vue')
  },
  {
    path: '/user/signup',
    name: 'SignUpView',
    component: () => import(/* webpackChunkName: "login", webpackPrefetch:true */ '../views/user/SignUpView.vue')
  },
  {
    path: '/user/findid',
    name: 'FindIdView',
    component: () => import(/* webpackChunkName: "login", webpackPrefetch:true */ '../views/user/FindIdView.vue')
  },
  {
    path: '/user/findpwd',
    name: 'FindPwdView',
    component: () => import(/* webpackChunkName: "login", webpackPrefetch:true */ '../views/user/FindPwdView.vue')
  },
  {
    path: '/mypage/rsvinfo',
    name: 'MyRsvInfoView',
    component: () => import(/* webpackChunkName: "login", webpackPrefetch:true */ '../views/mypage/MyRsvInfoView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
