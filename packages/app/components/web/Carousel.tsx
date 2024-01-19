import { Content } from 'app/types/page'
import { FALLBACK_SETTINGS } from 'app/config'
import { Pagination, Grid, Autoplay } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import type SwiperType from 'swiper'
import { useState } from 'react'
import { getImageAspectRatio } from 'app/lib/utils'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { GridImage } from '../GridImage'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'

type SupportedDeviceType = 'mobile' | 'desktop'

interface WebCarouselProps {
  contentData: Content
  deviceType: SupportedDeviceType
}

export const WebSwiper = ({ contentData, deviceType }: WebCarouselProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null)
  const { desktop, mobile, autoplay } =
    contentData?.settings ?? FALLBACK_SETTINGS
  const { section_data_array } = contentData

  const getResponsiveSliderOptions = (): SwiperProps => {
    switch (deviceType) {
      case 'mobile':
        return {
          slidesPerView: mobile.column ?? 1,
          grid: {
            rows: mobile.row ?? 1,
            fill: 'row',
          },
        }
      case 'desktop':
        return {
          slidesPerView: desktop.column ?? 1,
          grid: {
            rows: desktop.row ?? 1,
            fill: 'row',
          },
        }
    }
  }

  const imageAspectRatio = getImageAspectRatio({
    width:
      contentData.section_data_array &&
      contentData.section_data_array[0]?.[deviceType].width,
    height:
      contentData.section_data_array &&
      contentData.section_data_array[0]?.[deviceType].height,
  })

  return (
    section_data_array !== null && (
      <MaxWidthWrapper>
        <Swiper
          pagination={{
            dynamicBullets: true,
            renderBullet: (_, className) => {
              return `<span class="rounded-full transition ${className}"></span>`
            },
          }}
          autoplay={autoplay ?? false}
          onSwiper={(swiper) => setSwiper(swiper)}
          modules={[Pagination, Grid, Autoplay]}
          className="h-full w-full"
          {...getResponsiveSliderOptions()}
        >
          {section_data_array.map((sectionData) => (
            <SwiperSlide
              key={sectionData.id}
              className="-z-10 relative h-full w-full"
            >
              <GridImage
                key={sectionData.id}
                sectionData={sectionData}
                deviceType={deviceType}
                imageAspectRatio={imageAspectRatio}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </MaxWidthWrapper>
    )
  )
}
