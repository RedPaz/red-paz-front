<script setup lang="ts">
import { DescriptionItem } from '@/common/interfaces';

const description: DescriptionItem = {
  title: 'Sobre el Podcast',
  description: 'Vidas y caminos: entre la guerra y la paz  es un podcast producido por la Friedrich Ebert Stiftung en Colombia y la Universidad Nacional. Compartimos el relato de distintos escenarios de construcción de paz, desarrollados por las organizaciones sociales desde diferentes territorios colombianos en la voz de sus protagonistas.',
  logos: [
    '/src/assets/images/experiences/red-paz.png',
    '/src/assets/images/experiences/FES.png',
  ],
}
</script>

<template>
  <div class="podcast">
    <DescriptionSection
      :items="[description]"
      main-image="/src/assets/images/experiences/podcast-description.png"
    />
  </div>
</template>

<style scoped>
</style>
