import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
require('./assets/css/normalize.css')
require('./assets/js/flex.js')
Vue.config.productionTip = false
// 导入axios;
import axios from 'axios';
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
