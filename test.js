import assert from 'node:assert/strict'
import test from 'node:test'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {u} from 'unist-builder'
import {removePosition} from './index.js'

test('removePosition', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'removePosition'
    ])
  })

  await t.test('should work softly', async function () {
    const empty = {position: undefined}

    const root = fromMarkdown('Some **strong**, _emphasis_, and `code`.')
    removePosition(root)

    assert.deepEqual(
      root,
      u('root', empty, [
        u('paragraph', empty, [
          u('text', empty, 'Some '),
          u('strong', empty, [u('text', empty, 'strong')]),
          u('text', empty, ', '),
          u('emphasis', empty, [u('text', empty, 'emphasis')]),
          u('text', empty, ', and '),
          u('inlineCode', empty, 'code'),
          u('text', empty, '.')
        ])
      ])
    )
  })

  await t.test('should work by force', async function () {
    const root = fromMarkdown('Some **strong**, _emphasis_, and `code`.')

    removePosition(root, {force: true})

    assert.deepEqual(
      root,
      u('root', [
        u('paragraph', [
          u('text', 'Some '),
          u('strong', [u('text', 'strong')]),
          u('text', ', '),
          u('emphasis', [u('text', 'emphasis')]),
          u('text', ', and '),
          u('inlineCode', 'code'),
          u('text', '.')
        ])
      ])
    )
  })

  await t.test('should support options', async function () {
    const root = fromMarkdown('x')
    removePosition(root, {force: true})

    assert.deepEqual(root, u('root', [u('paragraph', [u('text', 'x')])]))
  })
})
