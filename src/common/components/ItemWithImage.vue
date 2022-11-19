<script setup lang="ts">
import { PropType } from 'vue';
import { buildImageSrc } from '@/common/utils';
import { ItemWithImage } from '@/common/interfaces';

defineProps({
  item: {
    type: Object as PropType<ItemWithImage>,
    required: true,
  },
  imageWidth: {
    type: Number,
    required: false,
    default: 100,
  },
  coverImage: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div
    class="item"
    :style="{ backgroundColor: item.color }"
  >
    <img
      v-if="item.image"
      :src="buildImageSrc(item.image)"
      class="item-image"
      :style="{ 'width': `${imageWidth}px` }"
    />

    <div
      class="item-content"
      :class="{ '!justify-center': !item.description && !item.cta }"
    >
      <div class="description">
        <h4 class="item-title">{{ item.title }}</h4>

        <p
          v-if="item.description"
          class="item-description"
        >
          {{ item.description }}
        </p>
      </div>

      <button
        v-if="item.cta"
        class="item-action"
        :style="{ color: item.color }"
      >
        {{ item.cta }}
      </button>
    </div>

    <div 
      v-if="coverImage"
      class="mask"
      :style="{ backgroundImage: `url(${buildImageSrc(coverImage)})` }">
    </div>
  </div>
</template>

<style scoped>
.item {
  @apply relative px-4 py-5 font-bold text-white flex items-center rounded-lg min-h-[140px];
  @apply xl:p-5 xl:justify-between xl:items-start xl:min-h-0;
}

.item-content {
  @apply flex flex-col justify-between h-full w-full z-10;
}

.item-description {
  @apply my-4 italic text-lg leading-5 font-normal;
}

.item-image {
  @apply hidden object-cover mr-5 z-10;
  @apply xl:block;
}

.item-action {
  @apply bg-white;
}

.mask {
  @apply absolute w-full h-full top-0 left-0 opacity-25 bg-cover;
}
</style>
