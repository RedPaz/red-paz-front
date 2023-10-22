<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHeaderStore } from '@/common/stores';
import { DescriptionItem, Episode, FeaturedItem } from '@/common/interfaces';

const headerStore = useHeaderStore();
const { currentTab } = storeToRefs(headerStore);

const description: DescriptionItem = {
  title: 'Descripción',
  description: `El 26 y 27 de agosto la Red Paz llevó a cabo un Encuentro Nacional de Experiencias de Paz virtual, con el que buscamos generar un espacio para el reconocimiento, divulgación e intercambio de saberes de diferentes iniciativas y proyectos de construcción de paz, desarrollados por docentes, investigadores y estudiantes de las 9 sedes de nuestra Universidad, en extensión, investigación y docencia.

A través de este espacio, también nos propusimos recoger los aprendizajes necesarios para promover estrategias de articulación y coordinación, que contribuyan a fortalecer el trabajo colaborativo e interdisciplinar de la Universidad, impactando positivamente en el quehacer en favor de la paz.
Facilitamos 7 espacios virtuales simultáneos llamados mesas temáticas, en los que las y los docentes e investigadores inscritos, junto con sus equipos de trabajo, dieron a conocer sus experiencias y establecieron posibles articulaciones, propuestas y líneas de acción conjuntas.

Cada día del Encuentro, llevamos a cabo un panel abierto en el que contamos con invitados especiales para reflexionar sobre el rol de la Universidad en la construcción de paz.

De forma complementaria, construimos y publicamos una galería virtual de afiches sobre las distintas iniciativas participantes en el Encuentro, con el fin de que la comunidad universitaria y las personas externas conozcan los proyectos de construcción de paz que se han venido adelantando en nuestra Universidad.`,
}

const records: Episode[] = [
  {
    name: 'El contexto de la guerra y de la paz en Colombia: El rol y los desafíos para la Universidad',
    description: `Con la participación de: Patricia Linares, presidenta de la Jurisdicción Especial para la Paz; Leyner Palacios, líder social y secretario general de la Comisión Interétnica de la Verdad del Pacífico; y William Ospina, escritor colombiano.`,
    date: '26 de Agosto de 2020',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
  {
    name: 'La Universidad, la guerra y la paz. Aprendizajes y desafíos',
    description: `Con la participación de: Patricia Sierra, profesora del Departamento de Trabajo Social; Mauricio Archila, profesor del Departamento de Historia; y Camilo Borrero, profesor de la Facultad de Derecho, Ciencias Políticas y Sociales.`,
    date: '27 de Agosto de 2020',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=uBDsfkZRe2k',
    },
  },
];

