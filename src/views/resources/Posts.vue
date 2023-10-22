<script setup lang="ts">
import { FeaturedItem } from '@/common/interfaces';

const route = useRoute();
const isMainRoute = computed(() => route.name === 'Publicaciones');

const POSTS: FeaturedItem[] = [
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/thematic-areas/art/no-image.jpg',
    title: 'Etnografía política e histórica de las víctimas del conflicto...',
    date: '2022',
    url: '#',
    area: { ...FEATURED_AREAS.training }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/thematic-areas/art/no-image.jpg',
    title: 'La geografía del posacuerdo y la reincorporación',
    date: '2023',
    url: '#',
    area: { ...FEATURED_AREAS.articles }
  },
  {
    category: 'Periódico UNAL',
    image: '/images/experiences/thematic-areas/art/no-image.jpg',
    title: 'El cambio de paradigma en la búsqueda de personas...',
    date: '2022',
    url: '#',
    area: { ...FEATURED_AREAS.articles }
  },
  {
    category: 'Periódico UNAL',
    image: '/images/experiences/thematic-areas/art/no-image.jpg',
    title: 'Las sanciones que restauran son una garantía de no repetición',
    date: '2022',
    url: '#',
    area: { ...FEATURED_AREAS.articles }
  },
  {
    category: 'Periódico UNAL',
    image: '/images/experiences/thematic-areas/art/no-image.jpg',
    title: 'La política de guerra contra la deforestación es equivocada...',
    date: '2022',
    url: '#',
    area: { ...FEATURED_AREAS.articles }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/thematic-areas/art/no-image.jpg',
    title: 'Diagnóstico de Linea Base',
    date: '2020',
    url: '/recursos/publicaciones/diagnostico-de-linea-base',
    area: { ...FEATURED_AREAS.articles }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/experiences/thematic-areas/art/no-image.jpg',
    title: 'Universidad Nacional y conflicto',
    date: '2020',
    url: '/recursos/publicaciones/universidad-nacional-y-conflicto/informe',
    area: { ...FEATURED_AREAS.articles }
  },
];


</script>

<template>
  <GridSection
    v-if="isMainRoute"
    title="Publicaciones"
    align-title-left
    :desktop-cols="3"
    :mobile-cols="1"
  >
    <template #description>
      <p class="description">Conoce las publicaciones realizadas en torno a la RedPaz Unal</p>
    </template>

    <template #items>
      <template v-if="POSTS.length">
        <PictureNew
          v-for="(item, index) in POSTS"
          :key="index"
          :item="item"
          class="featured-item rounded-md shadow-md shadow-gray-500/50"
        />
      </template>
    </template>

    <template #end>
      <SectionDecoration />
    </template>
  </GridSection>

  <router-view v-else />
</template>

<style scoped>
.description {
  @apply mb-8 text-lg;
}
</style>
