import { slugify } from '@/common/utils';
import { Partner } from "@/common/interfaces";
import { FEATURED_AREAS } from '@/common/constants';
import { PARTNER_CATEGORIES } from './partnerCategories';

export const PARTNERS: Partner[] = [
  // Sistema Integral para la Paz
  {
    name: 'Comisión de la Verdad',
    alias: 'Comisión de la Verdad',
    image: '/images/home/partners/CV.png',
    isLarge: false,
    bannerImage: '/images/partners/banners/ComVer.png',
    cardImage: '/images/partners/card-logos/CV.jpg',
    category: PARTNER_CATEGORIES[0],
    detailImage: '/images/partners/card-logos/CV.jpg',
    description: `En el marco del Acuerdo Final para la terminación del conflicto y la construcción de una paz estable y duradera, mediante el Acto Legislativo 01 de 2017 y el Decreto 588 de 2017, se creó la Comisión para el Esclarecimiento de la Verdad, la Convivencia y la No Repetición, como un mecanismo de carácter temporal y extrajudicial del Sistema Integral de Verdad, Justicia, Reparación y No Repetición - SIVJRNR, para conocer la verdad de lo ocurrido en el marco del conflicto armado y contribuir al esclarecimiento de las violaciones e infracciones cometidas durante el mismo y ofrecer una explicación amplia de su complejidad a toda la sociedad. Busca satisfacer el derecho de las víctimas y de la sociedad a la verdad, promover el reconocimiento de lo sucedido, la convivencia en los territorios y contribuir a sentar las bases para la no repetición, mediante un proceso de participación amplio y plural para la construcción de paz.`,
    email: 'info@comisiondelaverdad.co',
    phone: '(+57) (1) 7444344',
    webSrc: 'https://www.comisiondelaverdad.co/',
    youtubeSrc: '',
    results: [
      {
        category: 'Nuestros Aliados',
        image: '/images/partners/projects/COMVER-1.png',
        title: 'Conferencia: Informe de la Comisión de la Verdad',
        date: '2022',
        url: '#',
        area: { ...FEATURED_AREAS.videos }
      },
      {
        category: 'Nuestros Aliados',
        image: '/images/partners/projects/COMVER-2.png',
        title: 'Informe de la Comisión de la Verdad',
        date: '2022',
        url: '#',
        area: { ...FEATURED_AREAS.videos }
      },
    ],
  },
  {
    name: 'Jurisdicción Especial para la Paz',
    alias: 'JEP',
    image: '/images/home/partners/JEP.png',
    bannerImage: '/images/partners/banners/JEP.png',
    cardImage: '/images/partners/card-logos/JEP.jpg',
    detailImage: '/images/partners/card-logos/JEP.jpg',
    category: PARTNER_CATEGORIES[0],
    isLarge: false,
    email: 'info@jep.gov.co',
    phone: '(+57) (1) 7440041',
    webSrc: '#',
    youtubeSrc: '#',
    description: 'La Jurisdicción Especial para la Paz (JEP) es el componente de justicia del Sistema Integral de Verdad, Justicia, Reparación y no Repetición, creado por el Acuerdo de Paz entre el Gobierno Nacional y las Farc-EP. La JEP tiene la función de administrar justicia transicional y conocer de los delitos cometidos en el marco del conflicto armado que se hubieran cometido antes del 1 de diciembre de 2016. La existencia de la JEP no podrá ser superior a 20 años.',
    results: [
      {
        category: 'Nuestros Aliados',
        image: '/images/partners/projects/JEP-1.png',
        title: 'Conoce y participa de nuestra casa... El SIP',
        date: '16 de septiembre de 2022',
        url: '#',
        area: { ...FEATURED_AREAS.training }
      },
      {
        category: 'Nuestros Aliados',
        image: '/images/partners/projects/JEP-2.png',
        title: 'La JEP en funcionamiento.',
        date: '16 de septiembre de 2022',
        url: '#',
        area: { ...FEATURED_AREAS.training }
      },
      {
        category: 'Nuestros Aliados',
        image: '/images/partners/projects/JEP-3.png',
        title: 'Fundamentos para la representación de víctimas.',
        date: '16 de septiembre de 2022',
        url: '#',
        area: { ...FEATURED_AREAS.training }
      },
    ],
  },
  {
    name: 'Unidad de Búsqueda de Personas dadas por Desaparecidas',
    alias: 'UBPD',
    image: '/images/home/partners/UBPD.png',
    bannerImage: '/images/partners/banners/UBPD.png',
    cardImage: '/images/partners/card-logos/UBPD.jpg',
    detailImage: '/images/partners/card-logos/UBPD.jpg',
    category: PARTNER_CATEGORIES[0],
    isLarge: true,
    email: 'servicioalciudadano@ubpdbusquedadesaparecidos.co',
    phone: '018000-117175',
    webSrc: 'https://ubpdbusquedadesaparecidos.co/',
    youtubeSrc: '#',
    description: `La Unidad de Búsqueda de Personas dadas por Desaparecidas en el contexto y en razón del conflicto armado (UBPD) es una entidad del Estado de carácter humanitario y extrajudicial, autónomo e independiente dentro del Sistema Integral de Verdad, Justicia, Reparación y No Repetición (SIVJRNR), que dirige, coordina y contribuye a la búsqueda de personas dadas por desaparecidas en el marco del conflicto armado, que se encuentren con vida y, en los casos de fallecimiento, cuando sea posible, la recuperación, identificación y entrega digna de cuerpos. Son competencia de la UBPD las desapariciones ocurridas antes del 1ro de diciembre de 2016 (fecha de entrada en vigencia de los Acuerdos), sucedidas en el contexto y en razón del conflicto armado, correspondientes a desaparición forzada, secuestro, reclutamiento ilícito, durante las hostilidades.`,
    results: [
      {
        category: 'Nuestros Aliados',
        image: '/images/partners/projects/UBPD-1.png',
        title: 'La desaparición y la búsqueda de personas en el conflicto armado',
        date: '16 de septiembre de 2022',
        url: '#',
        area: { ...FEATURED_AREAS.training }
      },
    ],
  },
  // Entidades Gubernamentales
  {
    name: 'Agencia para la Reincorporación y la Normalización',
    alias: 'ARN',
    image: '/images/home/partners/ARN.png',
    bannerImage: '/images/partners/banners/ARN.png',
    cardImage: '/images/partners/card-logos/ARN.jpg',
    detailImage: '/images/partners/card-logos/ARN.jpg',
    category: PARTNER_CATEGORIES[1],
    isLarge: true,
    email: 'atencion@reincorporacion.gov.co',
    phone: '+57 601 4430020.',
    webSrc: 'https://www.reincorporacion.gov.co/en',
    youtubeSrc: '#',
    description: `La Agencia para la Reincorporación y la Normalización (ARN) es la entidad de Presidencia de la República que desde 2003 acompaña y brinda asesoría permanente a quienes le apuestan a la paz y hacen tránsito a la legalidad, generando oportunidades que fortalezcan sus capacidades para que puedan desenvolverse plenamente como ciudadanos.

    La Agencia tiene presencia en todo el país, a través de sedes y profesionales experimentados con altas calidades humanas, que permanentemente orientan a los excombatientes para que alcancen sus metas de vida, y fortalezcan los lazos con sus familias y la comunidad, a través de tres procesos, tales como: Proceso de Reintegración, Proceso de Reintegración Especial y Proceso de Reincorporación.

    La RedPaz UNAL  juntos con otros actores a nivel nacional, departamental y municipal ha apoyado la implementación integral de la ruta de reincorporación en los departamentos de Arauca en 2022-2023 y en Nariño en 2023.`,
    results: [],
  },
  {
    name: 'Agencia para la Renovación del Territorio',
    alias: 'ART',
    image: '/images/home/partners/ART.png',
    bannerImage: '/images/partners/banners/ARN.png',
    cardImage: '/images/partners/card-logos/ART.jpg',
    detailImage: '/images/partners/card-logos/ART.jpg',
    category: PARTNER_CATEGORIES[1],
    isLarge: true,
    email: 'enlaceciudadano@renovacionterritorio.gov.co',
    phone: '57 601422 10 30',
    webSrc: 'https://www.renovacionterritorio.gov.co/',
    youtubeSrc: '#',
    description: `La Agencia de Renovación del Territorio (ART), fue creada mediante el Decreto Ley 2366 de 2015, es una entidad estatal de naturaleza especial, del sector descentralizado de la Rama Ejecutiva del Orden Nacional, con personería jurídica, patrimonio propio y autonomía administrativa, técnica y financiera, la cual entró en operación el 1 de enero de 2017, adscrita al Departamento Administrativo de la Presidencia de la República (parágrafo 4 del artículo 281 de la Ley 1955 de 2019 y artículo 5 del Decreto 1784 de 2019). la Ley 1955 de 2019 Plan Nacional de Desarrollo dispuso que la Agencia de Renovación del Territorio cambiar? su adscripción del Sector Agricultura y Desarrollo Rural al sector Presidencia de la República.`,
    results: [],
  },
  {
    name: 'Dirección de Sustitución de Cultivos de Uso Ilícito',
    alias: 'DSCUI',
    image: '/images/home/partners/DSCUI.png',
    bannerImage: '/images/partners/banners/ARN.png',
    cardImage: '/images/partners/card-logos/DSCUI.jpg',
    detailImage: '/images/partners/card-logos/DSCUI.jpg',
    category: PARTNER_CATEGORIES[1],
    isLarge: true,
    email: 'enlaceciudadano@renovacionterritorio.gov.co',
    phone: '',
    webSrc: 'https://linktr.ee/dsustitucion',
    youtubeSrc: '#',
    description: `Con la entrada en vigencia del parágrafo 4 del artículo 281 de la ley 1955 de 2019 el desarrollo y ejecución del Programa Nacional de Sustitución de Cultivos ilícitos empezó a ser ejecutado por la Agencia de Renovación del Territorio (ART) haciendo necesario la creación de la Dirección de Sustitución de Cultivos Ilícitos en la Agencia, la cual funcionará con autonomía administrativa y financiera, en los términos del literal j) del artículo 54 de la Ley 489 de 1998.`,
    results: [],
  },
  {
    name: 'Sistema Universitario Estatal - Mesa de Gobernabilidad y Paz',
    alias: 'SUE',
    image: '/images/home/partners/SUE.png',
    bannerImage: '/images/partners/banners/ARN.png',
    cardImage: '/images/partners/card-logos/SUE.jpg',
    detailImage: '/images/partners/card-logos/SUE.jpg',
    category: PARTNER_CATEGORIES[1],
    isLarge: true,
    email: '',
    phone: '',
    webSrc: 'https://mesadegobernabilidadypazsue.edu.co/',
    youtubeSrc: '#',
    description: `La  Mesa de Gobernabilidad y Paz del Sistema Universitario Estatal es la instancia que agrupa los delegados de los rectores de las universidades públicas de Colombia y algunos invitados especiales de otras instituciones de educación superior encargados de los temas de la educación para la paz en sus respectivas instituciones.

    Conformada desde 2016, esta Mesa se orienta por los siguientes compromisos aprobados por las rectorías:

    - Intervención en los territorios para el logro de la paz con justicia social.
    - Formación como gestores de paz de los excombatientes.
    - Acompañamiento y compromiso con las víctimas.
    - Modernización del Estado colombiano para el postconflicto y asesoría a los gobiernos territoriales.
    - Promoción y fortalecimiento de una cultura de paz.
    - Apoyo a la educación y la investigación para la paz.
    - Formación de ciudadanos críticos y participativos.
    - Apoyo a las prácticas profesionales de los estudiantes para la paz
    - Las universidades como territorios de paz.
    - Fortalecimiento de las comunicaciones para la paz.`,
    results: [
      {
        category: 'Nuestros Aliados',
        image: '/images/partners/projects/SUE-1.png',
        title: 'Entrega simbólica del informe final de la CV a las universidades',
        date: '16 de septiembre de 2022',
        url: '#',
        area: { ...FEATURED_AREAS.videos }
      },
    ],
  },
  {
    name: 'Unidad Policial para la Edificación de la Paz',
    alias: 'UNIPEP',
    image: '/images/home/partners/UNIPEP.png',
    bannerImage: '/images/partners/banners/ARN.png',
    cardImage: '/images/partners/card-logos/UNIPEP.jpg',
    detailImage: '/images/partners/card-logos/UNIPEP.jpg',
    category: PARTNER_CATEGORIES[1],
    isLarge: true,
    email: 'sudir.unipep-jf@policia.gov.co',
    phone: '',
    webSrc: 'https://www.policia.gov.co/unidad/unipep',
    youtubeSrc: '#',
    description: `La Unidad Policial para la Edificación de la Paz - UNIPEP tiene como misión asesorar, diseñar, dirigir, coordinar, articular, verificar el cumplimiento de los compromisos y responsabilidades institucionales complementarias y misionales derivados de la construcción de paz y el desarrollo de la Política de Paz Total.`,
    results: [],
  },
  {
    name: 'Instituto Geográfico Agustín Codazzi',
    alias: 'IGAC',
    image: '/images/home/partners/IGAC.png',
    bannerImage: '/images/partners/banners/ARN.png',
    cardImage: '/images/partners/card-logos/IGAC.jpg',
    detailImage: '/images/partners/card-logos/IGAC.jpg',
    category: PARTNER_CATEGORIES[1],
    isLarge: true,
    email: 'contactenos@igac.gov.co',
    phone: '',
    webSrc: 'https://www.igac.gov.co/',
    youtubeSrc: '#',
    description: `El Instituto Geográfico Agustín Codazzi, IGAC, es la entidad encargada de producir el mapa oficial y la cartografía básica de Colombia; elaborar el catastro nacional de la propiedad inmueble; realizar el inventario de las características de los suelos; adelantar investigaciones geográficas como apoyo al desarrollo territorial; capacitar y formar profesionales en tecnologías de información geográfica y coordinar la Infraestructura Colombiana de Datos Espaciales (ICDE).`,
    results: [],
  },
  {
    name: 'Red SaludPaz',
    alias: 'RSP',
    image: '/images/home/partners/RSP.png',
    bannerImage: '/images/partners/banners/ARN.png',
    cardImage: '/images/partners/card-logos/RSP.jpg',
    detailImage: '/images/partners/card-logos/RSP.jpg',
    category: PARTNER_CATEGORIES[1],
    isLarge: true,
    email: '',
    phone: '',
    webSrc: 'https://www.redsaludpaz.org/dom/s/pags/index.cfm',
    youtubeSrc: '#',
    description: `Instituciones universitarias y organizaciones sociales comprometidas con la construcción de una sociedad en paz en Colombia.

    Quienes firmamos esta carta, en nombre de nuestras instituciones universitarias y organizaciones sociales, estamos comprometidos con la construcción de una sociedad en paz en Colombia, a partir de la oportunidad representada por el "Acuerdo Final para la terminación del conflicto y la construcción de una paz estable y duradera", pactado entre el Gobierno Nacional y las FARC-EP.

    A este propósito contribuiremos desde los aportes de una visión amplia de la salud, entendida como derecho fundamental a una atención integral y a las mejores condiciones de vida de las poblaciones en sus territorios, de manera que cuenten con la posibilidad de realizar una vida digna y sustentable.`,
    results: [],
  },
  // Organismos Internacionales
  {
    name: 'Misión de Verificación de la ONU en Colombia',
    alias: 'MVOC',
    image: '/images/home/partners/MVOC.png',
    bannerImage: '/images/partners/banners/MVONU.png',
    cardImage: '/images/partners/card-logos/MVOC.jpg',
    detailImage: '/images/partners/card-logos/MVOC.jpg',
    category: PARTNER_CATEGORIES[2],
    isLarge: true,
    email: 'prensamisiononu@un.org',
    phone: '(1) 7455977',
    webSrc: 'https://colombia.unmissions.org/',
    youtubeSrc: '#',
    description: `La Misión de Verificación de las Naciones Unidas verificará la reincorporación política, económica y social; y las garantías de seguridad para los integrantes de la FARC, sus familias y para las comunidades.`,
    results: [],
  },
  {
    name: 'Instituto Colombo-Alemán para la Paz',
    alias: 'ICAP',
    image: '/images/home/partners/CAPAZ.png',
    bannerImage: '/images/partners/banners/CAPAZ.png',
    cardImage: '/images/partners/card-logos/CAPAZ.jpg',
    detailImage: '/images/partners/card-logos/CAPAZ.jpg',
    category: PARTNER_CATEGORIES[2],
    isLarge: false,
    email: 'info@www.instituto-capaz.org',
    phone: '+57 (1)3422340 Ext. 29981',
    webSrc: 'https://www.instituto-capaz.org/',
    youtubeSrc: '#',
    description: `El Instituto CAPAZ es una plataforma de cooperación entre Colombia y Alemania que promueve el intercambio de conocimientos y experiencias en temas de construcción de paz, mediante la conformación de redes entre universidades, centros de investigación, organizaciones de la sociedad civil y entidades gubernamentales, que actúan en el ámbito territorial. CAPAZ promueve actividades de investigación, enseñanza y asesoría, que permiten nuevas aproximaciones al entendimiento de la paz y el conflicto, transmiten conocimiento a la sociedad y plantean respuestas a los múltiples desafíos de una sociedad en transición. El Instituto CAPAZ es un Centro de Excelencia en Investigación y Docencia financiado por el Servicio Alemán de Intercambio Académico (DAAD), con recursos del Ministerio Federal de Asuntos Exteriores de Alemania.`,
    results: [
      {
        category: 'Nuestros Aliados',
        image: '/images/partners/projects/CAPAZ-1.png',
        title: 'El futuro del pasado. A un año de la presentación del Informe Final',
        date: '16 de septiembre de 2022',
        url: '#',
        area: { ...FEATURED_AREAS.videos }
      },
    ],
  },
  {
    name: 'Friedrich Ebert Stiftung',
    alias: 'FES',
    image: '/images/home/partners/FES.png',
    bannerImage: '/images/partners/banners/FESCOL.png',
    cardImage: '/images/partners/card-logos/FES.jpg',
    detailImage: '/images/partners/card-logos/FES.jpg',
    category: PARTNER_CATEGORIES[2],
    isLarge: false,
    email: 'prensamisiononu@un.org',
    phone: '+57 (1) 347 3077 / - 3092',
    webSrc: 'https://colombia.fes.de/',
    youtubeSrc: '#',
    description: `La Friedrich-Ebert-Stiftung (FES), fundada en 1925, es la fundación política más antigua de Alemania. Esta institución se fundó como legado político del primer presidente alemán elegido democráticamente, Friedrich Ebert, a quien debe su nombre así como los principios que la rigen. En calidad de fundación política cercana a un partido, nuestro trabajo se rige por los valores fundamentales de la democracia social: libertad, justicia y solidaridad. Estos valores nos vinculan de una forma ideal a la socialde- mocracia y a los sindicatos libres. Siendo una institución sin ánimo de lucro, diseñamos nuestras actividades de un modo independiente y autosuficiente.`,
    results: [],
  },
  {
    name: 'Oficina de DDHH de la ONU',
    alias: 'ODHONU',
    image: '/images/partners/banners/ODHONU.png',
    bannerImage: '/images/partners/banners/FESCOL.png',
    cardImage: '/images/partners/card-logos/ODHONU.jpg',
    detailImage: '/images/partners/card-logos/ODHONU.jpg',
    category: PARTNER_CATEGORIES[2],
    isLarge: true,
    email: 'ohchr-co_alegaciones@un.org',
    phone: '(601) 658 3300',
    webSrc: 'https://www.ohchr.org/es/ohchr_homepage',
    youtubeSrc: '#',
    description: `La OACDH realiza una labor de investigación y organiza consultas acerca de cuestiones fundamentales de derechos, así como trabaja para lograr la aplicación de los derechos humanos en determinados países mediante compromisos a nivel nacional.`,
    results: [],
  },
  {
    name: 'Oficina de Drogas y Crimen de la ONU',
    alias: 'UNODC',
    image: '/images/home/partners/UNODC.png',
    bannerImage: '/images/partners/banners/MVONU.png',
    cardImage: '/images/partners/card-logos/UNODC.jpg',
    detailImage: '/images/partners/card-logos/UNODC.jpg',
    category: PARTNER_CATEGORIES[2],
    isLarge: true,
    email: 'unodc-colombiafieldoffice@un.org',
    phone: '57 1 646 70 00',
    webSrc: 'https://www.unodc.org/colombia/es/index.html',
    youtubeSrc: '#',
    description: `La Oficina de las Naciones Unidas contra la Droga y el Delito (UNODC) es un líder mundial en la lucha contra las drogas ilícitas y la delincuencia internacional, además de estar encargada de ejecutar el programa principal de las Naciones Unidas contra el terrorismo.`,
    results: [],
  },
].map((partner) => ({
  ...partner,
  src: `/nuestros-aliados/${partner.category.slug}/${slugify(partner.name)}`,
}));
