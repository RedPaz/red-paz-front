<script setup lang="ts">
import { PropType } from 'vue';
import { Icon } from '@iconify/vue';
import { Swiper } from 'swiper/vue';
import { PaginationOptions } from 'swiper/types';
// Import Swiper Vue.js components
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

// TODO: Upgrade to swipper 9 version.

const swiperModules = [Pagination, Autoplay, Navigation];
const swiperControls = { prevEl: '.nav-control.prev', nextEl: '.nav-control.next' }

const props = defineProps({
  sliderPerView: {
    type: Number,
    required: true,
  },
  navigationPosition: {
    type: String as PropType<'topIn' | 'topOut' | 'bottomIn' | 'bottomOut'>,
    required: false,
    default: 'bottomIn',
  },
  showPagination: {
    type: Boolean,
    required: false,
    default: false,
  }
});

const paginationOptions: PaginationOptions = {
  clickable: true,
}


const navigationClass = computed(() => {
  const classes = {
    topIn: 'top-8 right-8 xl:top-10 xl:right-10',
    topOut: '-top-16 right-0 xl:-top-20',
    bottomIn: 'bottom-8 right-8 xl:bottom-10 xl:right-10',
    bottomOut: '-bottom-10 right-0 xl:-bottom-20',
  };

  return classes[props.navigationPosition];
});

const navButtonClass = computed(() => {
  if (props.navigationPosition.includes('In')) return 'bg-white/40 hover:bg-white hover:text-gray-500';

  return 'bg-white text-gray-unal-800 hover:bg-neutral-200';
});

</script>

<template>
  <swiper
    loop
    :modules="swiperModules"
    :slides-per-view="sliderPerView"
    :navigation="swiperControls"
    :space-between="30"
    :pagination="showPagination ? paginationOptions : false"
    class="w-full relative overflow-visible overflow-x-clip"
  >
    <slot name="slides" />

    <template #container-start>
      <div
        class="navigation-controls"
        :class="navigationClass"
      >
        <button
          class="nav-control prev"
          :class="navButtonClass"
        >
          <Icon icon="mdi-chevron-left"/>
        </button>

        <button
          class="nav-control next ml-4"
          :class="navButtonClass"
        >
          <Icon icon="mdi-chevron-right"/>
        </button>
      </div>
    </template>
  </swiper>
</template>

<style scoped>
.navigation-controls {
  @apply absolute z-10 text-white;
}

.nav-control {
  @apply text-xl p-1 rounded-md shadow-md shadow-gray-500/50 duration-200 ease-in-out;
  @apply xl:text-3xl xl:p-2;
}

:deep(.swiper-pagination) {
  @apply -bottom-14 text-right;
}

:deep(.swiper-pagination-bullet) {
  @apply w-3 h-3 bg-neutral-500 rounded-full !mx-1.5;
  @apply last:!mr-0;
}

:deep(.swiper-pagination-bullet-active) {
  @apply w-20 bg-neutral-400;
}
</style>
