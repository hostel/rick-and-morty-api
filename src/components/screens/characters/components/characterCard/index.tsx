import React, { useCallback } from 'react';
import { Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { TCharacterProps } from './characterCard.types';
import { formatDate } from '../../../../../utils/dateFormatter';
import { CHARACTER } from '../../../../../constants/routes';

export const CharacterCard = ({ data: { item } }: TCharacterProps) => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate(CHARACTER, { id: item.id });
  }, [navigation, item]);

  return (
    <Card onPress={onPress} style={styles.removeBorderRadius}>
      {item.image && <Card.Cover style={styles.removeBorderRadius} source={{ uri: item.image }} />}
      <Card.Title title={item.name} />
      {item.created && (
        <Card.Content>
          <Text variant="bodyMedium">{formatDate(item.created)}</Text>
        </Card.Content>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  removeBorderRadius: {
    borderRadius: 0,
  },
});
