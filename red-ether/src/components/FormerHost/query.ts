import gql from 'graphql-tag';

export const QUERY_FORMER_HOST = gql`
query FormerHost {
  publications {
  totalCount
  edges {
    node {
      id
      authors
    }
  }
}
}
`;