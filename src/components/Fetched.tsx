import { VFC } from "react";
import { graphql, useFragment } from "react-relay";
import { FetchedFragment$key } from "./__generated__/FetchedFragment.graphql";

type Props = {
  fragmentRef: FetchedFragment$key
}

export const fragment = graphql`
  fragment FetchedFragment on User @relay(plural: false)  {
    email
    databaseId
  }
`

export const Fetched: VFC<Props> = ({ fragmentRef }) => {
  const data = useFragment(fragment, fragmentRef);

  return(
    <div>
      {JSON.stringify(data)}
    </div>
  )
}