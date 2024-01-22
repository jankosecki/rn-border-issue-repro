import React, { ComponentProps } from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

type Props = ComponentProps<typeof MaterialCommunityIcon>;

export const Icon = ({ ...props }: Props) => {
  return <MaterialCommunityIcon {...props} />;
};
