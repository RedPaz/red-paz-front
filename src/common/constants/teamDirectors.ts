import { Person } from '@/common/interfaces';

export const TEAM_DIRECTORS: Person[] = TEAM_MEMBERS
  .filter((person) => person.isDirector)
  .map((person, index) => ({
    ...person,
    id: index + 1 ,
  }),
);

export default TEAM_DIRECTORS;
