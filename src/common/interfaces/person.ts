import { ActionLink } from '@/common/interfaces/actionLink';

export interface Person {
  name: string;
  image: string;
  faculty: string;
  location: string;
  email: string;
  link?: ActionLink;
  highLight?: boolean;
}
