<script setup lang="ts">
import { DescriptionItem } from '@/common/interfaces';
import { TERRITORIES_SUPPORT } from '@/common/constants';

const description: DescriptionItem = {
  title: '¿Como apoya RedPaz en las regiones?',
  description: `Como equipo de trabajo de la RedPaz UNAL buscamos:

  - Formular conjuntamente un plan estratégico que permita el logro de los objetivos de la RedPaz UNAL.

  - Promover la participación de profesore(a)s de todas las sedes y de todas las áreas del conocimiento en el Comité de Impulso.

  - Fortalecer el trabajo colaborativo entre miembros de la comunidad universitaria pertenecientes a diferentes facultades y a diferentes sedes.

  - Proponer una estrategia orientada a avanzar en la sostenibilidad académica, organizacional, comunicacional y financiera de la RedPaz UNAL en el corto, mediano y largo plazo.`,
}
</script>

<template>
  <div class="discussions">
    <DescriptionSection
      :items="[description]"
      main-image="/images/experiences/activities/regions/description.png"
    />

    <GridSection
      title="Memorias por territorio"
      background="bg-gray-100"
      :desktop-cols="3"
    >
      <template #items>
        <ItemWithImage
          v-for="(place, index) in TERRITORIES_SUPPORT"
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
</template>

<style scoped>
</style>
