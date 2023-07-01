import { Area } from '@/common/interfaces';
import { RedArea } from '../types';

export const FEATURED_AREAS: Record<RedArea, Area> = {
  videos: { name: 'Videos', icon: 'filmstrip', color: '#402D5C' },
  podcast: { name: 'Podcast', icon: 'microphone-outline', color: '#031449' },
  articles: { name: 'Artículos', icon: 'text-box-outline', color: '#4DB372' },
  training: { name: 'Formación', icon: 'school-outline', color: '#0079AF' },
  events: { name: 'Eventos', icon: 'calendar-multiple', color: '#FECB37' },
  others: { name: 'Otros', icon: 'list-box-outline', color: '#858585' },
  processes: { name: 'Ap. procesos', icon: 'book-open-variant', color: '#334A3F' },
  science: { name: 'Ciencia', icon: 'red-paz', color: '#E2596B', id: 1 },
  art: { name: 'Arte', icon: 'red-paz', color: '#EFB96D', id: 2 },
  health: { name: 'Salud', icon: 'red-paz', color: '#5DA0B5', id: 3 },
  territory: { name: 'Territorio', icon: 'red-paz', color: '#B8CF76', id: 4 },
  victims: { name: 'Víctimas', icon: 'red-paz', color: '#4F4661', id: 5 },
  agreements: { name: 'Acuerdos', icon: 'red-paz', color: '#50AE98', id: 6 },
  citizenship: { name: 'Ciudadanía', icon: 'red-paz', color: '#E26F60', id: 7 },
}
