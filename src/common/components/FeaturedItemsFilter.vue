<script setup lang="ts">
import { PropType } from 'vue';
import { RedArea } from '@/common/types';
import { FeaturedItem } from '@/common/interfaces';

const props = defineProps({
  items: {
    type: Array as PropType<FeaturedItem[]>,
    required: true,
  },
});

const filterForm = ref({
  name: '',
  year: '',
  area: 0
});

const { items } = toRefs(props);

const years = ['2018', '2019', '2020', '2021', '2022', '2023'].map(
  (year) => ({ label: year, value: year })
);

const filteredItems = computed(() => items.value
  // Area filter
  .filter((item) => {
    if (filterForm.value.area === 0) return items;
    return item.area.id === filterForm.value.area;
  })
  // Name filter
  .filter((item) => {
    const { name } = filterForm.value;
    if (name.length === 0) return item;
    return item.title.toLowerCase().includes(name.toLowerCase());
  })
  // Year filter
  .filter((item) => {
    const { year } = filterForm.value;
    if (year.length === 0) return item;
    return item.date.includes(year);
  })
);

const areas = Object.values(FEATURED_AREAS).filter((value) => value.id !== undefined);


</script>

<template>
  <div class= "filter-items">
    <div class="filter-item col-span-2">
      <strong>Búsqueda</strong>
      <input
        type="text"
        class="border p-2  h-9"
        v-model="filterForm.name"
      >
    </div>

    <div class="filter-item col-span-1">
      <strong>Año</strong>
      <select
        v-model="filterForm.year"
        class="border p-2"
      >
        <option
          v-for="(year, index) in years"
          :key="index"
          :value="year.value"
        >{{ year.label }}</option>
      </select>
    </div>

    <div class="filter-item col-span-1">
      <strong>Líneas de trabajo</strong>
      <select
        v-model="filterForm.area"
        class="border p-2"
      >
        <option
          v-for="(area, index) in areas"
          :key="index"
          :value="area.id"
        >{{ area.name }}</option>
      </select>
    </div>

    <!-- <button
      class="filter-submit"
    >
      Buscar
    </button> -->
  </div>

  <GridSection
    :desktop-cols="(filteredItems.length > 0) ? 3 : 1"
    :mobile-cols="1"
    background="bg-gray-100"
  >
    <template #items>
      <template v-if="filteredItems.length > 0">
        <PictureNew
          v-for="(item, index) in filteredItems"
          :key="index"
          :item="item"
          show-red-icon
        />
      </template>

      <EmpyItems
        v-else
        empty-text="No se encontraron trabajos con los filtros seleccionados, intenta con nuevamente."
      />
    </template>

    <template #end>
      <SectionDecoration />
    </template>
  </GridSection>
</template>

<style scoped>
.filter-items {
  @apply px-28 grid grid-cols-4 gap-5 mb-32;
}

.filter-item {
  @apply flex flex-col;
}

.filter-item strong {
  @apply text-lg block mb-1;
}
.filter-item input, .filter-item select {
  @apply bg-gray-100 rounded-sm;
}

.filter-submit {
  @apply col-span-1 leading-10 text-lg block mt-8 bg-green-red duration-150 ease-in-out hover:bg-green-red/75 h-9 rounded-md text-white font-bold;
}
</style>
