import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo, useCallback } from 'react';
import { gql } from 'graphql-request';

import { gqlClient } from '../../../../utils/qraphClient';
import { TCharactersList } from '../../../../types';
import { flatterPages } from '../characters.utils';

const KEY = 'listOfCharacters';

export const getListOfCharactersQueryKey = () => {
  return [KEY];
};

const CharacterInfiniteList_Query = gql/* GraphQL */ `
  query CharacterInfiniteList_Query($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        next
        count
        pages
        prev
      }
      results {
        id
        image
        name
        created
      }
    }
  }
`;

export const useFetchInfiniteListOfCharactersQuery = () => {
  const queryData = useInfiniteQuery<TCharactersList>({
    queryKey: getListOfCharactersQueryKey(),
    queryFn: async ({ pageParam }: any) =>
      await gqlClient.request(CharacterInfiniteList_Query, {
        page: pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => lastPage.characters?.info?.next,
  });

  const onLoadMore = useCallback(async () => {
    await queryData.fetchNextPage();
  }, [queryData]);

  const data = useMemo(() => flatterPages(queryData.data?.pages || []), [queryData.data?.pages]);

  console.log('queryData', data);

  return useMemo(() => ({ ...queryData, data, onLoadMore }), [data, queryData, onLoadMore]);
};
