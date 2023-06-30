import { Person } from '@/common/interfaces';

export const TEAM_DIRECTORS: Person[] = [
  {
    name: 'Doris Adriana Santos Caicedo',
    image: '/images/about-us/team/doris-santos.png',
    faculty: 'Coordinadora 2022 - 2023',
    location: 'Sede Bogotá',
    email: 'correounal@unal.edu.co',
  },
  {
    name: 'Camilo Borrero',
    image: '/images/about-us/team/man-default.jpg',
    faculty: 'Coordinadora 2021 - 2022',
    location: 'Sede Bogotá',
    email: 'correounal@unal.edu.co',
  },
  {
    name: 'Adriana Patricia Muñoz Ramírez',
    image: '/images/about-us/team/adriana-munoz.png',
    faculty: 'Coordinadora 2020 - 2021',
    location: 'Sede Bogotá',
    email: 'apmunozr@unal.edu.co',
  },
]
.map((person, index) => ({
  ...person,
  id: index + 1 ,
  slug: person.name.split(' ').map((w) => w.toLowerCase()).join('-'),
}));

export default TEAM_DIRECTORS;
