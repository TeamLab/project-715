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
    path: '/login',
    name: 'LogInView',
    component: () => import(/* webpackChunkName: "login", webpackPrefetch:true */ '../views/LogInView.vue')
  },
  {
    path: '/user/signup',
    name: 'SignUpView',
    component: () => import(/* webpackChunkName: "user" */ '../views/user/SignUpView.vue')
  },
  {
    path: '/user/findid',
    name: 'FindIdView',
    component: () => import(/* webpackChunkName: "user"  */ '../views/user/FindIdView.vue')
  },
  {
    path: '/user/findpwd',
    name: 'FindPwdView',
    component: () => import(/* webpackChunkName: "user" */ '../views/user/FindPwdView.vue')
  },
  {
    path: '/user/findidresult',
    name: 'FindIdResultView',
    component: () => import(/* webpackChunkName: "user", webpackPrefetch:true */ '../views/user/FindIdResultView.vue')
  },
  {
    path: '/mypage',
    name: 'MyPageView',
    component: () => import(/* webpackChunkName: "mypage" */ '../views/MyPageView.vue')
  },
  {
    path: '/rsvcomplete',
    name: 'ReservationComplete',
    component: () => import(/* webpackChunkName: "login", webpackPrefetch:true */ '../views/RsvCompleteView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
