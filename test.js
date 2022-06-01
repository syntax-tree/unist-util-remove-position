import test from 'tape'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {u} from 'unist-builder'
import {removePosition} from './index.js'

test('removePosition()', (t) => {
  const empty = {position: undefined}

  t.same(
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

  t.same(
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

  t.end()
})
