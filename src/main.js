import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import { Toast } from 'vant';

import 'vant/lib/index.css';
import http from './network/http'
import _ from 'lodash'
Vue.use(Vant);

Vue.prototype.$http = http
Vue.prototype.$toast = Toast
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
