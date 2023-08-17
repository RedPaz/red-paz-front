export function slugify(text: string) {
  return text.split(' ')
    .map((word) => word.normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^\w\-]+/g, '')
      .replace(/\_/g,'-')
      .replace(/\-\-+/g, '-')
      .replace(/\-$/g, '')
    ).join('-');
}

export default slugify;
