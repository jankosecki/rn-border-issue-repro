import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, TouchableHighlight, View } from "react-native";
import { Separator } from "../components/Separator";
import { DefaultProps } from "../default-props";
import { EmptyView, MediaObject, Preview } from "../styles";
import { PresenceStatus } from "../models/models";
import { ListElement } from "../components/ListElement";
import { Tab1StackScreens } from "./screens";
import { Tab1StackScreenProps } from "../navigation/tab1StackNavigator";
import { StackHeader } from "../components/StackHeader";

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
]

type Props = Tab1StackScreenProps<Tab1StackScreens.Add>;

export const AddScreen = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: props => (
        <StackHeader
          {...props}
          title="Add"
          back={{title: "ABC"}}
        />
      ),
    });
  }, [navigation]);

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
