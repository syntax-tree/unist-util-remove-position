import {expectType} from 'tsd'
import {Node} from 'unist'
import remark from 'remark'
import {
  removePosition,
  NodeWithUndefinedPosition,
  NodeWithoutPosition
} from './index.js'

const tree: Node = remark().parse(
  'Some _emphasis_, **importance**, and `code`.'
)

expectType<NodeWithUndefinedPosition>(removePosition(tree))
expectType<NodeWithUndefinedPosition>(removePosition(tree, false))
expectType<NodeWithoutPosition>(removePosition(tree, true))

// Used as a plugin
void remark()
  .use(() => (tree: Node) => removePosition(tree))
  .process('Some _emphasis_, **importance**, and `code`.')
