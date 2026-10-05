/** Resolve public assets at both the local root and a GitHub Pages project path. */
export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
