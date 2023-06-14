import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import AboutUs from '@/views/AboutUs.vue';
import Profile from '@/views/Profile.vue';

import experienceRoutes from '@/views/experiences/routes';
import AboutUsWrapper from '@/views/about-us/AboutUsWrapper.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Inicio',
    component: Home,
  },
  {
    path: '/sobre-nosotros',
    name: 'AboutUsWrapper',
    component: AboutUsWrapper,
    redirect: { name: 'AboutUs' },
    meta: { alias: 'Sobre Nosotros' },
    children: [
      {
        path: '',
        name: 'AboutUs',
        meta: { alias: 'Sobre Nosotros' },
        component: AboutUs,
      },
      {
        path: 'equipo-de-trabajo/:slug',
        name: 'Profile',
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
