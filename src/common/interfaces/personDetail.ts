import { Person } from './person';

export interface PersonDetail extends Person {
  description: string;
  cvLac: string;
  linkedIn: string;
}