import React, { useState, useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';

import { getListOfCharactersQueryKey, useFetchInfiniteListOfCharactersQuery } from '../../queries';
import { TCharacterListItem } from '../../../../../types';
import { CharacterCard } from '../characterCard';
import { queryClient } from '../../../../../utils/queryClient';
import { Loader } from '../../../../common/loader';

export const List = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, isFetching, onLoadMore } = useFetchInfiniteListOfCharactersQuery();

  const renderFooter = useCallback(() => (isFetching ? <Loader /> : null), [isFetching]);

  const onRefresh = useCallback(() => {
    queryClient.removeQueries({ queryKey: getListOfCharactersQueryKey() });
    setRefreshing(true);
  }, []);

  useEffect(() => {
    if (refreshing && !isFetching) {
      setRefreshing(false);
    }
  }, [refreshing, isFetching]);

  return (
    <FlatList
      data={data.results}
      renderItem={(item) => <CharacterCard data={item} />}
      keyExtractor={(item: TCharacterListItem) => `${item.id}_${item.name}}`}
      onEndReached={onLoadMore}
      ListFooterComponent={renderFooter}
      refreshing={refreshing}
      onRefresh={() => onRefresh()}
    />
  );
};
