import gql from 'graphql-tag';

export const QUERY_RED_LIST = gql`
query RedList {
  reactions{
    first: 2
    }
   {
    edges {
      node {
        Equation
        chemicalComposition
        reactionEnergy
      }
    }
  }
}
`;