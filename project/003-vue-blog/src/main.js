import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import home from './page/Home';
import Admin from './page/Admin';


Vue.config.productionTip = false

Vue.use(VueRouter);

const routeConfig = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/admin',
    component: Admin,
  }
]
new Vue({
  render: h => h(App),
  router:new VueRouter({
    routes:routeConfig,
  }),
}).$mount('#app');
