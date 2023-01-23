/**
 * @typedef {import('unist').Node} Node
 */

import {visit} from 'unist-util-visit'

/**
 * Remove the `position` field from a tree.
 *
 * @template {Node} Tree
 * @param {Tree} node
 *   The unist tree.
 * @param {boolean} [force=false]
 *   If `force` is given (`boolean`, default: `false`), uses `delete` to remove
 *   the field entirely, otherwise it’s set to `undefined`.
 * @returns {Tree}
 *   The given, modified, `node`.
 */
export function removePosition(node, force) {
  visit(node, remove)

  return node

  /**
   * @param {Node} node
   */
  function remove(node) {
    if (force) {
      delete node.position
    } else {
      node.position = undefined
    }
  }
}
