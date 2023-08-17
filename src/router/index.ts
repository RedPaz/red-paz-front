import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import AboutUs from '@/views/about-us/AboutUs.vue';
import Profile from '@/views/about-us/Profile.vue';
import Partners from '@/views/partners/Partners.vue';
import MainLayout from '@/common/layouts/MainLayout.vue';
import experienceRoutes from '@/views/experiences/routes';
import PartnerDetail from '@/views/partners/PartnerDetail.vue';

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
  {
    path: '/nuestros-aliados/:category',
    name: 'Nuestros Aliados',
    component: Partners,
    meta: {
      alias: 'Nuestros Aliados',
      bannerBg: '#402D5C',
      tabs: [
        { label: 'Sistema Integral para la Paz', src: '/nuestros-aliados/sistema-integral-para-la-paz' },
        { label: 'Entidades Gubernamentales', src: '/nuestros-aliados/entidades-gubernamentales' },
        { label: 'Organismos Internacionales', src: '/nuestros-aliados/organismos-internacionales' },
        { label: 'Organismos Sociales', src: '/nuestros-aliados/organismos-sociales' },
      ],
    },
    children: [
      {
        path: '/nuestros-aliados/:category/:entity',
        component: PartnerDetail,
        name: 'Entidades',
        meta: { alias: 'Entidades' },
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
