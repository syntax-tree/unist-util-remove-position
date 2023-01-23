import {expectType} from 'tsd'
import type {Root} from 'mdast'
import {removePosition} from './index.js'

const tree: Root = {type: 'root', children: []}

expectType<Root>(removePosition(tree))
expectType<Root>(removePosition(tree, false))
expectType<Root>(removePosition(tree, true))
expectType<Root>(removePosition(tree, true))
