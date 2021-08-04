import Vue from 'vue'
import Router from 'vue-router'
import navBar from '../components/navBar.vue'
import background from '../components/background.vue'
Vue.use(Router)
const routes = [
  {
    path: '/about',
    component: navBar
  },
  {
    path: '/home',
    component: background
  },
  {
    path: '/',
    redirect: '/home'
  }
];

export default new Router({
  routes
})