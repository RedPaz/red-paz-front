<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { SwiperSlide } from 'swiper/vue';
import { JOB_AREAS, PARTNERS, FEATURED_AREAS } from '@/common/constants';
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
  title: '¿Qué es la RedPaz Unal?',
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

const featuredItems: FeaturedItem[] = [
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/home/featured/featured-1.jpg',
    title: 'Podcast: Vidas y caminos entre la guerra y la paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.podcast }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/home/featured/featured-2.jpg',
    title: 'Catedra: Del conflicto armado a la construcción de paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.training }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/home/featured/featured-3.jpg',
    title: 'Encuentro Nacional de Experiencias de Paz 2020',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.events }
  },
  {
    category: 'INICIATIVAS REDPAZ UNAL',
    image: '/images/home/featured/featured-2.jpg',
    title: 'Catedra: Del conflicto armado a la construcción de paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.training }
  },
];
</script>

<template>
  <section class="home-content">
    <RedSlider
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

    <DescriptionSection
      :items="[homeDescription]"
      main-image="/images/home/description-image.png"
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

    <GridSection
      title="Áreas temáticas"
      :desktop-cols="3"
      :mobile-cols="2"
    >
      <template #description>
        <p class="description">La comunidad universitaria ha venido desarrollando iniciativas en los siguientes campos:</p>
      </template>

      <template #items>
        <ItemWithImage
          v-for="(item, index) in JOB_AREAS"
          :key="index"
          :item="item"
          :image-width="60"
          :hide-image-in-mobile="true"
          cover-image="/images/home/jobs-background.png"
        />
      </template>
    </GridSection>

    <GridSection
      title="Contenidos destacados"
      background="bg-gray-100"
      align-title-left
      :desktop-cols="1"
    >
      <template #items>
        <RedSlider
          :slider-per-view="3"
          show-pagination
          navigation-position="topOut"
        >
          <template #slides>
            <swiper-slide
              v-for="(item, index) in featuredItems"
              :key="index"
              class="featured-item rounded-lg overflow-hidden shadow-sm bg-white"
            >
            <div class="item-image relative">
              <img :src="item.image" :alt="item.title">

              <div
                class="item-type text-white flex items-center justify-center p-1 w-1/4 absolute top-0 right-0 rounded-bl-lg"
                :style="{ backgroundColor: item.area.color }"
              >
                <Icon
                  :icon="`mdi-${item.area.icon}`"
                  class="mr-3"
                />

                {{ item.area.name }}
              </div>
            </div>

            <div class="item-content p-6">
              <h3 class="item-title">
                <span class="item-category text-gray-unal-400 uppercase tracking-widest block text-lg">{{ item.category }}</span>
                {{ item.title }}
              </h3>

              <div class="item-details mt-5 flex justify-between items-center">
                <div class="item-date flex items-center italic text-gray-unal-100">
                  <Icon icon="mdi-clock-outline" class="mr-3" />
                  {{ item.date }}
                </div>

                <a class="item-link bg-green-red text-white px-12 py-1.5 font-xl tracking-wider rounded-md" :href="item.url">Ver más</a>
              </div>
            </div>
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
          :class="partner.isLarge ? 'col-span-2 xl:col-span-4' : 'col-span-1 xl:col-span-2'"
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
  @apply xl:px-60 xl:py-40
}

.logos {
  @apply grid grid-cols-2 gap-10;
  @apply xl:grid-cols-8 xl:gap-20;
}

.description {
  @apply text-center mb-8 text-lg;
}
</style>
