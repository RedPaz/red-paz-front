import { ActionLink } from '@/common/interfaces/actionLink';

export interface DescriptionItem {
  id?: string;
  title?: string;
  description: string;
  logos?: string[];
  links?: ActionLink[];
  isBannerItem?: boolean;
  linkTextColor?: string;
  image?: string;
}
