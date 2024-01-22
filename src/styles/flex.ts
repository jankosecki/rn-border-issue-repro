import { ViewStyle } from "react-native";

export const FlexCenter: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const FlexColumn: ViewStyle = {
  display: "flex",
  flexDirection: "column",
};

export const FlexRow: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export namespace MediaObject {
  export const Container = {
    ...FlexRow,
  };

  export const Fill = {
    flex: 1,
  };

  export const Head = {
    flexShrink: 0,
    flexGrow: 0,
  };
}
