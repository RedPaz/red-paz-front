<script setup lang="ts">
import { DescriptionItem, Episode } from '@/common/interfaces';

const description: DescriptionItem = {
  title: 'Sobre esta edición',
  description: `Coordinadores

  - Camilo Alberto Borrero, Sede Bogotá
  - Claudia Patricia Sierra, Sede Bogotá
  - Mary Luz Alzate, Sede Medellín
  - Rayén Amanda Rovira, Sede Manizales
  - Oscar Mauricio Vélez, Sede Palmira

  Horario: Miércoles de 9:00 a.m. a 12:00 m.
  Fecha de inicio: 6 de Octubre de 2021
  Fecha de finalización: 6 de febrero de 2022
  Código: 2027938`,
}

const records: Episode[] = [
  {
    name: 'Para entender el conflicto armado',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '02 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-1.jpg',
    sources: {
      facebook: '#',
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
  {
    name: 'La Universidad, la guerra y la paz. Aprendizajes y desafíos',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '02 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-2.jpg',
    sources: {
      facebook: '#',
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
  {
    name: 'La Universidad, la guerra y la paz. Aprendizajes y desafíos',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '02 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-3.jpg',
    sources: {
      facebook: '#',
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
  {
    name: 'La Universidad, la guerra y la paz. Aprendizajes y desafíos',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '02 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-4.jpg',
    sources: {
      facebook: '#',
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
  {
    name: 'La Universidad, la guerra y la paz. Aprendizajes y desafíos',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '02 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-5.jpg',
    sources: {
      facebook: '#',
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
  {
    name: 'La Universidad, la guerra y la paz. Aprendizajes y desafíos',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '02 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-5.jpg',
    sources: {
      facebook: '#',
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
];
</script>

<template>
  <DescriptionSection
    :items="[description]"
    main-image="/images/experiences/conflict-cathedra/2021-2.png"
  />

  <GridSection
    title="Sesiones"
    :desktop-cols="1"
    :align-title-left="true"
    background="bg-gray-100"
  >
    <template #description>
      <p class="section-description">Mira las grabaciones de los páneles</p>
    </template>

    <template #items>
      <EpisodeItem
        v-for="(record, index) in records"
        :key="index"
        :data="record"
        :title="`Sesión ${index + 1}`"
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
