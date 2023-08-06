<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { FeaturedItem } from '@/common/interfaces';

const filter = ref('Todas');

const featuredItems = computed((): FeaturedItem[] => {
  const items = [
    {
      category: 'INICIATIVAS REDPAZ UNAL',
      image: '/images/experiences/activities/catedra.png',
      title: 'Cátedra: Construcción de paz en tiempos de Pos-acuerdo',
      date: '2023',
      url: '#',
      area: { ...FEATURED_AREAS.training }
    },
    {
      category: 'INICIATIVAS REDPAZ UNAL',
      image: '/images/experiences/activities/apoyo-regiones.png',
      title: 'Apoyo a procesos en regiones',
      date: '2023',
      url: '/experiencias-de-paz/apoyo-a-procesos',
      area: { ...FEATURED_AREAS.processes }
    },
    {
      category: 'INICIATIVAS REDPAZ UNAL',
      image: '/images/experiences/activities/episodios.jpg',
      title: 'Episodios: La paz en Foco',
      date: '2022',
      url: '#',
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
      url: '/experiencias-de-paz/enep-2020',
      area: { ...FEATURED_AREAS.events }
    },
    {
      category: 'INICIATIVAS REDPAZ UNAL',
      image: '/images/experiences/activities/conflicto-armado.jpg',
      title: 'Catedra: Del conflicto armado a la construcción de paz',
      date: '16 de septiembre de 2020',
      url: '/experiencias-de-paz/catedra-conflicto-armado',
      area: { ...FEATURED_AREAS.training }
    },
  ];

  if (filter.value === 'Todas') return items;

  return items.filter((item) => item.area.name === filter.value);
});

const categories = Object.values(FEATURED_AREAS).filter((value) => !value.id);
</script>

<template>
  <section class="redpaz-experiences">
    <GridSection
      title="Iniciativas RedPaz Unal"
      align-title-left
      :desktop-cols="featuredItems.length ? 3 : 1"
      :mobile-cols="1"
    >
      <template #description>
        <p class="description">Explora los diferentes contenidos relacionados con las iniciativas de la RedPaz Unal.</p>
      </template>

      <template #items>
        <div class="filters absolute right-28 top-36 flex items-center">
          <label class="font-semibold">Filtra por categoría:</label>

          <select
            v-model="filter"
            class="border ml-5 p-2 w-40"
          >
            <option
              v-for="(category, index) in categories"
              :key="index"
              :value="category.name"
            >{{ category.name }}</option>
          </select>
        </div>

        <template v-if="featuredItems.length">
          <PictureNew
            v-for="(item, index) in featuredItems"
            :key="index"
            :item="item"
            class="featured-item rounded-md shadow-md shadow-gray-500/50"
          />
        </template>

        <div
          v-else
          class="empty-items shadow-md bg-gray-200/25 rounded-lg border border-gray-100 p-6 text-gray-500/75 flex flex-col justify-center items-center"
        >
          <Icon
            icon="mdi-grid-off"
            class="m-14 text-8xl"
          />

          <h3 class="text-lg w-80 text-center mb-14">
            No se encontraron iniciativas con la categoría seleccionada, intenta con otro tipo.
          </h3>
        </div>
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