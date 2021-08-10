import Vue from 'vue'
import Router from 'vue-router'
import background from '../components/home/background.vue'
Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: background
  },
  {
    path: '/tech'

  }
];
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next() // 没有这个不会跳转
})
export default router