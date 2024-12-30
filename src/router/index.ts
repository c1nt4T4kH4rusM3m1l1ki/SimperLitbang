import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/perencanaan',
    name: 'Perencanaan',
    component: () => import('../views/Perencanaan.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/kepegawaian',
    name: 'Kepegawaian',
    component: () => import('../views/Kepegawaian.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/laporan',
    name: 'Laporan',
    component: () => import('../views/Laporan.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/kegiatan',
    name: 'Kegiatan',
    component: () => import('../views/Kegiatan.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/peraturan',
    name: 'Peraturan',
    component: () => import('../views/Peraturan.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/keuangan',
    name: 'Keuangan',
    component: () => import('../views/Keuangan.vue'),
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
  } else if (to.path === '/login' && authStore.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;