import React from "react";
import { StyleSheet, View } from "react-native";
import { Screen } from "../styles/screen";

export const Separator = () => {
  return (
    <View style={styles.sideMargin}>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEEF2",
    width: "100%",
  },
  sideMargin: {
    paddingHorizontal: Screen.margin,
  },
});
