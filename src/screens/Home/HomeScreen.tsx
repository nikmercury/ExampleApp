import { Pressable, SafeAreaView, Text } from 'react-native';

import { useCards } from '../../services/hooks';

interface HomeScreenProps {
  navigateToCard(): void;
}

export const HomeScreen = (props: HomeScreenProps) => {
  const { navigateToCard } = props;

  const { data } = useCards();

  return (
    <SafeAreaView>
      <Pressable onPress={navigateToCard}>
        <Text>{'navigateToCard'}</Text>
      </Pressable>
    </SafeAreaView>
  );
};
