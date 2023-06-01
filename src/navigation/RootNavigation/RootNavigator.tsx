import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../../screens';

import { RootNavigationList, RootNavigationParams } from './root-navigator.types';

const RootStack = createStackNavigator<RootNavigationParams>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name={RootNavigationList.HOME} component={HomeScreen} />
    </RootStack.Navigator>
  );
};
