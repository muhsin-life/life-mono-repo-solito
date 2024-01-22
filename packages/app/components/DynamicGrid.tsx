import { Content } from 'app/types/page'
import { View } from 'app/design/view'
import { GridImage } from './GridImage'
import { cn, getImageAspectRatio } from 'app/lib/utils'

export const DynamicGrid = ({
  contentData,
  deviceType,
}: {
  contentData: Content
  deviceType: SupportedDeviceType
}) => {
  const imageAspectRatio = getImageAspectRatio({
    width:
      contentData.section_data_array &&
      contentData.section_data_array[0]?.[deviceType].width,
    height:
      contentData.section_data_array &&
      contentData.section_data_array[0]?.[deviceType].height,
  })



  return (
    contentData.section_data_array && (
      <View
        className={cn('w-full', {
          'sm:hidden block': deviceType === 'mobile',
          'sm:block hidden': deviceType === 'desktop',
        })}
      >
        <View className="flex-row flex-1">
          {contentData.section_data_array.map(
            (content) =>
              content[deviceType].image_url && (
                <View key={content.id} className="flex-col flex-1">
                  <GridImage
                    sectionData={content}
                    deviceType={deviceType}
                    imageAspectRatio={imageAspectRatio}
                  />
                </View>
              ),
          )}
        </View>
      </View>
    )
  )
}
