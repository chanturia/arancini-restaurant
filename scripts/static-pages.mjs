import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { pageMetadata } from '../src/content.ts'

const output = new URL('../dist/', import.meta.url)
const template = await readFile(new URL('index.html', output), 'utf8')
const escapeHtml = (text) =>
  text.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[character],
  )

// Pages has no SPA rewrites: each real route needs its own HTML entry for reloads.
for (const [route, metadata] of Object.entries(pageMetadata)) {
  const directory = new URL(route === '/' ? './' : `${route.slice(1)}/`, output)
  const title = escapeHtml(metadata.title)
  const description = escapeHtml(metadata.description)
  const html = template
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*"/,
      `$1${description}"`,
    )
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*"/, `$1${title}"`)
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*"/,
      `$1${description}"`,
    )
  await mkdir(directory, { recursive: true })
  await writeFile(new URL('index.html', directory), html)
}

// Unknown URLs retain a real HTTP 404 while showing the app's recovery navigation.
await writeFile(new URL('404.html', output), template)
await writeFile(new URL('.nojekyll', output), '')
