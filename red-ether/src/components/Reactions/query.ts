import gql from 'graphql-tag';
//query by reactant chemical symbol eg "CO" Carbon Monoxide at room temperature
export const QUERY_REACTIONS = gql`
query {
  reactions(chemicalComposition:"Pt") {
    edges {
      node {
        id
        Equation
        chemicalComposition
        activationEnergy
        }
      }
    }
  }
`;