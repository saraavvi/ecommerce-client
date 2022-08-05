import { createRouter, createWebHistory } from 'vue-router';

import AdminPage from './pages/AdminPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/admin', component: AdminPage },
  ],
});

export default router;
