<script setup lang="ts">
import { PropType } from 'vue';
import { Person } from '@/common/interfaces';

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

const { name, image, faculty, location, email, link } = props.data;
</script>

<template>
  <div class="person">
    <img
      :src="image"
      :alt="name"
      class="w-1/3"
    >

    <div class="person-data">
      <h3 class="item-title">{{ name }}</h3>
      <h6
        class="item-subtitle"
      >
        {{ faculty }} <span class="block font-normal">{{ location }}</span>
      </h6>
      <p class="content"><i-mdi-email-outline class="mr-3"/> {{ email }}</p>
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
.person {
  @apply flex justify-between rounded-lg overflow-hidden shadow-md shadow-gray-300;
}

.person-data {
  @apply px-5 xl:py-3 w-2/3 flex flex-col justify-center;
  @apply xl:px-8 xl:py-6 xl:justify-start;
}

.item-title {
  @apply leading-4 mb-1 !text-left;
  @apply xl:!leading-6 xl:mb-2 xl:min-h-[48px];
}

.item-subtitle {
  @apply font-bold text-green-red italic text-sm;
  @apply xl:text-base;
}
.content {
  @apply flex items-center text-gray-unal-100 italic;
  @apply xl:my-1;
}

.item-action {
  @apply mt-3;
}
</style>
