import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import store from './store'

//Vue.config.productionTip = false

axios.interceptors.request.use(config => {
  config.baseURL = 'http://localhost:9000';

  if (localStorage.getItem('token')) {
    config.headers.common['Authorization'] = localStorage.token;
  }

  return config;
});

axios.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.status === 403 || error.status === 401) {
      Vue.$store.dispatch('logout');
      router.push({path: '/login'})
    }
  }
);

Vue.use(VueAxios, axios);
Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
