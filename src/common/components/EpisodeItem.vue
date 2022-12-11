<script setup lang="ts">
import { PropType } from 'vue';
import AudioPlayer from 'vue3-audio-player';
import { Episode } from '@/common/interfaces/episode';
import { capitalizeVariable } from '@/common/utils';

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
  showDivider: {
    type: Boolean,
    required: false,
  },
})

const youtube = ref();
const selectedSource = ref<'spotify' | 'radioUnal' | 'youtube'>('spotify');

const embedSpotifySrc = computed(() => {
  if (!props.data.sources.spotify) return '';
  
  return props.data.sources.spotify.replace('https://open.spotify.com/', '');
});

watch(selectedSource, (newValue) => {
  if (newValue === 'youtube') {
    youtube.value.playVideo();
  }
});
</script>

<template>
  <div class="episode py-0 xl:py-2 flex flex-col xl:flex-row bg-white xl:bg-transparent rounded-xl shadow-md xl:shadow-none shadow-gray-300 ">
    <div class="media w-full xl:w-1/2">
      <YoutubeItem
        v-if="data.sources.youtube"
        :url="data.sources.youtube"
        :title="data.name"
        class="rounded-b-none xl:rounded-xl"
      />

      <template v-else>
        <img
          v-if="data.image"
          :src="data.image"
          :alt="data.name"
          class="rounded-t-xl xl:rounded-none"
        >
      </template>
    </div>

    <div class="content p-5 w-full xl:bg-transparent xl:py-0 xl:w-1/2 xl:px-10">
      <h4
        v-if="title"
        class="episode-title uppercase font-bold text-neutral-500 tracking-widest mb-2"
      >
        {{ title }}
      </h4>

      <h2 class="episode-name text-xl leading-6 xl:text-3xl xl:leading-8 font-bold mb-2 xl:mb-4">{{ data.name }}</h2>
      <p class="description hidden xl:block xl:text-xl text-base font-light whitespace-pre-line">{{ data.description }}</p>
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
      
      <!-- Change 'theme=0' by 't=0' to set spotify background -->
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

      <div class="actions flex justify-between xl:justify-start mt-5">
        <button
          v-for="(_, key) in data.sources"
          :key="key"
          class="media-action relative justify-start text-white rounded-lg w-40 px-4 py-1 xl:w-48 xl:text-lg leading-6 xl:py-2 xl:px-6 xl:mr-5"
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

  <div
    v-if="showDivider"
    class="hidden xl:block w-full bg-neutral-200 h-0.5 rounded-md"
  />
</template>

<style scoped>
</style>
