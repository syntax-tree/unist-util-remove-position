import {Node} from 'unist'

import * as removePosition from 'unist-util-remove-position'

const tree: Node = {
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'Some ',
          position: {
            start: {
              line: 1,
              column: 1,
              offset: 0
            },
            end: {
              line: 1,
              column: 6,
              offset: 5
            },
            indent: []
          }
        },
        {
          type: 'emphasis',
          children: [
            {
              type: 'text',
              value: 'emphasis',
              position: {
                start: {
                  line: 1,
                  column: 7,
                  offset: 6
                },
                end: {
                  line: 1,
                  column: 15,
                  offset: 14
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 1,
              column: 6,
              offset: 5
            },
            end: {
              line: 1,
              column: 16,
              offset: 15
            },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', ',
          position: {
            start: {
              line: 1,
              column: 16,
              offset: 15
            },
            end: {
              line: 1,
              column: 18,
              offset: 17
            },
            indent: []
          }
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'importance',
              position: {
                start: {
                  line: 1,
                  column: 20,
                  offset: 19
                },
                end: {
                  line: 1,
                  column: 30,
                  offset: 29
                },
                indent: []
              }
            }
          ],
          position: {
            start: {
              line: 1,
              column: 18,
              offset: 17
            },
            end: {
              line: 1,
              column: 32,
              offset: 31
            },
            indent: []
          }
        },
        {
          type: 'text',
          value: ', and ',
          position: {
            start: {
              line: 1,
              column: 32,
              offset: 31
            },
            end: {
              line: 1,
              column: 38,
              offset: 37
            },
            indent: []
          }
        },
        {
          type: 'inlineCode',
          value: 'code',
          position: {
            start: {
              line: 1,
              column: 38,
              offset: 37
            },
            end: {
              line: 1,
              column: 44,
              offset: 43
            },
            indent: []
          }
        },
        {
          type: 'text',
          value: '.',
          position: {
            start: {
              line: 1,
              column: 44,
              offset: 43
            },
            end: {
              line: 1,
              column: 45,
              offset: 44
            },
            indent: []
          }
        }
      ],
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 1,
          column: 45,
          offset: 44
        },
        indent: []
      }
    }
  ],
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 1,
      column: 45,
      offset: 44
    }
  }
}

// $ExpectType NodeWithUndefinedPosition
removePosition(tree)

// $ExpectType NodeWithUndefinedPosition
removePosition(tree, false)

// $ExpectType NodeWithoutPosition
removePosition(tree, true)
