<script setup lang="ts">
const route = useRoute();

const routeName = computed(() => {
  const { alias } = route.meta;

  return alias?.toString() || '';
});
</script>

<template>
  <PageHeader
    :title="routeName"
    background="#4DB372"
    image="/images/about-us/header-image.png"
  />

  <section class="page-wrapper min-h-[calc(100vh-640px)]">
    <router-view/>
  </section>

  <SectionDecoration/>
</template>

<style scoped>

</style>
