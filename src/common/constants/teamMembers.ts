import { slugify } from '@/common/utils';
import { Person } from '@/common/interfaces';

export const TEAM_MEMBERS: Person[] = [
  {
    name: 'Jairo Alexis Rodríguez López',
    image: '/images/about-us/team/jairo-rodriguez.png',
    imageDetail: '/images/about-us/team/jairo-rodriguez-full.png',
    faculty: 'Coordinador 2023',
    location: 'Sede Bogotá',
    email: 'jarodriguezl@unal.edu.co',
    description: `Es licenciado, maestro y doctor en Física por la Universidad Nacional de Colombia sede Bogotá, de cuya Facultad de Ciencias fue decano y profesor del departamento de Física. Investigador sénior.

    Se destacan dentro de sus áreas de interés la divulgación científica, la enseñanza de la física y la física de altas energías. Sus principales áreas de investigación son la docencia de la física, las teorías con dimensiones extra y la búsqueda del Bosón de Higgs.`,
    isDirector: true,
  },
  {
    name: 'Doris Adriana Santos Caicedo',
    image: '/images/about-us/team/doris-santos.png',
    imageDetail: '/images/about-us/team/doris-santos-full.png',
    faculty: 'Coordinadora 2022 - 2023',
    location: 'Sede Bogotá',
    email: 'dasantosc@unal.edu.co',
    description: `En marzo de 2022 la profesora Doris Adriana Santos asume la co-coordinación de la RedPaz UNAL junto con el docente Juan Alfonso de la Rosa. Doctora en Filosofía de la Educación por la Universidad Charles Sturt, Australia, Magíster en Lingüística por la Universidad Nacional de Colombia, Licenciada en Lenguas Modernas por la Pontificia Universidad Javeriana. Se desempeñó como Profesora asociada de la Universidad Nacional de Colombia, Coordinadora de la Maestría en Educación y Directora del Instituto de Investigación en Educación. Líder del grupo Interinstitucional de Investigación Estudios del Discurso. Fue directora de la Licenciatura en Lenguas Modernas y Coordinadora del Centro Latinoamericano de Relaciones Humanas e Interculturales de la Universidad Javeriana.

    Fue líder del Grupo de investigación interinstitucional Estudios del Discurso, el cual ha desarrollado proyectos de investigación acción participativa, etnografía crítica de la educación y análisis crítico del discurso de la política educativa pública en torno a temas tales como la geopolítica de la escritura académica, la escritura académica en situaciones de bilingüismo e interculturalidad y la literacidad ética, las prácticas pedagógicas universitarias y el cambio educativo sostenible. En este campo de acción, lideró la creación del Programa de Lectura y Escritura Académicas de la Universidad Nacional de Colombia (Programa LEA en la UN), el cual busca promover, desde una perspectiva crítica, el fortalecimiento de las competencias comunicativas académicas en español a través de los currículos de los programas de pregrado y posgrado de la universidad. Actualmente, proyecta el conocimiento construido en función de la educación para la construcción de paz.

    La profesora Santos fue coordinadora de la RedPaz UNAL hasta junio de 2023, fecha de su jubilación.`,
    isDirector: true,
  },
  {
    name: 'Juan Alfonso de la Rosa Munar',
    image: '/images/about-us/team/juan-de-la-rosa.png',
    imageDetail: '/images/about-us/team/juan-de-la-rosa-full.png',
    faculty: 'Co-coordinador 2022',
    location: 'Sede Bogotá',
    email: 'jadelarosam@unal.edu.co',
    description: `En marzo de 2022 el profesor Juan Alfonso de la Rosa asume la co-coordinación de la RedPaz UNAL junto con la docente Doris Santos Caicedo. Es diseñador Gráfico egresado de la Universidad Nacional de Colombia, con experiencia en ilustración, diseño de comunicación. Especialista en diseño de multimedia de la Universidad Nacional de Colombia con énfasis en interacción y diseño de información.

    Profesor Asociado de la Escuela de Diseño Gráfico con Maestría en Diseño Multimedia, con tesis presentada sobre los efectos filosóficos de la inserción de los nuevos medios y lo digital en el objeto de estudio de las disciplinas de diseño. Actualmente llevo a cabo estudios de Doctorado en el PhD of Design del Illinois Institute of Technology. En octubre de 2022 el profesor de La Rosa dejó su cargo como co-coordinador ya que fue designado como Decano de la Facultad de Artes- sede Bogotá.`,
    isDirector: true,
  },
  {
    name: 'Camilo Alberto Borrero García',
    image: '/images/about-us/team/camilo-borrero.png',
    imageDetail: '/images/about-us/team/camilo-borrero-full.png',
    faculty: 'Coordinador 2021',
    location: 'Sede Bogotá',
    email: 'caborrerog@unal.edu.co',
    description: `En 2021 el profesor Camilo Borrero asume la coordinación de la RedPaz UNAL. Es abogado de la Universidad Nacional de Colombia, con especialización en Derecho de Familia de la Universidad de los Andes, Posgrado en Sociología de la Universidad Católica de Lovaina la Nueva y Maestría y Doctorado de la Universidad Nacional de Colombia.

    Es profesor titular de la Universidad Nacional de Colombia, en donde se encuentra vinculado desde el año de 1987, y en la actualidad coordina el Doctorado en Derecho. Imparte cátedras en temas de sociología jurídica, derechos humanos, justicia comunitaria y justicia transicional. Hace parte activa del Centro de Pensamiento y Seguimiento a los Diálogos de Paz de la misma Universidad y es vocero del consorcio colombiano ante el Instituto Colombo Alemán para la Paz- CAPAZ`,
    isDirector: true,
  },
  {
    name: 'Martha Nubia Bello Albarracín',
    image: '/images/about-us/team/woman-default.png',
    imageDetail: '/images/about-us/team/martha-bello-full.png',
    faculty: 'Coordinadora 2020',
    location: 'Sede Bogotá',
    email: 'mnbelloa@unal.edu.co',
    description: `En agosto de 2019 la profesora Martha Nubia Bello, Directora Nacional de Investigación y Laboratorios de la VRI es designada como la primera Coordinadora de la RedPaz UNAL. Trabajadora social de la Universidad Nacional de Colombia y magíster en Ciencia Política de la U. de los Andes e Investigación Interdisciplinaria en Ciencias Humanas de la U. Distrital Francisco José de Caldas.

    Fue profesora asociada de la Universidad Nacional de Colombia, adscrita al Departamento de Trabajo Social hasta su jubilación en 2022, donde coordinó el «Programa de iniciativas universitarias para la paz y la convivencia» . En investigación, su trabajo se ha enfocado en el estudio de movimientos sociales, derechos humanos y desplazamiento forzado.

    La profesora Bello fue investigadora del Centro Nacional de Memoria Histórica, donde lideró la elaboración de varios informes de memoria y conflicto y coordinó el informe «¡Basta ya! Colombia: memorias de guerra y dignidad», publicado en 2013.`,
    isDirector: true,
  },
  {
    name: 'Diana Hincapié',
    image: '/images/about-us/team/diana-hincapie.png',
    imageDetail: '/images/about-us/team/diana-hincapie-full.png',
    faculty: 'Facultad de Ciencias Políticas',
    location: 'Sede Bogotá',
    email: 'dmhincapiec@unal.edu.co',
    description: `Abogada (Universidad Nacional de Colombia); Especialista en Derecho Administrativo y Tributario (Universidad del Rosario y UMNG), Magíster en Derecho Constitucional y Doctoranda en Derecho de la Universidad Nacional de Colombia y Universidad de Jaén (España), Doctoranda en Bioética del Instituto de Investigaciones Bioéticas de Monterrey(México)

    Codirectora e investigadora del Grupo de Investigación REPENSARelDERECHO, Semillero El Hilo del Laberinto y Observatorio Verdad&Memoria de la Facultad de Derecho, Ciencias políticas y Sociales de la Universidad Nacional, donde también es docente de pregrado y posgrados.

    Autora de libros como: Objeción de conciencia, desobediencia civil y tribunal constitucional (2021) Co-autora de: El estatuto epistemológico de la Filosofía Práctica (2020); Posontológico, posfundacional, posjurídico (2020); Defensa posjurídica de una constitución amenazada (2019); Claves de Justicia desde América Latina de la colección “Perspectivas Iberoamericanas sobre la justicia” (2019) y Filosofía del Derecho GlocAL (2018).`,
  },
  {
    name: 'Adriana Patricia Muñoz Ramírez',
    image: '/images/about-us/team/adriana-munoz.png',
    imageDetail: '/images/about-us/team/adriana-munoz-full.png',
    faculty: 'Fac. de Medicina Veterinaria y Zootecnia',
    location: 'Sede Bogotá',
    email: 'apmunozr@unal.edu.co',
    description: `Zootecnista de la Universidad Nacional de Colombia y Especialista en Acuicultura de aguas continentales en el Instituto de Acuicultura de los Llanos de la Universidad de los Llanos. Realizó su Maestría y Doctorado en Acuicultura en la Universidade Estadual Paulista Júlio De Mesquita Filho, Brasil. Es profesora asociada en dedicación exclusiva del Departamento de Producción Animal de la Facultad de Medicina Veterinaria y de Zootecnia de la Universidad Nacional de Colombia. Sus áreas de interés son principalmente la nutrición y alimentación de peces, seguridad alimentaria, producción animal sostenible, tecnología del pescado y alimentos funcionales.

    Actualmente es Directora de la Dirección de Extensión de la Facultad de Medicina Veterinaria y Zootecnia de la Universidad Nacional de Colombia.`,
  },
  {
    name: 'Carlos Eduardo Satizábal A.',
    image: '/images/about-us/team/carlos-satizabal.png',
    imageDetail: '/images/about-us/team/carlos-satizabal-full.png',
    faculty: 'Facultad de Artes',
    location: 'Sede Bogotá',
    email: 'cesatizabala@unal.edu.co',
    description: `Poeta, dramaturgo, escritor, actor y director teatral. Filósofo de la Universidad del Valle y Magister en Escrituras Creativas de la Universidad Nacional. Premio Nacional de Poesía con La Llama Inclinada. Premio de dramaturgia de Bogotá con Ellas y La Muerte. Premio Iberoamericano de Dramaturgia con Ensayo del Eterno Retorno Femenino. Profesor asociado: Universidad Nacional de Colombia, investigador del CREA: Centro de pensamiento para las artes. Directivo de la Corporación Colombiana de Teatro CCT y de Tramaluna Teatro. Ha publicado teatro, poesía y ensayos de filosofía y estética.

    Ha coordinado el área dramaturgia de la Maestría en Escrituras Creativas y dirige el curso-taller de dramaturgia de la Escuela de Cine y TV.`,
  },
  {
    name: 'Carlos Eduardo Barriga Acevedo',
    image: '/images/about-us/team/carlos-barriga.png',
    imageDetail: '/images/about-us/team/carlos-barriga-full.png',
    faculty: 'Facultad de Artes',
    location: 'Sede Bogotá',
    email: 'cebarrigaa@unal.edu.co',
    description: `Profesor asociado al programa de Cine y Televisión de la Facultad de Artes. Con formación profesional de Cine (Universidad Nacional Autonóma de México), Cine y Televisión (Universidad Nacional de Colombia) y Mágister en Teoría e Historia del Arte de la misma institución. Investigador en educación, medios y tecnologías de la información y la comunicación. Educador universitario y formador de docentes.

    Profesor fundador de la Escuela de Cine y Televisión de la Universidad Nacional de Colombia. Experiencia en gestión de proyectos. Realizador y productor de cine, vídeo y televisión. Diseñador de estrategias transmedia y blearning para la educación. Investigador miembro del Grupo de Investigación en Evaluación de la Educación de la Universidad Nacional`,
  },
  {
    name: 'Claudia Patricia Sierra Pardo',
    image: '/images/about-us/team/claudia-sierra.png',
    imageDetail: '/images/about-us/team/claudia-sierra-full.png',
    faculty: 'Facultad de Ciencias Humanas',
    location: 'Sede Bogotá',
    email: 'cpsierrap@unal.edu.co',
    description: `Trabajadora Social de la Universidad Nacional de Colombia. Magíster en Educación con énfasis en Educación Comunitaria de la Universidad Pedagógica Nacional y Doctora en Educación de la misma universidad. Coordina el Grupo de Investigación en Educación Popular y Procesos Comunitarios (EnRaizAndo U.N.).

    Es docente en el pregrado de Trabajo Social y en la Especialización en Acción sin Daño y Construcción de Paz, ofertada por el Departamento de Trabajo Social de la Universidad Nacional de Colombia. En el pregrado, ha coordinado los campos de práctica en floricultura para exportación, procesos educativos comunitarios y actualmente la práctica académica con el Comité de Integración Social del Catatumbo (CISCA) en Norte de Santander. Coordinadora Curricular de la Especialización en Acción sin Daño y Construcción de Paz entre febrero de 2017 y agosto de 2020. Formó parte de la Red RELETRAN (Red Latinoamericana Europea de Trabajo Social Transnacional) entre los años 2011 a 2016. Ha participado en investigaciones y proyectos en las áreas de floricultura para la exportación, códigos de conducta y responsabilidad social empresarial, iniciativas comunitarias ambientales, fortalecimiento organizativo y participación comunitaria, educación popular, Teologia de la Liberación y procesos organizativos derivados de su influencia, constitución de sujetos sociales y nuevas subjetividades. Igualmente se destaca su presencia en eventos nacionales e internacionales en calidad de ponente.`,
  },
  {
    name: 'Fabio Rodrigo Leiva Barón',
    image: '/images/about-us/team/fabio-leiva.png',
    imageDetail: '/images/about-us/team/fabio-leiva-full.png',
    faculty: 'Facultad de Ciencias Agrarias',
    location: 'Sede Bogotá',
    email: 'frleivab@unal.edu.co',
    description: `Profesor titular de la Facultad de Ciencias Agrarias de la Universidad Nacional de Colombia. Ingeniero Agrícola de la Universidad Nacional, magíster y doctor en Ingeniería Agrícola de Cranfield University. Asociado al grupo de investigación Desarrollo sostenible y gestión ambiental. Sus líneas de investigación son los indicadores de sostenibilidad en la producción agraria, la mecanización para el desarrollo de agricultura sostenible, la geoinformación para el uso sostenible de recursos naturales.

    Actualmente se desempeña como Director del Centro de Pensamiento en Desarrollo Rural de la Universidad Nacional de Colombia`
  },
  {
    name: 'Jovani Alberto Jiménez Builes',
    image: '/images/about-us/team/jovani-jimenez.png',
    imageDetail: '/images/about-us/team/jovani-jimenez-full.png',
    faculty: 'Facultad de Minas',
    location: 'Sede Medellín',
    email: 'jajimen1@unal.edu.co',
    description: `El grupo de investigación Inteligencia Artificial en Educación tiene como propósitos la formación del talento humano a alto nivel en las líneas asociadas al uso de TIC en educación, implementando técnicas de IA.`,
  },
  {
    name: 'Maria Clemencia Castro Vergara',
    image: '/images/about-us/team/maria-castro.png',
    imageDetail: '/images/about-us/team/maria-castro-full.png',
    faculty: 'Facultad de Ciencias Humanas',
    location: 'Sede Bogotá',
    email: 'mccastrov@unal.edu.co',
    description: `Psicóloga, Universidad Nacional de Colombia. Psicoanalista, Magister en Psicoanálisis, Cultura y Vínculo Social, Universidad de Antioquia. Actualmente es Directora del Observatorio de Paz y Conflicto (OPC).

    Se ha especializado en procesos de paz, dejación de armas, desmovilización, reintegración y reincorporación en las experiencias de Colombia y El Salvador. Es investigadora y docente en temas relativos a conflicto armado, procesos de paz, tránsito a la vida civil y construcción de paz. Se ha desempeñado  como asesora en la formulación de proyectos para la reincorporación y apoyo técnico a la Comisión de Mujeres, Género y Diversidades de FARC en varios temas. También ha asesorado entidades gubernamentales y no gubernamentales, nacionales e internacionales, en temas de conflicto armado y procesos de paz.

    Su experiencia profesional se ha enfocado en la atención psicológica a combatientes y militantes de organizaciones guerrilleras y participantes en procesos de reinserción (Clínica psicoanalítica). Su labor profesional se ha desarrollado en conjunto con la labor investigativa mediante entrevistas a profundidad realizadas a personas que han salido de organizaciones guerrilleras de Colombia, Venezuela y El Salvador, y de organizaciones de Autodefensas en Colombia.`,
  },
  {
    name: 'Marina Sánchez de Praguer',
    image: '/images/about-us/team/maria-sanchez.png',
    imageDetail: '/images/about-us/team/maria-sanchez-full.png',
    faculty: 'Facultad de Ingeniería y Administración',
    location: 'Sede Palmira',
    email: 'msanchezpr@unal.edu.co',
    description: `Ingeniera Agrónoma, Maestra en Administración de Empresas (Universidad. del Valle), Maestra en Suelos y Aguas (Universidad Nacional de Colombia), Doctora Ingeniera Agrónoma (Universidad Politécnica de Madrid).

    Profesora Titular de la Universidad Nacional de Colombia, sede Palmira. Investigadora Emerita (Minciencias). Trabaja las líneas de investigación en Biología del Suelo, Micorrizas, Microbiología del suelo, Agroecología Avanzada y Diseño de Sistemas productivos agroecológicos desde la perspectiva de Soberanía, seguridad alimentaria y construcción de ciudadanía. Adelanta trabajos de investigación con campesinos en diferentes localidades del Valle del Cauca, Colombia.`
  },
  {
    name: 'Mario Esteban Hernández Álvarez',
    image: '/images/about-us/team/mario-hernandez.png',
    imageDetail: '/images/about-us/team/mario-hernandez-full.png',
    faculty: 'Facultad de Medicina',
    location: 'Sede Bogotá',
    email: 'mehernandeza@unal.edu.co',
    description: `Médico cirujano. Especialista de Bioética de la Escuela Latinoamericana de Bioética, Fundación José María Mainetti, Buenos Aires.. Mágister y Doctor en Historia de la Universidad Nacional en Colombia. Es profesor asociado del Departamento de Salud Pública de la Facultad de Medicina de la Universidad Nacional de Colombia y director del grupo de investigación en Estudios Sociohistóricos de la Salud y la Protección Social.

    Actualmente es Coordinador del Doctorado Interfacultades de Salúd Pública de la Universidad Nacional de Colombia`
  },
  {
    name: 'Adriana Villota',
    image: '/images/about-us/team/woman-default.png',
    imageDetail: '/images/about-us/team/woman-default-full.png',
    faculty: 'Facultad de Administración',
    location: 'Sede Manizales',
    email: 'adrianavimar@unal.edu.co',
    description: `Profesional en Gestión Cultural y Comunicativa; y Magíster en Administración perfil investigativo (Msc) de la Universidad Nacional de Colombia, Sede Manizales. Actualmente es estudiante del Doctorado en Estudios Ambientales de la misma universidad. Ha sido docente ocasional de la Universidad Nacional de Colombia, Sede Palmira y docente tiempo completo de la Universidad de Boyacá, Sede Tunja.

    Desde el 2007 es integrante del Grupo de Investigación en Pensamiento Ambiental, Acreditado en A por Minciencias y en el 2020 se integra al Centro de Pensamiento Ambiental “Augusto Ángel Maya”, espacios donde ha tenido la oportunidad de apoyar proyectos investigativos tanto en su formulación y ejecución, como en su asistencia administrativa. Ha participado también en proyectos de Recuperación en Patrimonio Documental. Posee producción académica publicada.`
  },
  {
    name: 'Rafael Antonio Malagón Oviedo',
    image: '/images/about-us/team/man-default.png',
    imageDetail: '/images/about-us/team/man-default-full.png',
    faculty: 'Facultad de Odontología',
    location: 'Sede Bogotá',
    email: 'ramalagono@unal.edu.co',
    description: `Odontólogo de la Universidad Nacional de Colombia. Magister en Educación de la Universidad Pedagógica Nacional. Asociado al grupo de investigación: "Promoción, prevención en Salud Pública, salud social y salud ambiental" a la Red SaludPaz, y al Doctorado Interfacultades de Salúd Pública de la Universidad Nacional de Colombia`
  },
]
.map((person, index) => ({
  ...person,
  id: index + 1 ,
  slug: person.name.split(' ').map((w) => slugify(w)).join('-'),
}));

export default TEAM_MEMBERS;
