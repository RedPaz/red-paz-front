import { HeaderItem } from '@/common/interfaces';

export const HEADER_ITEMS: HeaderItem[] = [
  {
    label: 'Inicio',
    src: '/',
    subItems: [],
  },
  {
    label: 'Sobre Nosotros',
    src: '/sobre-nosotros',
    subItems: [],
  },
  {
    label: 'Experiencias de Paz',
    src: '/experiencias-de-paz',
    subItems: [
      { label: 'Iniciativas RedPaz Unal', src: '/experiencias-de-paz/iniciativas-redpaz-unal' },
      { label: 'Áreas temáticas', src: '/experiencias-de-paz/areas-tematicas' },
    ],
  },
  {
    label: 'Nuestros Aliados',
    src: '#',
    allowTabs: true,
    subItems: [
      { label: 'Sistema Integral para la Paz', src: '/nuestros-aliados/sistema-integral-para-la-paz' },
      { label: 'Entidades Gubernamentales', src: '/nuestros-aliados/entidades-gubernamentales' },
      { label: 'Organismos Internacionales', src: '/nuestros-aliados/organismos-internacionales' },
      { label: 'Organismos Sociales', src: '/nuestros-aliados/organismos-sociales' },
    ],
  },
  {
    label: 'Recursos',
    src: '#',
    subItems: [
      { label: 'Formación y cursos de extensión', src: '#' },
      { label: 'Publicaciones', src: '/recursos/publicaciones' },
    ],
  },
  {
    label: 'Contacto',
    src: '#',
    subItems: [],
  },
  {
    label: 'Sedes',
    src: '#',
    subItems: [
      { label: 'Amazonía', src: 'https://www.imani.unal.edu.co/' },
      { label: 'Bogotá', src: 'https://bogota.unal.edu.co/' },
      { label: 'Caribe', src: 'https://caribe.unal.edu.co/' },
      { label: 'Manizales', src: 'https://www.manizales.unal.edu.co/' },
      { label: 'Medellín', src: 'https://medellin.unal.edu.co/' },
      { label: 'Caribe', src: 'https://caribe.unal.edu.co/' },
      { label: 'Orinoquía', src: 'https://orinoquia.unal.edu.co/' },
      { label: 'Palmira', src: 'https://www.palmira.unal.edu.co/' },
      { label: 'Tumaco', src: 'https://www.tumaco-pacifico.unal.edu.co/' },
    ],
  },
];
