/**
 * @flow
 * @relayHash 5939931cae5c91e00987bd2cb03be239
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListPage_posts$ref = any;
export type HomeScreenQueryVariables = {||};
export type HomeScreenQueryResponse = {|
  +viewer: {|
    +id: string,
    +$fragmentRefs: ListPage_posts$ref,
  |}
|};
export type HomeScreenQuery = {|
  variables: HomeScreenQueryVariables,
  response: HomeScreenQueryResponse,
|};
*/


/*
query HomeScreenQuery {
  viewer {
    id
    ...ListPage_posts
  }
}

fragment ListPage_posts on Viewer {
  allPosts(last: 100, orderBy: description_DESC) {
    edges {
      node {
        id
        ...Post_post
      }
    }
  }
}

fragment Post_post on Post {
  description
  imageUrl
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ListPage_posts",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
                      (v0/*: any*/),
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
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeScreenQuery",
    "id": null,
    "text": "query HomeScreenQuery {\n  viewer {\n    id\n    ...ListPage_posts\n  }\n}\n\nfragment ListPage_posts on Viewer {\n  allPosts(last: 100, orderBy: description_DESC) {\n    edges {\n      node {\n        id\n        ...Post_post\n      }\n    }\n  }\n}\n\nfragment Post_post on Post {\n  description\n  imageUrl\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '82c6e00d39ef8b3b3b338ad63689bd26';
module.exports = node;
