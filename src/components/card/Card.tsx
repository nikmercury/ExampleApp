import { useCallback } from 'react';
import { Pressable, Text } from 'react-native';

import type { GetCardsItem } from '../../services';

interface CardProps extends GetCardsItem {
  onCardPress(item: GetCardsItem): void;
}

export const Card = (props: CardProps) => {
  const { name, onCardPress } = props;

  const onPress = useCallback(() => {
    onCardPress(props);
  }, [onCardPress, props]);

  return (
    <Pressable onPress={onPress}>
      <Text>{name}</Text>
    </Pressable>
  );
};
