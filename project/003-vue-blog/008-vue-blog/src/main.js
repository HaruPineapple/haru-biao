import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './page/Home';
import Admin from './page/Admin';
import AdminPost from './page/AdminPost';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routerConfig = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/Admin',
    component: Admin,
    children: [
      {
        path: 'post/',
        component: AdminPost,
      }
    ]
  },
]

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: routerConfig,
  }),
}).$mount('#app');
