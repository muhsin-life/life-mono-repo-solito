import { Content } from "app/types/page";
import { View } from "app/design/view";
import { cn } from "app/lib/utils";
import { Carousel } from "./Carousel";
import { Platform } from "react-native";

interface DynamicSliderProps {
  contentData: Content;
  deviceType: SupportedDeviceType;
  platform: Platform["OS"];
}

export const DynamicSliderGrid = ({
  contentData,
  deviceType,
  platform,
}: DynamicSliderProps) => {
  const getPlatformSpecificCarousels = () => {
    if (["ios", "android"].includes(platform)) {
      return <NativeCarousel />;
    } else {
      return <WebSwiper />;
    }
  };

  return (
    contentData.section_data_array && (
      <View
        className={cn("w-full items-center", {
          "sm:hidden block": deviceType === "mobile",
          "sm:block hidden": deviceType === "desktop",
        })}
      >
        {getPlatformSpecificCarousels()}
      </View>
    )
  );
};

interface CarouselProps {}

const WebSwiper = ({}: CarouselProps) => {
  return <View></View>;
};

const NativeCarousel = ({}: CarouselProps) => {
  return <View></View>;
};
