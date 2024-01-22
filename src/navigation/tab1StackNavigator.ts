import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Tab1StackScreens } from "../screens/screens";

export type Tab1ParamList = {
  [Tab1StackScreens.List]: undefined;
  [Tab1StackScreens.Add]: undefined;
};

export type Tab1StackScreenProps<T extends keyof Tab1ParamList> = NativeStackScreenProps<Tab1ParamList, T>;

export const Tab1Stack = createNativeStackNavigator<Tab1ParamList>();
