import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CardScreen, HomeScreen } from '../../screens';

import {
  NavigationStackParams,
  RootNavigationList,
  RootNavigationParams,
} from './root-navigator.types';

const RootStack = createStackNavigator<RootNavigationParams>();

export const RootNavigator = () => {
  const navigation = useNavigation<NavigationStackParams>();

  const navigateToCard = useCallback(
    () => navigation.navigate(RootNavigationList.CARD),
    [navigation],
  );

  const HomeScreenComponent = useCallback(
    () => <HomeScreen navigateToCard={navigateToCard} />,
    [navigateToCard],
  );

  return (
    <RootStack.Navigator>
      <RootStack.Screen name={RootNavigationList.HOME} component={HomeScreenComponent} />
      <RootStack.Screen name={RootNavigationList.CARD} component={CardScreen} />
    </RootStack.Navigator>
  );
};
