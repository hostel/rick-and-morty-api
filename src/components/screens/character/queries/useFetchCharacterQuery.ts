import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { gqlClient } from '../../../../utils/qraphClient';
import { TCharacter } from '../../../../types';

const KEY = 'character';

export const getFetchCharacterQueryKey = (id: string) => {
  return [KEY, id];
};

const Character_Query = gql/* GraphQL */ `
  query Character_Query($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      image
      created
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const useFetchCharacterQuery = (id: string) => {
  return useQuery<TCharacter>({
    queryKey: getFetchCharacterQueryKey(id),
    queryFn: async () => await gqlClient.request(Character_Query, { id }),
    enabled: true,
  });
};
