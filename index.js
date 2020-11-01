'use strict'

var visit = require('unist-util-visit')

module.exports = removePosition

function removePosition(node, force) {
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
