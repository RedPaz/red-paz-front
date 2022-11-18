import { ActionLink } from '@/common/interfaces/actionLink';

export interface DescriptionItem {
  title: string;
  description: string;
  logos?: string[];
  links?: ActionLink[];
}
