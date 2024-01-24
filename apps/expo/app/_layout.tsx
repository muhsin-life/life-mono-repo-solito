import { Provider } from 'app/provider/index'
import { Font } from './Fonts'
import { Stack } from 'expo-router'

export default function Root() {
  return (
    <Provider>
      <Font>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="search"
            options={{ presentation: 'fullScreenModal', headerShown: false }}
          />
        </Stack>
      </Font>
    </Provider>
  )
}
