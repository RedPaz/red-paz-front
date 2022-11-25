<script setup lang="ts">
const route = useRoute();
const isRoot = route.name === 'Iniciativas RedPaz Unal';
</script>

<template>
  <section
    v-if="isRoot"
    class="activities"
  >
    <a href="/experiencias-de-paz/iniciativas-redpaz-unal/conversatorios">Conversatorios territoriales y temáticos</a><br/>
    <a href="/experiencias-de-paz/iniciativas-redpaz-unal/podcast">Podcast</a><br/>
    <a href="/experiencias-de-paz/iniciativas-redpaz-unal/miniserie">Miniserie: La Paz en Foco</a><br/>
    <a href="/experiencias-de-paz/iniciativas-redpaz-unal/enep-2020">Encuentro Nacional de Experiencias de Paz 2020</a><br/>
  </section>

  <router-view v-else/>
</template>

<style scoped>
</style>
