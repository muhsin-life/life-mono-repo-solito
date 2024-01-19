// import { View } from 'app/design/view'
// import { Content } from 'app/types/page'
// import Carousel from 'react-native-reanimated-carousel'
// import { GridImage } from '../GridImage'
// import { getImageAspectRatio } from 'app/lib/utils'
// import { Col, Grid, Row } from 'react-native-easy-grid'

// interface CarouselProps {
//   contentData: Content
// }

// export const NativeCarousel = ({ contentData }: CarouselProps) => {
//   const { section_data_array = [], settings } = contentData

//   const rows = settings?.mobile.row ?? 1
//   const cols = settings?.mobile.column ?? 1

//   const imageAspectRatio = getImageAspectRatio({
//     width:
//       contentData.section_data_array &&
//       contentData.section_data_array[0]?.mobile.width,
//     height: contentData.section_data_array
//       ? contentData.section_data_array[0]?.mobile.height
//       : 500,
//   })

//   return (
//     <View
//       style={{
//         alignItems: 'center',
//       }}
//     >
//       <Carousel
//         width={450}
//         height={
//           contentData.section_data_array
//             ? contentData.section_data_array[0]?.mobile.height ?? 400
//             : 400
//         }
//         mode="parallax"
//         modeConfig={{
//           parallaxScrollingScale: 0.9,
//           parallaxScrollingOffset: 50,
//         }}
//         data={section_data_array ?? []}
//         renderItem={({ item }) => (
//           <View>
//             <Grid>
//               {Array.from({ length: rows }, (_, i) => (
//                 <Row key={i}>
//                   {item['mobile'].image_url && (
//                     <Col key={item.id}>
//                       <GridImage
//                         sectionData={item}
//                         deviceType={'mobile'}
//                         imageAspectRatio={imageAspectRatio}
//                       />
//                     </Col>
//                   )}
//                 </Row>
//               ))}
//             </Grid>
//           </View>
//         )}
//       />
//     </View>
//   )
// }

import { Text, View } from 'react-native'
import Swiper from 'react-native-web-swiper'

type Props = {
  index?: number
  activeIndex?: number
}
export const SomeSlide = (props: Props) => (
  <View>
    <Text>
      {props.activeIndex}/{props.index}
    </Text>
  </View>
)

export const ReactNativeSwiper = () => {
  return (
    <Swiper>
      
      <SomeSlide />
      <SomeSlide />
    </Swiper>
  )
}
