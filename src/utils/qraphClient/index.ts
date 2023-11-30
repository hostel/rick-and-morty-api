import { GraphQLClient } from 'graphql-request';

const API_URL = 'https://rickandmortyapi.com/graphql';

export const gqlClient = new GraphQLClient(API_URL, {
  headers: () => {
    return {
      'Content-Type': 'application/json',
    };
  },
});
