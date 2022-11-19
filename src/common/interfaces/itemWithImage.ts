import { Item } from '@/common/interfaces/item';

export interface ItemWithImage extends Item {
  title: string;
  color: string;
  src?: string;
  cta?: string;
}
