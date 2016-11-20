# unist-util-remove-position [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Remove [`position`][position]s from a [Unist][] tree.

## Installation

[npm][]:

```bash
npm install unist-util-remove-position
```

## Usage

```javascript
var inspect = require('util').inspect;
var remark = require('remark');
var removePosition = require('./');

var tree = remark().parse('Some **importance**, _emphasis_, and `code`.');

console.log(inspect(removePosition(tree, true), {depth: null}));
```

Yields:

```js
{ type: 'root',
  children:
   [ { type: 'paragraph',
       children:
        [ { type: 'text', value: 'Some ' },
          { type: 'strong',
            children: [ { type: 'text', value: 'importance' } ] },
          { type: 'text', value: ', ' },
          { type: 'emphasis',
            children: [ { type: 'text', value: 'emphasis' } ] },
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

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/unist-util-remove-position.svg

[travis]: https://travis-ci.org/wooorm/unist-util-remove-position

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/unist-util-remove-position.svg

[codecov]: https://codecov.io/github/wooorm/unist-util-remove-position

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[unist]: https://github.com/wooorm/unist

[position]: https://github.com/wooorm/unist#position

[node]: https://github.com/wooorm/unist#node
