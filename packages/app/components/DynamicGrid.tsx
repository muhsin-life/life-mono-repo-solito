import { Content } from "app/types/page";
import { Col, Grid } from "react-native-easy-grid";
import { View } from "app/design/view";
import { GridImage } from "./GridImage";
import { cn } from "app/lib/utils";

export const DynamicGrid = ({
  contentData,
  deviceType,
}: {
  contentData: Content;
  deviceType: SupportedDeviceType;
}) => {
  const getImageAspectRatio = (width: number, height: number) => {
    return width / height;
  };

  const imageAspectRatio = getImageAspectRatio(
    contentData.section_data_array
      ? contentData.section_data_array[0]?.[deviceType].width ?? 1400
      : 1400,
    contentData.section_data_array
      ? contentData.section_data_array[0]?.[deviceType].height ?? 500
      : 500
  );

  return (
    contentData.section_data_array && (
      <View
        className={cn("w-full", {
          "sm:hidden block": deviceType === "mobile",
          "sm:block hidden": deviceType === "desktop",
        })}
      >
        <Grid>
          {contentData.section_data_array.map(
            (content) =>
              content[deviceType].image_url && (
                <Col key={content.id}>
                  <GridImage
                    sectionData={content}
                    deviceType={deviceType}
                    imageAspectRatio={imageAspectRatio}
                  />
                </Col>
              )
          )}
        </Grid>
      </View>
    )
  );
};
