<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
import { buildBaseItems } from '@/common/utils';
import { TEAM_DIRECTORS, TEAM_MEMBERS } from '@/common/constants';
import { DescriptionItem, Item } from '@/common/interfaces';

const historyItems: DescriptionItem[] = [
  {
    title: '2018',
    description: `La idea de una red para la paz en la Universidad Nacional de Colombia (UNAL) surge a comienzos de 2018 cuando la profesora Dolly Montoya la incluye en su programa como candidata a la Rectoría para el período 2018-2021.

    En mayo 2018, ya designada como Rectora de nuestra universidad, la Profesora Dolly Montoya delega la creación de una red para la paz de la universidad a la Vicerrectoría de Investigación (VRI).`,
  },
  {
    title: '2019',
    description: 'En agosto de 2019, la profesora Martha Nubia Bello, Directora Nacional de Investigación y Laboratorios de la VRI, como primera coordinadora de la Red de Ética, Cultura, Creación, Ciencia, Tecnología e Innovación para la Paz de la Universidad Nacional de Colombia (RedPaz UNAL), convoca a seis profesores a conformar su Comité de Impulso.'
  },
  {
    title: '2020',
    description: 'A mediados de 2020 este Comité convoca a la comunidad universitaria a un Encuentro Nacional de Experiencias de Paz en modalidad virtual. Este evento se realiza en agosto de ese año con la participación de 81 experiencias, entre iniciativas de docencia, investigación y extensión para la paz. A partir de las conversaciones suscitadas en este evento, la profesora Martha Bello invita a profesores de tres áreas de conocimiento más a participar del Comité de Impulso.',
  },
  {
    title: '2021',
    description: 'En abril de 2021, bajo la coordinación del profesor Camilo Borrero de la Facultad de Derecho, Ciencias Políticas y Sociales, la RedPaz UNAL pone en marcha un plan de acción con seis líneas estratégicas relacionadas con el quehacer académico de los miembros del Comité de Impulso.',
  },
  {
    title: '2022',
    description: 'En 2022 culmina en desarrollo de las líneas de trabajo bajo la coordinación de la profesora Doris Santos de la Facultad de Ciencias Humanas, quien asume ese rol con el profesor Juan Alfonso de la Rosa de la Facultad de Artes en febrero de 2022. Iniciado un nuevo período en la Rectoría de la profesora Dolly Montoya (2022-2024), la VRI propone a la RedPaz UNAL elaborar un nuevo plan de acción para esta nueva etapa. El equipo de la coordinación de la RedPaz UNAL se reconfigura a partir del 1 de octubre de 2022, cuando se posesiona el profesor Juan Alfonso de la Rosa como decano de la Facultad de Artes.',
  },
  {
    title: '2023',
    description: 'Durante el primer semestre de 2023 el Comité de Impulso de la RedPaz UNAL trabaja en un plan de acción para el 2022-2024, el cual se divide en cuatro líneas estratégicas: Apoyo interdisciplinario e intersedes a procesos de reincorporación en todas sus dimensiones, creación de espacios de discusión en la comunidad universitaria entre esta y otros actores sociales sobre temas de coyuntura relacionados con construcción de paz, apoyo al Sistema Integral de Verdad, Justicia, Reparación y No Repetición e Identificación de líneas de acción curricular que promuevan la formación transdisciplinar de los miembros de la comunidad universitaria. A partir del 1 de julio de 2023, asume la coordinación de la RedPaz UNAL el profesor Jairo Alexis López de la Facultad de Ciencias.',
  },
];

const aboutUsDescriptions: DescriptionItem[] = [
  {
    title: '¿Qué es la Red de Ética, Cultura, Creación, Ciencia, Tecnología e Innovación para la Paz de la Universidad Nacional de Colombia (RedPaz UNAL)?',
    description: 'Es una iniciativa institucional creada para fortalecer y proyectar el relacionamiento de miembros de la comunidad universitaria de diferentes facultades y sedes interesados en el trabajo colaborativo pertinente y oportuno con comunidades y aliados estratégicos del orden local, regional, nacional e internacional para la construcción de paz en los territorios.',
  },
];

const whatWeDoItems: Item[] = buildBaseItems([
  'Promueve el diálogo de saberes entre los diferentes actores sociales interesados en el abordaje integral de la construcción de paz territorial',
  'Define con las comunidades canales y formas de comunicación adecuados, pertinentes y efectivos en la construcción de paz territorial',
  'Establece formas de relacionamiento y colaboración significativas y efectivas entre los miembros de la comunidad universitaria y entre estos y los diferentes actores sociales interesados en la construcción de paz territorial',
  'Apoya la identificación  y vinculación de fuentes de financiación internas y externas que contribuyan al desarrollo de iniciativas de construcción de paz territorial en el corto, mediano y largo plazo',
]);

