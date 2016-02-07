// Dependencies:
var remark = require('remark');
var removePosition = require('./index.js');

// Tree:
var tree = remark.parse('Some **strong**, _emphasis_, and `code`.');

// Yields:
console.log('json', JSON.stringify(tree, 0, 2));

// Removing position from tree:
tree = removePosition(tree);

// Yields:
console.log('json', JSON.stringify(tree, 0, 2));
