import { Content } from 'app/types/page'
import MaxWidthWrapper from './MaxWidthWrapper'
import { DynamicGrid } from './DynamicGrid'
import { DynamicSliderGrid } from './DynamicSliderGrid'
import { Platform } from 'react-native'
import { ReactNode } from 'react'

interface PageStructureProps {
  content: Content
}

export const PageStructure = ({ content }: PageStructureProps) => {
  const isHideInMobile = content.settings?.hide_in_mobile_web ?? false
  const isHideInDesktop = content.settings?.hide_in_desktop_web ?? false

  const getPageComponent = (
    supportedDeviceTypes: SupportedDeviceType[] | null,
  ) => {
    switch (content.section_type) {
      case 'dynamic_grid':
        return supportedDeviceTypes?.map((deviceType) => {
          return (
            <MaxWidthWrapper key={`${content.order_id}-${deviceType}`}>
              <DynamicGrid contentData={content} deviceType={deviceType} />
            </MaxWidthWrapper>
          )
        })
      case 'dynamic_slider_grid':
        return supportedDeviceTypes?.map((deviceType) => {
          return (
            <MaxWidthWrapper key={`${content.order_id}-${deviceType}`}>
              <DynamicSliderGrid
                contentData={content}
                deviceType={deviceType}
                platform={Platform.OS}
              />
            </MaxWidthWrapper>
          )
        })

      default:
        return null
    }
  }

  const getSupportedDevicetypes = (): SupportedDeviceType[] | null => {
    if (isHideInDesktop === true && isHideInMobile === true) {
      return null
    } else if (isHideInDesktop === true && isHideInMobile === false) {
      return ['mobile']
    } else if (isHideInDesktop === false && isHideInMobile === true) {
      return ['desktop']
    } else {
      return ['mobile', 'desktop']
    }
  }

  return getSupportedDevicetypes() !== null ? (
    getPageComponent(getSupportedDevicetypes())
  ) : (
    <></>
  )
}
