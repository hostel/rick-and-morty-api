import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Episode } from '../../../gql/graphql';
import { TStatus } from '../../../types';

export const CHIP_COLOR: Record<TStatus, string> = {
  Alive: '#00ff00',
  Dead: '#ff0000',
  unknown: '#000000',
};

export const getDecription = (item: Episode) => (
  <View style={styles.description}>
    <Text>{item?.episode}</Text>
    <Text>{item?.air_date}</Text>
  </View>
);

const styles = StyleSheet.create({
  description: {
    flex: 1,
    gap: 5,
    flexDirection: 'row',
  },
});
