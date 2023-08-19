import { RouteRecordRaw } from 'vue-router';

import MainLayout from '@/common/layouts/MainLayout.vue';
import RedPazNew from '@/views/experiences/RedPazNew.vue';
import Experiences from '@/views/experiences/Experiences.vue';
import ThematicAreas from '@/views/experiences/ThematicAreas.vue';
import ProcessSupport from '@/views/experiences/ProcessSupport.vue';
import CathedraEdition from '@/views/experiences/cathedra/CathedraEdition.vue';
import ConflictCathedra from '@/views/experiences/cathedra/ConflictCathedra.vue';
import BuildingCathedra from '@/views/experiences/cathedra/BuildingCathedra.vue';

import ENEP from '@/views/experiences/ENEP.vue';
import MiniserieActivity from '@/views/experiences/MiniserieActivity.vue';
import PodcastActivities from '@/views/experiences/PodcastActivities.vue';
import DiscussionActivities from '@/views/experiences/DiscussionActivities.vue';
import ProcessSupportDetail from '@/views/experiences/ProcessSupportDetail.vue';

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
        children: [
          {
            path: 'putumayo/:year',
            name: 'Apoyo a procesos en Putumayo',
            component: ProcessSupportDetail,
            meta: {
              alias: 'Putumayo',
              bannerBg: '#4DB372',
              imageSrc: '/images/experiences/activities/regions/main-banner.png',
              tabs: [
                { label: '2021', src: '/experiencias-de-paz/apoyo-a-procesos/putumayo/2021' },
                { label: '2022', src: '/experiencias-de-paz/apoyo-a-procesos/putumayo/2022' },
              ],
            },
          },
          {
            path: 'caqueta/:year',
            name: 'Apoyo a procesos en Caquetá',
            component: ProcessSupportDetail,
            meta: {
              alias: 'Caquetá',
              bannerBg: '#0279AF',
              imageSrc: '/images/experiences/activities/regions/main-banner.png',
              tabs: [
                { label: '2021', src: '/experiencias-de-paz/apoyo-a-procesos/caqueta/2021' },
                { label: '2022', src: '/experiencias-de-paz/apoyo-a-procesos/caqueta/2022' },
              ],
            },
          },
        ],
      },
      {
        path: 'podcast',
        name: 'Podcast',
        component: PodcastActivities,
        meta: {
          alias: 'Podcast',
          subtitle: 'Vidas y caminos entre la guerra y la paz',
          imageSrc: '/images/experiences/podcasts/main-banner.png',
          bannerBg: '#031449',
        },
      },
      {
        path: 'miniserie',
        name: 'Miniserie: La Paz en Foco',
        component: MiniserieActivity,
        meta: {
          alias: 'Miniserie',
        },
      },
      {
        path: 'enep-2020',
        name: 'Encuentro Nacional de Experiencias de Paz 2020',
        component: ENEP,
        meta: {
          alias: 'ENEP 2020',
          bannerBg: '#FECB38',
        },
      },
      {
        path: 'catedra-conflicto-armado/:data',
        name: 'Cátedra \nDel conflicto armado a la construcción de paz',
        component: ConflictCathedra,
        meta: {
          alias: 'Cátedra',
          bannerBg: '#0279AF',
          imageSrc: '/images/experiences/conflict-cathedra/main-banner.png',
          tabs: [
            { label: 'Informe', src: '/experiencias-de-paz/catedra-conflicto-armado/informe' },
            { label: 'Trabajos finales', src: '/experiencias-de-paz/catedra-conflicto-armado/trabajos-finales' },
          ],
        },
      },
      {
        path: 'catedra-conflicto-armado/2021-2',
        name: 'Cátedra 2021-2\nDel conflicto armado a la construcción de paz',
        component: CathedraEdition,
        meta: {
          alias: 'Cátedra',
          bannerBg: '#0279AF',
          imageSrc: '/images/experiences/conflict-cathedra/main-banner.png',
        },
      },
      // {
      //   path: 'catedra-construccion-de-paz',
      //   name: 'Cátedra',
      //   component: BuildingCathedra,
      //   meta: {
      //     alias: 'Cátedra',
      //     subtitle: 'Construcción de paz en tiempos de Pos-acuerdo',
      //     bannerBg: '#0279AF',
      //   },
      // },
    ],
  },
];

export default experienceRoutes;
