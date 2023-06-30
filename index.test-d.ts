import {expectType} from 'tsd'
import type {Root} from 'mdast'
import {removePosition} from './index.js'

const tree: Root = {type: 'root', children: []}

expectType<Root>(removePosition(tree))
expectType<Root>(removePosition(tree, {force: false}))
expectType<Root>(removePosition(tree, {force: true}))
