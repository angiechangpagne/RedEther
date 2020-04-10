import gql from 'graphql-tag';
//REST ENDPOINT EQUIVALENT GET ALL
export const QUERY_RED_LIST = gql`
query {
  reactions(first:17) {
    edges {
      node {
        id
        Equation
        chemicalComposition
        reactionEnergy
      }
    }
  }
}
`;