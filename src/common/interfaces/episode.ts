import { MediaSrc } from '@/common/interfaces/mediaSrc';

export interface Episode {
  name: string;
  description: string;
  date: string;
  image?: string;
  sources: MediaSrc;
  year?: number | string;
}
