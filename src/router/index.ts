import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import AboutUs from '@/views/AboutUs.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Inicio',
    component: Home,
  },
  {
    path: '/sobre-nosotros',
    name: 'Sobre Nosotros',
    component: AboutUs,
    children: [
      {
        path: 'test',
        name: 'Ruta hija 1',
        component: AboutUs,
      },
      {
        path: 'test-2',
        name: 'Ruta hija 2',
        component: AboutUs,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
