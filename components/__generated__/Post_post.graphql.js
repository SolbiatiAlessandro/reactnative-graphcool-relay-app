/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Post_post$ref: FragmentReference;
declare export opaque type Post_post$fragmentType: Post_post$ref;
export type Post_post = {|
  +description: string,
  +imageUrl: string,
  +$refType: Post_post$ref,
|};
export type Post_post$data = Post_post;
export type Post_post$key = {
  +$data?: Post_post$data,
  +$fragmentRefs: Post_post$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Post_post",
  "type": "Post",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "imageUrl",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1daa58fea0b693646d421ceccca1cc2a';
module.exports = node;
