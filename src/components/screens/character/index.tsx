import React, { useMemo } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Avatar, Chip, List, Text } from 'react-native-paper';

import { TProps } from './character.types';
import { useFetchCharacterQuery } from './queries';
import { formatDate } from '../../../utils/dateFormatter';
import { Loader } from '../../common/loader';
import { CHIP_COLOR, getDecription } from './character.utils';

export const Character = ({ route }: TProps) => {
  const { data, isFetching } = useFetchCharacterQuery(route.params.id);

  const item = useMemo(() => data?.character || null, [data]);

  const getImage = () => <Image style={styles.image} source={{ uri: item?.image as string }} />;

  if (isFetching || !item) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.wrapperAvatar}>
        {item.image && <Avatar.Image style={styles.wrapImage} size={200} source={getImage} />}
      </View>
      <View style={styles.wrapContent}>
        <View style={styles.wrapStatus}>
          <Text variant="displayMedium">{item.name}</Text>
          {item.status && <Chip rippleColor={CHIP_COLOR[item?.status]}>{item?.status}</Chip>}
        </View>
        <List.Item title="Species" description={item?.species} />
        {item?.type && <List.Item title="Type" description={item?.type} />}
        <List.Item title="Gender" description={item?.gender} />
        {item.created && <List.Item title="Created" description={formatDate(item.created)} />}
        <List.Item title="Origin" description={item?.origin?.name} />
        <List.Item title="Location" description={item?.location?.name} />

        <List.Accordion title="Episodes" right={() => null}>
          {item?.episode?.map(
            (episode) =>
              episode && (
                <List.Item
                  key={`${episode.id}_${episode.name}`}
                  title={episode.name}
                  description={getDecription(episode)}
                />
              ),
          )}
        </List.Accordion>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
  },
  wrapperAvatar: {
    alignItems: 'center',
  },
  wrapImage: {
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  wrapContent: {
    flex: 4,
  },
  wrapStatus: {
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
