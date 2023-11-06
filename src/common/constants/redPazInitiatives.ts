import { FeaturedItem } from '@/common/interfaces';

export const RED_PAZ_INITIATIVES: FeaturedItem[] = [
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/catedra.png',
    title: 'Cátedra: Construcción de paz en tiempos de Pos-acuerdo',
    date: '2023',
    url: 'https://sites.google.com/unal.edu.co/catedra-construccion-de-paz/inicio',
    area: { ...FEATURED_AREAS.training },
    blank: true,
    highlighted: true,
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/apoyo-regiones.png',
    title: 'Apoyo a procesos en regiones',
    date: '2023',
    url: '/experiencias-de-paz/apoyo-a-procesos',
    area: { ...FEATURED_AREAS.processes },
    highlighted: true,
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/episodios.jpg',
    title: 'Episodios: La paz en Foco',
    date: '2022',
    url: '/experiencias-de-paz/miniserie',
    area: { ...FEATURED_AREAS.videos }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/conversatorios.png',
    title: 'Conversatorios territoriales y temáticas 2020',
    date: '2020',
    url: '/experiencias-de-paz/conversatorios',
    area: { ...FEATURED_AREAS.events }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/podcast.jpg',
    title: 'Podcast: Vidas y caminos entre la guerra y la paz',
    date: '2020',
    url: '/experiencias-de-paz/podcast',
    area: { ...FEATURED_AREAS.podcast }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/encuentro-nacional.jpg',
    title: 'Encuentro Nacional de Experiencias de Paz 2020',
    date: '2020',
    url: '/experiencias-de-paz/enep-2020/informe',
    area: { ...FEATURED_AREAS.events }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/conflicto-armado.jpg',
    title: 'Catedra: Del conflicto armado a la construcción de paz',
    date: '16 de septiembre de 2020',
    url: '/experiencias-de-paz/catedra-conflicto-armado/informe',
    area: { ...FEATURED_AREAS.training }
  },
];
