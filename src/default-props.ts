import { FlatListProps } from "react-native";
import { TouchableRippleProps } from "react-native-paper";

export namespace DefaultProps {
  export const FLAT_LIST: Partial<FlatListProps<any>> = { indicatorStyle: "black", bounces: false };
  export const TOUCHABLE_RIPPLE: Partial<TouchableRippleProps> = { rippleColor: "#6EADC64F" };
}
