import React from "react";
import { GestureResponderEvent, StyleSheet, View, ViewProps } from "react-native";
import { TouchableRipple, useTheme } from "react-native-paper";
import { FlexCenter, MediaObject } from "../styles";
import { Icon } from "./Icon";
import { DefaultProps } from "../default-props";

export type ActionIconProps = ViewProps & {
  icon: string;
  onPress: (event: GestureResponderEvent) => void;
};

const size = 40

export const ActionIcon = ({
  onPress,
  icon,
}: ActionIconProps) => {
  const theme = useTheme();

  const iconSize = size / 2;
  const containerPadding = size / 4;

  return (
    <View style={[styles.container]}>
      <TouchableRipple
        {...DefaultProps.TOUCHABLE_RIPPLE}
        borderless={true}
        style={[styles.touchable, { padding: containerPadding}]}
        onPress={onPress}
      >
        <Icon
          name={icon}
          style={[styles.icon, { color: theme.colors.primary }]}
          size={iconSize}
        />
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...MediaObject.Head,
    ...FlexCenter,
    backgroundColor: "rgba(82, 194, 237, 0.1)",
    borderRadius: 10
  },
  touchable: {
    borderRadius: 10
  },
  icon: {
    backgroundColor: "transparent",
  },
});
