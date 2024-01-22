import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Tabs } from "../navigation/bottomTabsNavigator";
import { Icon } from "../components/Icon";
import { AppStackScreens } from "./screens";
import { Tab1StackScreen } from "./Tab1Stack";

export const AppStackScreen = () => {
  const theme = useTheme();
  const getTabBarIconStyle = (focused: boolean) => {
    return { color: focused ? theme.colors.primary : theme.colors.text };
  };
  const tabOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTintColor: theme.colors.text,
  };

  return (
    <Tabs.Navigator
      id="Root"
      initialRouteName={AppStackScreens.Tab1Stack}
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
    >
      <Tabs.Screen
        name={AppStackScreens.Tab1Stack}
        component={Tab1StackScreen}
        options={() => ({
          ...tabOptions,
          title: "Tab 1",
          tabBarIcon: ({ size, focused }) => (
            <Icon name="account-multiple" style={getTabBarIconStyle(focused)} size={size} />
          ),
        })}
      />
    </Tabs.Navigator>
  );
};
