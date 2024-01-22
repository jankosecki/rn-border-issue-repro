import React, { useCallback, useLayoutEffect } from "react";
import { FlatList, StyleSheet, TouchableHighlight, View } from "react-native";
import { ActionIcon } from "../components/ActionIcon";
import { ListElement } from "../components/ListElement";
import { Separator } from "../components/Separator";
import { StackHeader } from "../components/StackHeader";
import { DefaultProps } from "../default-props";
import { PresenceStatus } from "../models/models";
import { Tab1StackScreenProps } from "../navigation/tab1StackNavigator";
import { EmptyView, MediaObject, Preview } from "../styles";
import { AppStackScreens, Tab1StackScreens } from "./screens";
import { Button } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

interface Record {
  id: string
  status: PresenceStatus
}

const data: Record[] = [
  {
    id: "1",
    status: PresenceStatus.Online
  },
  {
    id: "2",
    status: PresenceStatus.Offline
  },
  {
    id: "3",
    status: PresenceStatus.Offline
  },
  {
    id: "4",
    status: PresenceStatus.Offline
  },
  {
    id: "5",
    status: PresenceStatus.Offline
  },
  {
    id: "6",
    status: PresenceStatus.Offline
  },
  {
    id: "7",
    status: PresenceStatus.Offline
  },
  {
    id: "8",
    status: PresenceStatus.Offline
  },
  {
    id: "9",
    status: PresenceStatus.Online
  }
]

type Props = Tab1StackScreenProps<Tab1StackScreens.List>;

export const ListScreen = ({ navigation }: Props) => {
  const showAddScreen = useCallback(() => {
    navigation.push(Tab1StackScreens.Add);
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: props => (
        <StackHeader
          {...props}
          title="List"
          back={undefined}
          actions={[<ActionIcon key="add" icon="plus" onPress={showAddScreen} />]}
        />
      ),
    });
  }, [navigation, showAddScreen]);

  return (
    <View>
      <FlatList
        {...DefaultProps.FLAT_LIST}
        data={data}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={styles.user}
            onPress={() => {}}
            underlayColor={"#F4F6F8"}
          >
            <>
              <ListElement id={item.id} status={item.status} key={item.id}/>
            </>
          </TouchableHighlight>
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={
          <View style={styles.emptyView}/>
        }
      />
      <Button onPress={() => {
        navigation.dispatch(() => {
          return CommonActions.reset({
            routes: [{ name: AppStackScreens.Tab1Stack }],
          });
        });
      }}>Reload</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    ...MediaObject.Container,
    padding: Preview.spacing,
    gap: Preview.spacing,
  },
  ...EmptyView,
});
