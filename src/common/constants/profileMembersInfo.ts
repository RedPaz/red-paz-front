import { PersonDetail } from '../interfaces/personDetail';

export const PROFILE_MEMBERS_INFO: PersonDetail[] = TEAM_MEMBERS.map((person, index) => ({
  ...person,
  cvLac: '#',
  linkedIn: '#',
  description: `Profesora Asociada de la Universidad Nacional de Colombia, adscrita al Instituto de Investigación en Educación de la Facultad de Ciencias Humanas de la sede Bogotá.

  Es licenciada en Educación con Especialización Lenguas Modernas de la Pontificia Universidad Javeriana, con estudios de posgrado en filosofía y magister en Lingüística de la Universidad Nacional de Colombia, así como doctora en Filosofía de la Educación de la Charles Sturt University, Australia. Líder del Grupo de Investigación Interinstitucional Estudios del Discurso (Categoría A1 COLCIENCIAS 2018), coordinadora del Capítulo Colombia de la Red de Investigación Internacional Pedagogy, Education and Praxis (PEP) y gestora del Centro de Pensamiento en Educación de la Universidad Nacional de Colombia.`,
}));
