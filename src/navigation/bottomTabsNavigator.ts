import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppStackScreens } from "../screens/screens";

export type BottomTabsParamList = {
  [AppStackScreens.Tab1Stack]: undefined;
};

export type BottomTabsScreenProps<T extends keyof BottomTabsParamList> = BottomTabScreenProps<BottomTabsParamList, T>;

export const Tabs = createBottomTabNavigator<BottomTabsParamList>();
