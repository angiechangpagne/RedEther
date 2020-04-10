import gql from 'graphql-tag';

export const QUERY_ATOM = gql`
query {
  reactionSystems(first:17) {
    edges {
      node {
        id
        reactions {
          chemicalComposition
          id
        }
      }
    }
  }
}
`;