<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed';
import { DescriptionItem, Person } from '@/common/interfaces';

const route = useRoute();

const conflictsData: DescriptionItem[] = [
  {
    id: 'informe',
    title: `Memorias de la Universidad Nacional de Colombia en el Conflicto armado colombiano 1958 - 2018`,
    description: `En este documento el lector podrá encontrar un relato histórico acerca de cómo el conflicto armado impactó la vida de estudiantes, profesores y administrativos, integrantes de la Universidad Nacional de Colombia, entre 1958 y 2018. El esfuerzo investigativo plasmado en estas páginas se alimenta de la convicción de que es importante aportar a la reconstrucción conjunta de lo ocurrido a partir de las reflexiones sobre nuestros propios espacios de vida para no repetir en el país episodios como los aquí abordados. En ese sentido, la memoria juega un papel fundamental en esta investigación, especialmente a través de los relatos de sus protagonistas. Este es también un esfuerzo por fortalecer la propia historia de la Universidad Nacional de Colombia en todas sus sedes. Con este propósito, en el Informe los lectores encontrarán varios elementos: un balance historiográfico del tema abordado; un análisis de seis periodos sobre luchas universitarias y el impacto del conflicto armado en el alma mater; quince casos emblemáticos que ilustran algunos patrones de esa violencia en las distintas sedes de la Universidad; imágenes históricas relacionadas con los eventos narrados; y un análisis estadístico de luchas sociales universitarias y de la violación de derechos humanos contra miembros de la Universidad Nacional de Colombia, acompañados de apéndices metodológicos sobre esas series estadísticas.

    Finalmente, este texto interactivo permitirá al lector navegar de forma secuencial por los contenidos del Informe, pero también, si así lo desea, dirigirse a los apartados particulares que sean de su mayor interés.`,
    image: '/images/about-us/aboutUs.png',
    links: [{ label: 'Ver PDF', src: '/pdf/memoriasUNconflicto.pdf' }],
  },
  {
    id: 'linea-de-tiempo',
    title: `Línea de tiempo`,
    description: `La línea de tiempo recoge 227 eventos de luchas universitarias y afectaciones a estudiantes, profesores, trabajadores y administrativos de la Universidad Nacional de Colombia en todas sus sedes, derivadas del conflicto armado colombiano. La línea de tiempo, aunque cuenta con algunos antecedentes históricos, comprende fundamentalmente los años transcurridos desde 1958 hasta 2018 y se divide en seis periodos: Radicalización acelerada (1958-1970); Hacia los sectores populares (1971-1977); Entre la represión y la democracia (1978-1990); Nueva constitución y apertura neoliberal (1991-2001); Mano dura y asfixia democrática (2002-2010) y Tiempos de diálogos (2010-2018). Cada periodo incluye a su vez, leyendas explicativas con registros fílmicos, auditivos y fotográficos de los eventos que tuvieron lugar en esos años.

    Con esta herramienta el lector podrá desplazarse libremente desplegando la regla inferior según el evento o el año de consulta que más le interese visualizar. También, según su interés, podrá moverse entre cada uno de los periodos mencionados anteriormente de manera secuencial.`,
    image: '/images/about-us/aboutUs.png',
  },
  {
    id: 'cartografia-de-la-memoria',
    title: `Cartografía de la Memoria`,
    description: `La cartografía de la memoria de la Universidad Nacional de Colombia recopila un total de 39 hechos fatales ocurridos contra miembros de la comunidad universitaria entre 1962 y el 2015 en las ciudades de Bogotá y Medellín. Cada uno de los casos tiene asociado el lugar de ocurrencia con base en información de prensa, registros judiciales o trabajos de investigación y memoria realizados por los movimientos universitarios. Aquellos lugares que no pudieron ser identificados con exactitud fueron reemplazados por puntos de referencia local, como las Juntas de Acción Comunal en Bogotá.

    En su versión interactiva, los casos están acompañados por fotografías de la víctima, una referencia al contexto o una imagen asociada al lugar de ocurrencia del hecho. A su vez cada nombre está acompañado de la fecha y de una breve descripción que permite conocer la información resumida de cada caso. Por temas de visualización, las cartografías están divididas en dos mapas: Bogotá, Medellín y Campus de la Universidad Nacional, sede Bogotá.

    Esta herramienta permitirá desplazarse por cada una de las ciudades donde se sistematizaron los 39 casos, conocer las historias que están detrás de cada hecho y cada nombre, así como reconocer las formas en las que se dio la violencia en algunos campus de la Universidad Nacional.`,
    image: '/images/about-us/aboutUs.png'
  },
  {
    id: 'equipo',
    title: `Equipo de trabajo`,
    description: `Estos son los integrantes que hicieron posible esta iniciativa`,
  },
];

