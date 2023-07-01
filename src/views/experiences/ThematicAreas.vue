<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAreasStore } from '@/common/stores';

const areasStore = useAreasStore();
const { currentAreaNews } = storeToRefs(areasStore);
</script>

<template>
  <!-- TODO: Fix overlaps error -->
  <div class="redpaz-areas mt-5 lg:mt-20">
    <GridSection
      :desktop-cols="3"
      :mobile-cols="1"
    >
      <template #items>
        <PictureNew
          v-for="(item, index) in currentAreaNews"
          :key="index"
          :item="item"
          show-red-icon
        />
      </template>

      <template #end>
        <SectionDecoration />
      </template>
    </GridSection>
  </div>
</template>

<style scoped>

</style>
