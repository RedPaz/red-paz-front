<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHeaderStore } from '@/common/stores';
import { DescriptionItem } from '@/common/interfaces';

const headerStore = useHeaderStore();
const { currentTab } = storeToRefs(headerStore);

const detailsInfo = [
  {
    title: '2021',
    description: `Durante el 2021 en el marco del eje estratégico Alianzas que aportan a la implementación del Acuerdo de Paz a nivel nacional, territorial y local se propuso el desarrollo de una serie de actividades de apoyo en el Departamento de Putumayo, titulado: “Fortalecimiento de dinámicas territoriales para la implementación del Acuerdo Final para la Terminación del Conflicto y la Construcción de una Paz estable y duradera, con énfasis en reincorporación”

    Las actividades fueron lideradas por las profesoras María Clemencia Castro y Patricia Sierra , miembros del Comité de Impulso de la RedPaz UNAL, quienes fueron apoyadas por profesionales en territorio`,
    subtitle: 'Se realizaron dos acciones específicas en el Departamento de Putumayo:',
    activities: [
      {
        title: 'Mapeo de actores sociales vinculados al proceso de reincorporación en el Departamento de Putumayo:',
        description: `A partir de un amplio trabajo de entrevistas y reuniones con agentes claves del territorio, se construyó un mapa de actores vinculados al proceso de reincorporación en el departamento, el cual permitió identificar diversas iniciativas en el territorio relacionadas con el tema y aportar, así, a la creación del Consejo Departamental de Reincorporación en el Departamento del Putumayo.  Este trabajo se basó en aportes previos liderados por las docentes en el territorio a través del Observatorio de Paz y Conflicto de la Universidad Nacional de Colombia y la Especialización en Acción sin daño y Construcción de paz de la Facultad de Ciencias Humanas de la Sede Bogotá.  La construcción del mapa y las acciones implementadas permitieron identificar que:

        Los firmantes residentes en Putumayo tienen diversas posturas frente al cumplimiento del Acuerdo de Paz en el departamento. Sin embargo, la totalidad de los participantes demuestra un profundo compromiso con la reincorporación y su voluntad de trabajo.

        Los actores involucrados en el proceso de reincorporación, con  capacidad para intervenir y apoyar acciones determinantes en Putumayo, son: los firmantes de Paz, la Gobernación del Departamento del Putumayo, la Agencia para la Reincorporación y la Normalización (ARN), la Oficina del Alto Comisionado para la Paz (OACP), el Programa de las Naciones Unidas para el Desarrollo (PNUD), la Pastoral Social, la Organización Internacional para las Migraciones (OIM), las Alcaldías, la Cámara de Comercio, la Misión de Apoyo al Proceso de Paz en Colombia, la Misión De Verificación de las Naciones Unidas (Misión ONU), el Comité Internacional para el desarrollo de los Pueblos (CISP), el Fondo Europeo para la Paz, ACSOMAYO, la Jurisdicción Especial para la Paz (JEP), la Comisión para el Esclarecimiento de la Verdad (CEV), la Unidad de Búsqueda de Personas Dadas por Desaparecida (UBPD), el SENA y el Ejército Nacional.

        Se identificaron 39 iniciativas de reincorporación, caracterizadas en un alto porcentaje en temas agrícolas, ganaderos y de piscicultura. Una gran parte de las iniciativas productivas se enfocan en la generación de ingresos para colectivos de firmantes del Acuerdo de Paz.`
      },
      {
        title: 'Fortalecimiento del Consejo Departamental de Reincorporación (CDR)',
        description: `La segunda actividad realizada fue apoyar la creación del Consejo Departamental de Reincorporación (CDR).

        En noviembre de 2021, cuando inició el apoyo de la RedPaz UNAL al proceso de reincorporación en el Departamento del Putumayo, únicamente se contaba con un borrador del acuerdo para la creación de un CDR y un compromiso verbal de la Comisión de Reincorporación adscrita provisionalmente al Consejo Departamental de Paz (CDP). Por esta razón, actores estratégicos como la Misión de Verificación de las Naciones Unidas y la Agencia para la Reincorporación y la Normalización (ARN) plantearon la necesidad de crear un CDR en el departamento, como un espacio que contribuyera a facilitar la materialización de la política pública para la reincorporación.

        Con base en esta información, docentes y profesionales de la Universidad Nacional de Colombia hicieron un balance de los factores que no habían permitido la existencia de un CDR y de las gestiones realizadas para promover su creación. El balance fue construido a partir de las reuniones presenciales y virtuales realizadas entre noviembre de 2021 y febrero 2022 con representantes de la institucionalidad, firmantes del Acuerdo de Paz y de la cooperación internacional. Sus hallazgos fueron profundizados con información de medios de comunicación.

        Además, la Universidad Nacional de Colombia,, a través de la RedPaz UNAL apoyó la revisión y justificación del borrador de la normatividad existente, con el objetivo de ayudar a la creación del CDR en el Departamento del Putumayo. Como resultado de esta labor, se llevó a cabo un acompañamiento permanente en escenarios para la creación del CDR. Finalmente, el 31 de mayo de 2022 se logró la firma del decreto de constitución del Consejo Departamental de Reincorporación (CDR) en el Departamento de Putumayo.

        Este proceso ratificó la necesidad de consolidar un espacio de coordinación y articulación de actores esenciales para la reincorporación en el Departamento del Putumayo que contribuyera a operativizar e implementar efectivamente la política pública desde los enfoques diferenciales y las especificidades del territorio. Se insiste en la pertinencia de esta propuesta como transitoria y se plantea la conveniencia de constituir un Consejo Departamental de Paz como instancia independiente con la competencia específica de coordinación y articulación de la reincorporación en el territorio.`
      },
    ],
  },
  {
    title: '2022',
    description: `Dando continuidad al proceso iniciado en 2021, en el año 2022 se adelantó un monitoreo, análisis y acompañamiento de ejercicios de reflexión sobre la reincorporación en el departamento. Estas actividades fueron lideradas por las las profesoras María Clemencia Castro y Patricia Sierra apoyadas por la profesional Valentina Villegas.

    En el marco de sus actividades, se elaboró un documento con los avances, retos y recomendaciones para el proceso de reincorporación en el Departamento del Putumayo. Participaron actores territoriales tales como firmantes del Acuerdo de Paz (que habitan el ETCR “Heiler Mosquera”, la granja COMUCCOM y otros que viven en zonas urbanas y rurales de otros municipios) y personas de procesos organizativos, institucionalidad y cooperación internacional.

    Además, la construcción del documento permitió la identificación de líneas estratégicas para proyectar posibilidades de acompañamiento de la Universidad Nacional de Colombia en dinámicas territoriales que favorezcan la reincorporación e implementación del Acuerdo de Paz en el departamento.`,
    subtitle: 'Los puntos a resaltar del documento son:',
    activities: [
      {
        title: 'Avances del proceso',
        description: `- Puesta en marcha del Consejo Departamental de Reincorporación con representación de seis Firmantes del Acuerdo de Paz.

        - Participación de los Firmantes del Acuerdo de Paz en los Diálogos Regionales Vinculantes para la construcción del Plan Nacional de Desarrollo 2023-2026 (16 de noviembre 2022).

        - Revisión de las bases del Plan Nacional de Desarrollo (versión 15 de noviembre 2022).

        - Participación de los Firmantes del Acuerdo de Paz en instancias de interlocución con la institucionalidad.

        - Apoyo a procesos organizativos y cooperación internacional como la Mesa Territorial de Garantías, el Consejo Departamental de Paz y Derechos Humanos y en algunos municipios la participación en el Consejo Territorial de Planeación (Mocoa) y en los Consejos Consultivos de Mujeres (Puerto Asís).

        - Posicionamiento de liderazgos jóvenes y de mujeres que han ganado visibilidad a partir de su trabajo en los proyectos productivos y pedagógicos.

        - Reconocimiento del compromiso de organizaciones internacionales: Misión de Verificación ONU, MAPP – OEA y PNUD y el Fondo Europeo para la Paz para apoyar el proceso de reincorporación en el territorio.`,
      },
      {
        title: 'Retos',
        description: `- Riesgos de protección causados por el reacomodamiento de grupos armados presentes en el territorio.

        - Falta de garantías de seguridad para las personas firmantes del Acuerdo de Paz, causando amenazas, homicidios y desplazamientos forzados.

        - La sostenibilidad económica, social y política de la reincorporación.

        - El fortalecimiento de liderazgos y vocerías como Firmantes del Acuerdo de Paz.

        - El fortalecimiento de dinámicas colectivas y comunitarias de los Firmantes del Acuerdo de Paz.`,
      },
      {
        title: 'Recomendaciones',
        description: `- Se requieren estrategias para la protección de las y los líderes, defensoras y defensores de derechos humanos, así como para personas en proceso de reincorporación.

        - Se valora y requiere el acompañamiento de la Universidad Nacional de Colombia en investigación, extensión y docencia para apoyar los proyectos productivos y pedagógicos que la población Firmante del Acuerdo de Paz viene realizando. Requieren asistencia técnica específica, fortalecimiento organizativo y estrategias que viabilicen su sostenibilidad.

        - Las y los firmantes del Acuerdo de Paz que hacen parte del CDR requieren espacios autónomos de preparación para tener propuestas articuladas que recojan las iniciativas de la población que representan.

        - Fortalecimiento de dinámicas colectivas y comunitarias de Firmantes del Acuerdo de Paz apoyando las formas organizativas que han ido gestando para potenciar el trabajo colectivo y el relacionamiento con las comunidades.`,
      },
    ],
  },
]

