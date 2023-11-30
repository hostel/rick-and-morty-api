import React from 'react';
import { View, StyleSheet } from 'react-native';

import { List } from './components/lists';

export const Characters = () => {
  return (
    <View style={styles.wrapper}>
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});
