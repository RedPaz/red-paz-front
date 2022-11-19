import { ActionLink } from '@/common/interfaces/actionLink';

export interface Person {
  name: string;
  image: string;
  position: string;
  email: string;
  phone: string;
  link?: ActionLink;
}
