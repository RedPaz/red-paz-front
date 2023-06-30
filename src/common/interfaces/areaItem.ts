import { Area } from './area';

export interface AreaItem extends Area {
  id: number;
  slug: string;
  bannerSrc: string;
}