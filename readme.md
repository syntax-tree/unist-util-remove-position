# unist-util-remove-position

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Remove [`position`][position]s from a [Unist][] tree.

## Installation

[npm][]:

```bash
npm install unist-util-remove-position
```

## Usage

```javascript
var remark = require('remark')
var removePosition = require('unist-util-remove-position')

var tree = remark().parse('Some _emphasis_, **importance**, and `code`.')

console.dir(removePosition(tree, true), {depth: null})
```

Yields:

```js
{ type: 'root',
  children:
   [ { type: 'paragraph',
       children:
        [ { type: 'text', value: 'Some ' },
          { type: 'emphasis',
            children: [ { type: 'text', value: 'emphasis' } ] },
          { type: 'text', value: ', ' },
          { type: 'strong',
            children: [ { type: 'text', value: 'importance' } ] },
          { type: 'text', value: ', and ' },
          { type: 'inlineCode', value: 'code' },
          { type: 'text', value: '.' } ] } ] }
```

## API

### `removePosition(node[, force])`

Remove [`position`][position]s from [`node`][node].  If `force` is given,
uses `delete`, otherwise, sets `position`s to `undefined`.

###### Returns

The given `node`.

## Contribute

See [`contributing.md` in `syntax-tree/unist`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-util-remove-position.svg

[build]: https://travis-ci.org/syntax-tree/unist-util-remove-position

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-remove-position.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-remove-position

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-remove-position.svg

[downloads]: https://www.npmjs.com/package/unist-util-remove-position

[size-badge]: https://img.shields.io/bundlephobia/minzip/unist-util-remove-position.svg

[size]: https://bundlephobia.com/result?p=unist-util-remove-position

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[unist]: https://github.com/syntax-tree/unist

[position]: https://github.com/syntax-tree/unist#position

[node]: https://github.com/syntax-tree/unist#node

[contributing]: https://github.com/syntax-tree/unist/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/unist/blob/master/code-of-conduct.md
