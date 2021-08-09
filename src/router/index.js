import Vue from 'vue'
import Router from 'vue-router'
import background from '../components/home/background.vue'
Vue.use(Router)
const routes = [
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