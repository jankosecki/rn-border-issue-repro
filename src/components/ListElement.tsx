import React from "react";
import { View } from "react-native";
import { PresenceStatus } from "../models/models";
import { PresenceIndicator } from "./PresenceIndicator";

type Props = {
  id: string,
  status: PresenceStatus
};

export const ListElement = ({ status }: Props) => {
  return (
    <View>
      <PresenceIndicator presence={status} borderColor="white" />
    </View>
  );
};
