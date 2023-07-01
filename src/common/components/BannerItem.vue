<script setup lang="ts">
import { PropType } from 'vue';
import { Banner, DescriptionItem } from '@/common/interfaces';

const props = defineProps({
  banner: {
    type: Object as PropType<Banner>,
    required: true,
  },
});

const { title, description, image, background, links, logos, isBannerItem } = props.banner;

const bannerInfo: DescriptionItem = {
  title,
  description,
  links: links ? links : [],
  logos: logos ? logos : [],
  isBannerItem,
  linkTextColor: background,
};

</script>

<template>
  <div
    class="banner-item relative flex items-end py-24 xl:items-center"
    :style="{ backgroundColor: background }"
  >

    <DescriptionSection :items="[bannerInfo]" />

    <div
      v-if="image"
      class="banner-image"
      :style="{ backgroundImage: `url(${image})` }"
    />
  </div>
</template>

<style scoped>
.banner-item {
  @apply h-[calc(100vh_-_111px)];
}

.banner-image {
  @apply absolute right-0 top-0 w-full h-full z-10 bg-no-repeat bg-[length:150%];
  @apply xl:w-1/2 xl:bg-cover;
}
</style>
