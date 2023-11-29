<script setup lang="ts">
import { FeaturedItem } from '@/common/interfaces';
import { RED_PAZ_INITIATIVES } from '@/common/constants';

const route = useRoute();
const filter = ref('Todas');

const isMainRoute = computed(() => route.path === '/experiencias-de-paz/iniciativas-redpaz-unal');

const featuredItems = computed((): FeaturedItem[] => {
  if (filter.value === 'Todas') return RED_PAZ_INITIATIVES;

  return RED_PAZ_INITIATIVES.filter((item) => item.area.name === filter.value);
});

const categories = Object.values(FEATURED_AREAS).filter((value) => !value.id);
</script>

<template>
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
      <div class="filters xl:absolute xl:right-28 xl:top-36 flex items-center">
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

      <EmptyItems
        v-else
        show-shadow
        empty-text="No se encontraron iniciativas con la categoría seleccionada, intenta con otro tipo."
      />
    </template>

    <template
      v-if="isMainRoute"
      #end
    >
      <SectionDecoration />
    </template>
  </GridSection>
</template>

<style scoped>
.description {
  @apply mb-8 text-lg;
}
</style>
