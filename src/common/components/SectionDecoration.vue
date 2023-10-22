<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  type: {
    type: String as PropType<'dark' | 'white'>,
    required: false,
    default: 'dark',
  }
});
</script>

<template>
  <div class="end-decoration">
    <div
      class="dec-image"
      :style="{
        background: `url(/images/about-us/red-paz${type === 'dark' ? '' : '-white'}.svg) repeat-x 0 0 transparent`,
        backgroundSize: '64px',
      }"
    />

    <div
      class="dec-color"
      :class="(type === 'dark') ? 'bg-green-red' : 'bg-white'"
    />
  </div>
</template>

<style scoped>
.end-decoration {
  @apply absolute bottom-0 left-0 h-16 w-full;
}

.end-decoration .dec-image {
  @apply h-8 w-full opacity-20;
}

.dec-color {
  @apply h-8 z-10;
}
</style>
