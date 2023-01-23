import assert from 'node:assert/strict'
import test from 'node:test'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {u} from 'unist-builder'
import {removePosition} from './index.js'
import * as mod from './index.js'

test('removePosition', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['removePosition'],
    'should expose the public api'
  )

  const empty = {position: undefined}

  assert.deepEqual(
    removePosition(fromMarkdown('Some **strong**, _emphasis_, and `code`.')),
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
    ]),
    'should work softly'
  )

  assert.deepEqual(
    removePosition(
      fromMarkdown('Some **strong**, _emphasis_, and `code`.'),
      true
    ),
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
    ]),
    'should work by force'
  )

  assert.deepEqual(
    removePosition(fromMarkdown('x'), {force: true}),
    u('root', [u('paragraph', [u('text', 'x')])]),
    'should support options'
  )
})
