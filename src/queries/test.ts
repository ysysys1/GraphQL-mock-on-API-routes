import { graphql } from 'react-relay'

export default graphql`
  query testQuery {
    relay {
      user(login: "USER NAME") {
        ...FetchedFragment
      }
    }
  }
`;
