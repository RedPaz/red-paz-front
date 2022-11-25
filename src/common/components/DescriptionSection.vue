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
  swapItems: {
    type: Boolean,
    required: false,
  }
});
</script>

<template>
  <section
    class="descriptions-section"
    :class="{ 'xl:!flex-row-reverse': swapItems }"
  >
    <div
      class="descriptions"
      :class="{ 'xl:!pr-0 xl:pl-24': swapItems }"
    >
      <div
        v-for="(item, i) in items"
        :key="i"
        class="description"
      >
        <h3
          :class="[
            item.isBannerItem ? 'section-title' : 'section-subtitle',
            {'!text-white pr-32 xl:text-left xl:pr-0': item.isBannerItem },
            { '!mb-0': (item.logos && item.logos.length > 0) && item.isBannerItem },
            { '!mb-5': (item.logos && item.logos.length > 0) && !item.isBannerItem },
          ]"
        >
          {{ item.title }}
        </h3>

        <div class="section-content">
          <p
            class="content"
            :class="item.isBannerItem ? '!text-white xl:!text-2xl !font-medium !pr-10' : 'pr-0'"
            
          >
            {{ item.description }}
          </p>
          <!-- Logos -->
          <div
            v-if="item.logos && item.logos.length > 0"
            class="logos flex items-center"
            :class="{ 'order-first mb-5 px-1': item.isBannerItem }"
          >
            <img
              v-for="(logo, j) in item.logos"
              :key="`logo-${j}`"
              :src="buildImageSrc(logo)"
              alt="Section image"
              :class="item.isBannerItem ? 'w-1/2 xl:w-1/3' : 'w-1/4 mr-10'"
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
    </div>

    <img
      v-if="mainImage"
      :src="buildImageSrc(mainImage)"
      alt="Section image"
      class="hidden xl:block xl:w-1/2"
    >
  </section>
</template>

<style scoped>
.descriptions-section {
  @apply w-full px-5 py-9 flex flex-col items-center justify-between z-20;
  @apply xl:px-28 xl:py-32 xl:flex-row;
}

.descriptions {
  @apply w-full text-gray-unal-300;
  @apply xl:w-1/2 xl:pr-24;
}

.description {
  @apply mb-10 last:mb-0;
}

.section-subtitle {
  @apply text-gray-unal-700;
}

.section-content {
  @apply flex flex-col z-20;
}

.section-content .content {
  @apply text-base font-light mb-5 whitespace-pre-line;
  @apply xl:text-xl xl:mb-10 xl:pr-0;
}

.links {
  @apply grid gap-8 grid-cols-2;
  @apply xl:grid-cols-3;
}

.section-link {
  @apply rounded-lg text-lg leading-8 font-bold px-2 py-1 text-center duration-200 ease-in-out;
  @apply xl:text-xl xl:p-2;
}
</style>
