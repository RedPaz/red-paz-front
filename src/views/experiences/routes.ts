import { RouteRecordRaw } from 'vue-router';

import ExperiencesWrapper from '@/views/experiences/ExperiencesWrapper.vue';

const experienceRoutes: RouteRecordRaw[] = [
  {
    path: '/experiencias-de-paz',
    name: 'Experiencias de Paz',
    component: ExperiencesWrapper,
  },
];

export default experienceRoutes;
