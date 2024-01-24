import DynamicHeader from 'app/components/DynamicHeader'
import { PageStructure } from 'app/components/PageStructure'
import { ScrollView } from 'app/design/scrollView'
import { View } from 'app/design/view'
import { PageData } from 'app/types/page'
import { useRef } from 'react'
import { Animated } from 'react-native'

interface PageScreenProps {
  data: PageData
}

export default function PagesScreen({ data }: PageScreenProps) {
  let scrollOffsetY = useRef(new Animated.Value(0)).current

  return (
    <View className={'flex-1 bg-white relative'}>
      <DynamicHeader animHeaderValue={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false },
        )}
        horizontal={false}
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}
      >
        {data.content.map((content) => (
          <PageStructure content={content} key={content.order_id} />
        ))}
      </ScrollView>
    </View>
  )
}
