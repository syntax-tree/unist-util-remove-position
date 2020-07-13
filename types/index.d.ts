// TypeScript Version: 3.5

import {Node, Data} from 'unist'

declare namespace unistUtilRemovePosition {
  interface NodeWithUndefinedPosition extends Node {
    position: undefined
  }

  interface NodeWithoutPosition {
    [key: string]: unknown
    type: string
    data?: Data
  }
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