const currentDescription = computed((): DescriptionItem => {
  const result = conflictsData.find((data) => data.id === route.params.data);

  return result || ({} as DescriptionItem);
});

const UN_TEAM: Person[] = [
  {
    name: 'Mauricio Archila Neira',
    image: '/images/about-us/team/man-default.png',
    imageDetail: '/images/about-us/team/man-default-full.png',
    faculty: 'Director del proyecto',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
  {
    name: 'Esteban Roncancio',
    image: '/images/about-us/team/man-default.png',
    imageDetail: '/images/about-us/team/man-default-full.png',
    faculty: 'Investigador Auxiliar',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
  {
    name: 'Rodrigo Torrejano Jiménez',
    image: '/images/about-us/team/man-default.png',
    imageDetail: '/images/about-us/team/man-default-full.png',
    faculty: 'Cartografía de la Memoria',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
  {
    name: 'Lina Urbina',
    image: '/images/about-us/team/woman-default.png',
    imageDetail: '/images/about-us/team/woman-default-full.png',
    faculty: 'Estudiante Investigadora',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
  {
    name: 'Nicolás Quinche',
    image: '/images/about-us/team/man-default.png',
    imageDetail: '/images/about-us/team/man-default-full.png',
    faculty: 'Estudiante Investigador',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
  {
    name: 'Oscar Cardozo',
    image: '/images/about-us/team/man-default.png',
    imageDetail: '/images/about-us/team/man-default.png-full.png',
    faculty: 'Estudiante Investigador',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
  {
    name: 'Diego Isaac Álvarez',
    image: '/images/about-us/team/man-default.png',
    imageDetail: '/images/about-us/team/man-default.png-full.png',
    faculty: 'Estudiante Investigador',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
  {
    name: 'Laura Alejandra Zamudio Robles',
    image: '/images/about-us/team/woman-default.png',
    imageDetail: '/images/about-us/team/woman-default-full.png',
    faculty: 'Diseñadora',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
  {
    name: 'Azucena Martínez',
    image: '/images/about-us/team/woman-default.png',
    imageDetail: '/images/about-us/team/woman-default-full.png',
    faculty: 'Comunicadora Social',
    location: 'Sede',
    email: 'correo@unal.edu.co',
  },
].map((person, index) => ({
  ...person,
  id: index + 1 ,
  slug: slugify(person.name),
  description: '',
}));

const isBogotaSelected = ref(true);

const cartographyId = computed(() => {
  if (isBogotaSelected.value) return 'cartografia-memoria-unal';

  return 'cartografia-unal-med';
});
</script>

<template>
  <DescriptionSection
    v-if="currentDescription.id"
    :items="[currentDescription]"
    :main-image="currentDescription.image"
  />

  <!-- <div
    v-if="currentDescription.id === 'informe'"
    class="embed-pdf px-28 pb-28 relative"
  >
    <VuePdfEmbed
      source="/pdf/memoriasUNconflicto.pdf"
      :page="1"
      :scale="1"
    />
  </div> -->

  <div
    v-if="currentDescription.id === 'linea-de-tiempo'"
    class="p-28 pt-0 relative"
  >
    <iframe
      src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Uk8o3LbXXAWewsJElnljWJz5laiT_Qiv0cqRtbDkO9k&font=Bitter-Raleway&lang=es&initial_zoom=1&height=700"
      frameborder="0"
      class="w-full min-h-[50vh]"
    />
  </div>

  <div
    v-if="currentDescription.id === 'cartografia-de-la-memoria'"
    class="p-28 pt-0 relative"
  >
    <div class="city-buttons">
      <button
        @click="isBogotaSelected = !isBogotaSelected" :class="{ 'active': isBogotaSelected }">Bogotá</button>
      <button @click="isBogotaSelected = !isBogotaSelected" :class="{ 'active': !isBogotaSelected }">Medellín</button>
    </div>

    <iframe
      :src="`https://uploads.knightlab.com/storymapjs/06180d6a64fbba8afb7f8be4c73bca3c/${cartographyId}/index.html`"
      frameborder="0"
      class="w-full min-h-[50vh]"
    />
  </div>

  <GridSection
    v-if="currentDescription.id === 'equipo'"
    :desktop-cols="3"
    class="!pt-0 !-mt-28"
  >
    <template #items>
      <PersonItem
        v-for="person in UN_TEAM"
        :key="person.id"
        :data="person"
      />
    </template>

    <template #end>
      <SectionDecoration />
    </template>
  </GridSection>
</template>

<style scoped>
.city-buttons {
  @apply absolute -top-12 right-28;
}

.city-buttons button {
  @apply font-bold text-black rounded-md ml-5 w-32 py-1 border duration-150 ease-in-out hover:opacity-80;
}

.city-buttons button.active {
  @apply bg-green-red text-white border-green-red ;
}
</style>
