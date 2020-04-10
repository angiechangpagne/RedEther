import gql from 'graphql-tag';

export const  QUERY_RED_PROFILE = gql`
  query {
    systems(first:17) {
      edges {
        node {
          username
          freeEnergy
          dipole
          charge
          data
        }
      }
    }
  }
`;