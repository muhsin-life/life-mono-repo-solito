import { Content } from 'app/types/page'
import { View } from 'app/design/view'
import { cn } from 'app/lib/utils'
import { Platform } from 'react-native'
import { ReactNativeSwiper } from './native/Carousel'

interface DynamicSliderProps {
  contentData: Content
  deviceType: SupportedDeviceType
  platform: Platform['OS']
}

export const DynamicSliderGrid = ({
  contentData,
  deviceType,
  platform,
}: DynamicSliderProps) => {
  const getPlatformSpecificCarousels = () => {
    if (['ios', 'android'].includes(platform)) {
      return <ReactNativeSwiper />
    } else {
      return (
        <View>
          {/* <WebSwiper deviceType={deviceType} contentData={contentData} /> */}
        </View>
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
