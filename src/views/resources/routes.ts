import { RouteRecordRaw } from 'vue-router';
import Posts from '@/views/resources/Posts.vue';
import MainLayout from '@/common/layouts/MainLayout.vue';
import UnalConflicts from '@/views/resources/UnalConflicts.vue';
import BaseLinePublication from '@/views/resources/BaseLinePublication.vue';

const resourcesRoutes: RouteRecordRaw[] = [
  {
    path: '/recursos/',
    name: 'Recursos',
    component: MainLayout,
    meta: { alias: 'Recursos' },
    children: [
      {
        path: 'publicaciones',
        component: Posts,
        name: 'Publicaciones',
        meta: {
          alias: 'Publicaciones',
          bannerBg: '#334A3F',
        },
        children: [
          {
            path: 'diagnostico-de-linea-base',
            component: BaseLinePublication,
            name: 'Diagnóstico de línea base',
            meta: {
              alias: 'Diagnóstico de línea base',
              bannerBg: '#334A3F',
            },
          },
          {
            path: 'universidad-nacional-y-conflicto/:data',
            component: UnalConflicts,
            name: 'Universidad Nacional y Conflicto',
            meta: {
              alias: 'Universidad Nacional y Conflicto',
              bannerBg: '#334A3F',
              tabs: [
                { label: 'Informe', src: '/recursos/publicaciones/universidad-nacional-y-conflicto/informe' },
                { label: 'Línea de tiempo', src: '/recursos/publicaciones/universidad-nacional-y-conflicto/linea-de-tiempo' },
                { label: 'Cartografía', src: '/recursos/publicaciones/universidad-nacional-y-conflicto/cartografia-de-la-memoria' },
                { label: 'Equipo', src: '/recursos/publicaciones/universidad-nacional-y-conflicto/equipo' },
              ],
            },
          },
        ],
      },
    ],
  }
];

export default resourcesRoutes;