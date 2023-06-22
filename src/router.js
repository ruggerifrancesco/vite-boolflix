import { createRouter, createWebHistory } from 'vue-router';
import AppLogin from './components/AppLogin.vue';
import AppWrapper from './components/AppWrapper.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: AppLogin
  },
  {
    path: '/app',
    name: 'AppWrapper',
    component: AppWrapper
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
