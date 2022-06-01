import {expectType} from 'tsd'
import {Node} from 'unist'
import {Root} from 'mdast'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {removePosition} from './index.js'

const tree: Root = {type: 'root', children: []}

expectType<Root>(removePosition(tree))
expectType<Root>(removePosition(tree, false))
expectType<Root>(removePosition(tree, true))
expectType<Root>(removePosition(tree, true))
