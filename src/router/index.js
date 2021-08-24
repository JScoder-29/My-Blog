import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//解决重复点击同一个标签出现Avoided redundant navigation to current location的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// const routes = [
//   {
//     path: '/',
//     name:'home',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     name:'home',
//     component: background
//   },
//   {
//     path: '/tech',
//     name:'tech',
//     component: background
//   },
//   {
//     path: '/about',
//     name:'about',
//     components: {
//       default:background,
//       about:about}
//   }
// ];

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name:'home',
    component: ()=>import('views/Home')
  },
  {
    path: '/article',
    name:'article',
    component: ()=>import('views/Home')
  },
  {
    path: '/detail',
    name:'detail',
    component: ()=>import('views/Detail')
  },
  {
    path: '/about',
    name:'about',
    component: ()=>import('views/About')
  },
  {
    path: '/tag',
    name: 'tag',
    component: ()=>import('views/Classify')
  }
]
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  //UC
  document.body.scrollTop = 0
  // firefox chrome
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next() // 没有这个不会跳转
})
export default router