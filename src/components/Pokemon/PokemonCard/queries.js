import gql from 'graphql-tag';

const GET_POKEMON_QUERY = gql`
  query($id: ID!) {
    pokemon: Pokemon(id: $id) {
      id
      name
      type
      classification
    }
  }
`;

export { GET_POKEMON_QUERY };
