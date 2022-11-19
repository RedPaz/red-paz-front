import { ActionLink } from '@/common/interfaces/actionLink';

export interface BreadCrumbItem extends ActionLink {
  isCurrentRoute: boolean;
}
