<script setup lang="ts">
import { FeaturedItem } from '@/common/interfaces';

const featuredItems: FeaturedItem[] = [
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/mosca-soldado.jpg',
    title: 'Uso de la Mosca Soldado Negra como alimento alternativo en peces.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/catedra.jpg',
    title: 'Apoyo al Gobierno Nacional en el desarrollo de proyectos estratégicos para la paz.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/tecnologia-innovacion.jpg',
    title: 'Apropiación social de la ciencia, tecnología e innovación a través de una iniciativa de intervención e inclusión educativa',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/inclusion-digital-educativa.jpg',
    title: 'Inclusión digital educativa, laboral y de entretenimiento a personas en situaciones especiales victimas del conflicto',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/inclusion-digital-educativa.jpg',
    title: 'Inclusión digital educativa, laboral y de entretenimiento a personas en situaciones especiales victimas del conflicto',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/encuentro-nuclear.jpg',
    title: 'Nuclear quadrupole resonance system for landmine detection in Antioquia - Tesis de doctorado',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/papas.jpg',
    title: 'Papas más nutritivas',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/piscicultura-basica.jpg',
    title: 'Curso de piscicultura básica y tecnología de productos de pescado',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/astronomia.jpg',
    title: 'Astronomía para la paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/mujeres-cientificas.jpg',
    title: 'Mujeres y niñas científicas construyendo paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/traspazar.jpg',
    title: 'TRASPAZAR',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/base-comunitaria.jpg',
    title: 'Implicaciones de la colaboración en Ecosistemas de Innovación de Base Comunitaria',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/aeroponia.jpg',
    title: 'Aeroponia y Agricultura del Siglo XXI',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/caminos-guerra-paz.jpg',
    title: 'Caminos de Guerra a Caminos de Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Fortalecimiento de capacidades educativas en territorios de paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/labpaz.jpg',
    title: 'LabPaz - Laboratorio de Innovación para la Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/investigacion-meta.jpg',
    title: 'Promoción de una cultura de investigación histórica para el departamento del Meta',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/proyectos-productivos.jpg',
    title: 'Apoyo y acompañamiento a la formulación de proyectos productivos en el proceso de reincorporación',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
  {
    category: 'ENCUENTRO NACIONAL 2020',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Semillero de innovación social SIS - UNAL',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science }
  },
];
</script>

<template>
  <!-- TODO: Fix overlaps error -->
  <div class="redpaz-areas mt-20">
    <GridSection :desktop-cols="3">
      <template #items>
        <PictureNew
          v-for="(item, index) in featuredItems"
          :key="index"
          :item="item"
        />
      </template>

      <template #end>
        <SectionDecoration />
      </template>
    </GridSection>
  </div>
</template>

<style scoped>

</style>
