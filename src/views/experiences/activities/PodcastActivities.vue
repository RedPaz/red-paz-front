<script setup lang="ts">
import { DescriptionItem, Episode } from '@/common/interfaces';

const description: DescriptionItem = {
  title: 'Sobre el Podcast',
  description: 'Vidas y caminos: entre la guerra y la paz  es un podcast producido por la Friedrich Ebert Stiftung en Colombia y la Universidad Nacional. Compartimos el relato de distintos escenarios de construcción de paz, desarrollados por las organizaciones sociales desde diferentes territorios colombianos en la voz de sus protagonistas.',
  logos: [
    '/src/assets/images/experiences/red-paz.png',
    '/src/assets/images/experiences/FES.png',
  ],
}

const episodes: Episode[] = [
  {
    name: 'Bojayá: de cómo un pueblo renace',
    description: 'Las comunidades afrodescendientes han enfrentado las causas y consecuencias del conflicto armado colombiano viendo vulnerados sus derechos, pero también, asumiendo la resiliencia de sus experiencias para así construir de forma colectiva territorios de paz.',
    date: 'Martes 20 de octubre 1:00 p.m.',
    image: '/src/assets/images/experiences/podcasts/bojaya.jpg',
    sources: {
      radioUnal: 'http://radio.unal.edu.co/fileadmin/Radio/2022-Audio-Imagenes/11/4/PANORAMA_DE_LA_CIENCIA-11_23_2022.mp3',
      spotify: 'https://open.spotify.com/episode/7iFKoiwNOoiIWjbKxIm63d',
    },
  },
];
</script>

<template>
  <div class="podcast">
    <DescriptionSection
      :items="[description]"
      main-image="/src/assets/images/experiences/podcast-description.png"
    />

    <GridSection
      title="Episodios"
      background="bg-gray-100"
      :desktop-cols="1"
    >
      <template #description>
        <p class="xl:text-xl mb-10 text-base font-light">Escucha los episodios en  Radio UNAL o en el canal de Fescol en Spotify</p>
      </template>

      <template #items>
        <EpisodeItem
          v-for="(episode, index) in episodes"
          :key="index"
          :data="episode"
          :title="`Capítulo ${index + 1}`"
        />
      </template>
    </GridSection>
  </div>
</template>

<style scoped>
</style>
