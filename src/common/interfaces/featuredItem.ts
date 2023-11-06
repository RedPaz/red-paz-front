import { Area } from './area';

export interface FeaturedItem {
  area: Area;
  category: string;
  title: string;
  image: string;
  date: string;
  url: string;
  blank?: boolean;
  highlighted?: boolean;
}