<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHeaderStore } from '@/common/stores';
import { BreadCrumbItem, HeaderItem } from '@/common/interfaces';

defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: '',
  },
  background: {
    type: String,
    required: true,
    validator: (value: string) => /^#[0-9A-F]{6}$/i.test(value),
  },
});

const route = useRoute();
const headerStore = useHeaderStore();
const { showTabs, tabs, imageSrc, alias } = storeToRefs(headerStore);

// Breadcrumbs
const routeList = computed(() => {
  const currentRoute = route.name;
  const result: BreadCrumbItem[] = [
    { label: 'Inicio', src: '/', isCurrentRoute: false, alias: 'Inicio' },
  ];

  let disabledPath = '';
  // Add child routes
  route.matched.forEach((r, i) => {
    const path: string[] = [];

    r.path.split('/').forEach((p) => {
      const value = p.startsWith(':') ? route.params[p.slice(1)].toString() : p;
      // Push value
      path.push(value)
    });

    const name = r.meta['alias']?.toString() || alias.value || '';

    if (r.path === disabledPath) {
      result[i].isCurrentRoute = true;

      return;
    }

    result.push({
      label: name,
      src: path.join('/'),
      isCurrentRoute: r.name === currentRoute,
      alias: name,
    });

    if (r.redirect) disabledPath = r.path;
  });

  return result;
});

onBeforeMount(() => {
  const items = route.meta['tabs'] as HeaderItem[];

  if (items) {
    headerStore.setTabs(items);

    const currentTab = tabs.value.find((tab) => tab.src === route.path);
    if (currentTab) headerStore.selectTab(currentTab);
  }
})
</script>

<template>
  <div
    class="page-header flex items-center flex-nowrap"
    :style="{ background }"
  >
    <div class="header-content">
      <h2 class="section-title whitespace-pre-line">
        {{ title }}
        <span v-if="subtitle.length" class="section-subtitle block !mb-0">{{ subtitle }}</span>
      </h2>

      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <template
          v-for="(route, index) in routeList"
          :key="index"
        >
          <a
            :href="route.src"
            :class="{ 'active': route.isCurrentRoute }"
            class="breadcrumb-item"
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
      :src="imageSrc || image"
      alt="Header image"
      class="hidden w-1/2 xl:block"
    >
  </div>

  <div
    v-if="tabs.length && showTabs"
    class="header-tabs grid"
    :class="`grid-cols-${tabs.length}`"
    :style="{ background }"
  >
    <router-link
      v-for="(tab, index) in tabs"
      :key="index"
      :to="tab.src"
      class="header-tab"
      @click="headerStore.selectTab(tab)"
    >
      {{ tab.label }}
    </router-link>
  </div>
</template>

<style scoped>
.header-content {
  @apply text-white w-full px-5 py-8;
  @apply xl:w-1/2 xl:pl-28 xl:py-10;
}

.section-title {
  @apply text-left !mb-0 xl:!mb-8;
}

.breadcrumbs {
  @apply hidden items-center bg-white/20 rounded-full;
  @apply xl:inline-flex;
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

.header-tab {
  @apply block py-3 rounded-none text-white font-bold text-xl text-center duration-200 ease-in-out hover:bg-white/10;
}

.header-tab.router-link-exact-active {
  @apply bg-white/30 hover:bg-white/40;
}
</style>
