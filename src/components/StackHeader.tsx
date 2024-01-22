import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { Appbar } from "react-native-paper";
import { Separator } from "./Separator";
import { FlexColumn, FlexRow, Screen } from "../styles";


type NativeProps = Pick<NativeStackHeaderProps, "navigation" | "back">;

export type CustomStackHeaderProps = {
  title: string;
  onPress?: () => void;
  actions?: React.ReactNode[];
};

type Props = NativeProps & CustomStackHeaderProps;

export const StackHeader = ({
  navigation,
  back,
  title,
  onPress = () => null,
  actions,
}: Props) => {

  let headerPadding: ViewStyle = {
    paddingHorizontal: Screen.margin,
  };

  if (back) {
    headerPadding = {
      paddingRight: Screen.margin,
    };
  }



  return (
    <View style={styles.headerContainer}>
      <Appbar.Header style={[styles.header, headerPadding]} mode="small">
        {back && (
          <Appbar.BackAction onPress={navigation.goBack} />
        )}
        <Pressable onPress={onPress} style={styles.pressable}>
          <View style={styles.titleSet}>
            <Appbar.Content title={title} style={styles.appBarContent} titleStyle={styles.title} />
          </View>
        </Pressable>
        <View style={styles.actions}>{actions}</View>
      </Appbar.Header>
      <View testID="StackHeader:BottomBorder">
        <Separator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    ...FlexColumn,
    alignItems: "stretch",
  },
  header: {
    ...FlexRow,
    justifyContent: "space-between",
  },
  pressable: {
    ...FlexRow,
    flex: 1,
    gap: 8,
  },
  titleSet: {
    ...FlexColumn,
    flex: 1,
    marginRight: 8,
    alignItems: "stretch",
    justifyContent: "center",
  },
  appBarContent: {
    flex: 0,
  },
  title: {
    marginLeft: 0,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  }
});
