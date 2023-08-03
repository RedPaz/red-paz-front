import { RouteRecordRaw } from 'vue-router';

import MainLayout from '@/common/layouts/MainLayout.vue';
import RedPazNew from '@/views/experiences/RedPazNew.vue';
import Experiences from '@/views/experiences/Experiences.vue';
import ThematicAreas from '@/views/experiences/ThematicAreas.vue';
import ProcessSupport from '@/views/experiences/ProcessSupport.vue';

import ENEP from '@/views/experiences/activities/ENEP.vue';
import ActivitiesRedPaz from '@/views/experiences/activities/ActivitiesRedPaz.vue';
import MiniserieActivity from '@/views/experiences/activities/MiniserieActivity.vue';
import PodcastActivities from '@/views/experiences/activities/PodcastActivities.vue';
import DiscussionActivities from '@/views/experiences/activities/DiscussionActivities.vue';

const experienceRoutes: RouteRecordRaw[] = [
  {
    path: '/experiencias-de-paz',
    name: 'Experiencias de Paz',
    component: MainLayout,
    redirect: { name: 'Experiencias de Paz' },
    meta: {
      alias: 'Experiencias de Paz',
      imageSrc: '/images/experiences/main-banner.png',
    },
    children: [
      {
        path: '',
        name: 'Experiencias de Paz',
        meta: { alias: 'Experiencias de Paz' },
        component: Experiences,
      },
      {
        path: 'areas-tematicas/:area',
        name: 'Áreas temáticas',
        meta: { alias: 'Áreas temáticas' },
        component: ThematicAreas,
      },
      {
        path: 'areas-tematicas/:area/:id',
        name: 'RedPazNew',
        meta: { alias: 'Proyecto' },
        component: RedPazNew,
      },
      {
        path: 'conversatorios',
        name: 'Conversatorios \nterritoriales y temáticos 2020',
        component: DiscussionActivities,
        meta: {
          alias: 'Conversatorios',
          bannerBg: '#FECB38',
          imageSrc: '/images/experiences/discussions/main-banner.png',
        },
      },
      {
        path: 'apoyo-a-procesos',
        name: 'Apoyo a procesos en regiones',
        component: ProcessSupport,
        meta: {
          alias: 'Apoyo a procesos en regiones',
          bannerBg: '#402C5A',
          imageSrc: '/images/experiences/activities/regions/main-banner.png',
        },
      },
      {
        path: 'podcast',
        name: 'Podcast',
        component: PodcastActivities,
        meta: {
          alias: 'Podcast',
          subtitle: 'Vidas y caminos entre la guerra y la paz',
          bannerBg: '#031449',
        },
      },
      {
        path: 'miniserie',
        name: 'Miniserie: La Paz en Foco',
        component: MiniserieActivity,
        meta: { alias: 'Miniserie' },
      },
      {
        path: 'enep-2020',
        name: 'Encuentro Nacional de Experiencias de Paz 2020',
        component: ENEP,
        meta: { alias: 'ENEP 2020' },
      },
    ],
  },
];

export default experienceRoutes;
