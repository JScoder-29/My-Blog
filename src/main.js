import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'assets/css/reset.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import axios from 'axios'

Vue.use(mavonEditor)

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


