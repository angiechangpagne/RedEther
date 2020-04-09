import gql from 'graphql-tag';

export const  QUERY_RED_PROFILE = gql`
  query RedProfile {
    reactions{
      first:2
      }
    }
`;