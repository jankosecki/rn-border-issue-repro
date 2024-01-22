import React from "react";
import { NavigationContainer, DefaultTheme, Theme as NavigationTheme, createNavigationContainerRef } from "@react-navigation/native";
import { CoreStack, CoreStackParamList } from "./coreStackNavigator";
import { useNavigationRef } from "./useNavigationRef";
import { useTheme } from "react-native-paper";
import { CoreNavigationScreens } from "../screens/screens";
import { AppStackScreen } from "../screens/AppStackScreen";


const navigationRef = createNavigationContainerRef<CoreStackParamList>();

export const CoreNavigationStack = () => {
  const { onNavigationReady } = useNavigationRef(navigationRef);
  const theme = useTheme();

  const navigationTheme: NavigationTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.colors.primary,
      background: theme.colors.surface,
      card: theme.colors.surface,
      text: theme.colors.onSurface,
    },
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={onNavigationReady} theme={navigationTheme}>
      <CoreStack.Navigator screenOptions={{ animation: "none" }} initialRouteName={CoreNavigationScreens.App}>
        <CoreStack.Screen name={CoreNavigationScreens.App} component={AppStackScreen} options={{ headerShown: false }} />
      </CoreStack.Navigator>
    </NavigationContainer>
  );
};
