<script setup lang="ts">
import { PropType } from 'vue';
import { Person } from '@/common/interfaces';
import { buildImageSrc } from '@/common/utils';

const props = defineProps({
  data: {
    type: Object as PropType<Person>,
    required: true,
  },
});

const { name, image, position, email, phone, link } = props.data;
</script>

<template>
  <div class="person">
    <img
      :src="buildImageSrc(image)"
      :alt="name"
      class="person-image">

    <div class="person-data">
      <h3 class="item-title">{{ name }}</h3>
      <h4 class="item-subtitle">{{ position }}</h4>
      <p class="content"><i-mdi-email-outline/> {{ email }}</p>
      <p class="content"><i-mdi-phone-outline/> {{ phone }}</p>
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
</style>
