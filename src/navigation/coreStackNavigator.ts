import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { CoreNavigationScreens } from "../screens/screens";

export type CoreStackParamList = {
  [CoreNavigationScreens.App]: undefined;
};

export type CoreStackScreenProps<T extends keyof CoreStackParamList> = NativeStackScreenProps<CoreStackParamList, T>;

export const CoreStack = createNativeStackNavigator<CoreStackParamList>();
