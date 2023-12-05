import { RouteRecordRaw } from 'vue-router';

import JobAreas from '@/common/components/JobAreas.vue';
import MainLayout from '@/common/layouts/MainLayout.vue';
import RedPazNew from '@/views/experiences/RedPazNew.vue';
import Experiences from '@/views/experiences/Experiences.vue';
import ThematicAreas from '@/views/experiences/ThematicAreas.vue';
import ProcessSupport from '@/views/experiences/ProcessSupport.vue';
import CathedraEdition from '@/views/experiences/cathedra/CathedraEdition.vue';
import ConflictCathedra from '@/views/experiences/cathedra/ConflictCathedra.vue';

import ENEP from '@/views/experiences/ENEP.vue';
import MemoryDetail from '@/views/experiences/MemoryDetail.vue';
import MiniserieActivity from '@/views/experiences/MiniserieActivity.vue';
import PodcastActivities from '@/views/experiences/PodcastActivities.vue';
import RedPazInitiatives from '@/views/experiences/RedPazInitiatives.vue';
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
        path: 'iniciativas-redpaz-unal',
        name: 'Iniciativas RedPaz UNAL',
        meta: { alias: 'Iniciativas RedPaz UNAL' },
        component: RedPazInitiatives,
      },
      {
        path: 'areas-tematicas',
        name: 'Áreas temáticas',
        meta: { alias: 'Áreas temáticas' },
        component: JobAreas,
        children: [
          {
            path: ':area',
            component: ThematicAreas,
          },
        ]
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
        children: [
          {
            path: 'catatumbo',
            name: 'Apoyo a procesos en Putumayo',
            component: MemoryDetail,
            meta: {
              alias: 'Catatumbo',
              subtitle: 'Entre la violencia que no cesa y la resistencia que se hace siembra y autocuidado',
              bannerBg: '#402C5A',
              imageSrc: '/images/experiences/activities/regions/main-banner.png',
            },
          },
        ]
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
            path: 'arauca/:year',
            name: 'Apoyo a procesos en Arauca',
            component: ProcessSupportDetail,
            meta: {
              alias: 'Arauca',
              bannerBg: '#402D5C',
              imageSrc: '/images/experiences/activities/regions/main-banner.png',
              tabs: [
                { label: '2021', src: '/experiencias-de-paz/apoyo-a-procesos/arauca/2021' },
                { label: '2022', src: '/experiencias-de-paz/apoyo-a-procesos/arauca/2022' },
                { label: '2022', src: '/experiencias-de-paz/apoyo-a-procesos/arauca/2023' },
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
          {
            path: 'caqueta-meta/:year',
            name: 'Apoyo a procesos en Caquetá y Meta',
            component: ProcessSupportDetail,
            meta: {
              alias: 'Caquetá - Meta',
              bannerBg: '#334A3F',
              imageSrc: '/images/experiences/activities/regions/main-banner.png',
              tabs: [
                { label: '2023', src: '/experiencias-de-paz/apoyo-a-procesos/caqueta-meta/2023' },
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
        path: 'miniserie/:year',
        name: 'Miniserie: La Paz en Foco',
        component: MiniserieActivity,
        meta: {
          alias: 'Miniserie',
          bannerBg: '#402D5C',
          tabs: [
            { label: '2021', src: '/experiencias-de-paz/miniserie/2021' },
            { label: '2022', src: '/experiencias-de-paz/miniserie/2022' },
          ],
        },
      },
      {
        path: 'enep-2020/:data',
        name: 'Encuentro Nacional de Experiencias de Paz 2020',
        component: ENEP,
        meta: {
          alias: 'ENEP 2020',
          bannerBg: '#FECB38',
          imageSrc: '/images/experiences/enep-2020/main-banner.png',
          tabs: [
            { label: 'Informe', src: '/experiencias-de-paz/enep-2020/informe' },
            { label: 'Proyectos', src: '/experiencias-de-paz/enep-2020/proyectos' },
          ],
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
      // Editions
      {
        path: 'catedra-conflicto-armado/edicion/:year',
        name: '',
        component: CathedraEdition,
        meta: {
          alias: 'Cátedra',
          bannerBg: '#0279AF',
          imageSrc: '/images/experiences/conflict-cathedra/main-banner.png',
        },
      },
    ],
  },
];

export default experienceRoutes;
