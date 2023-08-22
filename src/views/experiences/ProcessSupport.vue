<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHeaderStore } from '@/common/stores';
import { DescriptionItem } from '@/common/interfaces';
import { TERRITORIES_SUPPORT } from '@/common/constants';

const headerStore = useHeaderStore();
const { currentTab } = storeToRefs(headerStore);

const description: DescriptionItem = {
  title: '¿Como apoya RedPaz UNAL en las regiones?',
  description: `La RedPaz UNAL fue creada como una iniciativa institucional para fortalecer y proyectar el relacionamiento de miembros de la comunidad universitaria de diferentes sedes y facultades interesados en el trabajo colaborativo por la paz. Por tal razón, desde nuestro accionar hemos emprendido diversas acciones en regiones coordinadas por miembros docentes de la RedPaz UNAL, que junto con diversos actores como organizaciones sociales, cooperación internacional, entidades gubernamentales, líderes y líderesas comunitarias hemos aportado a la construcción de paz con un enfoque transversal y colaborativo.`,
}
</script>

<template>
  <div
    v-if="!currentTab"
    class="discussions"
  >
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

  <router-view v-else />
</template>

<style scoped>
</style>
