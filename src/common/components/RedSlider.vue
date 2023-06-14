<script setup lang="ts">
import { Prop, PropType } from 'vue';
import { Icon } from '@iconify/vue';
import { Swiper } from 'swiper/vue';
import { PaginationOptions } from 'swiper/types';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
// Import Swiper Vue.js components
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

// TODO: Upgrade to swipper 9 version.
const props = defineProps({
  sliderPerView: {
    type: Number,
    required: true,
  },
  navigationStyle: {
    type: String as PropType<'dark' | 'light' | 'transparency'>,
    required: false,
    default: 'light',
  },
  navigationPosition: {
    type: String as PropType<'topIn' | 'topOut' | 'bottomIn' | 'bottomOut'>,
    required: false,
    default: 'bottomIn',
  },
  showNavsInMobile: {
    type: Boolean,
    required: false,
    default: true,
  },
  showPagination: {
    type: Boolean,
    required: false,
    default: false,
  }
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const swiperModules = [Pagination, Autoplay, Navigation];
const swiperControls = { prevEl: '.nav-control.prev', nextEl: '.nav-control.next' }

const paginationOptions = computed((): PaginationOptions => {
  const bulletOptions = (props.navigationStyle ==='transparency') ? 'bg-neutral-200' : 'bg-neutral-500';
  const bulletActiveOptions = (props.navigationStyle ==='transparency') ? '!bg-neutral-100' : '!bg-neutral-400';

  return {
    clickable: true,
    bulletClass: `swiper-pagination-bullet w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full !mx-1 lg:!mx-1.5 last:!mr-0 ${bulletOptions}`,
    bulletActiveClass: `swiper-pagination-bullet-active !w-16 lg:!w-20 ${bulletActiveOptions}`,
  };
});

const slidesToShow = computed(() => {
  if (props.sliderPerView === 1 || breakpoints.isSmaller('sm')) return 1;

  if (breakpoints.isInBetween('sm', 'lg')) return 2;

  return props.sliderPerView;
});

const hideSliderNavs = computed(() => {
  if (props.showNavsInMobile) return false;

  return breakpoints.isSmaller('sm');
})

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
  if (props.navigationStyle === 'dark') return 'bg-black/40 hover:bg-black hover:text-white';
  if (props.navigationStyle === 'light') return 'bg-white/40 hover:bg-white text-gray-unal-600';

  return 'bg-transparent text-white hover:bg-white/30';
});

</script>

<template>
  <swiper
    loop
    :modules="swiperModules"
    :slides-per-view="slidesToShow"
    :navigation="swiperControls"
    :space-between="32"
    :pagination="showPagination ? paginationOptions : false"
    :class="{ 'mb-12': showPagination }"
    class="w-full relative overflow-visible overflow-x-clip"
  >
    <slot name="slides" />

    <template
      v-if="!hideSliderNavs"
      #container-start
    >
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
</style>
