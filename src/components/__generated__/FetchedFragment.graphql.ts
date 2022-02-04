/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FetchedFragment = {
    readonly email: string;
    readonly databaseId: number | null;
    readonly " $refType": "FetchedFragment";
};
export type FetchedFragment$data = FetchedFragment;
export type FetchedFragment$key = {
    readonly " $data"?: FetchedFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FetchedFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FetchedFragment",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '756fe53938c6aa3bd2e1b87327a07b15';
export default node;
