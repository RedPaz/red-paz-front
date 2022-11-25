<script setup lang="ts">
import { PropType } from 'vue';
import YouTube from 'vue3-youtube';
import AudioPlayer from 'vue3-audio-player';
import { Episode } from '@/common/interfaces/episode';
import { buildImageSrc, capitalizeVariable } from '@/common/utils';

import 'vue3-audio-player/dist/style.css';

const props = defineProps({
  data: {
    type: Object as PropType<Episode>,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
})

const selectedSource = ref<'spotify' | 'radioUnal' | 'youtube'>('spotify');

const embedSpotifySrc = computed(() => {
  if (!props.data.sources.spotify) return '';
  
  return props.data.sources.spotify.replace('https://open.spotify.com/', '');
});
</script>

<template>
  <div class="episode py-5 flex">
    <div class="media w-1/2">
      <YouTube
        v-if="data.sources.youtube"
        :src="data.sources.youtube"
      />

      <template v-else>
        <img
          v-if="data.image"
          :src="buildImageSrc(data.image)"
          :alt="data.name"
        >
      </template>
    </div>

    <div class="content w-1/2 px-10">
      <h4
        v-if="title"
        class="episode-title uppercase font-bold text-neutral-500 tracking-widest mb-2"
      >
        {{ title }}
      </h4>

      <h2 class="episode-name text-3xl leading-6 font-bold mb-4">{{ data.name }}</h2>
      <p class="description xl:text-xl text-base font-light">{{ data.description }}</p>
      <p class="date flex items-center text-gray-unal-100 italic xl:text-lg my-3 text-base font-light">
        <i-mdi-calendar-month  class="mr-4"/>
        {{ data.date }}
      </p>

      <div
        v-if="(selectedSource === 'radioUnal') && data.sources.radioUnal"
        class="audio-player flex justify-start"
      >
        <AudioPlayer
          v-if="data.sources.radioUnal"
          :option="{
            src: data.sources.radioUnal,
            coverImage: data.image,
            progressBarColor: '#50992e',
            indicatorColor: '#50992e',
          }"
          class="w-full"
        />
      </div>
      
      <iframe
        v-if="(selectedSource === 'spotify') && data.sources.spotify"
        style="border-radius:12px"
        :src="`https://open.spotify.com/embed/${embedSpotifySrc}?utm_source=generator&t=0`"
        width="100%"
        height="160"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      />

      <div class="actions flex mt-5">
        <button
          v-for="(_, key) in data.sources"
          :key="key"
          class="media-action relative justify-start text-white rounded-lg w-48 text-lg leading-6 py-2 px-6 mr-5"
          :class="{
            'bg-yellow-400': key === 'radioUnal',
            'bg-green-400': key === 'spotify',
            'bg-red-600': key === 'youtube',
          }"
          @click="selectedSource = key"
        >
          <div class="provider flex items-center">
            <i-mdi-radio-tower v-if="key === 'radioUnal'" class="text-xl"/>
            <i-mdi-spotify v-if="key === 'spotify'" class="text-xl"/>
            <i-mdi-youtube v-if="key === 'youtube'" class="text-xl"/>
            <span class="ml-4 mt-1">{{ capitalizeVariable(key) }}</span>
          </div>

          <i-mdi-check
            v-if="selectedSource === key"
            class="absolute top-1/2 -translate-y-1/2 right-2"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
