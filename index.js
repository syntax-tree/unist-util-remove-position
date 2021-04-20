import {visit} from 'unist-util-visit'

export function removePosition(node, force) {
  visit(node, remove)

  return node

  function remove(node) {
    if (force) {
      delete node.position
    } else {
      node.position = undefined
    }
  }
}
