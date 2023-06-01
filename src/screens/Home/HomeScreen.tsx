import { useEffect, useMemo } from 'react';
import { Alert, FlatList, SafeAreaView } from 'react-native';

import { Card } from '../../components';
import { CardType, GetCardsItem, useCards } from '../../services/hooks';

const CARDS_REFETCH_TIMEOUT = 10000;

export const HomeScreen = () => {
  const { data: cards, refetch: refetchCards } = useCards();

  const filteredTasks = useMemo(() => cards.filter(card => card.type === CardType.TASKS), [cards]);

  const addCard = (item: Omit<GetCardsItem, 'card_id' | 'photo_required' | 'schedule'>) => {
    console.log(item);
  };

  const onCardPress = (item: GetCardsItem) => {
    Alert.alert(item.name, item.description || 'Empty description');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { card_id, photo_required, schedule, ...rest } = item;

    addCard(rest);
  };

  const renderItem = ({ item }: { item: GetCardsItem }) => (
    <Card onCardPress={onCardPress} {...item} />
  );

  const keyExtractor = (item: GetCardsItem, index: number) => `${item.card_id}_${index}`;

  useEffect(() => {
    const timerId = setTimeout(refetchCards, CARDS_REFETCH_TIMEOUT);
    return () => clearInterval(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <FlatList data={filteredTasks} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};
