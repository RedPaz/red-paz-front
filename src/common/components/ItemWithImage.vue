<script setup lang="ts">
import { PropType } from 'vue';
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
  },
  hideImageInMobile: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <a
    class="item"
    :class="{ 'cursor-auto': !item.src?.length }"
    :href="item.src"
    :style="{ backgroundColor: item.color }"
    :target="item.blank ? '_blank' : ''"
  >
    <img
      v-if="item.image"
      :src="item.image"
      class="item-image"
      :style="{ 'width': `${imageWidth}px` }"
      :class="{ 'hidden xl:block': hideImageInMobile }"
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
      :style="{ backgroundImage: `url(${coverImage})` }">
    </div>
  </a>
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
  @apply my-3 italic text-lg leading-5 font-light;
}

.item-image {
  @apply object-cover mr-5 z-10;
}

.item-action {
  @apply bg-white;
}

.mask {
  @apply absolute w-full h-full top-0 left-0 opacity-25 bg-cover;
}
</style>
