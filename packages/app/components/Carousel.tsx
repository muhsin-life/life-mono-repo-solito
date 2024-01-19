import { View } from "app/design/view";
import { Platform } from "react-native";

type PlatformSpecificProps<T extends Platform["OS"]> = T extends "web"
  ? { prop?: "this is web" }
  : T extends "ios" | "andriod"
  ? { prop?: "this is android" }
  : never;

export const Carousel = <T extends Platform["OS"]>(
  props: PlatformSpecificProps<T>
) => {
  return <View>{props.prop}</View>;
};
