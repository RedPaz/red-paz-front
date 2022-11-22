<script setup lang="ts">
import { buildImageSrc } from '@/common/utils';
import { BreadCrumbItem } from '@/common/interfaces';

defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});

const route = useRoute();

// Breadcrumbs
const routeList = computed(() => {
  const currentRoute = route.name;
  const result: BreadCrumbItem[] = [
    { label: 'Inicio', src: '/', isCurrentRoute: false, alias: 'Inicio' },
  ];
  // Add child routes
  route.matched.forEach((r) => {
    result.push({
      label: r.name?.toString() || '',
      src: r.path,
      isCurrentRoute: r.name === currentRoute,
      alias: r.meta['alias']?.toString() || '',
    })
  });
  
  return result;
});
</script>

<template>
  <div
    class="page-header flex items-center"
    :style="{ background }"
  >
    <div class="header-content">
      <h2 class="section-title whitespace-pre-line">{{ title }}</h2>

      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <template
          v-for="(route, index) in routeList"
          :key="index"
        >
          <a
            :class="{ 'active': route.isCurrentRoute }"
            class="breadcrumb-item"
            :href="route.src"
          >
            {{ route.alias }}
          </a>
          <i-mdi-chevron-right
            v-if="index + 1 !== routeList.length"
            class="separator"
          />
        </template>
      </div>
    </div>

    <img
      :src="buildImageSrc(image)"
      alt="Header image"
      class="hidden w-1/2 xl:block"
    >
  </div>
</template>

<style scoped>
.header-content {
  @apply text-white w-full px-5 py-8;
  @apply xl:w-1/2 xl:pl-28 xl:py-10;
}

.section-title {
  @apply text-left mb-6 xl:mb-8;
}

.breadcrumbs {
  @apply inline-flex items-center bg-white/20 rounded-full;
}

.breadcrumb-item {
  @apply px-2 pt-1 pb-0.5 leading-6 font-light text-sm;
  @apply xl:px-3 xl:pt-2 xl:pb-1 xl:text-lg xl:leading-8 xl:first:pl-5 xl:last:px-5 xl:last:ml-2;
}

.active {
  @apply font-bold bg-white/40 rounded-full;
}

.separator {
  @apply text-lg;
  @apply xl:text-2xl;
}
</style>
