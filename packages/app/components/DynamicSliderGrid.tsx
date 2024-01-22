import { Content } from 'app/types/page'
import { View } from 'app/design/view'
import { cn, getImageAspectRatio, window } from 'app/lib/utils'
import { FlatList, Platform } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { GridImage } from './GridImage'
import { WebSwiper } from './web/Carousel'

interface DynamicSliderProps {
  contentData: Content
  deviceType: SupportedDeviceType
  platform: Platform['OS']
}

const PAGE_WIDTH = window.width

export const DynamicSliderGrid = ({
  contentData,
  deviceType,
  platform,
}: DynamicSliderProps) => {
  const imgWidth = contentData.section_data_array
    ? contentData.section_data_array[0]?.[deviceType].width ?? 1440
    : 1440
  const imgHeight = contentData.section_data_array
    ? contentData.section_data_array[0]?.[deviceType].height ?? 500
    : 500

  const columns = contentData.settings
    ? contentData.settings[deviceType].column ?? 1
    : 1
  const rows = contentData.settings
    ? contentData.settings[deviceType].row ?? 1
    : 1

  const imageAspectRatio = getImageAspectRatio({
    width: imgWidth / columns,
    height: imgHeight / columns,
  })

  const getPlatformSpecificCarousels = () => {
    if (['ios', 'android'].includes(platform)) {
      return (
        <View className="flex-row items-center justify-center">
          <Carousel
            vertical={false}
            width={PAGE_WIDTH / columns}
            height={PAGE_WIDTH / columns}
            style={{
              width: PAGE_WIDTH,
              height: PAGE_WIDTH / columns / imageAspectRatio,
            }}
            autoPlayInterval={1500}
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            loop={false}
            data={contentData.section_data_array ?? []}
            renderItem={({ item }) => {
              return (
                <View className="flex-col flex-1">
                  <View className="flex-row flex-1">
                    <View className={'flex-col flex-1'} key={item.id}>
                      <GridImage
                        sectionData={item}
                        deviceType={deviceType}
                        imageAspectRatio={imageAspectRatio}
                      />
                    </View>
                  </View>
                </View>
              )
            }}
          />
        </View>
      )
    } else if (platform === 'web') {
      return (
        <View>
          <WebSwiper />
        </View>
      )
    } else {
      return (
        contentData.section_data_array && (
          <View className="flex-row flex-1">
            {/* <ScrollView
              horizontal
              className="overflow-visible "
              contentContainerStyle={{
                flexDirection: 'row',
                flex: 1,
              }}
            >
              <View className="flex-row flex-1">
                {contentData.section_data_array.map(
                  (content) =>
                    content[deviceType].image_url && (
                      <View className="flex-col flex-1" key={content.id}>
                        <GridImage
                          sectionData={content}
                          deviceType={deviceType}
                          imageAspectRatio={imageAspectRatio}
                        />
                      </View>
                    ),
                )}
              </View>
            </ScrollView> */}

            <FlatList
              data={contentData.section_data_array ?? []}
              renderItem={({ item }) => (
                <View
                  className="flex-col flex-1"
                  key={item.id}
                  style={{
                    width: imgWidth / 3,
                    height: imgWidth / 3 / imageAspectRatio,
                  }}
                >
                  <GridImage
                    sectionData={item}
                    deviceType={deviceType}
                    imageAspectRatio={imageAspectRatio}
                  />
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                flex: 1,
                flexDirection: 'row',
              }}
            />
          </View>
        )
      )
    }
  }

  return (
    contentData.section_data_array && (
      <View
        className={cn('w-full items-center', {
          'sm:hidden block': deviceType === 'mobile',
          'sm:block hidden': deviceType === 'desktop',
        })}
      >
        {getPlatformSpecificCarousels()}
      </View>
    )
  )
}
