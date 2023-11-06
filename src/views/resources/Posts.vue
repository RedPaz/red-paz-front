<script setup lang="ts">
import { RED_PAZ_POSTS } from '@/common/constants';

const route = useRoute();
const isMainRoute = computed(() => route.name === 'Publicaciones');
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
      <template v-if="RED_PAZ_POSTS.length">
        <PictureNew
          v-for="(item, index) in RED_PAZ_POSTS"
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
