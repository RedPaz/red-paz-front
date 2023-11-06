<script setup lang="ts">
import { PropType } from 'vue';
import { Icon } from '@iconify/vue';
import { FeaturedItem } from '@/common/interfaces';

defineProps({
  item: {
    type: Object as PropType<FeaturedItem>,
    required: true,
  },
  showRedIcon: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <div class="rounded-lg border border-gray-100 overflow-hidden shadow-md bg-white">
    <div class="item-image relative">
      <img :src="item.image" :alt="item.title">

      <div
        class="item-type text-white flex items-center justify-center p-1 w-1/3 absolute top-0 right-0 rounded-bl-lg"
        :style="{ backgroundColor: item.area.color }"
      >
        <img
          v-if="showRedIcon"
          src="/images/home/red-paz.svg"
          class="w-4 mr-3"
        />

        <Icon
          v-else
          :icon="`mdi-${item.area.icon}`"
          class="mr-3"
        />

        {{ item.area.name }}
      </div>
    </div>

    <div class="item-content p-6">
      <h3 class="item-title !text-left h-32 !leading-7">
        <span class="item-category text-gray-unal-400 uppercase tracking-widest block text-base xl:text-lg text-left">{{ item.category }}</span>
        {{ item.title }}
      </h3>

      <div class="item-details mt-5 flex justify-between items-center">
        <div class="item-date flex items-center italic text-gray-unal-100 text-sm xl:text-base">
          <Icon icon="mdi-clock-outline" class="mr-2 lg:mr-3 mb-1"/>
          {{ item.date }}
        </div>

        <a
          class="item-link"
          :href="item.url"
          :target="item.blank ? '_blank' : ''"
        >
          Ver más
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-link {
  @apply bg-green-red text-white px-6 py-1 text-sm tracking-wider rounded-md;
  @apply lg:px-8 lg:text-base;
  @apply xl:px-10 xl:py-1.5 xl:text-lg;
  @apply 2xl:px-12 2xl:text-xl;
}
</style>
