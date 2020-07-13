import {Node} from 'unist'

import remark = require('remark')

import removePosition = require('unist-util-remove-position')

const tree: Node = remark().parse(
  'Some _emphasis_, **importance**, and `code`.'
)

// $ExpectType NodeWithUndefinedPosition
removePosition(tree)

// $ExpectType NodeWithUndefinedPosition
removePosition(tree, false)

// $ExpectType NodeWithoutPosition
removePosition(tree, true)
