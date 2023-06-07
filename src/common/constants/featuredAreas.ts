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
}
