/**
 * @typedef {import('unist').Node} Node
 * @typedef {Node & {position: undefined}} NodeWithUndefinedPosition
 * @typedef {Omit<Node, 'position'>} NodeWithoutPosition
 */

import {visit} from 'unist-util-visit'

export const removePosition =
  /**
   * @type {(
   *   ((tree: Node, force?: false) => NodeWithUndefinedPosition) &
   *   ((tree: Node, force: true) => NodeWithoutPosition)
   * )}
   */
  (
    /**
     * Utility to remove positions from a tree
     *
     * @param {Node} node the unist tree
     * @param {boolean} [force=false] if `force` is given, uses `delete`, otherwise, sets positions to `undefined`.
     * @returns {NodeWithUndefinedPosition}
     */
    function (node, force) {
      visit(node, remove)

      // @ts-ignore hush TS, we know what we’re doing.
      return node

      /**
       * @param {Node} node the unist tree
       */
      function remove(node) {
        if (force) {
          delete node.position
        } else {
          node.position = undefined
        }
      }
    }
  )
