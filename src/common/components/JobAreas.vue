<script setup lang="ts">
import { JOB_AREAS } from '@/common/constants';
</script>

<template>
  <GridSection
    title="Áreas temáticas"
    background="bg-gray-100"
    :desktop-cols="3"
    :mobile-cols="2"
  >
    <template #description>
      <p class="description">La comunidad universitaria ha venido desarrollando iniciativas en los siguientes campos:</p>
    </template>

    <template #items>
      <ItemWithImage
        v-for="(item, index) in JOB_AREAS"
        :key="index"
        :item="item"
        :image-width="60"
        :hide-image-in-mobile="true"
        cover-image="/images/home/jobs-background.png"
      />
    </template>

    <template
      v-if="$slots.append"
      #end
    >
      <slot name="append" />
    </template>
  </GridSection>
</template>

<style scoped>
.description {
  @apply text-center mb-8 text-lg;
}
</style>