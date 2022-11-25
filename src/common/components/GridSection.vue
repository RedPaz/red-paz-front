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
  alignTitleLeft: {
    type: Boolean,
    default: false,
  },
});

const gridClasses = computed(() => `grid-cols-${props.mobileCols} xl:grid-cols-${props.desktopCols}`)
</script>

<template>
  <div
    class="grid-col-items"
    :class="[background, { '!pb-36': $slots['end'] }]"
  >
    <h2
      class="section-title"
      :class="{ '!text-left': alignTitleLeft }"
    >
      {{ title }}
    </h2>

    <slot name="description"/>

    <div
      class="items"
      :class="gridClasses"  
    >
      <slot name="items"/>
    </div>

    <slot name="end"/>
  </div>
</template>

<style scoped>
.grid-col-items {
  @apply px-5 py-8 relative;
  @apply xl:px-28 xl:py-40;
}

.items {
  @apply grid gap-5;
  @apply xl:gap-8;
}
</style>
