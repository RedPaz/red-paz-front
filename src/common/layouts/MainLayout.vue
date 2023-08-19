<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAreasStore, useHeaderStore } from '@/common/stores';
import { THEMATIC_AREAS } from '@/common/constants';

const route = useRoute();
const areaSlug = route.params.area;
const headerStore = useHeaderStore();

const routeData = computed(() => {
  const areasStore = useAreasStore();
  const { currentArea } = storeToRefs(areasStore);
  const { bannerBg, imageSrc, subtitle } = route.meta;

  if (areaSlug?.length) {
    const areaIndex = THEMATIC_AREAS.findIndex((area) => area.slug === areaSlug);
    // Set value if exists
    if (areaIndex !== -1) {
      const selectedArea = THEMATIC_AREAS[areaIndex];
      areasStore.setCurrentArea(selectedArea);

      const areaName = Object.values(FEATURED_AREAS).find((value) => value.id === selectedArea.id);
      // Set name
      if (areaName) headerStore.setAlias(areaName.name);
    }
  }

  return {
    title: areaSlug?.length ? 'Áreas temáticas' : (route.name?.toString() || ''),
    bannerBg: bannerBg?.toString() || '#4DB372',
    imageSrc: currentArea.value?.bannerSrc || imageSrc?.toString() || '/images/about-us/header-image.png',
    subtitle: currentArea.value?.name || subtitle?.toString() || '',
    color: currentArea.value?.color,
  };
});
</script>

<template>
  <PageHeader
    :title="routeData.title"
    :image="routeData.imageSrc"
    :subtitle="routeData.subtitle"
    :background="routeData.color || routeData.bannerBg"
  />

  <section class="page-wrapper">
    <slot />

    <router-view/>
  </section>
</template>

<style scoped>

</style>