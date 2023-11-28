<script setup lang="ts">
import { DescriptionItem, Episode } from '@/common/interfaces';
import { useAreasStore } from '@/common/stores';

const route = useRoute();
const areaStore = useAreasStore();
const { year } = route.params;

const description = computed((): DescriptionItem => ({
  title: 'Sobre esta edición',
  description: `Coordinadores

  - Camilo Alberto Borrero, Sede Bogotá
  - Claudia Patricia Sierra, Sede Bogotá
  - Mary Luz Alzate, Sede Medellín
  - Rayén Amanda Rovira, Sede Manizales
  - Oscar Mauricio Vélez, Sede Palmira

  Horario: Miércoles de 9:00 a.m. a 12:00 m.
  Fecha de inicio: 6 de Octubre de 2021
  Fecha de finalización: 6 de febrero de 2022
  Código: 2027938`,
}));

const records = computed((): Episode[] => [
  // 2021-2
  {
    name: 'Para entender el conflicto armado. Primera parte',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '20 de Octubre de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-1.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=C6nrxjuVijk&list=PLMFnkq2QiS2CGZUA-V0mkQ8uP5IkGRm4Q&index=6',
    },
    year: '2021-2',
  },
  {
    name: 'Para entender el conflicto armado. Segunda parte',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '27 de Octubre de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-2.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=0JfA7jsOZ_A&list=PLMFnkq2QiS2CGZUA-V0mkQ8uP5IkGRm4Q&index=11',
    },
    year: '2021-2',
  },
  {
    name: 'Los factores persistentes y las nuevas dinámicas del conflicto armado',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '03 de Noviembre de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-3.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=LfaffqFGd3Q&list=PLMFnkq2QiS2CGZUA-V0mkQ8uP5IkGRm4Q&index=10',
    },
    year: '2021-2',
  },
  {
    name: 'Los mecanismos para salir de las guerras y de las dictaduras',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '17 de Noviembre de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-4.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=K0kbffr9cOI&list=PLMFnkq2QiS2CGZUA-V0mkQ8uP5IkGRm4Q&index=9',
    },
    year: '2021-2',
  },
  {
    name: 'Avatares de los procesos de paz en Colombia (1990 -2020)',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '24 de Noviembre de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-5.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=kolKiMow6Q4&list=PLMFnkq2QiS2CGZUA-V0mkQ8uP5IkGRm4Q&index=8',
    },
    year: '2021-2',
  },
  {
    name: 'El Sistema Integral de Verdad, Justicia Reparación y no Repetición',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '1 de Diciembre de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=rEWPMXgrqLo&list=PLMFnkq2QiS2CGZUA-V0mkQ8uP5IkGRm4Q&index=7',
    },
    year: '2021-2',
  },
  {
    name: 'La ciencia, la tecnología y la innovación como herramientas para construir paz en los territorios',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '12 de Enero de 2022',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=_cAsdjxX3Yk',
    },
    year: '2021-2',
  },
  {
    name: 'Memorias de Violencia y Resistencia',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '26 de Enero de 2022',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=Q8bGgxr12DI',
    },
    year: '2021-2',
  },
  {
    name: 'Las lecturas de la guerra y de la paz desde la salud y el buen vivir',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '2 de Febrero de 2022',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=OY1jpA4SnWc',
    },
    year: '2021-2',
  },
  {
    name: 'Memoria, violencia y universidad.',
    description: `Los factores explicativos del conflicto armado en Colombia, las modalidades de violencia y las víctimas.

    El conflicto armado en el territorio: caso Oriente Antioqueño`,
    date: '9 de Febrero de 2022',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=mceoZeIOx4k',
    },
    year: '2021-2',
  },
  // 2021-1
  {
    name: 'Para entender el conflicto armado',
    description: `Invitados/as:

    - Andrés Suárez, asesor para la estrategia pedagógica de la Jurisdicción Especial para la Paz
    - Lida Núñez, coordinación de la Estrategia de Educación Ciudadana e Incidencia y Presión Política de Viva la Ciudadanía
    - Max Yuri Gil, coordinador para Antioquia y el Eje Cafetero de la Comisión para el Esclarecimiento de la Verdad.

    Moderación: Camilo Borrero, profesor del Departamento de Derecho de la UNAL`,
    date: '3 de Marzo de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=TGBJlLe9jYg',
    },
    year: '2021-1',
  },
  {
    name: 'Los daños y los impactos causados por el conflicto armado',
    description: `Con la participación de:

    - Martha Nubia Bello,  profesora del Departamento de Trabajo Social,  UNAL
    - Lina Rondón, psicóloga UPTC con experiencia en caracterización del daño con fines de reparación y restauración
    - Yanneth Bautista, directora de la Fundación Nydia Erika Bautista`,
    date: '10 de Marzo de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=JMcaz4hBRZo',
    },
    year: '2021-1',
  },
  {
    name: 'Los factores persistentes y las nuevas dinámicas del conflicto armado',
    description: `Con la participación de:

    - Luis Gabriel Salas - Profesor del departamento de Geografía, UNAL
    - Germán Muñoz González - Líder del grupo de investigación “Jóvenes, Culturas y Poderes” de la U. Distrital de Bogotá y U. de Manizales e investigador CLACSO en juventudes
    - Padre Campo Elías de la Cruz - Director de la Pastoral Universitaria de la diócesis de Mocoa y Sibundoy, Putumayo
    - Grupo musical Fuego en el Aire`,
    date: '17 de Marzo de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=PtVkbW4I6i0',
    },
    year: '2021-1',
  },
  {
    name: 'El conflicto armado, la tierra y la Reforma Rural Integral',
    description: `Con la participación de:

    - Diana Lucía Aldana Giraldo - Directora ejecutiva de la Corporación Jurídica Yira Castro
    - Fabio Rodrigo Leyva Barón - Profesor de la Facultad de Ciencias Agrarias y Director del Centro de Pensamiento en Desarrollo Rural, UNAL

    Moderación: Camilo Borrero, profesor del Departamento de Derecho de la UNAL`,
    date: '31 de Marzo de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=YEIaNG1IEWQ',
    },
    year: '2021-1',
  },
  {
    name: 'La justicia transicional en Colombia: una valoración a partir de los desarrollos de la JEP',
    description: `Con la participación de:

    - Roberto Carlos Vidal López - Magistrado de la Jurisdicción Especial para la Paz
    - Gustavo Gallón Giraldo - Director de la Comisión Colombiana de Juristas
    - Heydi Patricia Baldosea Perea - Magistrada de la Jurisdicción Especial para la Paz

    Moderación: Camilo Borrero, profesor del Departamento de Derecho de la UNAL`,
    date: '7 de Abril de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=0BXrJRqFfYE',
    },
    year: '2021-1',
  },
  {
    name: 'Avatares de los procesos de paz en Colombia (1990 -2021)',
    description: `Con la participación de:

    - Victoria Sandino Simanca Herrera - Senadora de la República
    - Álvaro Villaraga Sarmiento - Catedrático Universitario Y Presidente de la Fundación Cultura Democrática (FUCUDE)

    Moderación: María Clemencia Castro Vergara, profesora del Departamento de Psicología y Directora del Observatorio de Paz y Conflicto, UNAL`,
    date: '14 de Abril de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=fRx1g-aX1ek',
    },
    year: '2021-1',
  },
  {
    name: 'El acuerdo de paz entre el Gobierno Nacional y las FARC',
    description: `Con la participación de:

    - Consuelo Corredor Martínez - Secretería Técnica del Componente Internacional para la Verificación del Acuerdo de Paz- Coordinadora del Equipo Cinep
    - Gerard Martin - Representante en Colombia de la Matriz Acuerdos de Paz, Instituto Kroc Universidad de Notre Dam
    - Borja Paladini Adell - Experto en Construcción de Paz y Diálogo

    Moderación: Lucía Meneses Lucumí, Profesora Escuela de Pregrados Sede la Paz, UNAL`,
    date: '21 de Abril de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=fRx1g-aX1ek',
    },
    year: '2021-1',
  },
  {
    name: 'El acuerdo de paz entre el Gobierno Nacional y las FARC',
    description: `Con la participación de:

    - Sandra Viviana Afaro Yara - Enlace Territorial de la Jurisdicción Especial para la Paz en Antioquia
    - Wilson Alberto Gómez Garcés - Experto de la Unidad de Búsqueda de Personas dadas por Desaparecidas Equipo Territorial Medellín
    - Max Yuri Gil Ramírez - Coordinador Macroregional de Antioquia y el Eje Cafetero de la Comisión de la Verdad

    Moderación: Irene Piedrahita Arcila, Analista de la Comisión de la Verdad en Antioquia`,
    date: '28 de Abril de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=bZb_HBFkev4',
    },
    year: '2021-1',
  },
  {
    name: 'Las comunidades indígenas y afrocolombianas construyendo paz en medio de la guerra',
    description: `Con la participación de:

    - Aida Quilcué - Consejera de los Derechos de los Pueblos Indígenas, Derechos Humanos y Paz, Pueblo Nasa, Cauca
    - Patricia Sierra - Profesora de la Facultad de Ciencias Humanas de la Universidad Nacional de Colombia
    - Adith Bonilla - Geógrafa, Coordinadora Territorial en Chocó para la Comisión de la Verdad`,
    date: '28 de Abril de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=sIKQqplZExE',
    },
    year: '2021-1',
  },
  {
    name: 'Arte, cambio cultural y movilización social en la construcción de la Paz',
    description: `Con la participación de:

    - Carol Osorio - Colectivo RojiNegro, diseño, grafiti, juntanza
    - Patricia Ariza - Directora del Teatro La Candelaria y del Festival de Mujeres en Escena por la Paz
    - Mc Maya - Rapera Feminista y Gestora Cultural

    Moderación: Carlos Satizábal, Profesor de la Facultad de Artes de la Universidad Nacional de Colombia`,
    date: '4 de Agosto de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=x4e5c-VaA-g',
    },
    year: '2021-1',
  },
  {
    name: 'Lecturas de la guerra y la paz desde la salud y el buen vivir',
    description: `Con la participación de:

    - Zulma Urrego - Directora del Centro de Historia de la Medicina, Facultad de Medicina, UNAL
    - Luz Adriana Pineda - Coordinadora de Programas de Médicos del Mundo Francia en la Misión Colombia
    - Deisy Arrubla - Asesora en Salud en la Comisión para el Esclarecimiento de la Verdad, la Convivencia y la No Repetición

    Moderación: Mario Hernández, Coordinador de la Red SaludPaz y del Doctorado Interfacultades en Salud Pública`,
    date: '11 de Agosto de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=EZUdTvBb6A8',
    },
    year: '2021-1',
  },
  {
    name: 'La ciencia, la tecnología y la innovación como herramientas para construir paz en los territorios',
    description: `Con la participación de:

    - Adriana Muñoz - Profesora del Departamento de Producción Animal de la UNAL, Experta en Piscicultura
    - Julián Cortés - Ingeniero Mecánico y Candidato a Doctor en Ciencias Sociales de Wageningen University, Países Bajos
    - Marcel Dicke - Director del Laboratorio de Entomología de Wageningen University, Países Bajos

    Moderación: Karol Barragán - Profesora del Departamento de Producción Animal de la UNAL, Experta en Especies Silvestres`,
    date: '18 de Agosto de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=iPAe90JIdT4',
    },
    year: '2021-1',
  },
  {
    name: 'Sentidos, lenguajes y apuestas de las memoria',
    description: `Con la participación de:

    - Martha Bello - Profesora del Departamento de Trabajo Social, Facultad de Ciencias Humanas, UNAL
    - Soraya Bayuelo - Periodista, Gestora Cultural y Directora del Colectivo de Comunicaciones Montes de María Línea 21
    - Rodrigo Mogollón - Trabajador Social e Investigador con Experiencia en Conflicto Armado, Reparación Colectiva y Violencia contra mujeres y población LGTBI

    Moderación: Patricia Sierra - Profesora de la Facultad de Ciencias Humanas de la Universidad Nacional de Colombia`,
    date: '25 de Agosto de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=eUMwjbY4KNE',
    },
    year: '2021-1',
  },
  {
    name: 'Reformas, violencia, precarización y defensa de derechos en la calle',
    description: `Con la participación de:

    - Ariel Ávila Martínez - Subdirector de la Fundación Paz y Reconciliación PARES
    - Camilo González Posso - Presidente del Instituto de Estudios para el Desarrollo y la Paz INDEPAZ
    - Claudia Beatriz Naranjo Gómez - Coordinación de la Campaña por el Derecho a la Salud Plataforma Colombiana, Democracia y Desarrollo

    Moderación: Claudia Patricia Sierra Pardo - Profesora del Departamento de Trabajo Social, UNAL`,
    date: '5 de Mayo de 2021',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=ZZtbZU8GEmk',
    },
    year: '2021-1',
  },
  // 2020-2
  {
    name: 'Para entender el conflicto armado - Del conflicto armado a la construcción de paz',
    description: `Invitados(as):

    - Andrés Suárez: investigador independiente y excoordinador del Observatorio Memoria y Conflicto Armado del Centro Nacional de Memoria Histórica
    - Pastora Mira: lideresa social de San Carlos, Antioquia`,
    date: '2 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=pLFECShKD3Q',
    },
    year: '2020-2',
  },
  {
    name: 'Los impactos y los costos de la guerra - Del conflicto armado a la construcción de paz',
    description: `Invitados(as):

    - Padre Francisco de Roux, presidente de la Comisión para el Esclarecimiento de la Verdad, la Convivencia y la No Repetición
    - Padre Campo Elías de Cruz, director de la Pastoral Universitaria, Diócesis de Mocoa-Sibundoy
    - Adriana Benjumea, directora de la Corporación Humanas
    - Luz Marina Bernal, Madre de Soacha y defensora de derechos humanos`,
    date: '9 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=xEUN0B7aYPk',
    },
    year: '2020-2',
  },
  {
    name: 'Los factores persistentes y las nuevas dinámicas del conflicto armado',
    description: `Invitados(as):

    - Ariel Ávila, subdirector de la Fundación Paz y Reconciliación
    - Diana Sánchez Lara, directora de la Asociación MINGA
    - Jesús Flórez, decano de la Facultad de Humanidades y Artes de la Universidad Autónoma de Occidente.
    - César López, músico y compositor colombiano`,
    date: '16 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=Rl1_1a-wK0g',
    },
    year: '2020-2',
  },
  {
    name: 'El conflicto armado, la tierra y la Reforma Rural Integral (RRI)',
    description: `Invitados(as):

    - Fabio Leiva Barón, Centro de Pensamiento de Desarrollo Rural y profesor de la Facultad de Ciencias Agrarias de la Universidad Nacional de Colombia
    - Yamile Salinas Abdala, asesora de INDEPAZ
    - Gerardo Vega Medina, director de la Fundación Forjando Futuros
    - Diego Bejarano García, del Grupo de investigación “Procesos Urbanos en Hábitat, Vivienda e Informalidad” de la Universidad Nacional de Colombia`,
    date: '23 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=OB2OHGE8RoA',
    },
    year: '2020-2',
  },
  {
    name: 'La justicia transicional: mecanismos para salir de la guerra',
    description: `Invitados(as):

    - Camilo Borrero García, profesor de la Facultad de Derecho, Ciencias Políticas y Sociales de la UNAL
    - Rodrigo Uprimny Yepes, profesor de la Facultad de Derecho, Ciencias Políticas y Sociales de la UNAL
    - María Camila Moreno, directora del International Center for Transitional Justice ICTJ en Colombia.`,
    date: '30 de Septiembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=OB2OHGE8RoA',
    },
    year: '2020-2',
  },
  {
    name: 'Avatares de los procesos de paz en Colombia (1990-2020)',
    description: `Invitados(as):

    - María Clemencia Castro, profesora de la Facultad de Ciencias Humanas y directora del Observatorio de Paz y Conflicto
    - Álvaro Villarraga, directivo de la Fundación Cultura Democrática y catedrático de la Escuela Superior de Administración Pública
    - Manuela Marín, integrante de la Delegación de Paz de las FARC-EP en La Habana y de la Comisión Nacional de Organización del Partido FARC
    - Edwar Cobos, vocero Nacional Desmovilizados Autodefensas Unidas de Colombia - AUC.`,
    date: '7 de Octubre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=a-PLd80wX40',
    },
    year: '2020-2',
  },
  {
    name: 'El Acuerdo de Paz entre el Gobierno Nacional y las FARC-EP. Balance y perspectivas.',
    description: `Invitados(as):

    - Humberto de La Calle, exvicepresidente de la República y jefe del equipo negociador del Gobierno en los Acuerdos de Paz, por el contundente análisis realizado.
    - Alejo Vargas, profesor de la Facultad de Derecho, Ciencias Políticas y Sociales y director del Centro de Pensamiento y Seguimiento al Diálogo de Paz, por el sucinto análisis de lo pactado en los Acuerdos de Paz.
    - Soraya Bayuelo. Periodista, gestora cultural y directora del Colectivo de Comunicaciones Montes de María Línea 21 - Premio Nacional de Paz 2003`,
    date: '14 de Octubre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=hthBG37TsGg',
    },
    year: '2020-2',
  },
  {
    name: 'Los derechos de las víctimas en el Acuerdo de Paz',
    description: `Invitados(as):

    - Danilo Rojas. Magistrado de la Jurisdicción Especial para la Paz - JEP
    - Claudia Mosquera Rosero-Labbé. Profesora de la Universidad Nacional de Colombia - Sede la Paz.  Laboratorio de Innovación Socio Territorial
    - Erika Diettes. Artista visual y comunicadora social. Magíster en Antropología social`,
    date: '21 de Octubre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=sQ6isYltLvw',
    },
    year: '2020-2',
  },
  {
    name: 'Comunidades indígenas, afrocolombianas y campesinas construyendo paz en medio de la guerra',
    description: `Invitados(as):

    - María Ciro, integrante del Equipo Político del Comité de Integración Social del Catatumbo, CISCA.
    - Rosshi Amira Martínez. integrante Colectiva Matamba, Acción Afrodiaspórica.
    - Taita José Narciso Jamioy Muchavisoy, exgobernador Cabildo Kamëntsá de Sibundoy Putumayo.`,
    date: '28 de Octubre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=B9NMVOF9pKM',
    },
    year: '2020-2',
  },
  {
    name: 'El arte en la construcción de paz',
    description: `Invitados(as):

    - Carlos Satizábal, profesor de la Facultad de Artes y director de la Maestría en Escrituras Creativas UNAL
    - Patricia Ariza, dramaturga, poeta, directora y actriz colombiana`,
    date: '04 de Noviembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=4M8Co5K_1BI',
    },
    year: '2020-2',
  },
  {
    name: 'El arte en la construcción de paz',
    description: `Invitados(as):

    - Carlos Satizábal, profesor de la Facultad de Artes y director de la Maestría en Escrituras Creativas UNAL
    - Patricia Ariza, dramaturga, poeta, directora y actriz colombiana

    Moderación: Martha Nubia Bello, profesora del Departamento de Trabajo Social, UNAL`,
    date: '04 de Noviembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=4M8Co5K_1BI',
    },
    year: '2020-2',
  },
  {
    name: 'La ciencia, la tecnología y la innovación para construir paz en los territorios',
    description: `Invitados(as):

    - Fabio Fajardo, profesor del Departamento de Física, Facultad de Ciencias, UNAL
    - Adriana Muñoz, profesora de la Facultad de Medicina Veterinaria y Zootecnia y coordinadora del grupo de investigación UN-ACUICTIO, UNAL.
    - Karol Barragán, profesora de la Fac. de Medicina Veterinaria y Zootecnia UNAL y coordinadora del Centro de Investigación de Artrópodos Terrestres, UNAL.
    - Santiago Vargas, coordinador de investigación del Observatorio Astronómico Nacional y profesor de la Facultad de Ciencias, UNAL.`,
    date: '04 de Noviembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=EqjrlB3KW3o',
    },
    year: '2020-2',
  },
  {
    name: 'Memoria, conflicto y construcción de paz',
    description: `Invitados(as):

    - Natalia Quiceno - Profesora del Instituto de Estudios Regionales de la Universidad de Antioquia
    - Saúl Franco - Comisionado magistrado de la Comisión para el Esclarecimiento de la Verdad
    - Jaime Urrego - Profesor de la Facultad de Salud de la Universidad del Rosario
    - Modera: Mario Hernandez - Profesor de la Facultad de Medicina UNAL y coordinador de la Red SaludPaz.`,
    date: '18 de Noviembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=8NZ_7Jxps9o',
    },
    year: '2020-2',
  },
  {
    name: 'Los desafíos para la construcción de paz desde la universidad',
    description: `Invitados(as):

    - Fabio Leiva, profesor de la Facultad de Ciencias Agrarias
    - Camilo Borrero, profesor de la Facultad de Derecho, Ciencias Políticas y Sociales
    -Patricia Sierra, profesora de la Facultad de Ciencias Humanas
    - Karol Barragán, profesora de la Facultad de Medicina Veterinaria y Zootecnia`,
    date: '02 de Diciembre de 2020',
    image: '/images/experiences/conflict-cathedra/2021-2-sesion-6.jpg',
    sources: {
      youtube: 'https://www.youtube.com/watch?v=Le1sxzjM9qg',
    },
    year: '2020-2',
  },
].filter(
  (ep) => ep.year === year
));

onBeforeMount(() => {
  areaStore.setCurrentArea({
    name: `Cátedra ${year}\nDel conflicto armado a la construcción de paz`,
  })
});
</script>

<template>
  <DescriptionSection
    :items="[description]"
    main-image="/images/experiences/conflict-cathedra/2021-2.png"
  />

  <GridSection
    title="Sesiones"
    :desktop-cols="1"
    :align-title-left="true"
    background="bg-gray-100"
  >
    <template #description>
      <p class="section-description">Mira las grabaciones de los páneles</p>
    </template>

    <template #items>
      <EpisodeItem
        v-for="(record, index) in records"
        :key="index"
        :data="record"
        :title="`Sesión ${index + 1}`"
        :show-divider="(index + 1) < records.length"
      />
    </template>

    <template #end>
      <SectionDecoration/>
    </template>
  </GridSection>
</template>

<style scoped>

</style>
