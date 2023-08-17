<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { SwiperSlide } from 'swiper/vue';
import { useHeaderStore } from '@/common/stores';
import { DescriptionItem, FeaturedItem, GridItem } from '@/common/interfaces';

const headerStore = useHeaderStore();
const { currentTab } = storeToRefs(headerStore);

const cathedraDescriptions = [
  {
    id: 'informe',
    title: 'Descripción',
    description: `En este curso proponemos hacer un recorrido por los principales hitos que dan cuenta de las características y dimensiones del conflicto armado de más de 50 años en el país, y analizar los diversos esfuerzos de negociación política que se han realizado con el fin de poner fin a la confrontación armada. Este recorrido se realiza desde la perspectiva de los daños materiales e inmateriales, políticos, culturales y psicosociales que ha causado la guerra a los diversos sectores, comunidades y colectivos afectados, teniendo en cuenta las luchas y procesos en aras de conquistar los derechos a la reparación, la verdad, la justicia y las garantías de no repetición, adelantados por las víctimas, las organizaciones de derechos humanos y la sociedad civil.

    En las sesiones del curso se procura combinar análisis nacionales y territoriales, dando lugar a la presentación de casos que permitan abordar modalidades específicas de violencia y situaciones particulares de los grupos y sectores poblacionales. Se hará un especial énfasis en la identificación de los retos, dificultades y oportunidades que afronta el país de cara a construir una paz estable y duradera.

    Contaremos con la participación de invitados especiales: líderes sociales, funcionarios públicos, académicos y profesores de las distintas sedes de la UNAL.`,
    image: '/images/experiences/conflict-cathedra/description.png',
  },
  {
    id: 'trabajos-finales',
    title: 'Trabajos finales',
    description: `A continuación, encontrarás una serie de pósters, videos y podcasts que identifican los retos actuales que tiene el país para la superación del conflicto armado y la construcción de paz. Estas piezas comunicativas son producto de los trabajos grupales que realizaron las y los estudiantes de nuestro curso "Del conflicto armado a la construcción de Paz".

    Te invitamos a hacer clic en VER MÁS para detallar cada trabajo.`,
    image: '/images/experiences/conflict-cathedra/description.png'
  },
]

const currentDescription = computed(() => {
  const { data } = useRoute().params
  return cathedraDescriptions.find((item) => item.id === data) as DescriptionItem;
});

const objectives: DescriptionItem[] = [
  {
    title: 'Objetivo 1',
    description: 'Reconocer el origen, las dinámicas y la transformación del conflicto armado interno en el país.',
  },
  {
    title: 'Objetivo 2',
    description: 'Analizar los impactos del conflicto armado sobre las víctimas, la sociedad y el país y los actuales procesos de reparación, de verdad, de justicia y de garantías de no repetición.'
  },
  {
    title: 'Objetivo 3',
    description: 'Identificar y analizar las experiencias de negociación y de construcción de paz en la historia reciente: sus alcances, limitaciones, aciertos y desaciertos.',
  },
  {
    title: 'Objetivo 4',
    description: 'Reconocer y analizar iniciativas de resistencia y de construcción de paz emprendidas por comunidades, organizaciones sociales y por la academia desde distintas disciplinas.',
  },
  {
    title: 'Objetivo 5',
    description: 'Identificar los retos actuales del país para la superación del conflicto armado y la construcción de paz',
  },
];

const editions: GridItem[] = [
  {
    title: 'Año',
    src: '#',
    image: '/images/home/red-paz.svg',
    color: '#4DB372',
    description: 'Curso de conflicto armado a la construcción de Paz',
  },
  {
    title: '2021-1',
    src: '#',
    image: '/images/home/red-paz.svg',
    color: '#4DB372',
    description: 'Curso de conflicto armado a la construcción de Paz',
  },
  {
    title: '2021-2',
    src: '/experiencias-de-paz/catedra-conflicto-armado/2021-2',
    image: '/images/home/red-paz.svg',
    color: '#4DB372',
    description: 'Curso de conflicto armado a la construcción de Paz',
  },
];

