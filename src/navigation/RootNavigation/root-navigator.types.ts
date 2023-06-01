import { StackNavigationProp } from '@react-navigation/stack';

export enum RootNavigationList {
  HOME = 'HOME',
}

export type RootNavigationParams = {
  [RootNavigationList.HOME]: undefined;
};

export type NavigationStackParams = StackNavigationProp<
  RootNavigationParams,
  RootNavigationList.HOME
>;
