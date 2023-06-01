import { StackNavigationProp } from '@react-navigation/stack';

export enum RootNavigationList {
  HOME = 'HOME',
  CARD = 'CARD',
}

export type RootNavigationParams = {
  [RootNavigationList.HOME]: undefined;
  [RootNavigationList.CARD]: undefined;
};

export type NavigationStackParams = StackNavigationProp<
  RootNavigationParams,
  RootNavigationList.HOME
>;
