<script setup lang="ts">
import { AreaItem } from '@/common/interfaces';
import { THEMATIC_AREAS } from '@/common/constants';

const route = useRoute();
const areaSlug = route.params.area;

const routeData = computed(() => {
  let areaData: Partial<AreaItem> = {};
  const { alias, bannerBg, imageSrc } = route.meta;

  if (areaSlug?.length) {
    const areaIndex = THEMATIC_AREAS.findIndex((area) => area.slug === areaSlug);
    // Set value if exists
    if (areaIndex !== -1) areaData = THEMATIC_AREAS[areaIndex];
  }

  return {
    title: alias?.toString() || '',
    bannerBg: bannerBg?.toString() || '#4DB372',
    imageSrc: areaData?.bannerSrc || imageSrc?.toString() || '/images/about-us/header-image.png',
    subtitle: areaData?.name || '',
    color: areaData?.color,
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
    <router-view/>
  </section>
</template>

<style scoped>

</style>