/**
 * Function that receive a text and return it
 * with first letter changed to uppercase.
 * @param text => Text to update
 */
 export function capitalize(text: string): string {
  return text.toLowerCase().charAt(0).toUpperCase() + text.toLowerCase().slice(1);
}

export default capitalize;
