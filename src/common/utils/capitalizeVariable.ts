import capitalize from '@/common/utils/capitalize';

export function capitalizeVariable(name: string): string {
  return name.split(/(?=[A-Z])/).map((n) => capitalize(n)).join(' ');
}

export default capitalizeVariable;
