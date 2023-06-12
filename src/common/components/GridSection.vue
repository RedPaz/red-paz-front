<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  background: {
    type: String as PropType<'bg-white' | 'bg-gray-100' | 'bg-green-red'>,
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
    :class="[background, { '!pb-36': $slots['end'], '-mt-14 lg:-mt-20': !title.length }]"
  >
    <h2
      v-if="title"
      class="section-title"
      :class="{
        '!text-left': alignTitleLeft,
        'text-white': background === 'bg-green-red'
      }"
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
  @apply xl:px-28 xl:pb-40 xl:pt-32;
}

.items {
  @apply grid gap-5;
  @apply xl:gap-8;
}
</style>
