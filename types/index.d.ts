// TypeScript Version: 3.5

import {Node} from 'unist'
import {Except} from 'type-fest'

declare namespace unistUtilRemovePosition {
  interface NodeWithUndefinedPosition extends Node {
    position: undefined
  }

  type NodeWithoutPosition = Except<Node, 'position'>
}

/* Utility to remove positions from a tree */
declare function unistUtilRemovePosition(
  tree: Node,
  force?: false
): unistUtilRemovePosition.NodeWithUndefinedPosition
declare function unistUtilRemovePosition(
  tree: Node,
  force: true
): unistUtilRemovePosition.NodeWithoutPosition

export = unistUtilRemovePosition
