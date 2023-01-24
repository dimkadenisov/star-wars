export function getCharacterIdFromURL(url: string) {
  return url.split('/').at(-2)
}
