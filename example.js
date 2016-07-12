// Dependencies:
var remark = require('remark');
var removePosition = require('./index.js');

// Tree:
var tree = remark().parse('Some **strong**, _emphasis_, and `code`.');

// Yields:
console.log('js', require('util').inspect(tree, {depth: null}));

// Removing position from tree:
tree = removePosition(tree, true);

// Yields:
console.log('js', require('util').inspect(tree, {depth: null}));
