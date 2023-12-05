<script setup lang="ts">
import { DescriptionItem, GridItem, Person } from '@/common/interfaces';

const description: DescriptionItem = {
  title: 'Diagnóstico - Línea Base',
  description: `De acuerdo con el Plan Global de Desarrollo 2019-2021 de la Universidad Nacional de Colombia, la Red Paz se configura como un instrumento encargado de gestionar las acciones que la Universidad emprende como actor fundamental en la consolidación de la paz en el país. Con este mandato, la Red Paz se propuso poner a disposición de la comunidad académica y de la sociedad colombiana un inventario y clasificación de los aportes a la construcción de paz hechos por la Universidad Nacional de Colombia durante los últimos 10 años (2010 – 2019) en cada uno de sus ejes misionales: investigación, extensión y docencia.

  En esta vía, en el 2020 se llevó a cabo un proceso de búsqueda, consolidación y procesamiento de información que dio como resultado el documento “Diagnóstico - Línea Base de Aportes de la Universidad Nacional de Colombia a la Construcción de Paz (2010-2019)”. Este documento representa un primer avance en el propósito mencionado, por lo que no representa el universo completo de los aportes. Estamos trabajando en el diseño de un mecanismo de actualización permanente de la información y en la creación de herramientas virtuales que faciliten su consulta.`,
  image: '/images/about-us/aboutUs.png',
  links: [
    { label: 'Ver PDF', src: '/pdf/recursos/diagnostico-linea-base.pdf' },
    { label: 'Ver matríz', src: '/pdf/recursos/matriz.xlsx' },
  ],
}

const editions: GridItem[] = [
  {
    title: 'Conflicto social, político y armado',
    src: '#',
    image: '/images/home/red-paz.svg',
    color: '#402D5C',
  },
  {
    title: 'Víctimas y justicia transicional',
    src: '#',
    image: '/images/home/red-paz.svg',
    color: '#402D5C',
  },
  {
    title: 'Desarrollo y equidad social',
    src: '/experiencias-de-paz/catedra-conflicto-armado/2021-2',
    image: '/images/home/red-paz.svg',
    color: '#402D5C',
  },
  {
    title: 'Solución política y procesos de paz',
    src: '#',
    image: '/images/home/red-paz.svg',
    color: '#402D5C',
  },
  {
    title: 'Memoria histórica',
    src: '#',
    image: '/images/home/red-paz.svg',
    color: '#402D5C',
  },
  {
    title: 'Democracia y sistema político',
    src: '/experiencias-de-paz/catedra-conflicto-armado/2021-2',
    image: '/images/home/red-paz.svg',
    color: '#402D5C',
  },
];

const UN_TEAM: Person[] = [
  {
    name: 'Boris Duarte Caviedes',
    image: '/images/about-us/team/man-default.png',
    imageDetail: '/images/about-us/team/man-default-full.png',
    faculty: 'Politologo y estudiante',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
  {
    name: 'Jhonnathan Gutierrez Castaño',
    image: '/images/about-us/team/man-default.png',
    imageDetail: '/images/about-us/team/man-default-full.png',
    faculty: 'Politologo y estudiante',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
].map((person, index) => ({
  ...person,
  id: index + 1 ,
  slug: slugify(person.name),
  description: '',
}));
</script>

<template>
  <section class="base-line-publication">
    <DescriptionSection
      :items="[description]"
      :main-image="description.image"
    />

    <GridSection
      title="¿Qué encontrarás?"
      :desktop-cols="3"
      align-title-left
      background="bg-gray-100"
    >
      <template #description>
        <p class="section-description">El comité de impulso de la Red Paz se constituye como un espacio que formula un plan y unas líneas generales de trabajo, que estimula los procesos de intercambio de experiencias, la comunicación y la articulación para el diálogo fluido con y entre los nodos de sede, y que propende por generar escenarios de incidencia efectivos en el orden nacional.</p>
      </template>

      <template #items>
        <ItemWithImage
          v-for="(item, index) in editions"
          :key="index"
          :item="item"
          :image-width="90"
          :hide-image-in-mobile="true"
          cover-image="/images/home/jobs-background.png"
        />
      </template>
    </GridSection>

    <GridSection
      title="Equipo de trabajo"
      align-title-left
      :desktop-cols="3"
    >
      <template #description>
        <p class="section-description">Autores del proyecto</p>
      </template>

      <template #items>
        <PersonItem
          v-for="person in UN_TEAM"
          :key="person.id"
          :data="person"
        />
      </template>
    </GridSection>

    <div class="message-section relative">
      <h3 class="message">
        <span class="icon icon-quote-left block text-5xl xl:text-[80px] mb-5" />

        “La Universidad Nacional de Colombia tiene una responsabilidad no solo con la comunidad universitaria, sino también con los diferentes actores sociales en el proceso de construcción de un país más equitativo y en paz.”
      </h3>

      <SectionDecoration type="white" />
    </div>
  </section>
</template>

<style scoped>
.message-section {
  @apply bg-green-red px-10 py-8 mt-6;
  @apply xl:px-60 xl:pt-28 xl:pb-40 xl:mt-0;
}

.message {
  @apply text-white text-lg text-center mb-14;
  @apply xl:text-3xl xl:leading-10 xl:mb-0;
}
</style>
