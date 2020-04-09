import gql from 'graphql-tag';

export const QUERY_ATOM = gql`
query Atom{
  reactions(first:6, reactants: "CO", chemicalComposition: "Pt")
  }
`;