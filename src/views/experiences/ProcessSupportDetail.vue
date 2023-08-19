<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHeaderStore } from '@/common/stores';
import { ProcessDetail } from '@/common/interfaces';
import { PROCESSES_DETAILS } from '@/common/constants/processesDetail';

const route = useRoute();
const headerStore = useHeaderStore();
const { currentTab } = storeToRefs(headerStore);

const detailsInfo = computed((): ProcessDetail[] => {
  const { alias } = route.meta;
  if (!alias) return [];

  return PROCESSES_DETAILS.filter((process) => process.area === route.meta.alias)
});

const selectedIndex = computed(() => detailsInfo.value.findIndex((tab) => tab.title === currentTab.value))

const selectedTab = computed(() => detailsInfo.value[selectedIndex.value]);
</script>

<template>
  <section class="process-support-detail">
    <DescriptionSection
      :items="[selectedTab]"
      :swap-items="selectedIndex % 2 === 1"
      main-image="/images/experiences/activities/regions/description.png"
    />

    <GridSection
      :desktop-cols="selectedTab.activities.length"
      :mobile-cols="1"
    >
      <template #description>
        <p class="content">
          {{ selectedTab.subtitle }}
        </p>
      </template>

      <template #items>
        <div
          v-for="(item, index) in selectedTab.activities"
          :key="index"
          class="activity"
          :class="{
            'mr-5': index === 0,
            'ml-5': index === (selectedTab.activities.length - 1),
            'mx-5': (index > 0) && (index < selectedTab.activities.length - 1),
          }"
        >
          <h4 class="section-subtitle">{{ item.title }}</h4>

          <p class="content">{{ item.description }}</p>
        </div>
      </template>

      <template #end>
        <p
          v-if="selectedTab.resume"
          class="content mt-5"
        >
          {{ selectedTab.resume }}
        </p>

        <SectionDecoration/>
      </template>
    </GridSection>
  </section>
</template>

<style scoped>
.section-subtitle {
  @apply text-gray-unal-700 text-2xl mb-5;
}

.content {
  @apply text-base font-light mb-5 whitespace-pre-line;
  @apply xl:text-xl xl:mb-10 xl:pr-0;
}
</style>
