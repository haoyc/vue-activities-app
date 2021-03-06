import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Holla from '@/components/Holla';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/holla',
      name: 'Holla',
      component: Holla,
    },
  ],
});
