<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
import { DescriptionItem, GridItem } from '@/common/interfaces';

const description: DescriptionItem = {
  title: 'Descripción',
  description: `En este curso proponemos hacer un recorrido por los principales hitos que dan cuenta de las características y dimensiones del conflicto armado de más de 50 años en el país, y analizar los diversos esfuerzos de negociación política que se han realizado con el fin de poner fin a la confrontación armada. Este recorrido se realiza desde la perspectiva de los daños materiales e inmateriales, políticos, culturales y psicosociales que ha causado la guerra a los diversos sectores, comunidades y colectivos afectados, teniendo en cuenta las luchas y procesos en aras de conquistar los derechos a la reparación, la verdad, la justicia y las garantías de no repetición, adelantados por las víctimas, las organizaciones de derechos humanos y la sociedad civil.

  En las sesiones del curso se procura combinar análisis nacionales y territoriales, dando lugar a la presentación de casos que permitan abordar modalidades específicas de violencia y situaciones particulares de los grupos y sectores poblacionales. Se hará un especial énfasis en la identificación de los retos, dificultades y oportunidades que afronta el país de cara a construir una paz estable y duradera.

  Contaremos con la participación de invitados especiales: líderes sociales, funcionarios públicos, académicos y profesores de las distintas sedes de la UNAL.`,
}

const objectives: DescriptionItem[] = [
  {
    title: 'Objetivo 1',
    description: 'Reconocer el origen, las dinámicas y la transformación del conflicto armado interno en el país.',
  },
  {
    title: 'Objetivo 2',
    description: 'Analizar los impactos del conflicto armado sobre las víctimas, la sociedad y el país y los actuales procesos de reparación, de verdad, de justicia y de garantías de no repetición.'
  },
  {
    title: 'Objetivo 3',
    description: 'Identificar y analizar las experiencias de negociación y de construcción de paz en la historia reciente: sus alcances, limitaciones, aciertos y desaciertos.',
  },
  {
    title: 'Objetivo 4',
    description: 'Reconocer y analizar iniciativas de resistencia y de construcción de paz emprendidas por comunidades, organizaciones sociales y por la academia desde distintas disciplinas.',
  },
  {
    title: 'Objetivo 5',
    description: 'Identificar los retos actuales del país para la superación del conflicto armado y la construcción de paz',
  },
];

const editions: GridItem[] = [
  {
    title: 'Año',
    src: '#',
    image: '/images/home/red-paz.svg',
    color: '#4DB372',
    description: 'Curso de conflicto armado a la construcción de Paz',
  },
  {
    title: '2021-1',
    src: '#',
    image: '/images/home/red-paz.svg',
    color: '#4DB372',
    description: 'Curso de conflicto armado a la construcción de Paz',
  },
  {
    title: '2021-2',
    src: '/experiencias-de-paz/catedra-conflicto-armado/2021-2',
    image: '/images/home/red-paz.svg',
    color: '#4DB372',
    description: 'Curso de conflicto armado a la construcción de Paz',
  },
];
</script>

<template>
  <DescriptionSection
    :items="[description]"
    main-image="/images/experiences/conflict-cathedra/description.png"
  />

  <GridSection
    title="Objetivos"
    background="bg-green-red"
    align-title-left
    :desktop-cols="1"
  >
    <template #description>
      <p class="description text-white">Estos son los 5 objetivos que tiene la cátedra del Conflicto armado a la construcción de paz</p>
    </template>

    <template #items>
      <RedSlider
        show-pagination
        navigation-style="transparency"
        navigation-position="topOut"
        :slider-per-view="3"
        :show-navs-in-mobile="false"
      >
        <template #slides>
          <swiper-slide
            v-for="(item, index) in objectives"
            :key="index"
            class="featured-item rounded-lg overflow-hidden shadow-sm bg-white/20"
          >
          <div class="item-content p-6 text-white">
            <h3 class="item-title !text-left text-xl">
              {{ item.title }}
            </h3>

            <p class="item-description mt-5 mb-16 text-lg font-light leading-6 whitespace-pre-line">
              {{ item.description }}
            </p>
          </div>
          </swiper-slide>
        </template>
      </RedSlider>
    </template>
  </GridSection>

  <GridSection
    title="Ediciones del curso"
    background="bg-gray-100"
    align-title-left
    :desktop-cols="3"
  >
    <template #description>
      <p class="description">A continuación encontrarás información sobre las 3 versiones que se dieron sobre la catedra</p>
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

    <template #end>
      <SectionDecoration/>
    </template>
  </GridSection>
</template>

<style scoped>
.description {
  @apply mb-6 text-lg;
}
</style>
