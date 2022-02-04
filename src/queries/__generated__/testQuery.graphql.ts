/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type testQueryVariables = {};
export type testQueryResponse = {
    readonly relay: {
        readonly user: {
            readonly " $fragmentRefs": FragmentRefs<"FetchedFragment">;
        } | null;
    };
};
export type testQuery = {
    readonly response: testQueryResponse;
    readonly variables: testQueryVariables;
};



/*
query testQuery {
  relay {
    user(login: "ysysys1") {
      ...FetchedFragment
      id
    }
  }
}

fragment FetchedFragment on User {
  email
  databaseId
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "ysysys1"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "testQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "relay",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FetchedFragment"
              }
            ],
            "storageKey": "user(login:\"ysysys1\")"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "testQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "relay",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "databaseId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": "user(login:\"ysysys1\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "84bd584f070be90de5176a17a8c2df07",
    "id": null,
    "metadata": {},
    "name": "testQuery",
    "operationKind": "query",
    "text": "query testQuery {\n  relay {\n    user(login: \"ysysys1\") {\n      ...FetchedFragment\n      id\n    }\n  }\n}\n\nfragment FetchedFragment on User {\n  email\n  databaseId\n}\n"
  }
};
})();
(node as any).hash = 'f953e9e31d6708aa037944a82c029c14';
export default node;
