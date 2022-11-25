<script setup lang="ts">
import { buildImageSrc } from '@/common/utils';
import { JOB_AREAS, PARTNERS } from '@/common/constants';
import { Banner, DescriptionItem } from '@/common/interfaces';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const swiperModules = [Pagination, Autoplay, Navigation];
const swiperControls = { prevEl: '.nav-control.prev', nextEl: '.nav-control.next' }

const homeBanners: Banner[] = [
  {
    title: 'Bienvenidos a',
    description: 'Plataforma de divulgación, encuentro e intercambio de iniciativas de apoyo a la construcción de paz',
    image: '/src/assets/images/home/banner-image-1.png',
    background: '#4DB372',
    logos: ['/src/assets/images/home/logo.svg'],
    links: [{ label: 'Conoce más', src: '#' }],
    isBannerItem: true,
  },
  {
    title: 'Encuentro Nacional de Experiencias de paz',
    description: 'Conoce más sobre las 95 iniciativas en torno a la paz que se están realizando en los territorios por la comunidad.',
    image: '/src/assets/images/home/banner-image-1.png',
    background: '#402D5C',
    links: [{ label: 'Conoce más', src: '#' }],
    isBannerItem: true,
  },
  {
    title: 'Curso del conflicto armado a la construcción de paz: Memoria, Violencia y Universidad',
    description: `Sesión 13 | Miércoles 9 de febrero de 2021 | 9:00 a.m.
    Con la presencia de: Mauricio Archila, Rodrigo Torrejano, Stalin Ballesteros, Oscar Cardozo, Patricia Nieto y Esteban Roncancio.`,
    image: '/src/assets/images/home/banner-image-1.png',
    background: '#041449',
    links: [{ label: 'Conoce más', src: '#' }],
    isBannerItem: true,
  },
];

const homeDescription: DescriptionItem = {
  title: '¿Qué es la RedPaz Unal?',
  description: 'Es una iniciativa institucional creada para fortalecer y proyectar el relacionamiento de miembros de la comunidad universitaria de diferentes facultades y sedes interesados en el trabajo colaborativo pertinente y oportuno con comunidades y aliados estratégicos del orden local, regional, nacional e internacional para la construcción de paz en los territorios.',
  links: [
    { label: 'Conoce más', src: '#' },
  ],
};
</script> 

<template>
  <section class="home-content">
    <swiper
      :modules="swiperModules"
      :slides-per-view="1"
      :loop="true"
      :navigation="swiperControls"
      class="relative"
    >
      <swiper-slide
        v-for="(banner, index) in homeBanners"
        :key="index"
      >
        <BannerItem :banner="banner" />
      </swiper-slide>

      <template #container-end>
        <div class="navigation-controls">
          <button class="nav-control prev"><i-mdi-chevron-left/></button>
          <button class="nav-control next"><i-mdi-chevron-right/></button>
        </div>
      </template>
    </swiper>

    <DescriptionSection
      :items="[homeDescription]"
      main-image="/src/assets/images/home/description-image.png"
    />

    <GridSection
      title="Áreas de trabajo"
      background="bg-gray-100"
      :desktop-cols="3"
      :mobile-cols="2"
    >
      <template #items>
        <ItemWithImage
          v-for="(item, index) in JOB_AREAS"
          :key="index"
          :item="item"
          :image-width="60"
          :hide-image-in-mobile="true"
          cover-image="/src/assets/images/home/jobs-background.png"
        />
      </template>
    </GridSection>

    <div class="partners">
      <h2 class="section-title text-white">Conoce a nuestros aliados</h2>

      <div class="logos">
        <div
          v-for="(partner, index) in PARTNERS"
          :key="index"
          class="logo text-center inline-grid justify-items-center items-center"
          :class="partner.isLarge ? 'col-span-2 xl:col-span-4' : 'col-span-1 xl:col-span-2'"
        >
          <img
            :src="buildImageSrc(partner.image)"
            :alt="partner.name"
            :class="{ 'w-4/5 my-4 xl:w-2/3 xl:my-0': partner.isLarge }"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners {
  @apply bg-green-red px-10 py-8;
  @apply xl:px-60 xl:py-40
}

.logos {
  @apply grid grid-cols-2 gap-10;
  @apply xl:grid-cols-8 xl:gap-20;
}

.navigation-controls {
  @apply absolute right-8 bottom-8 z-10 text-white;
  @apply xl:right-10 xl:bottom-10;
}
.nav-control {
  @apply text-xl p-1 m-1 bg-white/40 rounded-md shadow-md shadow-gray-500/50 duration-200 ease-in-out;
  @apply hover:bg-white hover:text-gray-500;
  @apply xl:text-3xl xl:p-2 xl:mr-2;
}
</style>
