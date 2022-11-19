<script setup lang="ts">
import { PropType } from 'vue';
import { buildImageSrc } from '@/common/utils';
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
    class="banner-item relative flex items-center"
    :style="{ backgroundColor: background }"
  >

    <DescriptionSection :items="[bannerInfo]" />

    <div 
      v-if="image"
      class="banner-image absolute right-0 top-0 w-1/2 h-full z-10 bg-cover"
      :style="{ backgroundImage: `url(${buildImageSrc(image)})` }">
    </div>
  </div>
</template>

<style scoped>
.banner-item {
  @apply h-[calc(100vh_-_111px)];
}
</style>
