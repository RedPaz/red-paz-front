<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
import { PARTNERS, FEATURED_AREAS, RED_PAZ_POSTS, RED_PAZ_INITIATIVES } from '@/common/constants';
import { Banner, DescriptionItem, FeaturedItem } from '@/common/interfaces';

const homeBanners: Banner[] = [
  {
    title: 'Bienvenidos a',
    description: 'Plataforma de divulgación, encuentro e intercambio de iniciativas de apoyo a la construcción de paz',
    image: '/images/home/banner-image-1.png',
    background: '#4DB372',
    logos: ['/images/home/logo.svg'],
    links: [{ label: 'Leer más', src: '#' }],
    isBannerItem: true,
  },
  {
    title: 'Encuentro Nacional de Experiencias de paz',
    description: 'Conoce más sobre las 95 iniciativas en torno a la paz que se están realizando en los territorios por la comunidad.',
    image: '/images/home/banner-image-1.png',
    background: '#402D5C',
    links: [{ label: 'Leer más', src: '#' }],
    isBannerItem: true,
  },
  {
    title: 'Curso del conflicto armado a la construcción de paz: Memoria, Violencia y Universidad',
    description: `Sesión 13 | Miércoles 9 de febrero de 2021 | 9:00 a.m.
    Con la presencia de: Mauricio Archila, Rodrigo Torrejano, Stalin Ballesteros, Oscar Cardozo, Patricia Nieto y Esteban Roncancio.`,
    image: '/images/home/banner-image-1.png',
    background: '#041449',
    links: [{ label: 'Conoce más', src: '#' }],
    isBannerItem: true,
  },
];

const homeDescription: DescriptionItem = {
  title: '¿Qué es la RedPaz UNAL?',
  description: 'Es una iniciativa institucional creada para fortalecer y proyectar el relacionamiento de miembros de la comunidad universitaria de diferentes facultades y sedes interesados en el trabajo colaborativo pertinente y oportuno con comunidades y aliados estratégicos del orden local, regional, nacional e internacional para la construcción de paz en los territorios.',
  links: [
    { label: 'Conoce más', src: '#' },
  ],
};

const actionLines: any[] = [
  {
    image: '/images/about-us/red-paz.svg',
    description: 'Seguir apoyando, a partir del trabajo entre facultades y sedes, los procesos de reincorporación y reconciliación que toman lugar en los territorios de influencia de las sedes de la Universidad',
  },
  {
    image: '/images/about-us/red-paz.svg',
    description: 'Crear espacios de discusión en la comunidad universitaria y entre esta y otros actores sociales sobre temas de coyuntura relacionados con el proceso de construcción de paz',
  },
  {
    image: '/images/about-us/red-paz.svg',
    description: 'Continuar apoyando al Sistema Integral de Verdad, Justicia, Reparación y No Repetición en el abordaje de los nuevos desafíos misionales de sus diferentes componentes',
  },
  {
    image: '/images/about-us/red-paz.svg',
    description: 'Identificar líneas de trabajo curricular que promuevan la formación transdisciplinar de los miembros de la comunidad universitaria que participan en la articulación de las funciones misionales de docencia, investigación y extensión en y para la construcción de paz',
  },
];

const featuredItems = computed(() => [
  ...RED_PAZ_INITIATIVES.filter((p) => p.highlighted),
  ...RED_PAZ_POSTS.filter((p) => p.highlighted),
]);

const homeNews: FeaturedItem[] = [
  {
    category: 'Agencia de noticias UNAL',
    image: '/images/home/news/ciencia.png',
    title: 'Ciencia para la paz, un diálogo necesario entre la Investigación y las Comunidades',
    date: '06 de junio de 2023',
    url: 'https://agenciadenoticias.unal.edu.co/detalle/ciencia-para-la-paz-un-dialogo-necesario-entre-la-investigacion-y-las-comunidades',
    area: { ...FEATURED_AREAS.articles },
    blank: true,
  },
  {
    category: 'Agencia de noticias UNAL',
    image: '/images/home/news/saravena.png',
    title: 'Huertas comunitarias para la reconciliación en Saravena',
    date: '01 de junio de 2023',
    url: 'https://agenciadenoticias.unal.edu.co//detalle/huertas-comunitarias-para-la-reconciliacion-en-saravena-arauca',
    area: { ...FEATURED_AREAS.articles },
    blank: true,
  },
  {
    category: 'Periódico UNAL',
    image: '/images/home/news/deforestacion.png',
    title: 'Política de guerra contra la deforestación es errada',
    date: '28 de junio de 2022',
    url: 'https://periodico.unal.edu.co/articulos/politica-de-guerra-contra-la-deforestacion-es-errada/',
    area: { ...FEATURED_AREAS.articles },
    blank: true,
  },
];

</script>

<template>
  <section class="home-content">
    <RedSlider
      navigation-style="transparency"
      :slider-per-view="1"
      :show-pagination="false"
    >
      <template #slides>
        <swiper-slide
          v-for="(banner, index) in homeBanners"
          :key="index"
        >
          <BannerItem :banner="banner" />
        </swiper-slide>
      </template>
    </RedSlider>

    <DescriptionVideo
      :data="homeDescription"
      video-src="https://www.youtube.com/watch?v=oCbAKjTLMLo"
    />

    <GridSection
      title="Líneas de acción"
      background="bg-gray-100"
    >
      <template #description>
        <p class="description">La RedPaz UNAL busca hacer un aporte significativo a la construcción de paz desde las siguientes líneas de acción en el período 2022-2024.</p>
      </template>

      <template #items>
        <BaseItem
          v-for="(item, index) in actionLines"
          :key="index"
          :item="item"
        />
      </template>
    </GridSection>

    <JobAreas background="bg-white"/>

    <GridSection
      title="Contenidos destacados"
      background="bg-gray-100"
      align-title-left
      :desktop-cols="1"
    >
      <template #items>
        <RedSlider
          show-pagination
          navigation-position="topOut"
          :slider-per-view="3"
          :show-navs-in-mobile="false"
        >
          <template #slides>
            <swiper-slide
              v-for="(item, index) in featuredItems"
              :key="index"
              class="featured-item"
            >
              <PictureNew :item="item"/>
            </swiper-slide>
          </template>
        </RedSlider>
      </template>
    </GridSection>

    <GridSection
      title="Noticias"
      align-title-left
      :desktop-cols="1"
    >
      <template #items>
        <RedSlider
          show-pagination
          navigation-position="topOut"
          :slider-per-view="3"
          :show-navs-in-mobile="false"
        >
          <template #slides>
            <swiper-slide
              v-for="(item, index) in homeNews"
              :key="index"
              class="featured-item"
            >
              <PictureNew :item="item"/>
            </swiper-slide>
          </template>
        </RedSlider>
      </template>
    </GridSection>

    <div class="partners">
      <h2 class="section-title text-white">Conoce a nuestros aliados</h2>

      <div class="logos">
        <div
          v-for="(partner, index) in PARTNERS"
          :key="index"
          class="logo text-center inline-grid justify-items-center items-center"
          :class="partner.isLarge ? 'col-span-2 xl:col-span-3' : 'col-span-1 xl:col-span-3'"
        >
          <img
            :src="partner.image"
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
  @apply xl:px-60 xl:py-40;
}

.logos {
  @apply grid grid-cols-2 gap-10;
  @apply xl:grid-cols-8 xl:gap-5;
}

.description {
  @apply text-center mb-8 text-lg;
}
</style>
