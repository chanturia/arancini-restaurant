import test from 'node:test'
import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import {
  legacyDestination,
  menuCategories,
  navigation,
  pageMetadata,
  readMenuCategory,
  restaurant,
} from '../src/content.ts'

test('navigation targets have distinct page metadata and legacy bookmarks retain their intent', () => {
  assert.deepEqual(
    navigation.map(({ href }) => href),
    ['/', '/menu', '/experience', '/contact'],
  )
  assert.equal(
    new Set(navigation.map(({ href }) => pageMetadata[href].title)).size,
    4,
  )
  assert.equal(legacyDestination('?menu=pizza', '#menu'), '/menu?menu=pizza')
  assert.equal(legacyDestination('?menu=arancini', '#visit'), '/contact')
  assert.equal(legacyDestination('', '#experience'), '/experience')
  assert.equal(legacyDestination('', '#table'), null)
  assert.equal(legacyDestination('', ''), null)
})

test('menu deep links select only a known category and safely recover from invalid URLs', () => {
  assert.equal(readMenuCategory('?menu=pizza'), 'pizza')
  assert.equal(readMenuCategory('?utm_source=instagram&menu=vegan'), 'vegan')
  assert.equal(readMenuCategory('?menu=not-a-category'), 'arancini')
  assert.equal(readMenuCategory('?menu=%3Cscript%3E'), 'arancini')
  assert.equal(readMenuCategory(''), 'arancini')
})

test('every menu selection has content and any referenced photo exists in the production build', async () => {
  assert.equal(
    new Set(menuCategories.map(({ id }) => id)).size,
    menuCategories.length,
  )
  for (const category of menuCategories) {
    assert.ok(category.dishes.length, `Empty menu: ${category.id}`)
    if (category.image)
      await access(new URL(`../dist${category.image}`, import.meta.url))
  }
  assert.equal(restaurant.telephone, 'tel:+302106034847')
  assert.equal(new URL(restaurant.maps).hostname, 'www.google.com')
})

test('every published route has an HTML entry, correct metadata and assets within the deployment base', async () => {
  const base = process.env.VITE_BASE_PATH || '/'
  for (const { href } of navigation) {
    const routeFile =
      href === '/' ? 'index.html' : `${href.slice(1)}/index.html`
    const html = await readFile(
      new URL(`../dist/${routeFile}`, import.meta.url),
      'utf8',
    )
    assert.match(html, /<html lang="el">/)
    assert.match(html, /noindex, nofollow/)
    assert.equal(
      html.match(/<title>(.*?)<\/title>/)?.[1].replaceAll('&amp;', '&'),
      pageMetadata[href].title,
    )
    const assetPaths = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
      .map(([, path]) => path)
      .filter((path) => path.startsWith('/'))
    assert.ok(assetPaths.length >= 3, 'Expected compiled JS, CSS and favicon')
    for (const path of assetPaths) {
      assert.ok(path.startsWith(base), `Asset outside deployment base: ${path}`)
      await access(
        new URL(`../dist/${path.slice(base.length)}`, import.meta.url),
      )
    }
  }
  await access(new URL('../dist/404.html', import.meta.url))
  await access(new URL('../dist/.nojekyll', import.meta.url))
})
