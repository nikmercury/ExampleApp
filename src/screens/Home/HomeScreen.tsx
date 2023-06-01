import { useEffect, useMemo } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { Card } from '../../components';
import { CardType, GetCardsItem, useCards } from '../../services/hooks';

const CARDS_REFETCH_TIMEOUT = 10000;

export const HomeScreen = () => {
  const { data: cards, refetch: refetchCards } = useCards();

  const filteredTasks = useMemo(() => cards.filter(card => card.type === CardType.TASKS), [cards]);

  const renderItem = ({ item }: { item: GetCardsItem }) => <Card {...item} />;
  const keyExtractor = (item: GetCardsItem, index: number) => `${item.card_id}_${index}`;

  useEffect(() => {
    const timerId = setTimeout(() => refetchCards(), CARDS_REFETCH_TIMEOUT);
    return () => clearInterval(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <FlatList data={filteredTasks} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};
