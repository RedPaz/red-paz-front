import { FeaturedItem } from './featuredItem';
import { PartnerCategory } from './partnerCategory';

export interface Partner {
  name: string;
  alias: string;
  image: string;
  src: string;
  isLarge: boolean;
  cardImage: string;
  category: PartnerCategory;
  detailImage: string;
  description: string;
  email: string;
  phone: string;
  webSrc: string;
  youtubeSrc: string;
  results: FeaturedItem[];
}
