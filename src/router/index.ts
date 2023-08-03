import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import AboutUs from '@/views/about-us/AboutUs.vue';
import Profile from '@/views/about-us/Profile.vue';
import MainLayout from '@/common/layouts/MainLayout.vue';
import experienceRoutes from '@/views/experiences/routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Inicio',
    component: Home,
  },
  {
    path: '/sobre-nosotros',
    name: 'AboutUsWrapper',
    component: MainLayout,
    redirect: { name: 'Sobre Nosotros' },
    meta: { alias: 'Sobre Nosotros' },
    children: [
      {
        path: '',
        name: 'Sobre Nosotros',
        meta: { alias: 'Sobre Nosotros' },
        component: AboutUs,
      },
      {
        path: 'equipo-de-trabajo/:slug',
        name: 'Equipo de trabajo',
        component: Profile,
        meta: { alias: 'Equipo de trabajo' },
      },
    ],
  },
  ...experienceRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
