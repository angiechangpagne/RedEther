import gql from 'graphql-tag';
//mapping actions to dispatch reducer
export const QUERY_FORMER_HOSTS = gql`
query {
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