<script setup lang="ts">
import { PropType } from 'vue';
import { Item } from '@/common/interfaces';
import { buildImageSrc } from '@/common/utils';

defineProps({
  items: {
    type: Array as PropType<Item[]>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="grid-col-items bg-gray-100"
  >
    <h2 class="section-title">{{ title }}</h2>

    <div class="items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
      >
        <img
          v-if="item.image"
          :src="buildImageSrc(item.image)"
          class="item-image"
        />

        <div
          class="item-content"
        >
          <p class="description">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-col-items {
  @apply px-5 py-8;
  @apply xl:px-28 xl:py-40;
}

.items {
  @apply grid grid-cols-1 gap-5;
  @apply xl:grid-cols-2 xl:gap-8;
}

.item {
  @apply relative px-4 py-5 flex flex-col items-center rounded-lg bg-white shadow-md shadow-gray-200;
}

.item-content {
  @apply flex flex-col justify-center h-full w-full z-10;
}

.description {
  @apply my-3 px-5 text-base font-light text-center leading-6 text-gray-400;
  @apply xl:mt-0 xl:mb-4 xl:px-24 xl:text-xl;
}

.item-image {
  @apply hidden mb-5 w-20 object-cover z-10;
  @apply xl:block;
}
</style>
