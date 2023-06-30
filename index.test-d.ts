import {expectType} from 'tsd'
import type {Root} from 'mdast'
import {removePosition} from 'unist-util-remove-position'

const tree: Root = {type: 'root', children: []}

expectType<undefined>(removePosition(tree))

removePosition(tree, {force: false})

removePosition(tree, {force: true})