const FINAL_PAPERS: FeaturedItem[] = [
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/mosca-soldado.jpg',
    title: 'Uso de la Mosca Soldado Negra como alimento alternativo en peces.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/mempaz.jpg',
    title: 'MEMPAZ - Memorias desde las Márgenes: Justicia Transicional inclusiva y procesos de memoria creativas para la reconciliación.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/taller-creatividad.jpg',
    title: 'Talleres de Creatividad Itinerantes para la construcción de nuevas ciudadanías y cultura de Paz.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/no-image.jpg',
    title: 'Practicando reconciliaciones a través del quehacer textil y la memoria digital en la transición al postconflicto de la Colombia rural',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/generacion-sustentable.jpg',
    title: 'Generación sustentable de ingresos económicos de un grupo de habitantes de la comuna 15 de la ciudad de Cali.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/memorias-universidad.jpg',
    title: 'Memorias de la Universidad Nacional durante el conflicto armado',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/formacion-formadores.jpg',
    title: 'Formación de Formadoras/es y Promotoras/es del Enfoque de Género en Zonas Veredales Transitorias.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/observatorio.jpg',
    title: 'Observatorio de Diseño e Innovación Social',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/catedra-hipatia.jpg',
    title: 'Apoyo al Gobierno Nacional en el desarrollo de proyectos estratégicos para la paz.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/cidh.jpg',
    title: 'Las víctimas en la jurisprudencia de la Corte Interamericana de Derechos Humanos',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/acuerdos-catatumbo.jpg',
    title: 'Acuerdos interculturales para la solución de conflictos interculturales en el Catatumbo',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/implementacion-afp.jpg',
    title: 'Implementación del enfoque de participación del Acuerdo Final de Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/ariari-civipaz.jpg',
    title: 'Proceso de recuperación de saberes acerca de la seguridad alimentaria en la comunidad del ALTO ARIARI y CIVIPAZ',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/mujeres-cdv.jpg',
    title: 'Inclusión de las afectaciones vividas por las mujeres y de los procesos de resistencia en las Comisiones de la Verdad.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.health },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/dialogo-de-paz.jpg',
    title: 'Centro de Pensamiento y Seguimiento al Diálogo de Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/pluralizar-la-paz.jpg',
    title: 'Centro de Pensamiento: Pluralizar la Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/publico-politico.jpg',
    title: 'Centro de Pensamiento: Pluralizar la Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/guerra-y-conflicto.jpg',
    title: 'Manifestaciones de la guerra y el conflicto armado colombiano en la frontera amazónica',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/re-conocimiento.jpg',
    title: 'Espacios de Re-Conocimiento para la Paz (2016-2018)',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/no-image.jpg',
    title: 'El turismo de naturaleza como estrategia de conservación y cohesión local en San José del Guaviare',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/speme.jpg',
    title: 'Speme: Questioning Traumatic Heritage: Spaces of Memory in Europe, Argentina, Colombia',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/sig-al-servicio.jpg',
    title: 'Los SIG al servicio de la arquitectura como herramienta de apoyo para la solución de problemáticas de salud pública.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/urim-ubasha.jpg',
    title: 'Apoyo al Diseño de la Escuela Permanente de Memoria Ambiental Úrim Ubasha, Arauquita',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/habitat-asentamientos.jpg',
    title: 'Hábitat y Asentamientos Rurales en Colombia',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/tecnologia-innovacion.jpg',
    title: 'Apropiación social de la ciencia, tecnología e innovación a través de una iniciativa de intervención e inclusión educativa',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/inclusion-digital.jpg',
    title: 'Inclusión digital educativa, laboral y de entretenimiento a personas en situaciones especiales victimas del conflicto',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/nuclear-quadupole.jpg',
    title: 'Nuclear quadrupole resonance system for landmine detection in Antioquia - Tesis de doctorado',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/diseno-universal.jpg',
    title: 'Diseño universal al servicio de la calidad de la enseñanza para la paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/papas-nutritivas.jpg',
    title: 'Papas más nutritivas',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/curso-piscicultura.jpg',
    title: 'Curso de piscicultura básica y tecnología de productos de pescado',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/discapacidad-conflicto.jpg',
    title: 'Serie temática en "Discapacidad, conflicto armado y construcción de paz"',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/ocupacion-humana.jpg',
    title: 'Construcción de Paz: Experiencias, reflexiones y propuestas como aportes desde la salud pública',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/no-image.jpg',
    title: 'Discursos y Representaciones de la Guerra y la Paz en Colombia: 1978-2006',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/comunidades-rurales.jpg',
    title: 'Comunidades rurales fronterizas y la defensa de la autonomía territorial en el posacuerdo colombiano',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/tejido-social.jpg',
    title: 'Configuración del tejido social, democracia y seguridad: una revisión desde la percepción de los jóvenes',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/frontera-territorio-paz.jpg',
    title: 'Observatorio "Frontera, Territorio y Paz" de la Universidad Nacional de Colombia Sede Orinoquía',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/pensamiento-agroecologico.jpg',
    title: 'Escuelas de Pensamiento Agroecológico',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/turismo-naturaleza.jpg',
    title: 'El turismo de naturaleza como estrategia para el desarrollo socioeconómico y la consolidación de la paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/agroecosistema-produccion.jpg',
    title: 'Proyecto Permanente de Extensión Solidaria de la asignatura "Agroecosistemas y Sistemas de Producción"',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/santa-maria-darien.jpg',
    title: 'Santa María de la Antigua del Darién',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/astronomia.jpg',
    title: 'Astronomía para la paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/futuros-jefes-guerrilleros.jpg',
    title: 'Pequeños soldados futuros jefes guerrilleros',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/fortalecimiento-salud.jpg',
    title: 'Fortalecimiento de capacidades comunitarias para la atención primaria en salud.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.health },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/ninas-cientificas.jpg',
    title: 'Mujeres y niñas científicas construyendo paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/paz-y-participacion.jpg',
    title: 'Proceso de paz y participación ciudadana',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/escuelas-de-paz.jpg',
    title: 'Escuelas de Paz para las Víctimas del Conflicto Armado del Eje Cafetero',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/universidad-y-educacion.jpg',
    title: 'Universidad y Educación para la paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/mingar-la-paz.jpg',
    title: 'Mingar la paz: enseñanzas de Yurumanguí para pensar la reparación territorial y la construcción de paz.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/diana-bravo.jpg',
    title: 'Diana Bravo',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/acuerdos-de-paz-amazonia.jpg',
    title: 'Semillero de Investigación: Seguimiento de Implementación de los Acuerdos de Paz en la Amazonía',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/manos-a-la-cuenca.jpg',
    title: 'Manos a la cuenca',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/justicia-anamnetica.jpg',
    title: 'Justicia anamnética: condición de paz en Colombia',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/obstaculos-reincorporacion.jpg',
    title: 'Obstáculos de la reincorporación económica de las FARC, de lo estructural a lo cotidiano',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/pazamanos.jpg',
    title: 'PAZAMANOS. Cultura y educación en el ETCR Jaime Pardo Leal.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.agreements },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/traspazar.jpg',
    title: 'TRASPAZAR',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/laboratorio-de-paz.jpg',
    title: 'Laboratorio de paz: una investigación en el aula de enfermería clínica. Estudio Piloto.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/rabia-rastro-noir.jpg',
    title: 'Moverse: La rabia / El rastro / Le Noir',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/innovacion-base-comunitaria.jpg',
    title: 'Implicaciones de la colaboración en Ecosistemas de Innovación de Base Comunitaria',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/emisoras-comunitarias.jpg',
    title: 'Emisoras comunitarias de bajo costo',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/cpdr.jpg',
    title: 'Centro de pensamiento en Desarrollo Rural (CPDR)',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/el-tarra-y-convencion.jpg',
    title: 'Formación política para la construcción de paz territorial desde las comunidades de El Tarra y Convención',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/aeroponia.jpg',
    title: 'Aeroponia y Agricultura del Siglo XXI',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/ninos-cientificos-unal.jpg',
    title: 'Programa Niños Científicos UNAL',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/geo-cultural.jpg',
    title: 'Diseño transicional de territorios de paz en clave de la ambientalización de la educación y la gesta geo-cultural',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/narrativas-politicas-publicas.jpg',
    title: 'Narrativas de políticas públicas sobre educación y discapacidad en un territorio atravesado por el conflicto armado.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/victimas-a-sobrevivientes.jpg',
    title: 'De victimas a sobrevivientes. La reparación en los casos de VbG',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.victims },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/fortalecimiento-institucional.jpg',
    title: 'Fortalecimiento institucional de organizaciones sociales y culturales que trabajan en la construcción de paz.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/sistema-vis.jpg',
    title: 'Sistema Arquitectónico para la vivienda de interés social rural',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/propiedad-territorial.jpg',
    title: 'Las formas de la propiedad territorial en Colombia en el marco del proceso de restitución de tierras',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/estudio-exploratorio.jpg',
    title: 'Sentimientos de inseguridad en contextos rurales: Un estudio exploratorio en la provincia del sur del Tolima',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.health },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/laboratorio-cesar.jpg',
    title: 'Laboratorio de Innovación Socio Territorial del Cesar',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.territory },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/caminos-de-guerra.jpg',
    title: 'Caminos de Guerra a Caminos de Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/construccion-comunitaria.jpg',
    title: 'Construcción comunitaria de alternativas para obtención de agua potable en hogares rurales',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.health },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/no-image.jpg',
    title: 'Fortalecimiento de capacidades educativas en territorios de paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/no-image.jpg',
    title: 'Festival cultura y ambiente',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/labpaz.jpg',
    title: 'LabPaz - Laboratorio de Innovación para la Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/no-image.jpg',
    title: 'Cátedra Nacional Deporte, Identidades y Construcción de Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.health },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/promocion-cultura-meta.jpg',
    title: 'Promoción de una cultura de investigación histórica para el departamento del Meta',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/aula-viva.jpg',
    title: 'Aula Viva para la Paz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/apoyo-proyectos.jpg',
    title: 'Apoyo y acompañamiento a la formulación de proyectos productivos en el proceso de reincorporación',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/politica-publica-mujeres.jpg',
    title: 'Identificación de experiencias significativas de reintegración, una Política Pública con enfoque diferencial para mujeres.',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.art },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/diplomado-arauca.jpg',
    title: 'Diplomado “Herramientas para el fortalecimiento del liderazgo juvenil y construcción de paz y ciudadanía en Arauca”',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.citizenship },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/red-saludpaz.jpg',
    title: 'Red SaludPaz',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.health },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/no-image.jpg',
    title: 'Acción profesional del fisioterapeuta en el marco de la emergencia sanitaria por Covid-19 en población víctima del conflicto',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.health },
  },
  {
    category: 'Encuentro Nacional 2020',
    image: '/images/experiences/enep-2020/no-image.jpg',
    title: 'Semillero de innovación social SIS - UNAL',
    date: '16 de septiembre de 2022',
    url: '#',
    area: { ...FEATURED_AREAS.science },
  },
];
</script>

<template>
  <template v-if="currentTab === 'Informe'">
    <DescriptionSection
      :items="[description]"
      main-image="/images/experiences/discussions/discussions-description.png"
    />

    <JobAreas>
      <template #description>
        <p class="description">La comunidad universitaria ha venido desarrollando iniciativas en los siguientes campos:</p>
      </template>
    </JobAreas>

    <GridSection
      title="Páneles"
      :desktop-cols="1"
      :align-title-left="true"
    >
      <template #description>
        <p class="section-description">Mira las grabaciones de los páneles</p>
      </template>

      <template #items>
        <EpisodeItem
          v-for="(record, index) in records"
          :key="index"
          :data="record"
          :title="`Panel ${index + 1}`"
          :show-divider="(index + 1) < records.length"
        />
      </template>

      <template #end>
        <SectionDecoration/>
      </template>
    </GridSection>
  </template>

  <section
    v-else
    class="enep-projects mt-12"
  >
    <FeaturedItemsFilter :items="FINAL_PAPERS" />
  </section>
</template>

<style scoped>
.description {
  @apply text-center mb-8 text-lg;
}
</style>
