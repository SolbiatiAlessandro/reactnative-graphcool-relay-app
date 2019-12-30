/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Post_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListPage_posts$ref: FragmentReference;
declare export opaque type ListPage_posts$fragmentType: ListPage_posts$ref;
export type ListPage_posts = {|
  +allPosts: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +$fragmentRefs: Post_post$ref,
      |}
    |}>
  |},
  +$refType: ListPage_posts$ref,
|};
export type ListPage_posts$data = ListPage_posts;
export type ListPage_posts$key = {
  +$data?: ListPage_posts$data,
  +$fragmentRefs: ListPage_posts$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ListPage_posts",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "allPosts",
      "storageKey": "allPosts(last:100,orderBy:\"description_DESC\")",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 100
        },
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "description_DESC"
        }
      ],
      "concreteType": "PostConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "PostEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Post",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Post_post",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e0faa5fb2ce40f3de4800c94c7c516c8';
module.exports = node;
