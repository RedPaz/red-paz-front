<script setup lang="ts">
const route = useRoute();
const isRoot = route.name === 'Iniciativas RedPaz Unal';
</script>

<template>
  <section
    v-if="isRoot"
    class="activities"
  >
    <a href="/experiencias-de-paz/iniciativas-redpaz-unal/conversatorios">Conversatorios</a><br/>
    <a href="/experiencias-de-paz/iniciativas-redpaz-unal/podcast">Podcast</a>
  </section>

  <router-view v-else/>
</template>

<style scoped>
</style>