const actionLines: Item[] = buildBaseItems([
  'Seguir apoyando, a partir del trabajo entre facultades y sedes, los procesos de reincorporación y reconciliación que toman lugar en los territorios de influencia de las sedes de la Universidad',
  'Crear espacios de discusión en la comunidad universitaria y entre esta y otros actores sociales sobre temas de coyuntura relacionados con el proceso de construcción de paz',
  'Continuar apoyando al Sistema Integral de Verdad, Justicia, Reparación y No Repetición en el abordaje de los nuevos desafíos misionales de sus diferentes componentes',
  'Identificar líneas de trabajo curricular que promuevan la formación transdisciplinar de los miembros de la comunidad universitaria que participan en la articulación de las funciones misionales de docencia, investigación y extensión en y para la construcción de paz',
]);

const teamDescription: DescriptionItem[] = [
  {
    title: 'Equipo de trabajo',
    description: `Como equipo de trabajo de la RedPaz UNAL buscamos:

    - Formular conjuntamente un plan estratégico que permita el logro de los objetivos de la RedPaz UNAL.

    - Promover la participación de profesore(a)s de todas las sedes y de todas las áreas del conocimiento en el Comité de Impulso.

    - Fortalecer el trabajo colaborativo entre miembros de la comunidad universitaria pertenecientes a diferentes facultades y a diferentes sedes.

    - Proponer una estrategia orientada a avanzar en la sostenibilidad académica, organizacional, comunicacional y financiera de la RedPaz UNAL en el corto, mediano y largo plazo.`,
  },
];

const teamMembers = TEAM_MEMBERS.filter((person) => !person.isDirector);
</script>

<template>
  <section class="about-us">
    <DescriptionSection
      :items="aboutUsDescriptions"
      main-image="/images/about-us/aboutUs.png"
    />

    <GridSection
      title="¿Qué hace la RedPaz UNAL?"
      background="bg-gray-100"
    >
      <template #items>
        <BaseItem
          v-for="(item, index) in whatWeDoItems"
          :key="index"
          :item="item"
        />
      </template>
    </GridSection>

    <GridSection
      title="Nuestra historia"
      background="bg-green-red"
      align-title-left
      :desktop-cols="1"
    >
      <template #items>
        <RedSlider
          show-pagination
          navigation-style="transparency"
          navigation-position="topOut"
          :slider-per-view="3"
          :show-navs-in-mobile="false"
        >
          <template #slides>
            <swiper-slide
              v-for="(item, index) in historyItems"
              :key="index"
              class="featured-item rounded-lg overflow-hidden shadow-sm bg-white/20"
            >
            <div class="item-content p-6 text-white">
              <h3 class="item-title !text-left text-xl">
                {{ item.title }}
              </h3>

              <p class="item-description mt-5 mb-16 whitespace-pre-line">
                {{ item.description }}
              </p>
            </div>
            </swiper-slide>
          </template>
        </RedSlider>
      </template>
    </GridSection>

    <!-- TODO: Duplicated with Home -->
    <GridSection
      title="Líneas de acción"
      background="bg-gray-100"
    >
      <template #description>
        <p class="description">La RedPaz UNAL busca hacer un aporte significativo a la construcción de paz desde las siguientes líneas de acción en el período 2022-2024.</p>
      </template>

      <template #items>
        <BaseItem
          v-for="(item, index) in actionLines"
          :key="index"
          :item="item"
        />
      </template>
    </GridSection>

    <DescriptionSection
      :items="teamDescription"
      main-image="/images/about-us/team.png"
    />

    <GridSection
      title="Nuestros coordinadores"
      :desktop-cols="3"
      dense-bottom
    >
      <template #items>
        <PersonItem
          v-for="director in TEAM_DIRECTORS"
          :key="director.id"
          :data="director"
        />
      </template>
    </GridSection>

    <GridSection
      title="Equipo actual de trabajo"
      :desktop-cols="3"
    >
      <template #description>
        <p class="description">Profesores que hacen parte actualmente de la RedPaz Unal</p>
      </template>

      <template #items>
        <PersonItem
          v-for="person in teamMembers"
          :key="person.id"
          :data="person"
        />
      </template>

      <template #end>
        <SectionDecoration />
      </template>
    </GridSection>
  </section>
</template>

<style scoped>
.description {
  @apply text-left lg:text-center mb-8 font-light text-base lg:text-lg;
  @apply xl:w-2/3 mx-auto xl:!text-xl;
}
</style>
