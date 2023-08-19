import { DescriptionItem } from './descriptionItem';

export interface ProcessDetail extends DescriptionItem {
  area: string;
  subtitle: string;
  activities: DescriptionItem[];
  resume?: string;
}
