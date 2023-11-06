<script setup lang="ts">
import { DescriptionItem } from '@/common/interfaces';
import { TERRITORY_MEMORIES } from '@/common/constants';

const whatWeDo: DescriptionItem = {
  title: '¿En que consistió?',
  description: 'La emergencia sanitaria causada por el COVID-19 trajo nuevas dificultades a territorios que históricamente se han visto afectado por la violencia y el conflicto armado. En este contexto, se realizaron 6 conversatorios territoriales y temáticos virtuales, cuyo objetivo fue analizar y determinar acciones urgentes para frenar la violencia y contribuir a la implementaciones de los acuerdos de paz.',
};

const description: DescriptionItem = {
  description: `Estos encuentros giraron en torno a 4 asuntos relevantes:

- Indagar por el estado de implementación de los acuerdos de paz en la coyuntura de la emergencia sanitaria.
- Realizar un diagnóstico de la situación de derechos humanos, particularmente de los líderes y lideresas sociales.
- Identificar de desafíos y nuevas realidades que ha planteado la pandemia del COVID-19 en las regiones.
- Ubicar llamados urgentes al estado y a la sociedad civil, en aras de superar las situaciones de violación derechos humanos y contribuir en procesos de construcción de paz.

Estos conversatorios fueron organizados por la Red Paz UNAL y Fescol, y contaron con la participación de distintas organizaciones, actores y líderes sociales, y expertos del mundo académico.

Te invitamos a leer las memorias de estos conversatorios`,
};
</script>

<template>
  <div
    class="discussions"
  >
    <DescriptionVideo
      :data="whatWeDo"
      video-src="https://www.youtube.com/watch?v=uBDsfkZRe2k"
      background="bg-gray-100"
    />

    <DescriptionSection
      :items="[description]"
      main-image="/images/experiences/discussions/discussions-description.png"
    />

    <GridSection
      title="Memorias por territorio"
      background="bg-gray-100"
      :desktop-cols="3"
    >
      <template #items>
        <ItemWithImage
          v-for="(place, index) in TERRITORY_MEMORIES"
          :key="index"
          :item="place"
          cover-image="/images/experiences/discussions/lines.png"
        />
      </template>

      <template #end>
        <SectionDecoration/>
      </template>
    </GridSection>
  </div>

  <router-view />
</template>

<style scoped>
</style>
