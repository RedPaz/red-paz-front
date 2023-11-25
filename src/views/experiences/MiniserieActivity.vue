<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHeaderStore } from '@/common/stores';
import { DescriptionItem, Episode } from '@/common/interfaces';

const headerStore = useHeaderStore();
const { currentTab } = storeToRefs(headerStore);

const description: DescriptionItem = {
  title: 'Sobre la Miniserie',
  description: '\“Prácticas de resistencia y propuestas para salir de la guerra”\
  \nEn esta miniserie del programa La Paz en Foco profundizamos en diferentes escenarios de construcción de paz desarrollados por las organizaciones sociales desde diferentes territorios y grupos sociales colombianos.',
  logos: [
    '/images/experiences/red-paz.png',
    '/images/experiences/FES.png',
  ],
}

const episodes = computed((): Episode[] => [
  {
    name: 'Prácticas de resistencia y propuestas para salir de la guerra desde las comunidades afrodescendiente',
    description: `Francia Márquez | Representante por las organizaciones de las comunidades Afro, Negras, Palenqueras y Raizales al Consejo Nacional de Paz
Leyner Palacios | Comisionado de la Comisión para el Esclarecimiento de la Verdad
Alejo Vargas | Director del Centro de Pensamiento y Seguimiento al Diálogo de Paz UN`,
    date: 'Martes 20 de octubre 1:00 p.m.',
    year: 2021,
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
    year: 2021,
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
    year: 2021,
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
    year: 2021,
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
    year: 2021,
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
    year: 2021,
    sources: {
      youtube: 'https://www.youtube.com/watch?v=2Qr_INl1yWc',
    },
  },
  // 2022
  {
    name: 'Secuestro',
    description: `Camilo Borrero | Abogado. Profesor de la Facultad de Derecho, Ciencia Política y Sociales. Coordinador RedPaz UNAL 2021
Julieta Lemaitre Ripoll | Magistrada de la Sala de Reconocimiento y Verdad de la JEP`,
    date: 'Viernes 8 de abril de 2022 a las 6:00 p.m',
    year: 2022,
    sources: {
      youtube: 'https://www.youtube.com/watch?v=Dx-QW-4XbNU',
    },
  },
  {
    name: 'Enfoque étnico',
    description: `Xiomara Cecilia Balanta | Coordinadora Comisión Étnica de la JEP
Camilo Borrero | Abogado. Profesor de la Facultad de Derecho, Ciencia Política y Sociales. Coordinador RedPaz UNAL 2021`,
    date: 'Viernes 22 de abril de 2022 a las 6:00 p.m',
    year: 2022,
    sources: {
      youtube: 'https://www.youtube.com/watch?v=EfdSwKWPwp4',
    },
  },
  {
    name: 'Medidas Cautelares',
    description: `Gustavo Salazar | Magistrado. Sección de ausencia de reconocimiento de verdad.
Camilo Borrero | Abogado. Profesor de la Facultad de Derecho, Ciencia Política y Sociales. Coordinador RedPaz UNAL 2021`,
    date: 'Viernes 30 de octubre de 2022 a las 6:00 p.m',
    year: 2022,
    sources: {
      youtube: 'https://www.youtube.com/watch?v=PxGyGnMsvfw',
    },
  },
  {
    name: 'Educación para la paz',
    description: `Doris Santos | Profesora del Instituto de Investigación en Educación de la Facultad de Ciencias Humanas de la Universidad Nacional de Colombia. Co-coordinadora de la RedPaz UNAL 2022.
Juan Alfonso de la Rosa | Profesor de la Facultad de Artes de la Universidad Nacional de Colombia. Co-coordinador de la RedPaz UNAL 2022.`,
    date: 'Viernes 6 de noviembre de 2022 a las 6:00 p.m',
    year: 2022,
    sources: {
      youtube: 'https://www.youtube.com/watch?v=rtzE3xzJlgg',
    },
  },
  {
    name: 'Aportes de la UNAL a la memoria y a la paz',
    description: `Mauricio Archila | Profesor Títular del Departamento de Historia de la Universidad Nacional de Colombia. Investigador asociado al centro de Investigación y Educación Popular (CINEP). Miembro del Comité de Impulso de la RedPaz UNAL
Rodrigo Torrejano | Investigador de la Corporación de Estudios Sociales y Culturales de la Memoria y el proyecto Archivos del Búho.`,
    date: 'Viernes 13 de noviembre de 2022 a las 6:00 p.m',
    year: 2022,
    sources: {
      youtube: 'https://www.youtube.com/watch?v=t-5TGHYxVUw',
    },
  },
  {
    name: '¿Cómo va la reincorporación de los firmantes del acuerdo de paz?',
    description: `Bethsy Ruix | Líderesa del Antiguo Espacio Territorial Wilmer Medina ubicado en la Montañita, Caquetá.
Patricia Sierra | Profesora asociada a la Facultad de Ciencias Humanas de la Universidad Nacional de Colombia. Integrante del Comité de Impulso de la RedPaz UNAL`,
    date: 'Viernes 13 de noviembre de 2022 a las 6:00 p.m',
    year: 2022,
    sources: {
      youtube: 'https://www.youtube.com/watch?v=E_RZ4KRy1v0',
    },
  },
].filter((e) => e.year === +currentTab.value)
);
</script>

<template>
  <div class="miniserie">
    <DescriptionSection
      :items="[description]"
      main-image="/images/experiences/miniseries/miniserie-description.png"
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
          :source="'youtube'"
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
