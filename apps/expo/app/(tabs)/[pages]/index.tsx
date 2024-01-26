import { H1, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import PagesScreen from 'app/features/pages/screen'
import { usePagesData } from 'app/hooks/useData'
import { useLocalSearchParams } from 'expo-router'



export default function Pages() {
  const { pages } = useLocalSearchParams()

  const { data, isLoading } = usePagesData('ae-en', pages as string)

  return data && !isLoading ? (
    <PagesScreen data={data.data} />
  ) : (
    <View>
      <H1>Loading...</H1>
    </View>
  )
}
