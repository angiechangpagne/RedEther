import gql from 'graphql-tag';

export const QUERY_REACTION = gql`
query Reaction {
  reactions {
    first: 10
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