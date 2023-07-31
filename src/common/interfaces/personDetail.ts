import { Person } from './person';

export interface PersonDetail extends Person {
  cvLac: string;
  linkedIn: string;
}