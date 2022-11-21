import { RouteRecordRaw } from 'vue-router';

import ExperiencesWrapper from '@/views/experiences/ExperiencesWrapper.vue';

import ActivitiesRedPaz from '@/views/experiences/activities/ActivitiesRedPaz.vue';
import PodcastActivities from '@/views/experiences/activities/PodcastActivities.vue';
import DiscussionActivities from '@/views/experiences/activities/DiscussionActivities.vue';

const experienceRoutes: RouteRecordRaw[] = [
  {
    path: '/experiencias-de-paz',
    name: 'Experiencias de Paz',
    component: ExperiencesWrapper,
    children: [
      {
        path: 'iniciativas-redpaz-unal',
        name: 'Iniciativas RedPaz Unal',
        component: ActivitiesRedPaz,
        children: [
          {
            path: 'conversatorios',
            name: 'Conversatorios',
            component: DiscussionActivities
          },
          {
            path: 'podcast',
            name: 'Podcast',
            component: PodcastActivities
          },
        ],
      },
    ],
  },
];

export default experienceRoutes;
