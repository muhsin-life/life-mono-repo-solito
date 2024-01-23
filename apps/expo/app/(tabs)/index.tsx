import { H1 } from 'app/design/typography'
import { View } from 'app/design/view'
import { HomeScreen } from 'app/features/home/screen'
import { usePagesData } from 'app/hooks/useData'

export default function Home() {
  const { data, isLoading } = usePagesData('ae-en', 'home')

  return data && !isLoading ? (
    <HomeScreen data={data.data} />
  ) : (
    <View>
      <H1>Loading...</H1>
    </View>
  )
}
