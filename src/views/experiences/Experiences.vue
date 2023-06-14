<script setup lang="ts">
import { FeaturedItem } from '@/common/interfaces';

const featuredItems: FeaturedItem[] = [
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/memorias.jpg',
    title: 'Conversatorios territoriales y temáticas',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.events }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/podcast.jpg',
    title: 'Podcast: Vidas y caminos entre la guerra y la paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.podcast }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/episodios.jpg',
    title: 'Episodios: La paz en Foco',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.videos }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/encuentro-nacional.jpg',
    title: 'Encuentro Nacional de Experiencias de Paz 2020',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.events }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/conflicto-armado.jpg',
    title: 'Catedra: Del conflicto armado a la construcción de paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.training }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/linea-base.jpg',
    title: 'Diagnóstico de Linea Base',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.processes }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/unal.jpg',
    title: 'Universidad Nacional y conflicto',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.processes }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/activities/extension.jpg',
    title: 'Proyecto de extensión 1',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.others }
  },
];
</script>

<template>
  <section class="redpaz-experiences">
    <GridSection
      title="Iniciativas RedPaz Unal"
      align-title-left
      :desktop-cols="3"
      :mobile-cols="1"
    >
      <template #description>
        <p class="description">Explora los diferentes contenidos relacionados con las iniciativas de la RedPaz Unal.</p>
      </template>

      <template #items>
        <PictureNew
          v-for="(item, index) in featuredItems"
          :key="index"
          :item="item"
          class="featured-item rounded-md shadow-md shadow-gray-500/50"
        />
      </template>
    </GridSection>

    <JobAreas>
      <template #append>
        <SectionDecoration />
      </template>
    </JobAreas>
  </section>
</template>

<style scoped>
.description {
  @apply mb-8 text-lg;
}
</style>