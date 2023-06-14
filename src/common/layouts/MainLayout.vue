<script setup lang="ts">
const route = useRoute();

const routeData = computed(() => {
  const { alias, bannerBg, imageSrc } = route.meta;

  return {
    title: alias?.toString() || '',
    bannerBg: bannerBg?.toString() || '#4DB372',
    imageSrc: imageSrc?.toString() || '/images/about-us/header-image.png',
  }
});
</script>

<template>
  <PageHeader
    :title="routeData.title"
    :image="routeData.imageSrc"
    :background="routeData.bannerBg"
  />

  <section class="page-wrapper min-h-[calc(100vh-640px)]">
    <router-view/>
  </section>
</template>

<style scoped>

</style>