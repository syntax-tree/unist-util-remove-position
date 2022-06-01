import {expectType} from 'tsd'
import {Node} from 'unist'
import {Root} from 'mdast'
import {remark} from 'remark'
import {removePosition} from './index.js'

const tree: Root = {type: 'root', children: []}

expectType<Root>(removePosition(tree))
expectType<Root>(removePosition(tree, false))
expectType<Root>(removePosition(tree, true))
expectType<Root>(removePosition(tree, true))

// Used as a plugin
void remark()
  .use(() => (tree: Node) => removePosition(tree))
  .process('Some _emphasis_, **importance**, and `code`.')
