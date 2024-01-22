import React from "react";
import { useTheme } from "react-native-paper";
import { StackHeader } from "../components/StackHeader";
import { Tab1Stack } from "../navigation/tab1StackNavigator";
import { Tab1StackScreens } from "./screens";
import { ListScreen } from "./List";
import { AddScreen } from "./Add";


export const Tab1StackScreen = () => {
  const theme = useTheme();

  return (
    <Tab1Stack.Navigator
      initialRouteName={Tab1StackScreens.List}
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.colors.surface,
        },
        header: props => <StackHeader {...props} title="Tab 1" />,
      }}
    >
      <Tab1Stack.Group>
        <Tab1Stack.Screen name={Tab1StackScreens.List} component={ListScreen} />
        <Tab1Stack.Screen name={Tab1StackScreens.Add} component={AddScreen} />
      </Tab1Stack.Group>
    </Tab1Stack.Navigator>
  );
};