const FINAL_PAPERS: FeaturedItem[] = [
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'El problema de la tierra en el conflicto armado colombiano',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Los Vestigios de la Ausencia',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Proceso de sustitución de los cultivos de Coca en el departamento de Putumayo en los años 2018-2020',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'El papel de la mujer dentro del conflicto armado Colombiano',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Jurisdicción Especial Para la Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: '5763 falsos positivos = Asesinatos de civiles. 2000-2010',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'La mujer indígena en el conflicto armado',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'La reforma rural integral en Colombia',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Tejedoras de Mampujan',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'La campaña del NO. Desinformación y política del miedo',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: '¿Cuál es la importancia del mantenimiento de la JEP?',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Juancho y los fantasmas de la guerra',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Configuración territorial a partir del conflicto armado en Colombia.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Somos arte y somos paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'La restitución de tierras: una ruta obligada para alcanzar la paz en el campo',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'El papel del campo colombiano en el conflicto armado y la construcción de paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Memorias de la guerra',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.health },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Acercamiento a las Minas antipersonal',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: '¿Qué es la JEP? Sus avances y desafíos',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Territorios por la paz. La Uribe, Meta',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Huellas Festivas. Arte, Fiestas y Pedagogía para Cosntruir Memoria',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Colombia un país de Masacres',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Recorrido hacia una paz estable y duradera',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Mitos y Verdades del Acuerdo de Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Digamos No a lo Ilícito',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Las dos caras de la moneda sobre la participación de menores de edad en grupos armado',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'La paz una construcción de todos los colombianos',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Serie: justicia transicional; modelo de justicia en Colombia y aceptación de la JEP',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'JEP: ¿Qué es y por qué debería importarnos?',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Conflicto armado interno',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'La diversidad en las formas de resistencia al conflicto armado',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'La Paz en Vilo: los factores persistentes del conflicto armado',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Niñas y niños por una Colombia en Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Trabajo final',
    image: '/images/experiences/thematic-areas/science/no-image.jpg',
    title: 'Dialogos de paz: ELN, EPL, M19 Y FARC',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
];
</script>

<template>
  <div v-if="currentDescription">
    <DescriptionSection
      :items="[currentDescription]"
      :main-image="currentDescription.image"
    />

    <template v-if="currentTab === 'Informe'">
      <GridSection
        title="Objetivos"
        background="bg-green-red"
        align-title-left
        :desktop-cols="1"
      >
        <template #description>
          <p class="description text-white">Estos son los 5 objetivos que tiene la cátedra del Conflicto armado a la construcción de paz</p>
        </template>

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
                v-for="(item, index) in objectives"
                :key="index"
                class="featured-item rounded-lg overflow-hidden shadow-sm bg-white/20"
              >
              <div class="item-content p-6 text-white">
                <h3 class="item-title !text-left text-xl">
                  {{ item.title }}
                </h3>

                <p class="item-description mt-5 mb-16 text-lg font-light leading-6 whitespace-pre-line">
                  {{ item.description }}
                </p>
              </div>
              </swiper-slide>
            </template>
          </RedSlider>
        </template>
      </GridSection>

      <GridSection
        title="Ediciones del curso"
        background="bg-gray-100"
        align-title-left
        :desktop-cols="3"
      >
        <template #description>
          <p class="description">A continuación encontrarás información sobre las 3 versiones que se dieron sobre la catedra</p>
        </template>

        <template #items>
          <ItemWithImage
            v-for="(item, index) in editions"
            :key="index"
            :item="item"
            :image-width="90"
            :hide-image-in-mobile="true"
            cover-image="/images/home/jobs-background.png"
          />
        </template>

        <template #end>
          <SectionDecoration/>
        </template>
      </GridSection>
    </template>

    <FeaturedItemsFilter
      :items="FINAL_PAPERS"
    />
  </div>
</template>

<style scoped>
.description {
  @apply mb-6 text-lg;
}
</style>
