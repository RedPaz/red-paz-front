export function buildImageSrc(url: string): string {
  return new URL(url, import.meta.url).href;
}

export default buildImageSrc;
