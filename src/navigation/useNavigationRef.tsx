import { useState } from "react";
import type { NavigationContainerRefWithCurrent, ParamListBase } from "@react-navigation/native";

export function useNavigationRef<ParamList extends ParamListBase>(navigationRef: NavigationContainerRefWithCurrent<ParamList>) {
  const [navigationReady, setNavigationReady] = useState(navigationRef.isReady());

  function onNavigationReady() {
    setNavigationReady(true);
  }

  return { navigationReady, onNavigationReady };
}
