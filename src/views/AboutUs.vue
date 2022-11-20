<script setup lang="ts">
import { DescriptionItem } from '@/common/interfaces';
import { JOB_AREAS, TEAM_MEMBERS } from '@/common/constants';

const aboutUsDescriptions: DescriptionItem[] = [
  {
    title: '¿Qué es la Red de Ética, Cultura, Creación, Ciencia, Tecnología e Innovación para la Paz de la Universidad Nacional de Colombia (Red Paz UNAL)?',
    description: 'Es una iniciativa institucional creada para fortalecer y proyectar el relacionamiento de miembros de la comunidad universitaria de diferentes facultades y sedes interesados en el trabajo colaborativo pertinente y oportuno con comunidades y aliados estratégicos del orden local, regional, nacional e internacional para la construcción de paz en los territorios.',
  },
  {
    title: 'Objetivo general',
    description: 'Articular una red de cultura y ciencia, tecnología e innovación que integre la riqueza académica de la Universidad Nacional de Colombia y potencie las capacidades de trabajo de la comunidad universitaria de cara a los retos de la construcción paz y la consolidación de la nación, teniendo en cuenta las particularidades territoriales de cada región, y la posibilidad de hacer alianzas con diversos actores sociales.',
  }
];

const objectives: any[] = [
  {
    image: '/src/assets/images/about-us/red-paz.svg',
    description: 'Potenciar las capacidades de investigación, extensión y docencia de la Universidad Nacional de Colombia en función de las necesidades y retos de la construcción de paz.',
  },
  {
    image: '/src/assets/images/about-us/red-paz.svg',
    description: 'Generar vínculos locales, regionales y nacionales al interior de la Universidad, y entre instituciones gubernamentales, gremios, organizaciones sociales y comunidad en general.',
  },
]

const whichWeDo: DescriptionItem = {
  title: '¿Qué hace la RedPaz Unal?',
  description: `- Promueve el diálogo de saberes entre los diferentes actores sociales interesados en el abordaje integral de la construcción de paz territorial

- Establece formas de relacionamiento y colaboración significativas y efectivas entre los miembros de la comunidad universitaria y entre estos y los diferentes actores sociales interesados en la construcción de paz territorial

- Define con las comunidades canales y formas de comunicación adecuados, pertinentes y efectivos en la construcción de paz territorial

- Apoya la identificación  y vinculación de fuentes de financiación internas y externas que contribuyan al desarrollo de iniciativas de construcción de paz territorial en el corto, mediano y largo plazo`
}

const actionLines: any[] = [
  {
    image: '/src/assets/images/about-us/red-paz.svg',
    description: 'Apoyo interdisciplinario e intersedes a procesos de reincorporación y reconciliación en los territorios de influencia de las sedes de presencia nacional',
  },
  {
    image: '/src/assets/images/about-us/red-paz.svg',
    description: 'Creación de espacios de discusión en la comunidad universitaria y entre esta y otros actores sociales sobre temas de coyuntura relacionados con el proceso de construcción de paz',
  },
  {
    image: '/src/assets/images/about-us/red-paz.svg',
    description: 'Creación de espacios de discusión en la comunidad universitaria y entre esta y otros actores sociales sobre temas de coyuntura relacionados con el proceso de construcción de paz',
  },
  {
    image: '/src/assets/images/about-us/red-paz.svg',
    description: 'Identificación de líneas de acción curricular que promuevan la formación transdisciplinar de los miembros de la comunidad universitaria participantes que se requieren en la articulación de las funciones misionales de docencia, investigación y extensión en y para la construcción de paz',
  },
];
</script>

<template>
  <section class="about-us">
    <PageHeader
      title="Sobre Nosotros"
      background="#4DB372"
      image="/src/assets/images/about-us/header-image.png"
    />

    <DescriptionSection
      :items="aboutUsDescriptions"
      main-image="/src/assets/images/home/description-image.png"
    />

    <GridSection
      title="Objetivos específicos"
      background="bg-gray-100"
    >
      <template #items>
        <BaseItem
          v-for="(item, index) in objectives"
          :key="index"
          :item="item"
        />
      </template>
    </GridSection>

    <DescriptionSection
      :items="[whichWeDo]"
      main-image="/src/assets/images/about-us/which-description.png"
      :swap-items="true"
    />

    <GridSection
      title="Líneas de acción estratégicas"
      background="bg-gray-100"
    >
      <template #items>
        <BaseItem
          v-for="(item, index) in actionLines"
          :key="index"
          :item="item"
        />
      </template>
    </GridSection>

    <GridSection
      title="Equipo de trabajo"
      :desktop-cols="3"
    >
      <template #description>
        <p class="xl:text-xl mb-10 text-base font-light">El comité de impulso de la RedPaz Unal se constituye como un espacio que formula un plan y unas líneas generales de trabajo.</p>
      </template>

      <template #items>
        <PersonItem
          v-for="(person, index) in TEAM_MEMBERS"
          :key="index"
          :data="person"
          :highlight="person.highLight"
        />
      </template>
    </GridSection>

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
          cover-image="/src/assets/images/home/jobs-background.png"
        />
      </template>

      <template #end>
        <div
          class="end-decoration"
        >
          <div
            class="dec-image"
            :style="{
              background: `url(/src/assets/images/about-us/red-paz.svg) repeat-x 0 0 transparent`,
              backgroundSize: '64px',
            }"
          />
          <div class="dec-color"/>
        </div>
      </template>
    </GridSection>
  </section>
</template>

<style scoped>
.end-decoration {
  @apply absolute bottom-0 left-0 h-16 w-full;
}

.end-decoration .dec-image {
  @apply h-8 w-full opacity-20;
}

.dec-color {
  @apply h-8 bg-green-red z-10;
}
</style>
