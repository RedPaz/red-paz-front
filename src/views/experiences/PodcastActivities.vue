<script setup lang="ts">
import { DescriptionItem, Episode } from '@/common/interfaces';

const description: DescriptionItem = {
  title: 'Sobre el Podcast',
  description: 'Vidas y caminos: entre la guerra y la paz  es un podcast producido por la Friedrich Ebert Stiftung en Colombia y la Universidad Nacional. Compartimos el relato de distintos escenarios de construcción de paz, desarrollados por las organizaciones sociales desde diferentes territorios colombianos en la voz de sus protagonistas.',
  logos: [
    '/images/experiences/red-paz.png',
    '/images/experiences/FES.png',
  ],
}

const episodes: Episode[] = [
  {
    name: 'Bojayá: de cómo un pueblo renace',
    description: 'Las comunidades afrodescendientes han enfrentado las causas y consecuencias del conflicto armado colombiano viendo vulnerados sus derechos, pero también, asumiendo la resiliencia de sus experiencias para así construir de forma colectiva territorios de paz.',
    date: 'Martes 20 de octubre 1:00 p.m.',
    image: '/images/experiences/podcasts/bojaya.jpg',
    sources: {
      radioUnal: 'http://radio.unal.edu.co/fileadmin/Radio/2022-Audio-Imagenes/11/4/PANORAMA_DE_LA_CIENCIA-11_23_2022.mp3',
      spotify: 'https://open.spotify.com/episode/7iFKoiwNOoiIWjbKxIm63d',
    },
  },
  {
    name: 'Mujeres que construyen Paz',
    description: 'En la voz de Francia Márquez, representante de las organizaciones de las comunidades Afro, Negras, Palenqueras y Raizales al Consejo Nacional de Paz; las historias de sus comunidades y cómo las mujeres desde sus territorios, construyen paz a partir de sus formas de organización y resistencia.',
    date: 'Martes 27 de octubre 1:00 p.m.',
    image: '/images/experiences/podcasts/mujeres.jpg',
    sources: {
      radioUnal: 'http://radio.unal.edu.co/fileadmin/Radio/2022-Audio-Imagenes/11/4/PANORAMA_DE_LA_CIENCIA-11_23_2022.mp3',
      spotify: 'https://open.spotify.com/episode/3L305ZR3HekuAiYyFaMqWx',
    },
  },
  {
    name: '¿Se puede no volver a la guerra?',
    description: 'En la voz de Esther Polo, integrante de la Alianza Iniciativa de Mujeres Colombianas por la Paz.',
    date: 'Martes 3 de noviembre 1:00 p.m.',
    image: '/images/experiences/podcasts/guerra.jpg',
    sources: {
      radioUnal: 'http://radio.unal.edu.co/fileadmin/Radio/2022-Audio-Imagenes/11/4/PANORAMA_DE_LA_CIENCIA-11_23_2022.mp3',
      spotify: 'https://open.spotify.com/episode/0sLyUHaFiMlrOh6ZY7HoVx',
    },
  },
  {
    name: 'Alternativas para el manejo de los cultivos de uso ilícito: propuestas de paz desde el Putumayo',
    description: 'En la voz de Leonel Narváez, representante legal de la Asociación de Campesinos Asopuertoasís.',
    date: 'Martes 10 de noviembre 1:00 p.m.',
    image: '/images/experiences/podcasts/putumayo.jpg',
    sources: {
      radioUnal: 'http://radio.unal.edu.co/fileadmin/Radio/2022-Audio-Imagenes/11/4/PANORAMA_DE_LA_CIENCIA-11_23_2022.mp3',
      spotify: 'https://open.spotify.com/episode/2LIxSrtM4rPTAPg7jQhryn',
    },
  },
  {
    name: 'Lecciones para salir de la guerra desde el Catatumbo',
    description: 'En la voz de Geiner García, miembro del Comité de Integración Social del Catatumbo, CISCA.',
    date: 'Martes 17 de noviembre 1:00 p.m.',
    image: '/images/experiences/podcasts/catatumbo.jpg',
    sources: {
      radioUnal: 'http://radio.unal.edu.co/fileadmin/Radio/2022-Audio-Imagenes/11/4/PANORAMA_DE_LA_CIENCIA-11_23_2022.mp3',
      youtube: 'https://www.youtube.com/watch?v=CQOx_ZBxJlA',
    },
  },
  {
    name: 'Acciones para salir de la guerra: asumir las deudas pendientes con las comunidades Indígenas',
    description: 'En la voz de Eliza Alejandra Arias, de la Organización Indígena Kankuama y la Fundación Creando Lazos de Saber y Vida.',
    date: 'Martes 24 de noviembre 1:00 p.m.',
    image: '/images/experiences/podcasts/indigenas.jpg',
    sources: {
      radioUnal: 'http://radio.unal.edu.co/fileadmin/Radio/2022-Audio-Imagenes/11/4/PANORAMA_DE_LA_CIENCIA-11_23_2022.mp3',
      youtube: 'https://www.youtube.com/watch?v=2Qr_INl1yWc',
    },
  },
];
</script>

<template>
  <div class="podcast">
    <DescriptionSection
      :items="[description]"
      main-image="/images/experiences/podcasts/podcast-description.png"
    />

    <GridSection
      title="Episodios"
      background="bg-gray-100"
      :desktop-cols="1"
      :align-title-left="true"
    >
      <template #description>
        <p class="section-description">Escucha los episodios en  Radio UNAL o en el canal de Fescol en Spotify</p>
      </template>

      <template #items>
        <EpisodeItem
          v-for="(episode, index) in episodes"
          :key="index"
          :data="episode"
          :title="`Capítulo ${index + 1}`"
          :show-divider="(index + 1) < episodes.length"
        />
      </template>

      <template #end>
        <SectionDecoration/>
      </template>
    </GridSection>
  </div>
</template>

<style scoped>
</style>
