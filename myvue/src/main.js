import Vue from 'vue'
import App from './App.vue'
import router from './router'
require ('./mock.js');
import axios from 'axios'
require("./assets/css/normalize.css");
require("./assets/js/flex.js")
Vue.config.productionTip = false
Vue.prototype.$http=axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
