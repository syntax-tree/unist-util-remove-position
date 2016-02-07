/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module unist:util:remove-position
 * @fileoverview Test suite for `unist-util-remove-position`.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var test = require('tape');
var remark = require('remark');
var removePosition = require('./index.js');

/*
 * Tests.
 */

test('removePosition()', function (t) {
    t.same(
        removePosition(remark.parse(
            'Some **strong**, _emphasis_, and `code`.'
        )),
        {
            'type': 'root',
            'children': [{
                'type': 'paragraph',
                'children': [
                    {
                        'type': 'text',
                        'value': 'Some ',
                        'position': undefined
                    },
                    {
                        'type': 'strong',
                        'children': [
                            {
                                'type': 'text',
                                'value': 'strong',
                                'position': undefined
                            }
                        ],
                        'position': undefined
                    },
                    {
                        'type': 'text',
                        'value': ', ',
                        'position': undefined
                    },
                    {
                        'type': 'emphasis',
                        'children': [
                            {
                                'type': 'text',
                                'value': 'emphasis',
                                'position': undefined
                            }
                        ],
                        'position': undefined
                    },
                    {
                        'type': 'text',
                        'value': ', and ',
                        'position': undefined
                    },
                    {
                        'type': 'inlineCode',
                        'value': 'code',
                        'position': undefined
                    },
                    {
                        'type': 'text',
                        'value': '.',
                        'position': undefined
                    }
                ],
                'position': undefined
            }],
            'position': undefined
        },
        'should work'
    );

    t.end();
});
