import TabsLayout from 'app/navigation/TabsLayout'
import { Provider } from 'app/provider'
import { Stack } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      <TabsLayout />
    </Provider>
  )
}
