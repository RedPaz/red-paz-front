<script setup lang="ts">
import { JOB_AREAS } from '@/common/constants';
import { DescriptionItem, Episode } from '@/common/interfaces';

const description: DescriptionItem = {
  title: 'Descripción',
  description: `El 26 y 27 de agosto la Red Paz llevó a cabo un Encuentro Nacional de Experiencias de Paz virtual, con el que buscamos generar un espacio para el reconocimiento, divulgación e intercambio de saberes de diferentes iniciativas y proyectos de construcción de paz, desarrollados por docentes, investigadores y estudiantes de las 9 sedes de nuestra Universidad, en extensión, investigación y docencia.

A través de este espacio, también nos propusimos recoger los aprendizajes necesarios para promover estrategias de articulación y coordinación, que contribuyan a fortalecer el trabajo colaborativo e interdisciplinar de la Universidad, impactando positivamente en el quehacer en favor de la paz.
Facilitamos 7 espacios virtuales simultáneos llamados mesas temáticas, en los que las y los docentes e investigadores inscritos, junto con sus equipos de trabajo, dieron a conocer sus experiencias y establecieron posibles articulaciones, propuestas y líneas de acción conjuntas.

Cada día del Encuentro, llevamos a cabo un panel abierto en el que contamos con invitados especiales para reflexionar sobre el rol de la Universidad en la construcción de paz.

De forma complementaria, construimos y publicamos una galería virtual de afiches sobre las distintas iniciativas participantes en el Encuentro, con el fin de que la comunidad universitaria y las personas externas conozcan los proyectos de construcción de paz que se han venido adelantando en nuestra Universidad.`,
}

const records: Episode[] = [
  {
    name: 'El contexto de la guerra y de la paz en Colombia: El rol y los desafíos para la Universidad',
    description: `Con la participación de: Patricia Linares, presidenta de la Jurisdicción Especial para la Paz; Leyner Palacios, líder social y secretario general de la Comisión Interétnica de la Verdad del Pacífico; y William Ospina, escritor colombiano.`,
    date: '26 de Agosto de 2020',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
  {
    name: 'La Universidad, la guerra y la paz. Aprendizajes y desafíos',
    description: `Con la participación de: Patricia Sierra, profesora del Departamento de Trabajo Social; Mauricio Archila, profesor del Departamento de Historia; y Camilo Borrero, profesor de la Facultad de Derecho, Ciencias Políticas y Sociales.`,
    date: '27 de Agosto de 2020',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
];
</script>

<template>
  <DescriptionSection
    :items="[description]"
    main-image="/images/experiences/discussions/discussions-description.png"
  />

  <GridSection
    title="Ejes temáticos"
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
        cover-image="/images/home/jobs-background.png"
      />
    </template>
  </GridSection>

  <GridSection
    title="Páneles"
    :desktop-cols="1"
    :align-title-left="true"
  >
    <template #description>
      <p class="section-description">Mira las grabaciones de los páneles</p>
    </template>

    <template #items>
      <EpisodeItem
        v-for="(record, index) in records"
        :key="index"
        :data="record"
        :title="`Panel ${index + 1}`"
        :show-divider="(index + 1) < records.length"
      />
    </template>

    <template #end>
      <SectionDecoration/>
    </template>
  </GridSection>
</template>

<style scoped>
</style>
