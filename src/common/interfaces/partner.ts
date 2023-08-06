import { PartnerCategory } from './partnerCategory';

export interface Partner {
  name: string;
  image: string;
  src: string;
  isLarge: boolean;
  cardImage: string;
  category: PartnerCategory;
}
