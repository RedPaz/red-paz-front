<script setup lang="ts">
import { PropType } from 'vue';
import { Person } from '@/common/interfaces';
import { buildImageSrc } from '@/common/utils';

const props = defineProps({
  data: {
    type: Object as PropType<Person>,
    required: true,
  },
  highlight: {
    type: Boolean,
    required: false,
  },
});

const { name, image, position, email, phone, link } = props.data;
</script>

<template>
  <div class="person flex justify-between rounded-lg overflow-hidden shadow-md shadow-gray-300">
    <img
      :src="buildImageSrc(image)"
      :alt="name"
      class="person-image w-1/3"
    >

    <div class="person-data px-8 py-6 w-2/3">
      <h3 class="item-title !leading-6 mb-2 min-h-[48px]">{{ name }}</h3>
      <h4
        class="item-subtitle font-bold text-lg"
        :class="{ '!text-green-red': highlight }"
      >
        {{ position }}
      </h4>
      <p class="content"><i-mdi-email-outline class="mr-3"/> {{ email }}</p>
      <p class="content"><i-mdi-phone-outline class="mr-3"/> {{ phone }}</p>
      <a
        v-if="link"
        :href="link.src"
        class="item-action"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.content {
  @apply flex items-center text-gray-unal-100 italic my-1;
}
</style>
