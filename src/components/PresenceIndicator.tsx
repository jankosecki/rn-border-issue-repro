import React, { ColorValue, StyleSheet, View, ViewStyle } from "react-native";
import { PresenceStatus } from "../models/models";

type Props = {
  presence: PresenceStatus;
  borderColor?: ColorValue;
};

export const PresenceIndicator = ({ presence, borderColor = "transparent" }: Props) => {
  const online = <View style={[styles.indicator, styles.online]} />;
  const offline = <View style={[styles.indicator, styles.offline]} />;

  const socketColor: ViewStyle = {
    borderColor,
    backgroundColor: "red",
  };


  return (
    <View style={[styles.socket, socketColor]}>
      {presence === PresenceStatus.Online ? online : offline}
    </View>
  );
};

const size = 12;
const halfsize = size / 2;

const styles = StyleSheet.create({
  socket: {
    borderWidth: 2,
    borderRadius: 99,
  },
  indicator: {
    width: size,
    height: size,
    borderRadius: halfsize,
    borderWidth: 0,
  },
  online: {
    backgroundColor: "#26B55C",
  },
  offline: {
    borderColor: "#545D69",
    borderWidth: 3,
  },
});
