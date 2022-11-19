<script setup lang="ts">
import { PropType } from 'vue';

import { buildImageSrc } from '@/common/utils';
import { DescriptionItem } from '@/common/interfaces';


defineProps({
  items: {
    type: Array as PropType<DescriptionItem[]>,
    required: true, 
  },
  mainImage: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <section class="descriptions-section">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="description"
    >
      <h3
        class="section-subtitle"
        :class="[{ '!text-white': item.isBannerItem }, { '!mb-0': item.logos && item.logos.length > 0 }]"
      >
        {{ item.title }}
      </h3>

      <div class="section-content">
        <p
          class="content"
          :class="{ '!text-white xl:!text-2xl !font-medium': item.isBannerItem }"
        >
          {{ item.description }}
        </p>
        <!-- Logos -->
        <div
          v-if="item.logos && item.logos.length > 0"
          class="logos"
          :class="{ 'order-first mb-5': item.isBannerItem }"
        >
          <img
            v-for="(logo, j) in item.logos"
            :key="`logo-${j}`"
            :src="buildImageSrc(logo)"
            alt="Section image"
            :class="{ 'w-1/3': item.isBannerItem }"
          >
        </div>
        <!-- Links -->
        <div
          v-if="item.links && item.links.length > 0"
          class="links"
        >
          <a
            v-for="(link, k) in item.links"
            :key="`link-${k}`"
            :href="link.src"
            class="section-link"
            :class="item.isBannerItem ? 'bg-white' : 'bg-green-red'"
            :style="{ 'color': item.isBannerItem ? item.linkTextColor : '#fff' }"
          >
            {{ link.label }}
          </a>
        </div>
      </div>

    </div>

    <img
      v-if="mainImage"
      :src="buildImageSrc(mainImage)"
      alt="Section image"
    >
  </section>
</template>

<style scoped>
.descriptions-section {
  @apply w-full px-5 py-8 flex items-center justify-between;
  @apply xl:px-28 xl:py-32;
}

.description {
  @apply w-1/2 pr-10 text-gray-unal-300;
}

.section-subtitle {
  @apply text-gray-unal-700;
}

.section-content {
  @apply flex flex-col;
}

.section-content .content {
  @apply text-lg xl:text-xl font-light mb-10;
}

.links {
  @apply grid gap-8 grid-cols-3; 
}

.section-link {
  @apply rounded-lg xl:text-xl leading-8 font-bold p-2 text-center duration-200 ease-in-out;
}
</style>
