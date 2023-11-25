import { FeaturedItem } from '@/common/interfaces';

export const RED_PAZ_POSTS: FeaturedItem[] = [
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/resources/etnografia.png',
    title: 'Etnografía política e histórica de las víctimas del conflicto armado en Colombia',
    date: '2022',
    url: '/pdf/recursos/etnografia-politica.pdf',
    area: { ...FEATURED_AREAS.articles }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/resources/geografia.png',
    title: 'La geografía del posacuerdo y la reincorporación',
    date: '2023',
    url: '/pdf/recursos/geografia-posacuerdo.pdf',
    area: { ...FEATURED_AREAS.articles }
  },
  {
    category: 'Periódico UNAL',
    image: '/images/resources/busqueda-personas.png',
    title: 'El cambio de paradigma en la búsqueda de personas dadas por desaparecidas',
    date: '2022',
    url: 'https://periodico.unal.edu.co/articulos/el-cambio-de-paradigma-en-la-busqueda-de-personas-desaparecidas',
    area: { ...FEATURED_AREAS.articles }
  },
  {
    category: 'Periódico UNAL',
    image: '/images/resources/sanciones.png',
    title: 'Las sanciones que restauran son una garantía de no repetición',
    date: '2022',
    url: 'https://periodico.unal.edu.co/articulos/las-sanciones-que-restauran-son-una-garantia-de-no-repeticion',
    area: { ...FEATURED_AREAS.articles }
  },
  {
    category: 'Periódico UNAL',
    image: '/images/resources/politica-guerra.png',
    title: 'Política de guerra contra la deforestación es errada',
    date: '2022',
    url: 'https://periodico.unal.edu.co/articulos/politica-de-guerra-contra-la-deforestacion-es-errada',
    area: { ...FEATURED_AREAS.articles }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/linea-base.jpg',
    title: 'Diagnóstico de Linea Base',
    date: '2020',
    url: '/recursos/diagnostico-de-linea-base',
    area: { ...FEATURED_AREAS.articles },
    highlighted: true,
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/resources/unal.png',
    title: 'Universidad Nacional y conflicto',
    date: '2020',
    url: '/recursos/universidad-nacional-y-conflicto/informe',
    area: { ...FEATURED_AREAS.articles }
  },
]