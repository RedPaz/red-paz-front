import { Item } from '../interfaces';

export function buildBaseItems(descriptions: string[]): Item[] {
  return descriptions.map((description) => ({
    image: '/images/about-us/red-paz.svg',
    description: description,
  }));
}

export default buildBaseItems;
