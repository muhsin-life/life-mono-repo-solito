import Navbar from 'app/components/Navbar'
import { PageStructure } from 'app/components/PageStructure'
import { View } from 'app/design/view'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area'
import { PageData } from 'app/types/page'
import { ScrollView } from 'moti'

interface HomePageProps {
  data: PageData
}

export function HomeScreen({ data }: HomePageProps) {
  const safeareaInsets = useSafeArea()
  return (
    <View className={'flex-1 bg-white'}>
      <View className={'flex-1 bg-white'} style={safeareaInsets}>
        <Navbar />
        <ScrollView
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
    </View>
  )
}
