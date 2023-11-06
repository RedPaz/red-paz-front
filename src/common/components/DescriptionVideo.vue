<script setup lang="ts">
import { PropType } from 'vue';
import { DescriptionItem } from '@/common/interfaces';

defineProps({
  data: {
    type: Object as PropType<DescriptionItem>,
    required: true,
  },
  videoSrc: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: false,
    default: 'bg-white',
  },
});
</script>

<template>
  <section
    class="descriptions-section"
    :class="background"
  >
    <div class="video w-full xl:w-3/5 xl:pr-20">
      <YoutubeItem
        :url="videoSrc"
        :title="data.title || 'YouTube video player'"
      />
    </div>

    <div class="description py-5 mt-4 xl:mt-0 xl:py-16">
      <h3 class="section-title">
        {{ data.title }}
      </h3>

      <div class="section-content">
        <p class="content">
          {{ data.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.descriptions-section {
  @apply w-full px-5 py-9 flex flex-col items-center justify-between z-20;
  @apply xl:px-28 xl:py-32 xl:flex-row xl:items-stretch;
}

.description {
  @apply xl:w-2/5 xl:mb-10;
}

.section-subtitle {
  @apply text-gray-unal-700;
}

.section-content {
  @apply flex flex-col z-20;
}

.section-content .content {
  @apply text-base font-light mb-0 whitespace-pre-line;
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
