import { PersonDetail } from '../interfaces/personDetail';

export const PROFILE_MEMBERS_INFO: PersonDetail[] = TEAM_MEMBERS
  .map((person) => ({
    ...person,
    cvLac: '#',
    linkedIn: '#',
  }),
);
