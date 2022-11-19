<script setup lang="ts">
import { PropType } from 'vue';
import { Item } from '@/common/interfaces';
import { buildImageSrc } from '@/common/utils';

defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
});
</script>

<template>
  <div class="item">
    <img
      v-if="item.image"
      :src="buildImageSrc(item.image)"
      class="item-image"
    />

    <div class="item-content">
      <p class="description">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
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
