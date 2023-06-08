import { useCallback, useEffect, useMemo } from 'react';
import { Alert, FlatList, SafeAreaView } from 'react-native';

import { Card } from '../../components';
import { CardType, GetCardsItem, useCards } from '../../services';
import { addCard } from '../../utils';

const CARDS_REFETCH_TIMEOUT = 10000;

const keyExtractor = (item: GetCardsItem, index: number) => `${item.card_id}_${index}`;

export const HomeScreen = () => {
  const { data: cards, refetch: refetchCards } = useCards();

  const filteredTasks = useMemo(() => cards.filter(card => card.type === CardType.TASKS), [cards]);

  const onCardPress = useCallback((item: GetCardsItem) => {
    Alert.alert(item.name, item.description || 'Empty description');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { card_id, photo_required, schedule, ...rest } = item;

    addCard(rest);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: GetCardsItem }) => <Card onCardPress={onCardPress} {...item} />,
    [onCardPress],
  );

  useEffect(() => {
    const timerId = setTimeout(refetchCards, CARDS_REFETCH_TIMEOUT);
    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <FlatList data={filteredTasks} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};
