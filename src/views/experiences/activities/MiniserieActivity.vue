<script setup lang="ts">
import { DescriptionItem, Episode } from '@/common/interfaces';

const description: DescriptionItem = {
  title: 'Sobre la Miniserie',
  description: '\“Prácticas de resistencia y propuestas para salir de la guerra”\
  \nEn esta miniserie del programa La Paz en Foco profundizamos en diferentes escenarios de construcción de paz desarrollados por las organizaciones sociales desde diferentes territorios y grupos sociales colombianos.',
  logos: [
    '/src/assets/images/experiences/red-paz.png',
    '/src/assets/images/experiences/FES.png',
  ],
}

const episodes: Episode[] = [
  {
    name: 'Prácticas de resistencia y propuestas para salir de la guerra desde las comunidades afrodescendiente',
    description: `Francia Márquez | Representante por las organizaciones de las comunidades Afro, Negras, Palenqueras y Raizales al Consejo Nacional de Paz
Leyner Palacios | Comisionado de la Comisión para el Esclarecimiento de la Verdad
Alejo Vargas | Director del Centro de Pensamiento y Seguimiento al Diálogo de Paz UN`,
    date: 'Martes 20 de octubre 1:00 p.m.',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
  {
    name: 'Prácticas de resistencia y propuestas para salir de la guerra en el departamento de Córdoba',
    description: `Ángela Rodríguez | De la Comisión para el Esclarecimiento de la Verdad
Irrael Manuel Aguilar | Asesor tradicional para asuntos étnicos y coordinador de salud del Cabildo Mayor del resguardo Zenú Alto San Jorge
Alejo Vargas | Director del Centro de Pensamiento y Seguimiento al Diálogo de Paz UN`,
    date: 'Viernes 23 de octubre 6:00 p.m.',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=-Y_9bzXSQlI',
    },
  },
  {
    name: 'Prácticas de resistencia y propuestas para salir de la guerra en el departamento de Putumayo',
    description: `Esther Pasichana | Representante de la organización Asopuerto Asis
Andrés Cancimance | Diputado del Putumayo por la Colombia Humana
Boris Duarte | Coordinador del Centro de Pensamiento y Seguimiento al Diálogo de Paz UN`,
    date: 'Viernes 30 de octubre 6:00 p.m.',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=GxP-acDTUOg',
    },
  },
  {
    name: 'Prácticas de resistencia y propuestas para salir de la guerra en el Catatumbo',
    description: `María Ciro Zuleta | Organización social Comité de Integración Social del Catatumbo
Yermin Sanguino Ortega | Organización social Comité de Integración Social del Catatumbo
Martha Nubia Bello | Ex Coordinadora de la Red de Ética, Cultura, Ciencia, Tecnología e Innovación para la Paz (Red Paz) UNAL`,
    date: 'Viernes 6 de noviembre 6:00 p.m.',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=LpShM4MPNAY',
    },
  },
  {
    name: 'Prácticas de resistencia y propuestas para salir de la guerra desde las Mujeres víctimas del conflicto',
    description: `Manuela\b Arvilla Herrera | Corporación Red de Empoderamiento de Mujeres de Cartagena de Indias y Bolívar
Dafna Andrea Riascos Nichoy | Corporación Ocho de Marzo
Martha Nubia Bello | Ex Coordinadora de la Red de Ética, Cultura, Ciencia, Tecnología e Innovación para la Paz (Red Paz) UNAL`,
    date: 'Viernes 13 de noviembre 6:00 p.m.',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=CQOx_ZBxJlA',
    },
  },
  {
    name: 'Acciones para salir de la guerra: asumir las deudas pendientes con las comunidades Indígenas',
    description: `José Narciso Jamioy Muchavisoy | Exgobernador del pueblo Kamëntsá del Valle de Sibundo
Ketty Mercedes Fuentes Bolaño | Organización Indígena Kankuama
Alejo Vargas | Director del Centro de Pensamiento y Seguimiento al Diálogo de Paz UN`,
    date: 'Viernes 13 de noviembre 6:00 p.m.',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=2Qr_INl1yWc',
    },
  },
];
</script>

<template>
  <div class="miniserie">
    <DescriptionSection
      :items="[description]"
      main-image="/src/assets/images/experiences/miniseries/miniserie-description.png"
    />
    
    <GridSection
      title="Episodios"
      background="bg-gray-100"
      :desktop-cols="1"
      :align-title-left="true"
  >
      <template #description>
        <p class="section-description">Escucha los episodios en  Radio UNAL o en el canal de Fescol en Spotify</p>
      </template>

      <template #items>
        <EpisodeItem
          v-for="(episode, index) in episodes"
          :key="index"
          :data="episode"
          :title="`Capítulo ${index + 1}`"
          :show-divider="(index + 1) < episodes.length"
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