const selectedIndex = computed(() => detailsInfo.findIndex((tab) => tab.title === currentTab.value))

const selectedTab = computed(() => detailsInfo[selectedIndex.value]);
</script>

<template>
  <section class="process-support-detail">
    <DescriptionSection
      :items="[selectedTab]"
      :swap-items="selectedIndex % 2 === 1"
      main-image="/images/experiences/activities/regions/description.png"
    />

    <GridSection
      :desktop-cols="selectedTab.activities.length"
      :mobile-cols="1"
    >
      <template #description>
        <p class="content">
          {{ selectedTab.subtitle }}
        </p>
      </template>

      <template #items>
        <div
          v-for="(item, index) in selectedTab.activities"
          :key="index"
          class="activity"
          :class="{
            'mr-5': index === 0,
            'ml-5': index === (selectedTab.activities.length - 1),
            'mx-5': (index > 0) && (index < selectedTab.activities.length - 1),
          }"
        >
          <h4 class="section-subtitle">{{ item.title }}</h4>

          <p class="content">{{ item.description }}</p>
        </div>
      </template>

      <template #end>
        <SectionDecoration/>
      </template>
    </GridSection>
  </section>
</template>

<style scoped>
.section-subtitle {
  @apply text-gray-unal-700 text-2xl mb-5;
}

.content {
  @apply text-base font-light mb-5 whitespace-pre-line;
  @apply xl:text-xl xl:mb-10 xl:pr-0;
}
</style>
