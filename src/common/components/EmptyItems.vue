<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps({
  emptyText: {
    type: String,
    required: true,
  },
  showShadow: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <section
    class="empty-items"
    :class="{ 'shadow-md': showShadow }"
  >
    <Icon
      icon="mdi-grid-off"
      class="m-14 text-8xl"
    />

    <h3 class="text-lg w-80 text-center mb-14">
      {{ emptyText }}
    </h3>
  </section>
</template>

<style scoped>
.empty-items {
  @apply bg-gray-100 rounded-lg border border-gray-100 p-6 text-gray-500/75 flex flex-col justify-center items-center;
}
</style>
