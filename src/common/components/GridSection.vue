<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: false,
    default: 'bg-white',
  },
  desktopCols: {
    type: Number,
    required: false,
    default: 2,
  },
  mobileCols: {
    type: Number,
    required: false,
    default: 1,
  },
});

const gridClasses = computed(() => `grid-cols-${props.mobileCols} xl:grid-cols-${props.desktopCols}`)
</script>

<template>
  <div
    class="grid-col-items"
    :class="background"
  >
    <h2 class="section-title">{{ title }}</h2>

    <div
      class="items"
      :class="gridClasses"  
    >
      <slot name="items"/>
    </div>
  </div>
</template>

<style scoped>
.grid-col-items {
  @apply px-5 py-8;
  @apply xl:px-28 xl:py-40;
}

.items {
  @apply grid gap-5;
  @apply xl:gap-8;
}
</style>
