import { Item } from '@/common/interfaces/item';
export interface GridItem extends Item {
  title: string;
  color: string;
  src?: string;
  cta?: string;
}
